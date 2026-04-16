import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";
import { getArticle, articles } from "@/lib/news";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export default async function NewsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  return (
    <div className="min-h-screen bg-background">
      {/* Hero image */}
      <div className="relative h-72 pt-16 overflow-hidden">
        <Image
          src={article.image}
          alt={article.title}
          fill
          className="object-cover opacity-25"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-transparent to-background" />
      </div>

      <div className="max-w-3xl mx-auto px-6 lg:px-8 -mt-12 relative z-10 pb-24">
        <Link
          href="/#news"
          className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors mb-8 block"
        >
          <ArrowLeft size={12} /> Back to News
        </Link>

        <div className="space-y-6">
          {/* Meta */}
          <div className="flex items-center gap-3">
            <span className="bg-primary text-black text-[9px] font-black uppercase tracking-widest px-2.5 py-1">
              {article.category}
            </span>
            <span className="text-[9px] font-black text-on-surface-variant uppercase tracking-widest">
              {article.date}
            </span>
          </div>

          {/* Title */}
          <h1 className="font-black text-3xl md:text-5xl tight-tracking uppercase leading-tight text-white">
            {article.title}
          </h1>

          {/* Excerpt */}
          <p className="text-on-surface-variant text-base leading-relaxed border-l-2 border-primary pl-4">
            {article.excerpt}
          </p>

          {/* Hero image */}
          <div className="relative aspect-[16/9] rounded-2xl overflow-hidden">
            <Image
              src={article.image}
              alt={article.title}
              fill
              className="object-cover opacity-60"
            />
          </div>

          {/* Body */}
          <div
            className="space-y-4 [&_h2]:font-black [&_h2]:text-white [&_h2]:uppercase [&_h2]:text-xl [&_h2]:tight-tracking [&_h2]:mt-8 [&_h2]:mb-4 [&_p]:text-on-surface-variant [&_p]:leading-relaxed [&_p]:text-sm"
            dangerouslySetInnerHTML={{ __html: article.body }}
          />
        </div>

        {/* Footer CTA */}
        <div className="mt-16 pt-8 border-t border-white/8">
          <p className="text-[10px] font-black text-on-surface-variant uppercase tracking-widest mb-4">
            Continue
          </p>
          <Link
            href="/#news"
            className="inline-flex items-center gap-2 bg-primary text-black font-black px-6 py-3 text-[10px] uppercase tracking-widest hover:shadow-[0_0_30px_rgba(51,245,122,0.35)] transition-all"
          >
            Back to Monster Gaming Hub
          </Link>
        </div>
      </div>
    </div>
  );
}
