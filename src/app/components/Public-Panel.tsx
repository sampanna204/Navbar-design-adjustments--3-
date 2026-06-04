import { ReactNode } from 'react';

export function PublicPanel({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children: ReactNode;
}) {
  return (
    <section className="py-8 bg-[#FAF8F5]">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl ml-auto text-right">
          <h2 className="text-3xl md:text-4xl font-bold text-[#4A4238] text-center">{title}</h2>
        </div>

        <div className="mt-4">{children}</div>
      </div>
    </section>
  );
}

