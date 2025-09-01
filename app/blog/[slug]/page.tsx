import { notFound } from 'next/navigation';

// Mock数据 - 模拟从数据库获取的文章数据
const mockPosts = [
  {
    slug: '1',
    title: '构建现代化的Web应用：Next.js最佳实践',
    author: '张明',
    date: '2024-01-15',
    content: '探索如何使用Next.js构建高性能、可扩展的Web应用程序。从项目结构到部署策略，我们将深入探讨最佳实践和常见陷阱。Next.js提供了许多开箱即用的功能，如文件路由、API路由、静态生成等，让开发者能够快速构建现代化的Web应用。本文将详细介绍这些特性的使用方法，以及如何避免常见的开发陷阱。',
    tags: ['Next.js', '前端开发', '最佳实践']
  },
  {
    slug: '2',
    title: 'TypeScript在企业级项目中的应用',
    author: '李华',
    date: '2024-01-10',
    content: 'TypeScript不仅是一个类型检查器，更是提升代码质量和开发效率的强大工具。了解如何在大规模项目中有效使用TypeScript。通过类型系统，我们可以在编译时捕获许多潜在的错误，减少运行时bug。本文将分享在企业级项目中引入TypeScript的经验，包括渐进式迁移策略、团队培训方案以及工具链配置。',
    tags: ['TypeScript', '编程语言', '企业级']
  },
  {
    slug: '3',
    title: 'Web开发实用技巧与最佳实践',
    author: '王强',
    date: '2024-01-25',
    content: '分享一些在Web开发过程中积累的实用技巧，包括CSS布局、JavaScript优化、性能提升等方面。这些技巧都是经过实践验证的。从响应式设计到性能优化，从代码组织到调试技巧，本文将涵盖Web开发中的各个方面。无论你是初学者还是经验丰富的开发者，都能从中获得有用的知识。',
    tags: ['Web开发', '技巧', '最佳实践']
  }
];

// 根据slug获取文章数据的函数
async function getBlogPost(slug: string) {
  // 模拟异步数据获取
  await new Promise(resolve => setTimeout(resolve, 100));
  
  const post = mockPosts.find(post => post.slug === slug);
  return post || null;
}

// 生成静态路径（可选，用于静态生成）
export async function generateStaticParams() {
  return mockPosts.map(post => ({
    slug: post.slug,
  }));
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getBlogPost(slug);
  
  if (!post) {
    notFound();
  }

  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          {post.title}
        </h1>
        <div className="flex items-center text-gray-600 mb-4">
          <span className="mr-4">作者: {post.author}</span>
          <span>发布时间: {post.date}</span>
        </div>
        <div className="flex gap-2">
          {post.tags.map(tag => (
            <span 
              key={tag}
              className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </header>
      
      <div className="prose prose-lg max-w-none">
        <p className="text-gray-700 leading-relaxed mb-4">
          {post.content}
        </p>
      </div>
      
      <footer className="mt-8 pt-6 border-t border-gray-200">
        <p className="text-gray-500 text-center">
          感谢阅读，欢迎在评论区分享您的想法
        </p>
        <div className="mt-4 text-center">
          <a 
            href="/blog" 
            className="text-blue-600 hover:text-blue-800 underline"
          >
            ← 返回博客列表
          </a>
        </div>
      </footer>
    </article>
  );
}
