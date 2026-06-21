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
          {' '}构建
        </p>
        <section className="mt-1 flex items-center gap-1 text-[13px] font-light tracking-tight text-neutral-600/50 dark:text-neutral-300/50">
          © 2023-{new Date().getFullYear()}{' '}
          <a href={'./'}>Nin 的小窝.</a>
          <span title="除另有说明外，本站博文均根据“知识共享 署名-非商业性使用-相同方式共享 4.0 中国大陆”协议（CC BY-NC-SA 4.0）进行授权。">
            保留部分权利。
          </span>
        </section>
      </section>
    </footer>
  )
}
