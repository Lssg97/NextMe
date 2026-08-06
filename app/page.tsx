import Image from 'next/image'
import avatar from 'app/avatar.webp'
import sax from 'public/main/sax.webp'
import paw from 'public/main/paw.webp'
import tube from 'public/main/tube.webp'
import desktop from 'public/main/desktop.webp'
import Link from 'next/link'
import { QQIcon } from './components/Icon'
import { TimeWeather } from './components/time-weather'

export default async function Page() {
  return (
    <section>
      <section className="sm:px-28 sm:pt-8">
        <Image
          alt={'Lssg97'}
          src={avatar}
          height={64}
          width={64}
          sizes="33vw"
          placeholder="blur"
          className="mb-6 h-14 w-14 rounded-full border border-neutral-200 dark:border-neutral-700"
          priority
        />
        <h1 className="mb-1 text-xl font-medium tracking-tighter">
          Nin 的小窝
        </h1>
        <p className="prose prose-neutral text-sm dark:prose-invert">
          Blink‘s blog
        </p>
        <p className={'mb-6 pt-10 text-md font-medium tracking-tight'}>
          👋 嘿，我是蓝色闪光
          <br />
          一个想要什么都会一点的人。
          <br />
          这里记录了一些我学到的知识或教程。
          <br />
        </p>
        <TimeWeather />
        <div className={'mt-6 flex items-center'}>
          <Link href="mqqapi://card/show_pslcard?src_type=internal&version=1&uin=7602655690&card_type=person&source=qrcode" target="_blank">
            <button
              className={
                'mr-4 flex items-center justify-center rounded-xl border-[0.5px] border-neutral-200 p-2 text-xs font-medium shadow-[0_2px_2px_rgba(0,0,0,0.04)] transition-all duration-300 hover:bg-stone-100 hover:shadow-none dark:border-neutral-700 dark:bg-neutral-700/20 dark:hover:bg-neutral-900/20'
              }
            >
              <QQIcon className="mr-1 h-3" />
              <p>QQ</p>
            </button>
          </Link>
          <span className="mr-2 h-2 w-2 rounded-full bg-blue-500"></span>
          <Link
            href={'https://github.com/Lssg97'}
            target="_blank"
            className="text-xs font-medium"
          >
            Github
          </Link>
          <p className="mx-1 text-xs font-medium">/</p>
          <Link
            href={'https://nezha.lssg97.xyz'}
            target="_blank"
            className="text-xs font-medium"
          >
            Server
          </Link>
        </div>
      </section>
      <Photos />
    </section>
  )
}

function Photos() {
  const photo_1 = sax
  const photo_2 = paw
  const photo_3 = tube
  const photo_4 = desktop
  const cards = [
    { src: photo_1, leftCenter: 17.75, topCenter: 48.913, rotate: -4, alt: 'photo_1' },
    { src: photo_2, leftCenter: 40, topCenter: 58, rotate: 1, alt: 'photo_2' },
    { src: photo_3, leftCenter: 64, topCenter: 38, rotate: 0, alt: 'photo_3' },
    { src: photo_4, leftCenter: 83, topCenter: 55, rotate: -2, alt: 'photo_4' },
  ]
  const cardWidthPercent = 218 / 800 * 100
  const cardHeightPercent = 276 / 460 * 100
  const halfWidthPercent = cardWidthPercent / 2
  const halfHeightPercent = cardHeightPercent / 2
  return (
    <section className="w-full overflow-hidden">
      <div
        className="relative mx-auto w-full max-w-[800px]"
        style={{
          aspectRatio: '800/460',
          containerType: 'inline-size',
        }}
      >
        {cards.map((card, idx) => {
          const left = card.leftCenter - halfWidthPercent
          const top = card.topCenter - halfHeightPercent
          return (
            <div
              key={idx}
              style={{
                position: 'absolute',
                left: `${left}%`,
                top: `${top}%`,
                width: `${cardWidthPercent}%`,
                height: `${cardHeightPercent}%`,
                transform: `perspective(1200px) translateX(0px) translateY(0px) scale(1) rotate(${card.rotate}deg) translateZ(0px)`,
                borderWidth: '1cqw',
                borderRadius: '1cqw',
                borderStyle: 'solid',
                borderColor: 'white',
              }}
              className="transform-none-on-hover cursor-pointer shadow-md transition-all duration-300 hover:shadow-xl"
            >
              <Image
                alt={card.alt}
                src={card.src}
                placeholder="blur"
                fill
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          )
        })}
      </div>
    </section>
  )
}
