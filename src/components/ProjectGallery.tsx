interface GalleryItem {
  title: string
  category: string
  imageUrl: string
}

interface ProjectGalleryProps {
  title?: string
  subtitle?: string
  items: GalleryItem[]
}

export default function ProjectGallery({ 
  title = "Our Recent Work", 
  subtitle = "Real results for local businesses like yours.",
  items 
}: ProjectGalleryProps) {
  return (
    <section className="py-24 px-6 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-gray-900 dark:text-white mb-4 tracking-tight uppercase italic">{title}</h2>
          <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto font-medium">{subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <div 
              key={index} 
              className="group relative bg-gray-50 dark:bg-slate-900 rounded-[32px] overflow-hidden aspect-[4/3] shadow-xl border border-gray-100 dark:border-slate-800 transition-all hover:shadow-2xl hover:-translate-y-2"
            >
              {/* Image Placeholder with Gradient Overlay */}
              <div className="absolute inset-0 bg-gray-200 dark:bg-slate-800 flex items-center justify-center">
                 <div className="text-6xl opacity-20">📸</div>
                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
              </div>

              {/* Content Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                <div 
                  className="inline-block px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[2px] mb-3 text-white shadow-lg"
                  style={{ background: 'var(--premium-gradient)' }}
                >
                  {item.category}
                </div>
                <h3 className="text-2xl font-bold text-white tracking-tight">{item.title}</h3>
                <div className="mt-4 flex items-center gap-2 text-white/60 text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                   View Project Details <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
