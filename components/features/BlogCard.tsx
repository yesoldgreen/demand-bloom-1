import Link from 'next/link';
import { BlogCardProps } from './types';

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
      <div className="p-6">
        <div className="flex gap-2 mb-3">
          {post.tags.map(tag => (
            <span 
              key={tag}
              className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
          <Link 
            href={`/blog/${post.slug}`}
            className="hover:text-blue-600 transition-colors duration-200"
          >
            {post.title}
          </Link>
        </h2>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
          {post.content}
        </p>
        
        <div className="flex items-center justify-between text-sm text-gray-500">
          <span>作者: {post.author}</span>
          <span>{post.date}</span>
        </div>
        
        <div className="mt-4">
          <Link 
            href={`/blog/${post.slug}`}
            className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium text-sm"
          >
            阅读全文
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </article>
  );
} 