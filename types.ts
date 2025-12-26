export interface PostMetadata {
  title: string;
  date: string;
  excerpt: string;
  coverImage: string;
  category: string;
  author?: string;
}

export interface Post {
  slug: string;
  metadata: PostMetadata;
  content: string;
}

export interface TocItem {
  id: string;
  text: string;
  level: number;
}