const ITEMS = [
  'React & Next.js', 'Node.js & Express', 'ASP.NET Core', 'PostgreSQL',
  'SQL Server', 'Prisma ORM', 'Socket.io', 'JWT Auth', 'WhatsApp API',
  'Vercel & GitHub', 'Claude AI', 'Cloudflare R2', 'React Native', 'BullMQ & Redis',
];

export const TechMarquee = () => (
  <div className="tech-strip border-t border-b border-[var(--color-neutral-800)] py-3.5 overflow-hidden bg-[var(--color-surface)]">
    <div className="marquee-track flex gap-0 w-max">
      {[...ITEMS, ...ITEMS].map((item, i) => (
        <span
          key={i}
          className="marquee-item font-mono text-xs text-[var(--color-neutral-500)] whitespace-nowrap flex items-center px-7 hover:text-[var(--color-accent-400)] transition-colors"
        >
          {item}
          <span className="ml-7 text-[var(--color-accent)]">·</span>
        </span>
      ))}
    </div>
  </div>
);
