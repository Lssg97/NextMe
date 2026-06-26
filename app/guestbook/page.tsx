import Form from './form'
import GuestbookEntries from './guestbook-entry'

export const metadata = {
  title: 'Guestbook',
  description: '留下您的宝贵想法吧~',
}

export default function GuestbookPage() {
  return (
    <section className="sm:px-14 sm:pt-6">
      <h1 className="mb-2 text-2xl font-medium tracking-tighter">Guestbook</h1>
      <p className="prose prose-neutral mb-2 text-sm dark:prose-invert">
        留下您的想法
      </p>
      <GuestbookForm />
      <GuestbookEntries />
    </section>
  )
}

async function GuestbookForm() {
  return (
    <>
      <Form />
    </>
  )
}
