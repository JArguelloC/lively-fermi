import React from 'react';
import { Link } from 'react-router-dom';
import { NEWS_FALLBACK_IMAGE } from '../../utils/newsImage';

interface ArticleCardProps {
  slug: string;
  coverImage: string;
  category: string;
  title: string;
  subtitle: string;
  authorName: string;
  authorAvatar: string;
  date: string;
  featured?: boolean;
}

const ArticleCard: React.FC<ArticleCardProps> = ({
  slug,
  coverImage,
  category,
  title,
  subtitle,
  authorName,
  authorAvatar,
  date,
  featured = false,
}) => {
  return (
    <Link to={`/noticias/${slug}`} className={`group flex flex-col ${featured ? 'md:flex-row md:items-center gap-8' : 'gap-4'} overflow-hidden rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-zinc-700 transition-colors`}>
      <div className={`overflow-hidden ${featured ? 'md:w-1/2 aspect-video md:aspect-auto h-full' : 'aspect-video'}`}>
        <img
          src={coverImage}
          alt={title}
          width={800}
          height={600}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
          onError={(e) => {
            const img = e.target as HTMLImageElement
            img.src = NEWS_FALLBACK_IMAGE
          }}
        />
      </div>
      <div className={`flex flex-col p-6 ${featured ? 'md:w-1/2 md:p-8' : 'flex-1'}`}>
        <div className="mb-4">
          <span className="text-xs font-bold tracking-wider text-green-500 uppercase bg-green-500/10 px-3 py-1 rounded-full">
            {category}
          </span>
        </div>
        <h3 className={`font-bold text-white mb-2 group-hover:text-green-400 transition-colors ${featured ? 'text-2xl md:text-4xl' : 'text-xl'}`}>
          {title}
        </h3>
        <p className="text-zinc-400 mb-6 line-clamp-2">
          {subtitle}
        </p>
        <div className="mt-auto flex items-center gap-3">
          <img
            src={authorAvatar}
            alt={authorName}
            width={40}
            height={40}
            className="w-10 h-10 rounded-full object-cover"
            loading="lazy"
          />
          <div className="flex flex-col">
            <span className="text-sm font-medium text-white">{authorName}</span>
            <span className="text-xs text-zinc-500">{date}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ArticleCard;
