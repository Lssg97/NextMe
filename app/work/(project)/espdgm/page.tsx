import Link from 'next/link'
import Image from 'next/image'
import dgmOne from 'public/work/espdgm/1.webp'
import { BackIcon } from '../../../components/Icon'

export default function Page() {
  return (
    <section>
      <section className="sm:px-28 sm:pt-12">
        <h1 className="mb-2 text-2xl font-medium tracking-tighter transition-opacity hover:opacity-50">
          <Link href="/work" className="flex items-center justify-start">
            <BackIcon />
            ESPHome Divergence Meter
          </Link>
        </h1>
        <p className="prose prose-neutral mb-6 text-sm dark:prose-invert">
          一切都是命运石之门的选择
        </p>
        <p>
          对
          <a href="https://inixie.top/steinsgate/"> iNixie Lab </a>
          世界线变动率探测仪进行的二次开发，利用 ESPHome 将其接入 Home Assistant 智能家居控制系统。在此感谢
          <a href="https://space.bilibili.com/220784547"> Sadudu </a>
          大佬的坚持和付出！
        </p>
        <blockquote className="my-6 border-l-2 pl-2 text-sm">
          <a href="https://github.com/Lssg97/ESPWorks/tree/main/Works/divergence_meter" target={'_blank'}>
            https://github.com/Lssg97/ESPWorks
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
              研发
            </div>
            <div className={'text-md flex items-center'}>
              <picture>
                <img
                  alt="iNixie Lab logomark"
                  src="/inixie.png"
                  className="!mr-3 dark:hidden"
                  width="20"
                  height="20"
                />
                <img
                  alt="iNixie Lab logomark"
                  src="/inixie-dark.png"
                  className="!mr-3 hidden dark:block"
                  width="20"
                  height="20"
                />
              </picture>
              iNixie Lab
            </div>
          </section>
          <section className={'flex items-center justify-between'}>
            <div className={'font-md text-neutral-600 dark:text-neutral-400'}>
              固件
            </div>
            <div className={'text-md flex items-center'}>
              <picture>
                <img
                  alt="ESPHome logomark"
                  src="/esphome.svg"
                  className="!mr-3 dark:hidden"
                  width="17"
                  height="17"
                />
                <img
                  alt="ESPHome logomark"
                  src="/esphome-dark.svg"
                  className="!mr-3 hidden dark:block"
                  width="17"
                  height="17"
                />
              </picture>
              ESPHome
            </div>
          </section>
          <section className={'flex items-center justify-between'}>
            <div className={'font-md text-neutral-600 dark:text-neutral-400'}>
              前端
            </div>
            <div className={'text-md flex items-center'}>
              <picture>
                <img
                  alt="Home Assistant logomark"
                  src="/ha.svg"
                  className="!mr-3 dark:hidden"
                  width="20"
                  height="20"
                />
                <img
                  alt="Home Assistant logomark"
                  src="/ha-dark.svg"
                  className="!mr-3 hidden dark:block"
                  width="20"
                  height="20"
                />
              </picture>
              Home Assistant
            </div>
          </section>
        </div>
      </section>
      <Image
        placeholder="blur"
        className={'mt-10'}
        alt={'Lssg97'}
        src={dgmOne}
      />

    </section>
  )
}
