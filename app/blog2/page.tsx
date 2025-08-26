import { BlogList } from '@/components/features';
import Link from 'next/link';

export default function Blog2Page() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* 页面头部 */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-900">Blog2 技术博客</h1>
            <Link 
              href="/"
              className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              返回网站首页
            </Link>
          </div>
        </div>
      </header>

      {/* 博客列表内容 */}
      <main>
        <BlogList />
      </main>

      {/* 页面底部 */}
      <footer className="bg-white border-t mt-12">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="text-center text-gray-600">
            <p>© 2024 Blog2 技术博客. 分享最新的技术见解和开发心得.</p>
          </div>
        </div>
      </footer>
    </div>
  );
} 