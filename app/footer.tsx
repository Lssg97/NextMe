import { BeianIcon } from './components/Icon'
import { ICPIcon } from './components/Icon'

export default function Footer() {
  return (
    <footer className="pt-20 sm:px-14">
      <section className="flex flex-col gap-1 text-[13px] font-light tracking-tight text-neutral-600/50 dark:text-neutral-300/50">
        <div className="flex flex-wrap items-center gap-1">
          <span className="flex items-center gap-1 w-full sm:w-auto">
            <BeianIcon className="h-4 flex-shrink-0" />
            <a
              href="https://www.beian.gov.cn/portal/registerSystemInfo?recordcode=22021102000308"
              target="_blank"
              rel="noopener noreferrer"
              className="mr-3 hover:text-neutral-800 dark:hover:text-neutral-200 transition-colors"
            >
              吉公网安备 22021102000308 号
            </a>
          </span>
          <span className="flex items-center gap-1 w-full sm:w-auto">
            <ICPIcon className="h-4 flex-shrink-0" />
            <a
              href="https://beian.miit.gov.cn"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-neutral-800 dark:hover:text-neutral-200 transition-colors"
            >
              吉 ICP 备 2023002947 号 - 1
            </a>
          </span>
        </div>
        <div className="flex flex-wrap items-center gap-1">
          <span className="flex items-center gap-1 w-full sm:w-auto">
            © 2023-{new Date().getFullYear()}{' '}
            <a
              href="./"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-neutral-800 dark:hover:text-neutral-200 transition-colors"
            >
              Nin 的小窝.
            </a>
            <span className="relative group inline-flex items-center cursor-help">
              <span>保留部分权利，</span>
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-[280px] p-3 bg-black text-white text-[13px] font-light leading-relaxed rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 pointer-events-none">
                除另有说明外，本站博文均根据“知识共享 署名-非商业性使用-相同方式共享 4.0 中国大陆”协议（CC BY-NC-SA 4.0）进行授权。
                <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-[1px] border-[6px] border-transparent border-t-black"></div>
              </div>
            </span>
          </span>
          <span className="flex items-center gap-1 w-full sm:w-auto">
            使用{' '}
            <a
              href="https://github.com/hamster1963/NextMe"
              className="cursor-pointer font-normal underline decoration-yellow-500 decoration-2 underline-offset-2 dark:decoration-yellow-500/50"
            >
              NextMe
            </a>
            {' '}项目搭建。
          </span>
        </div>
      </section>
    </footer>
  )
}