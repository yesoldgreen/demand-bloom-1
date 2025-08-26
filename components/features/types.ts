export interface BlogPost {
  slug: string;
  title: string;
  author: string;
  date: string;
  content: string;
  tags: string[];
}

export interface BlogCardProps {
  post: BlogPost;
} 