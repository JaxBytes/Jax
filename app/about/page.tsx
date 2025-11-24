import { PostContainer } from '@/components/layout/container/PostContainer';
import { Comment } from '@/components/ui/comment/Comment';
import Link from 'next/link';

export default function About() {
  return (
    <PostContainer>
      <article className="prose max-w-full font-sans text-sm/7 text-zinc-900 dark:prose-invert dark:text-zinc-200">
        <h2>👋 About / 关于我</h2>
        这个博客基于<a target="_blank" href="https://github.com/Magren0321/nerukigat">nerukigat</a>修改，我也对其进行了一些定制。
        <p>
          Hi，我是 <strong>JaxBytes</strong>
          <br />
          社恐，喜欢看书、游戏、咖啡与闲逛。
          <br />
          技术栈：React / Vue / Next.js / TypeScript / Node.js / TailwindCSS …
        </p>

        <h3>🎮 兴趣速览</h3>
        <ul>
          <li>📖 <a target="_blank" href="https://concrete-lightning-e25.notion.site/bad22ab2bf6f4d6c9bf22ee1f911028d">书单</a></li>
          <li>🎮 Steam / Minecraft / CS2</li>
        </ul>

        <h3>👨‍💻 职业</h3>
        <ul>
          <li>学生（2023-今）</li>
          <li>正在升级......</li>
        </ul>

        <h3>🛸 Find me</h3>
        <ul>
          <li>Github: <a target="_blank" href="https://github.com/JaxBytes">JaxBytes</a></li>
          <li>Telegram: <a target="_blank" href="https://t.me/JaxBytes">JaxBytes</a></li>
          <li>Email: <a href="mailto:i@doc.hk">i@doc.hk</a></li>
        </ul>

        <h3>💻 Uses</h3>
        <p>
          Rog 幻 14 2022 / Redmi K60 Ultra / VSCode & IDEA / Typora …
        </p>

        <blockquote className="mt-12">
          The people who are crazy enough to think they can change the world are the ones who do.
          <footer>— Steve Jobs</footer>
        </blockquote>
      </article>
      <Comment path="/about-me" />
    </PostContainer>
  );
}