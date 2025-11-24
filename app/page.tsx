import { PostContainer } from '@/components/layout/container/PostContainer';
import { Avatar } from '@/components/ui/avatar/Avatar';
import { SocialList } from '@/components/ui/social/SocialList';
import { TypedText } from '@/components/ui/typed/TypedText';
import clsx from 'clsx';
import { siteConfig } from '@/siteconfig';

export default function Home() {
  return (
    <main>
      <PostContainer>
        <main className={clsx(
          'flex flex-col items-center justify-between rounded-lg lg:flex-row px-[10px] py-[30px]  lg:p-[110px]  transition-all duration-300  ',
          'bg-white dark:bg-zinc-700 border-solid border-[1px]',
          'hover:scale-105 hover:shadow-[0_0_50px_1px_rgba(0,0,0,0.2)] dark:hover:shadow-[0_0_50px_1px_rgba(255,255,255,0.2)] transition-transform transition-shadow"',
        )}>
          <div className="mb-32 w-full max-w-xl text-xl font-bold lg:mb-0 lg:mt-0 lg:text-3xl ">
            <div className="mb-5 pl-1">{siteConfig.hero.title}</div>
            <div className="mb-5 pl-1">{siteConfig.hero.subtitle}</div>
            <TypedText />
            <SocialList />
          </div>
          <Avatar />
        </main>
      </PostContainer>
    </main>
  );
}
