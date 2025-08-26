import { BlogPost } from './types';

// 模拟博客文章数据
const mockPosts: BlogPost[] = [
  {
    slug: '1',
    title: '构建现代化的Web应用：Next.js最佳实践',
    author: '张明',
    date: '2024-01-15',
    content: '探索如何使用Next.js构建高性能、可扩展的Web应用程序。从项目结构到部署策略，我们将深入探讨最佳实践和常见陷阱。Next.js提供了许多开箱即用的功能，如文件路由、API路由、静态生成等，让开发者能够快速构建现代化的Web应用。本文将详细介绍这些特性的使用方法，以及如何避免常见的开发陷阱。通过实际项目案例，展示如何构建一个完整的Next.js应用，包括状态管理、API集成、性能优化等关键方面。',
    tags: ['Next.js', '前端开发', '最佳实践']
  },
  {
    slug: '2',
    title: 'TypeScript在企业级项目中的应用',
    author: '李华',
    date: '2024-01-10',
    content: 'TypeScript不仅是一个类型检查器，更是提升代码质量和开发效率的强大工具。了解如何在大规模项目中有效使用TypeScript。通过类型系统，我们可以在编译时捕获许多潜在的错误，减少运行时bug。本文将分享在企业级项目中引入TypeScript的经验，包括渐进式迁移策略、团队培训方案以及工具链配置。通过实际案例，展示TypeScript如何帮助团队提高代码质量和开发效率。',
    tags: ['TypeScript', '编程语言', '企业级']
  },
  {
    slug: '3',
    title: 'Web开发实用技巧与最佳实践',
    author: '王强',
    date: '2024-01-25',
    content: '分享一些在Web开发过程中积累的实用技巧，包括CSS布局、JavaScript优化、性能提升等方面。这些技巧都是经过实践验证的。从响应式设计到性能优化，从代码组织到调试技巧，本文将涵盖Web开发中的各个方面。无论你是初学者还是经验丰富的开发者，都能从中获得有用的知识。通过实际项目案例，展示这些技巧的实际应用效果。',
    tags: ['Web开发', '技巧', '最佳实践']
  }
];

/**
 * 获取所有博客文章列表
 * 这是一个服务端函数，在服务端执行
 */
export async function getBlogPosts(): Promise<BlogPost[]> {
  // 模拟异步数据获取延迟
  await new Promise(resolve => setTimeout(resolve, 100));
  
  return mockPosts;
}

/**
 * 根据slug获取单篇博客文章
 * 这是一个服务端函数，在服务端执行
 */
export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  // 模拟异步数据获取延迟
  await new Promise(resolve => setTimeout(resolve, 100));
  
  const post = mockPosts.find(post => post.slug === slug);
  return post || null;
}

/**
 * 根据标签筛选博客文章
 * 这是一个服务端函数，在服务端执行
 */
export async function getBlogPostsByTag(tag: string): Promise<BlogPost[]> {
  // 模拟异步数据获取延迟
  await new Promise(resolve => setTimeout(resolve, 100));
  
  return mockPosts.filter(post => post.tags.includes(tag));
} 