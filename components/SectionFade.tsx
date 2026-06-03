'use client';

import { useEffect, useRef } from 'react';

type AnimType = 'up' | 'left' | 'right' | 'zoom';

const classMap: Record<AnimType, string> = {
  up:    'section-fade',
  left:  'section-fade-left',
  right: 'section-fade-right',
  zoom:  'section-zoom',
};

export default function SectionFade({
  children,
  className = '',
  delay = 0,
  anim = 'up',
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  anim?: AnimType;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add('visible'); observer.disconnect(); } },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`${classMap[anim]} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
