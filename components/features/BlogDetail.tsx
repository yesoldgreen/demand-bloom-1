import Link from 'next/link';
import { BlogPost } from './types';

interface BlogDetailProps {
  post: BlogPost;
}

export default function BlogDetail({ post }: BlogDetailProps) {
  return (
    <article className="bg-white rounded-lg shadow-md p-8">
      {/* 文章头部 */}
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">
          {post.title}
        </h1>
        <div className="flex items-center text-gray-600 mb-4">
          <span className="mr-6">作者: {post.author}</span>
          <span>发布时间: {post.date}</span>
        </div>
        <div className="flex gap-2">
          {post.tags.map(tag => (
            <span 
              key={tag}
              className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
      </header>
      
      {/* 文章正文 */}
      <div className="prose prose-lg max-w-none">
        <div className="text-gray-700 leading-relaxed space-y-4">
          {post.content.split('。').map((sentence, index) => (
            sentence.trim() && (
              <p key={index} className="mb-4">
                {sentence.trim()}。
              </p>
            )
          ))}
        </div>
      </div>
      
      {/* 文章底部 */}
      <footer className="mt-12 pt-6 border-t border-gray-200">
        <div className="flex items-center justify-between">
          <p className="text-gray-500">
            感谢阅读，欢迎在评论区分享您的想法
          </p>
          <div className="flex gap-3">
            <Link 
              href="/blog2" 
              className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
            >
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              返回博客列表
            </Link>
            <Link 
              href="/" 
              className="inline-flex items-center text-gray-600 hover:text-gray-800 font-medium"
            >
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              返回首页
            </Link>
          </div>
        </div>
      </footer>
    </article>
  );
} 