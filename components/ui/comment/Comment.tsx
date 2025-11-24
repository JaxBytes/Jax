'use client';

import {
  init,
  type WalineInitOptions,
  type WalineInstance,
} from '@waline/client';
import React, { useEffect, useRef } from 'react';
import { siteConfig } from '@/siteconfig';

export type WalineOptions = Partial<Omit<WalineInitOptions, 'el'>> & { path: string };

export const Comment = (props: WalineOptions) => {
  const walineInstanceRef = useRef<WalineInstance | null>(null);
  const containerRef = React.createRef<HTMLDivElement>();

  useEffect(() => {
    walineInstanceRef.current = init({
      ...(siteConfig.comment as any),
      ...(props as any),
      el: containerRef.current,
    });

    return () => walineInstanceRef.current?.destroy();
  }, [containerRef, props]);

  useEffect(() => {
    walineInstanceRef.current?.update(props);
  }, [props]);

  return <div className="mt-5" ref={containerRef} />;
};
