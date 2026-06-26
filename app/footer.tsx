export default function Footer() {
  return (
    <footer className="pt-20 sm:px-14">
      <section className="flex flex-col">
        <p className="mt-1 flex gap-1 text-[13px] font-light tracking-tight text-neutral-600/50 dark:text-neutral-300/50">
          使用{' '}
          <a
            href="https://github.com/hamster1963/NextMe"
            className="cursor-pointer font-normal underline decoration-yellow-500 decoration-2 underline-offset-2 dark:decoration-yellow-500/50"
          >
            NextMe
          </a>
          {' '}项目搭建
        </p>
        <section className="mt-1 flex items-center gap-1 text-[13px] font-light tracking-tight text-neutral-600/50 dark:text-neutral-300/50">
          © 2023-{new Date().getFullYear()}{' '}
          <a href={'./'}>Nin 的小窝.</a>
          <div className="relative group inline-flex items-center cursor-help">
            <span>保留部分权利。</span>
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-[280px] p-3 bg-black text-white text-[13px] font-light leading-relaxed rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 pointer-events-none">
              除另有说明外，本站博文均根据“知识共享 署名-非商业性使用-相同方式共享 4.0 中国大陆”协议（CC BY-NC-SA 4.0）进行授权。
              <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-[1px] border-[6px] border-transparent border-t-black"></div>
            </div>
          </div>
        </section>
      </section>
    </footer>
  )
}
