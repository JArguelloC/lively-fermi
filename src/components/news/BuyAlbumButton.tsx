import React from 'react';
import { ShoppingCart, Play } from 'lucide-react';
import { Link } from 'react-router-dom';

interface BuyAlbumButtonProps {
  albumTitle: string;
  artistName: string;
  coverImage: string;
  price: number;
  productId: string;
}

const BuyAlbumButton: React.FC<BuyAlbumButtonProps> = ({
  albumTitle,
  artistName,
  coverImage,
  price,
  productId,
}) => {
  return (
    <div className="my-8 rounded-2xl bg-gradient-to-br from-zinc-900 to-black border border-zinc-800 p-6 flex flex-col md:flex-row items-center gap-6">
      <div className="w-32 h-32 flex-shrink-0 rounded-xl overflow-hidden shadow-2xl relative group">
        <img src={coverImage} alt={albumTitle} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <Play className="text-white w-10 h-10" fill="currentColor" />
        </div>
      </div>
      
      <div className="flex-1 text-center md:text-left">
        <div className="text-sm text-green-400 font-medium mb-1">Mencionado en este artículo</div>
        <h4 className="text-xl font-bold text-white mb-1">{albumTitle}</h4>
        <p className="text-zinc-400">{artistName}</p>
      </div>

      <div className="flex flex-col items-center md:items-end gap-3">
        <div className="text-2xl font-bold text-white">${price.toFixed(2)}</div>
        <Link 
          to={`/products/${productId}`}
          className="flex items-center gap-2 bg-green-500 hover:bg-green-400 text-black font-bold py-3 px-6 rounded-full transition-colors"
        >
          <ShoppingCart className="w-5 h-5" />
          Comprar Ahora
        </Link>
      </div>
    </div>
  );
};

export default BuyAlbumButton;
