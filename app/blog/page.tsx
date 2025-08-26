import Image from "next/image";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  imageUrl: string;
}

const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "构建现代化的Web应用：Next.js最佳实践",
    excerpt: "探索如何使用Next.js构建高性能、可扩展的Web应用程序。从项目结构到部署策略，我们将深入探讨最佳实践和常见陷阱。",
    author: "张明",
    date: "2024-01-15",
    readTime: "8分钟",
    category: "前端开发",
    imageUrl: "/images/blog-1.jpg"
  },
  {
    id: "2",
    title: "TypeScript在企业级项目中的应用",
    excerpt: "TypeScript不仅是一个类型检查器，更是提升代码质量和开发效率的强大工具。了解如何在大规模项目中有效使用TypeScript。",
    author: "李华",
    date: "2024-01-10",
    readTime: "12分钟",
    category: "编程语言",
    imageUrl: "/images/blog-2.jpg"
  },
  {
    id: "3",
    title: "Web开发实用技巧与最佳实践",
    excerpt: "分享一些在Web开发过程中积累的实用技巧，包括CSS布局、JavaScript优化、性能提升等方面。这些技巧都是经过实践验证的。",
    author: "王强",
    date: "2024-01-25",
    readTime: "10分钟",
    category: "Web开发",
    imageUrl: "/images/blog-3.jpg"
  }
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-12">
        {/* 页面标题 */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <a
              href="/"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium px-4 py-2 rounded-lg hover:bg-blue-50 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              返回主页
            </a>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            博客文章
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            探索最新的技术见解、开发技巧和行业趋势
          </p>
        </div>

        {/* 博客文章列表 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
            >
              {/* 文章图片 */}
              <div className="relative h-48 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">
                    {post.title.charAt(0)}
                  </span>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs font-medium px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* 文章内容 */}
              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-3">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
                
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {post.title}
                </h2>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm font-medium">
                        {post.author.charAt(0)}
                      </span>
                    </div>
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      {post.author}
                    </span>
                  </div>
                  
                  <a href={`/blog/${post.id}`} className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium text-sm transition-colors">
                    阅读更多
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* 加载更多按钮 */}
        <div className="text-center mt-12">
          <button className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-full transition-colors duration-200 shadow-lg hover:shadow-xl">
            加载更多文章
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
