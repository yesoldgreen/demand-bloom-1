'use client';

import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      {/* 网站Logo和品牌区域 */}
      <header className="row-start-1 flex items-center gap-3">
        <Image
          src="/favicon.ico"
          alt="网站图标"
          width={32}
          height={32}
          className="rounded-md"
        />
        <div className="flex items-center gap-2">
          <Image
            className="dark:invert"
            src="/next.svg"
            alt="Next.js logo"
            width={120}
            height={25}
            priority
          />
          <span className="text-sm text-gray-500 dark:text-gray-400 font-medium">
            Demand Bloommmm
          </span>
        </div>
      </header>

      <main className="flex flex-col gap-[32px] row-start-2 items-center text-center">
        {/* 404 图标 */}
        <div className="relative">
          <div className="text-8xl font-bold text-gray-300 dark:text-gray-700 select-none">
            404
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <Image
              className="dark:invert opacity-20"
              src="/globe.svg"
              alt="Globe icon"
              width={120}
              height={120}
            />
          </div>
        </div>

        {/* 错误标题 */}
        <h1 className="text-3xl font-bold tracking-tight">
          页面未找到
        </h1>

        {/* 错误描述 */}
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-md">
          抱歉，您访问的页面不存在或已被移动。
          <br />
          请检查URL是否正确，或返回首页继续浏览。
        </p>

        {/* 操作按钮 */}
        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <Link
            href="/"
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
          >
            
            返回首页123
          </Link>
          <button
            onClick={() => window.history.back()}
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto"
          >
            返回上页
          </button>
        </div>

        {/* 帮助提示 */}
        <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4 max-w-md">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            💡 如果您认为这是一个错误，请联系我们的支持团队。
          </p>
        </div>
      </main>

      {/* 页脚 */}
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <Link
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="/"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          首页
        </Link>
        <Link
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="/about"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          关于我们
        </Link>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="mailto:support@example.com"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          联系支持
        </a>
      </footer>
    </div>
  );
}
