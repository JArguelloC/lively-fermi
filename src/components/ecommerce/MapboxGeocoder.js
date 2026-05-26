import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
// @ts-ignore - package has no types in this project
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';
import 'mapbox-gl/dist/mapbox-gl.css';
mapboxgl.accessToken = 'pk.eyJ1IjoiamFtZXNpdG8wMDkiLCJhIjoiY21wamJyMGplMWlsdDJ5cHNrejVoMXRtdiJ9.YsGwn8DiuhvLtQZGSu51AA';
export default function MapboxGeocoderComponent({ value, onChange, onLocationSelect, error }) {
    const mapContainer = useRef(null);
    const map = useRef(null);
    const geocoder = useRef(null);
    const marker = useRef(null);
    const [isMapReady, setIsMapReady] = useState(false);
    useEffect(() => {
        if (!mapContainer.current)
            return;
        try {
            // Initialize map centered on Ecuador
            map.current = new mapboxgl.Map({
                container: mapContainer.current,
                style: 'mapbox://styles/mapbox/dark-v11',
                center: [-78.1834, -0.3566], // Ecuador center (Quito coordinates)
                zoom: 7,
                attributionControl: true,
                doubleClickZoom: true,
                scrollZoom: true,
            });
            // Initialize Geocoder with Ecuador-specific options
            // ✅ Ecuador LOCK: Todas las búsquedas limitadas SOLO a Ecuador
            geocoder.current = new MapboxGeocoder({
                accessToken: mapboxgl.accessToken,
                mapboxgl: mapboxgl,
                placeholder: 'Busca tu dirección en Ecuador...',
                limit: 6,
                proximity: [-78.1834, -0.3566], // Ecuador center (Quito)
                countries: 'ec', // ← CRÍTICO: Limita SOLO a Ecuador (string, no array)
                bbox: [-81.2, -5.5, -75.2, 1.5], // Ecuador bounding box (west, south, east, north)
            });
            // Add geocoder to map
            map.current.addControl(geocoder.current);
            // PARTE 1: Escuchar evento 'result' - cuando el usuario selecciona una dirección
            // Este es el punto donde Mapbox retorna las coordenadas y la información de ubicación
            geocoder.current?.on('result', (e) => {
                try {
                    const selectedFeature = e.result;
                    // Validar que selectedFeature existe y tiene los datos necesarios
                    if (!selectedFeature || !selectedFeature.center || !Array.isArray(selectedFeature.center) || selectedFeature.center.length !== 2) {
                        console.error('Invalid coordinate data from Mapbox');
                        return;
                    }
                    // Extracting location data from Mapbox result
                    const fullAddress = selectedFeature.place_name || '';
                    const coordinates = [selectedFeature.center[0], selectedFeature.center[1]];
                    // Extract city and province from the place name
                    // Mapbox returns address parts that we parse to get city and province
                    const addressContext = selectedFeature.context || [];
                    // PARTE 2: Procesar las coordenadas y contexto geográfico
                    // Los "context" contienen información sobre región, municipio, etc.
                    let city = '';
                    let province = '';
                    // Parse the context array to find city and province information
                    addressContext.forEach((context) => {
                        if (context.id.includes('place')) {
                            city = context.text; // City/Municipality
                        }
                        if (context.id.includes('region')) {
                            province = context.text; // Region/Province
                        }
                    });
                    // Fallback: if city not found, try to extract from place_name
                    if (!city) {
                        const parts = fullAddress.split(',');
                        city = parts[0]?.trim() || '';
                    }
                    // Update the parent component with all the location data
                    onChange(fullAddress);
                    // PARTE 3: Actualizar estados del formulario padre
                    // Este callback retorna la dirección, ciudad y provincia al componente Checkout
                    if (onLocationSelect) {
                        onLocationSelect({
                            address: fullAddress,
                            city: city,
                            province: province,
                            coordinates: coordinates
                        });
                    }
                    // Add marker to map at the selected location (confirmación visual)
                    if (marker.current) {
                        marker.current.remove();
                    }
                    marker.current = new mapboxgl.Marker({ color: '#fbbf24' })
                        .setLngLat(coordinates)
                        .addTo(map.current);
                    // Center and animate map to the selected location
                    map.current?.flyTo({
                        center: coordinates,
                        zoom: 15,
                        duration: 1000,
                        pitch: 0,
                    });
                }
                catch (resultErr) {
                    console.error('Error processing Mapbox result:', resultErr);
                }
            });
            // Listen for clear event (when user clears the search)
            const handleClear = () => {
                try {
                    onChange('');
                    if (marker.current) {
                        marker.current.remove();
                        marker.current = null;
                    }
                }
                catch (clearErr) {
                    console.error('Error handling clear event:', clearErr);
                }
            };
            geocoder.current?.on('clear', handleClear);
            // Map load event
            const handleMapLoad = () => {
                setIsMapReady(true);
            };
            map.current.on('load', handleMapLoad);
            // Set initial geocoder value if provided
            if (value && isMapReady) {
                geocoder.current?.setInput(value);
            }
            // Cleanup function - Remove all listeners and map
            return () => {
                try {
                    // Remove event listeners
                    if (geocoder.current) {
                        geocoder.current?.off('result', () => { });
                        geocoder.current?.off('clear', handleClear);
                    }
                    if (map.current) {
                        map.current.off('load', handleMapLoad);
                        // Remove marker
                        if (marker.current) {
                            marker.current.remove();
                        }
                        // Properly clean up the map instance
                        map.current.remove();
                    }
                }
                catch (cleanupErr) {
                    console.error('Error cleaning up Mapbox:', cleanupErr);
                }
            };
        }
        catch (err) {
            console.error('Error initializing Mapbox:', err);
        }
    }, []);
    // Update geocoder input when external value changes
    useEffect(() => {
        if (isMapReady && value && geocoder.current) {
            geocoder.current.setInput(value);
        }
    }, [value, isMapReady]);
    return (_jsxs("div", { className: "w-full", children: [_jsx("label", { className: "text-sm text-groove-text-secondary mb-2 block font-semibold", children: "\uD83D\uDCCD Ubicaci\u00F3n en Ecuador (B\u00FAsqueda con Mapa)" }), _jsx("div", { ref: mapContainer, id: "map", className: `w-full h-64 rounded-xl border ${error ? 'border-red-500' : 'border-white/10'} overflow-hidden mb-3 transition-all`, style: { borderRadius: '0.75rem' } }), _jsxs("div", { className: "text-xs text-groove-text-secondary mb-3 p-3 bg-groove-bg-primary rounded-lg border border-white/5", children: [_jsx("p", { className: "font-semibold mb-2", children: "\uD83D\uDCA1 C\u00F3mo usar el mapa (Solo Ecuador):" }), _jsxs("ul", { className: "space-y-1 ml-2", children: [_jsx("li", { children: "\u2022 Escribe tu direcci\u00F3n, ciudad o c\u00F3digo postal en Ecuador" }), _jsx("li", { children: "\u2022 El mapa se centrar\u00E1 autom\u00E1ticamente en tu ubicaci\u00F3n" }), _jsx("li", { children: "\u2022 Un marcador dorado confirmar\u00E1 tu ubicaci\u00F3n seleccionada" }), _jsx("li", { children: "\u2022 Los campos de Provincia y Ciudad se rellenar\u00E1n autom\u00E1ticamente" }), _jsxs("li", { children: ["\u2022 ", _jsx("strong", { children: "Solo se pueden buscar direcciones dentro de Ecuador" })] })] })] }), error && _jsx("p", { className: "text-xs text-red-500 font-medium", children: error })] }));
}
