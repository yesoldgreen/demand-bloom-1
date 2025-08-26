import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getBlogPost, BlogDetail } from '@/components/features';

// 生成静态路径（用于静态生成）
export async function generateStaticParams() {
  return [
    { slug: '1' },
    { slug: '2' },
    { slug: '3' }
  ];
}

export default async function Blog2DetailPage({ params }: { params: { slug: string } }) {
  const post = await getBlogPost(params.slug);
  
  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 页面头部 */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link 
              href="/blog2"
              className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              返回博客列表
            </Link>
            <Link 
              href="/"
              className="inline-flex items-center px-3 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors duration-200 text-sm"
            >
              返回首页
            </Link>
          </div>
        </div>
      </header>

      {/* 文章内容 */}
      <main className="max-w-4xl mx-auto px-4 py-8">
        <BlogDetail post={post} />
      </main>
    </div>
  );
} 