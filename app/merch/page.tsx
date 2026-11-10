import fs from "fs";
import path from "path";
import Image from "next/image";

interface MerchItem {
  id: string;
  name: string;
  category: string;
  variant: string;
  price: number;
  stock: number;
  lowStockThreshold: number;
  image: string | null;
}

export const dynamic = "force-dynamic";

export default function MerchPage() {
  const { items }: { items: MerchItem[] } = JSON.parse(fs.readFileSync(path.join(process.cwd(), "data", "merch.json"), "utf-8"));
  const categories = [...new Set(items.map((i) => i.category))];

  return (
    <main className="min-h-screen bg-charcoal text-cream pt-28 pb-24 px-6">
      <div className="mx-auto max-w-5xl">
        <p className="font-display text-sm uppercase tracking-[0.4em] text-gold mb-4">Almyr Jules</p>
        <h1 className="text-4xl font-light tracking-[0.05em] mb-16">Merch</h1>

        {categories.map((cat) => {
          const catItems = items.filter((i) => i.category === cat);
          return (
            <section key={cat} className="mb-16">
              <div className="text-[10px] uppercase tracking-[0.3em] text-gold/50 mb-8 pb-3 border-b border-charcoal-line">{cat}</div>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                {catItems.map((item) => {
                  const isOut = item.stock === 0;
                  const isLow = !isOut && item.stock <= item.lowStockThreshold;
                  return (
                    <div key={item.id} className={`group ${isOut ? "opacity-50" : ""}`}>
                      {/* Photo */}
                      <div className="w-full aspect-square bg-charcoal-soft border border-charcoal-line overflow-hidden mb-3 flex items-center justify-center">
                        {item.image ? (
                          <Image src={item.image} alt={item.name} width={300} height={300} className="w-full h-full object-cover" />
                        ) : (
                          <span className="text-4xl opacity-10">📦</span>
                        )}
                      </div>

                      <div className="flex items-start justify-between gap-2 mb-1">
                        <div>
                          <p className="text-sm text-cream">{item.name}</p>
                          {item.variant && <p className="text-xs text-cream-soft/40 mt-0.5">{item.variant}</p>}
                        </div>
                        <p className="text-sm text-gold flex-shrink-0">${item.price}</p>
                      </div>

                      <div className="flex items-center gap-1.5 mt-2">
                        <div className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${isOut ? "bg-red-400" : isLow ? "bg-yellow-400" : "bg-green-400"}`} />
                        <span className={`text-[10px] uppercase tracking-[0.1em] ${isOut ? "text-red-400" : isLow ? "text-yellow-400" : "text-green-400/70"}`}>
                          {isOut ? "Out of stock" : isLow ? `Only ${item.stock} left` : "Available"}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          );
        })}
      </div>
    </main>
  );
}
