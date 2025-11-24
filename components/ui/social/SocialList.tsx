import Link from 'next/link';
import { siteConfig } from '@/siteconfig';

export const SocialList = () => {
  return (
    <div className="mt-14 flex flex-wrap max-w-[320px]">
      {siteConfig.socialLinks.map((social) => {
        return (
          <Link
            key={social.link}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl mr-[10px]"
          >
            <span className={social.icon}></span>
          </Link>
        );
      })}
    </div>
  );
};
