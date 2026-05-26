export type NewsCategory = 'review' | 'interview' | 'feature' | 'news' | 'premiere';
export type ArticleStatus = 'draft' | 'published' | 'archived';

export interface Comment {
  id: string;
  userId: string;
  authorName: string;
  content: string;
  createdAt: Date | string;
  updatedAt?: Date | string;
  isEdited?: boolean;
}

export interface Article {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string; // Markdown or HTML
  authorId: string;
  authorName: string;
  category: NewsCategory;
  tags: string[];
  coverImage?: string;
  status: ArticleStatus;
  publishedAt?: Date | string;
  createdAt: Date | string;
  updatedAt: Date | string;
  viewCount?: number;
}
