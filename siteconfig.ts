import type { WalineInitOptions } from '@waline/client';

export const siteConfig = {
  site: {
    title: "Doc",
    description: '不为繁华易匠心',
    url: 'https://doc.hk',
    rssImageUrl: 'https://magren.cc/avatar.png',
  },
  avatarSrc: '/avatar.png',
  hero: {
    title: "Hi👋🏻, I'm JaxBytes 🦊",
    subtitle: '很高兴在这见到你',
  },
  icons: {
    icon: '/avatar.png',
    apple: '/avatar.png',
    shortcut: '/avatar.png',
  },
  typedTextLines: [
    '我是一名学生',
    '也是游戏玩家',
    '总是在瞎折腾',
    '喜欢做些没用也不有趣的东西',
    '想成为一个有趣的人',
    '不为繁华易匠心',
  ],
  socialLinks: [
    {
      icon: 'icon-[fa6-brands--github]',
      name: 'Github',
      link: 'https://github.com/JaxBytes',
    },
    {
      icon: 'icon-[fa6-brands--telegram] text-[#4cabf0]',
      name: 'Telegram',
      link: 'https://t.me/JaxBytes',
    },
    {
      icon: 'icon-[mdi--email] text-[#f5cc00]',
      name: 'email',
      link: 'mailto:i@doc.hk',
    },
    {
      icon: 'icon-[mdi--rss] text-[#ffbb00]',
      name: 'RSS',
      link: '/rss.xml',
    },
  ],
  comment: {
    serverURL: 'https://waline.magren.cc',
    emoji: ['//cdn.jsdelivr.net/gh/walinejs/emojis@1.1.0/tw-emoji'],
    dark: 'auto',
    meta: ['nick', 'mail'] as WalineInitOptions['meta'],
    imageUploader: false,
    search: false,
    copyright: false,
    placeholder: '随便说点什么吧，不用登陆也可以直接留言',
  },
};
