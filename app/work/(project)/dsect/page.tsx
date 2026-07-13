import Link from 'next/link'
import Image from 'next/image'
import dsectOne from 'public/work/dsect/1.webp'
import dsectTwo from 'public/work/dsect/2.webp'
import dsectThree from 'public/work/dsect/3.webp'
import { BackIcon } from '../../../components/Icon'

export default function Page() {
  return (
    <section>
      <section className="sm:px-28 sm:pt-12">
        <h1 className="mb-2 text-2xl font-medium tracking-tighter transition-opacity hover:opacity-50">
          <Link href="/work" className="flex items-center justify-start">
            <BackIcon />
            DSECT
          </Link>
        </h1>
        <p className="prose prose-neutral mb-6 text-sm dark:prose-invert">
          ECT 100 步进管驱动板
        </p>
        <p>本项目（Dekatron Spinner for ECT 100）是一款针对瑞士 Elesta 产双向双脉冲冷阴极十进制步进计数管 ECT 100 的可变速变向旋转驱动板。</p>
        <blockquote className="my-6 border-l-2 pl-2 text-sm">
          <a
            href="https://oshwhub.com/lssg97/ect100_drive"
            target={'_blank'}
          >
            https://oshwhub.com/lssg97/ect100_drive
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
              设计
            </div>
            <div className={'text-md flex items-center'}>
              <picture>
                <img
                  alt="LCEDA logomark"
                  src="/lceda.svg"
                  className="!mr-3 dark:hidden"
                  width="20"
                  height="20"
                />
                <img
                  alt="LCEDA logomark"
                  src="/lceda-dark.svg"
                  className="!mr-3 hidden dark:block"
                  width="20"
                  height="20"
                />
              </picture>
              嘉立创 EDA
            </div>
          </section>
          <section className={'flex items-center justify-between'}>
            <div className={'font-md text-neutral-600 dark:text-neutral-400'}>
              印制
            </div>
            <div className={'text-md flex items-center'}>
              <picture>
                <img
                  alt="JLC logomark"
                  src="/jlc.svg"
                  className="!mr-3 dark:hidden"
                  width="20"
                  height="20"
                />
                <img
                  alt="JLC logomark"
                  src="/jlc-dark.svg"
                  className="!mr-3 hidden dark:block"
                  width="20"
                  height="20"
                />
              </picture>
              嘉立创
            </div>
          </section>
        </div>
      </section>
      <Image
        placeholder="blur"
        className={'mt-10 md:mt-40 md:scale-150'}
        alt={'Lssg97'}
        src={dsectOne}
      />
      <Image
        placeholder="blur"
        className={'mt-5 md:mt-72 md:scale-150'}
        alt={'Lssg97'}
        src={dsectTwo}
      />
      <Image
        placeholder="blur"
        className={'mt-5 md:mb-24 md:mt-72 md:scale-150'}
        alt={'Lssg97'}
        src={dsectThree}
      />
    </section>
  )
}
