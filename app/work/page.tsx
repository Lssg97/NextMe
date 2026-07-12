'use client'

import { useEffect } from 'react'
import { motion } from 'framer-motion'
import WorkCard from './work-card'
import dsm from 'public/work/dsm.webp'
import dsect from 'public/work/dsect.webp'

const container = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const item = {
  hidden: { filter: 'blur(20px)', opacity: 0 },
  visible: {
    filter: 'blur(0px)',
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
}

export default function Page() {
  useEffect(() => {
    document.title = 'Work | Nin 的小窝'
  }, [])
  return (
    <section>
      <section className="sm:px-14 sm:pt-6">
        <h1 className="mb-2 text-2xl font-medium tracking-tighter">
          Selected works
        </h1>
        <p className="prose prose-neutral mb-6 text-sm dark:prose-invert">
          瞎捣鼓的小玩意儿
        </p>
        <motion.div variants={container} initial="hidden" animate="visible">
          <motion.div variants={item}>
            <WorkCard
              title={'详细系统监控'}
              description={'一款 Rainmeter 皮肤项目'}
              image={dsm}
              link={'/work/dms'}
            />
          </motion.div>
          <motion.section className={'grid grid-cols-1 gap-4 sm:grid-cols-2'}>
            <motion.div variants={item}>
              <WorkCard
                title={'DSECT'}
                description={'ECT 100 步进管驱动板'}
                image={dsect}
                link={'/work/dsect'}
              />
            </motion.div>
          </motion.section>
        </motion.div>
      </section>
    </section>
  )
}
