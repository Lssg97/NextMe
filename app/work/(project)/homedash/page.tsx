import Link from 'next/link'
import Image from 'next/image'
import homedashOne from 'public/work/homedash/1.webp'
import homedashTwo from 'public/work/homedash/2.webp'
import { BackIcon } from '../../../components/Icon'

export default function Page() {
  return (
    <section>
      <section className="sm:px-28 sm:pt-12">
        <h1 className="mb-2 text-2xl font-medium tracking-tighter transition-opacity hover:opacity-50">
          <Link href="/work" className="flex items-center justify-start">
            <BackIcon />
            详细系统监控
          </Link>
        </h1>
        <p className="prose prose-neutral mb-6 text-sm dark:prose-invert">
          一款 Rainmeter 皮肤项目
        </p>
        <p>
          详细系统监控（Detailed System Monitor）是一款全面直观、高信息密度的，用于监视所在计算机网络、CPU、GPU、内存、硬盘等相关信息的 Rainmeter 皮肤，旨在将这些系统信息清晰明了地展示在你的桌面上。能兼容市面上绝大多数使用 Windows 系统的计算机或工作站，并自动适配系统版本及硬件以只展示可以获取的信息。
        </p>
        <blockquote className="my-6 border-l-2 pl-2 text-sm">
          <a href="https://github.com/Lssg97/DetailedSystemMonitor" target={'_blank'}>
            https://github.com/Lssg97/DetailedSystemMonitor
          </a>
        </blockquote>
        <div
          className={
            'my-4 w-full border-t border-dashed border-neutral-200 dark:border-neutral-700'
          }
        />
        <h2 className="text-md mb-4 font-medium tracking-tighter">项目信息</h2>
        <div
          className={
            'flex w-full flex-col gap-6 rounded-lg bg-neutral-100 p-6 dark:bg-neutral-800'
          }
        >
          <section className={'flex items-center justify-between'}>
            <div className={'font-md text-neutral-600 dark:text-neutral-400'}>
              皮肤
            </div>
            <div className={'text-md flex items-center'}>
              <img
                alt="Rainmeter logomark"
                src="/rainmeter.svg"
                className="!mr-3"
                width="20"
                height="20"
              />
              Rainmeter
            </div>
          </section>

          <section className={'flex items-center justify-between'}>
            <div className={'font-md text-neutral-600 dark:text-neutral-400'}>
              插件
            </div>
            <div className={'text-md flex items-center'}>
              <img
                alt="C++ logomark"
                src="/cpp.svg"
                className="!mr-1"
                width="20"
                height="20"
              />
              <img
                alt="C# logomark"
                src="/c-sharp.svg"
                className="!mr-3"
                width="20"
                height="20"
              />
              C++ / C#
            </div>
          </section>
        </div>
      </section>
      <Image
        placeholder="blur"
        className={'mt-10 md:mt-40 md:scale-150'}
        alt={'Lssg97'}
        src={homedashOne}
      />
      <Image
        placeholder="blur"
        className={'mt-5 md:mb-24 md:mt-72 md:scale-150'}
        alt={'Lssg97'}
        src={homedashTwo}
      />
    </section>
  )
}
