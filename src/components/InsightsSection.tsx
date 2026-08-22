import React, { useState } from 'react';
import { INSIGHTS_ARTICLES } from '../data/siteData';
import { InsightArticle } from '../types';
import { BookOpen, Clock, ArrowRight, X, Sparkles, Tag } from 'lucide-react';

export const InsightsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos');
  const [activeArticle, setActiveArticle] = useState<InsightArticle | null>(null);

  const categories = [
    'Todos',
    'Turismo de bienestar',
    'Gestión de destinos',
    'Desarrollo organizacional',
    'Marketing y comunicación'
  ];

  const filteredArticles = selectedCategory === 'Todos'
    ? INSIGHTS_ARTICLES
    : INSIGHTS_ARTICLES.filter((art) => art.category === selectedCategory);

  return (
    <section
      id="insights"
      className="py-20 md:py-28 bg-[#f7faf8] border-b border-[#004e41]/10 relative"
      aria-label="Insights e Ideas para Transformar Destinos"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#004e41]/10 text-xs font-bold text-[#004e41] uppercase tracking-wider mb-3">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Perspectivas & Autoridad</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#004e41] leading-tight">
              Ideas para transformar destinos y organizaciones
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#3d544f] leading-relaxed">
              Reflexiones estratégicas, criterios de gestión y metodologías para el turismo de bienestar y el desarrollo territorial.
            </p>
          </div>

          {/* Categories Selector */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                  selectedCategory === cat
                    ? 'bg-[#004e41] text-white shadow-sm'
                    : 'bg-white text-[#3f5751] border border-[#004e41]/15 hover:bg-[#004e41]/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {filteredArticles.map((article) => (
            <article
              key={article.id}
              className="bg-white rounded-2xl p-7 sm:p-8 border border-[#004e41]/15 shadow-sm hover:shadow-md hover:border-[#004e41]/40 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#004e41] bg-[#59c99d]/20 px-2.5 py-1 rounded">
                    {article.category}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-[#5f7a73]">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{article.readTime}</span>
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-[#004e41] mb-3 group-hover:text-[#00382f] transition-colors leading-snug">
                  {article.title}
                </h3>

                <p className="text-sm text-[#3b544e] leading-relaxed mb-6">
                  {article.summary}
                </p>

                {/* Key takeaway pill */}
                <div className="p-3.5 rounded-xl bg-[#f0f7f4] border border-[#59c99d]/30 text-xs text-[#1e3832] mb-6">
                  <span className="font-bold text-[#004e41] block mb-0.5">Idea central:</span>
                  {article.keyTakeaway}
                </div>
              </div>

              <div className="pt-4 border-t border-[#004e41]/10 flex items-center justify-between">
                <span className="text-xs text-[#526b64]">Publicación Eequa</span>
                <button
                  type="button"
                  onClick={() => setActiveArticle(article)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#004e41] group-hover:text-[#ff5204] transition-colors"
                >
                  <span>Leer artículo completo</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#59c99d] group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </article>
          ))}
        </div>

      </div>

      {/* Full Article Reading Modal */}
      {activeArticle && (
        <div className="fixed inset-0 z-50 overflow-y-auto" role="dialog" aria-modal="true">
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
            onClick={() => setActiveArticle(null)}
          />

          <div className="flex min-h-full items-center justify-center p-4 sm:p-6 text-left">
            <div className="relative transform overflow-hidden rounded-2xl bg-white p-6 sm:p-10 text-left shadow-2xl transition-all w-full max-w-2xl border border-[#004e41]/20 my-8">
              
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setActiveArticle(null)}
                className="absolute top-5 right-5 p-2 rounded-full text-[#48635c] hover:bg-[#004e41]/10 transition-colors"
                aria-label="Cerrar artículo"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Article Header */}
              <div className="mb-6 pb-6 border-b border-[#004e41]/10">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#004e41] bg-[#59c99d]/20 px-2.5 py-1 rounded">
                    {activeArticle.category}
                  </span>
                  <span className="text-xs text-[#637d77]">{activeArticle.readTime}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#004e41] leading-tight">
                  {activeArticle.title}
                </h3>
              </div>

              {/* Article Markdown Body */}
              <div className="prose prose-sm text-[#273d38] space-y-4 leading-relaxed mb-8">
                {activeArticle.contentMarkdown.split('\n\n').map((block, idx) => {
                  if (block.startsWith('### ')) {
                    return (
                      <h4 key={idx} className="text-lg font-bold text-[#004e41] mt-5 mb-2">
                        {block.replace('### ', '')}
                      </h4>
                    );
                  }
                  return <p key={idx}>{block}</p>;
                })}
              </div>

              {/* Article Footer & Lead Prompt */}
              <div className="p-5 rounded-xl bg-[#f0f7f4] border border-[#59c99d]/30 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-bold text-[#004e41]">
                    ¿Querés profundizar en este enfoque para tu destino?
                  </p>
                  <p className="text-xs text-[#48635c]">
                    Podemos coordinar una conversación inicial de diagnóstico.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setActiveArticle(null);
                    document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="shrink-0 px-4 py-2 rounded-lg bg-[#004e41] text-white text-xs font-bold hover:bg-[#00382f]"
                >
                  Contactar a Eequa
                </button>
              </div>

            </div>
          </div>
        </div>
      )}
    </section>
  );
};
