import { Loader } from '../components/loader-spin'

export default function Loading() {
  return (
    <section className="sm:px-14 sm:pt-6">
      <h1 className="mb-2 text-2xl font-medium tracking-tighter">
        Selected works
      </h1>
      <div className="prose prose-neutral mb-6 text-sm dark:prose-invert">
        一些瞎捣鼓的小玩意儿
        <Loader visible={true} />
      </div>
    </section>
  )
}
