'use client'

import { TextEffect } from 'app/components/text-effect'
import Image from 'next/image'

export default function AI({ ai }: { ai: string }) {
  return (
    <div className="mb-8 flex items-start rounded-lg border border-neutral-200 bg-neutral-50 p-1 px-4 py-3 text-sm text-neutral-900 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100">
      <Image
        alt="Openai logomark"
        src="/deepseek.svg"
        className="mr-2 mt-1 dark:hidden"
        width="12"
        height="12"
      />
      <Image
        alt="Openai logomark"
        src="/deepseek-dark.svg"
        className="mr-2 mt-1 hidden dark:block"
        width="12"
        height="12"
      />
      <TextEffect className="callout text-[13px]">{ai}</TextEffect>
    </div>
  )
}
