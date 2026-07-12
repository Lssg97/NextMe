export const metadata = {
  title: 'About',
  description: '蓝色闪光的自我介绍',
}

export default function AboutPage() {
  return (
    <section className="sm:px-14 sm:pt-6">
      <h1 className="mb-2 text-2xl font-medium tracking-tighter">About</h1>
      <p className="prose prose-neutral mb-2 text-sm dark:prose-invert ">
        这是一个自我介绍页面呦 ヽ( ﾟ▽ﾟ)ノ
      </p>

      <article className="prose prose-neutral dark:prose-invert prose-p:my-1 prose-headings:font-medium max-w-none mt-4">
        <h2>👋 嘿，我是蓝色闪光</h2>
        <p>
          表面身份是一名植物病理学专业在读博士生，但地下工作还有：
        </p>
        <ul>
          <li>💾 收藏古董电子产品，坚信老物件更有灵魂；</li>
          <li>🎷 萨克斯爱好者，曾担任某大学交响乐团萨克斯声部首席；</li>
          <li>🐾 喜欢 Furry（还包括龙），但不会画画；</li>
          <li>💻 业余时间顺便写写代码或画画 PCB。</li>
        </ul>
        <p>并没有在搞什么神秘组织，只是技能点有点发散 hhh。</p>

        <h3>👤 关于名字</h3>
        <p>
          在网上直接叫我“闪光”就好，叫真名我会以为找我探讨实验进展 :)
          <br />
          <i>注：《蓝色闪光》是手冢治虫创作的一部日本动漫，算是我的童年回忆~~</i>
        </p>

        <h3>🤔 三大人生难题</h3>
        <ol>
          <li>起床困难</li>
          <li>今天吃什么</li>
          <li>不熬夜</li>
        </ol>

        <h3>📝 这里会有什么？</h3>
        <ul>
          <li>📖 一些“我感觉不错”的知识或教程</li>
          <li>🧠 一些不成熟的人生思考</li>
          <li>📸 一些没有什么技巧的照片</li>
        </ul>

        <h3>💡 说点认真的</h3>
        <p>
          虽然上面看起来很不正经，但对待知识的态度我是认真的。我的人生观是：
          <br />
          <b><i>人活一世，总要为世界留下点什么。</i></b>
        </p>

        <h3>📍 最后</h3>
        <ul>
          <li>🧭 现居长春</li>
          <li>🎂 人生过完 1/3 了，但心理年龄永远抢幼儿园滑梯</li>
        </ul>
        <p>
          <b>找到我：</b>
          <br />
          藏在页面里啦~，只要不是借钱我都会回（熟悉了也不是不能借）。
          <br />
          目前正在努力成为一个不太无聊的大人，进度：2%。
        </p>
      </article>
    </section>
  )
}