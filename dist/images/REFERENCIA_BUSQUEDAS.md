# 🔍 Referencia Rápida - Búsquedas en Google Imágenes

**Copia y pega estos nombres en Google Imágenes para encontrar tus imágenes**

---

## 🎵 MUSIC - VINYL (p1-p10)

```
The Beatles Abbey Road vinyl
Miles Davis Kind of Blue
David Bowie Ziggy Stardust
Pink Floyd Dark Side of the Moon
Led Zeppelin IV vinyl
Rolling Stones Sticky Fingers
Fleetwood Mac Rumours vinyl
Michael Jackson Thriller vinyl
Nirvana Nevermind vinyl
Bob Dylan Highway 61 Revisited
```

---

## 💿 MUSIC - CD (p201-p210)

```
Radiohead OK Computer CD
Beatles White Album CD
Beatles Sgt Pepper's CD
Beatles Revolver CD
Pink Floyd Wish You Were Here CD
Queen Bohemian Rhapsody Greatest Hits
David Bowie Heroes CD
The Who Tommy album
U2 Joshua Tree CD
Amy Winehouse Back to Black CD
```

---

## 👕 MERCH - T-SHIRT (p301-p310)

```
Vintage Vinyl Records T-Shirt design
Music Lover Retro Tee
Sound Waves Typography T-Shirt
Microphone Logo T-Shirt
Concert Festival Vibes Tee
Minimalist Music Note T-Shirt
Music Collector T-Shirt
Analog Enthusiast Tee
Groove Station T-Shirt
Rhythm and Blues Heritage Tee
```

---

## 🧥 MERCH - HOODIE (p401-p410)

```
Midnight Sound Sessions Hoodie
Electric Pulse Energy Hoodie
Golden Hour Frequencies Hoodie
Neon Lights Atmosphere Hoodie
Urban Music Culture Hoodie
Stellar Vibrations Hoodie
Cosmic Sound Wave Hoodie
Deep Bass Harmony Hoodie
Night Studio Sessions Hoodie
Ethereal Melodies Hoodie
```

---

## 🎸 INSTRUMENTS - GUITARS (p501-p510)

```
Fender Stratocaster Classic guitar
Gibson Les Paul Custom
Ibanez RG550 Prestige
PRS Custom 24 guitar
Fender Telecaster Vintage
Gibson SG Standard guitar
Fender Jazzmaster Offset
Jackson Dinky Pro
Schecter C-1 guitar
Yamaha Pacifica 112VMX
```

---

## 🎹 INSTRUMENTS - KEYBOARDS (p601-p610)

```
Yamaha P-515 Stage Piano
Korg Kross 2 Synthesizer
Nord Lead A Synthesizer
Roland FP-90X Digital Piano
Moog Minimoog Model D
Casio Privia PX-870
Kurzweil PC3X Workstation
Arturia Keylab 88 Master
Novation Launchkey Pro
Native Instruments Kontrol
```

---

## 🎧 INSTRUMENTS - ACCESSORIES (p701-p710)

```
Audio-Technica AT2020 Microphone
Behringer U-Phoria UMC202HD
Shure SM7B Microphone
Neumann TLM102 Condenser Mic
Rode NT1 Signature Microphone
PreSonus Studio One DAW
XLR Premium Cable 10ft studio
Mogami Gold Studio Cables
Neutrik NC3M XLR Connectors
Rack Mount Studio System
```

---

## 🎁 OFFERS - BUNDLE (p801-p810)

```
Home Studio Starter Kit
Professional Recording Bundle
Guitarist Essentials Pack
Keyboard Player Collection
Audio Engineer Toolkit
Music Production Suite
Vintage Vinyl Collector Bundle
Live Performance Package
Studio Monitoring System
Complete Music Workstation Kit
```

---

## 📸 Para Cada Producto Necesitas 3 Imágenes

### Vinilo / CD / Música
- Imagen 1: Portada frontal
- Imagen 2: Portada trasera
- Imagen 3: Disco/detalle

### Camiseta / Sudadera
- Imagen 1: Frontal
- Imagen 2: Trasera
- Imagen 3: Detalle del logo/diseño

### Instrumentos (Guitarra, Teclado)
- Imagen 1: Vista frontal
- Imagen 2: Vista lateral/superior
- Imagen 3: Detalle/especificaciones

### Accesorios
- Imagen 1: Producto completo
- Imagen 2: Detalle 1
- Imagen 3: Detalle 2 / close-up

### Bundles
- Imagen 1: Portada/principal
- Imagen 2: Contenido del paquete
- Imagen 3: Beneficios/detalles

---

## 🎯 Workflow Sugerido

```
1. Google Imágenes: "Fender Stratocaster Classic guitar"
2. Descarga 3 imágenes diferentes del producto
3. Redimensiona a 800×800 px en Photoshop/GIMP/Canva
4. Convierte a WebP con calidad 80%
5. Renombra: p501-01.webp, p501-02.webp, p501-03.webp
6. Copia a: public/images/instruments/guitars/
7. Repite para los otros 79 productos
```

---

## 💾 Conversión Masiva (Python/Sharp)

Si descargaste muchas imágenes JPG:

```bash
# Con cwebp (por archivo)
cwebp -q 80 p1-01.jpg -o p1-01.webp

# Con ImageMagick (todos en carpeta)
convert *.jpg -quality 80 -format webp *.webp

# Con Node.js sharp (más rápido)
npx sharp --input *.jpg --output {name}.webp --quality 80
```

---

## ✅ Checklist

- [ ] Descarga 240 imágenes (80 × 3)
- [ ] Redimensiona a 800×800 px
- [ ] Convierte a WebP (calidad 80%)
- [ ] Renombra: pXXX-YY.webp
- [ ] Copia a 8 carpetas
- [ ] Actualiza mockData.ts
- [ ] npm run build
- [ ] firebase deploy --only hosting

¡Éxito! 🎵
