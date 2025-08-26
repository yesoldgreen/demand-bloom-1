import BlogCard from './BlogCard';
import { getBlogPosts } from './blogService';

export default async function BlogList() {
  // 在服务端获取数据
  const posts = await getBlogPosts();

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">博客文章</h1>
        <p className="text-gray-600">探索最新的技术文章和开发心得</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map(post => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
      
      {posts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">暂无博客文章</p>
        </div>
      )}
    </div>
  );
} 