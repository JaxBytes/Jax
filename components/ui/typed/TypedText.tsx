'use client';

import { useEffect } from 'react';
import Typed from 'typed.js';
import { siteConfig } from '@/siteconfig';

export function TypedText() {
  useEffect(() => {
    const typed = new Typed('.typed', {
      strings: siteConfig.typedTextLines,
      typeSpeed: 40,
      backSpeed: 60,
      startDelay: 600,
    });
    return () => typed.destroy();
  }, []);

  return (
    <div className="flex-shrink-0 pl-1">
      <span className="typed leading-7 tracking-wide"></span>
    </div>
  );
}
