"use client";

import { useEffect, useState, useCallback } from "react";
import Image from "next/image";

interface RecipeStep {
  material: string;
  quantity: number;
  unit: string;
}

interface MerchItem {
  id: string;
  name: string;
  category: string;
  variant: string;
  sku: string;
  price: number;
  stock: number;
  lowStockThreshold: number;
  image: string | null;
  notes: string;
  recipe: RecipeStep[];
}

const CATEGORIES = ["Apparel", "Music", "Accessories", "Bundles", "Other"];
const UNITS = ["pc", "pair", "pack", "roll", "sheet", "box", "set"];

const INPUT = "w-full bg-[#0e0c09] border border-[#2a241c] text-cream text-sm px-3 py-2 outline-none focus:border-gold transition-colors";
const LABEL = "block text-[10px] uppercase tracking-[0.2em] text-[#6b5e4e] mb-1";

function statusColor(item: MerchItem) {
  if (item.stock === 0) return "#f87171";
  if (item.stock <= item.lowStockThreshold) return "#fbbf24";
  return "#4ade80";
}

export default function InventoryPage() {
  const [items, setItems] = useState<MerchItem[]>([]);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [filterCat, setFilterCat] = useState("All");
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [uploading, setUploading] = useState(false);

  const selected = items.find((i) => i.id === selectedId) ?? null;

  useEffect(() => {
    fetch("/api/merch").then((r) => r.json()).then((d) => setItems(d.items.map((it: MerchItem) => ({ ...it, recipe: it.recipe ?? [] }))));
  }, []);

  const save = useCallback(async (data: MerchItem[]) => {
    setSaving(true);
    await fetch("/api/merch", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ items: data }) });
    setSaving(false);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  }, []);

  const update = (id: string, patch: Partial<MerchItem>) =>
    setItems((prev) => prev.map((it) => it.id === id ? { ...it, ...patch } : it));

  const adjustStock = (id: string, delta: number) =>
    setItems((prev) => prev.map((it) => it.id === id ? { ...it, stock: Math.max(0, it.stock + delta) } : it));

  const addItem = () => {
    const id = `item-${Date.now()}`;
    const newItem: MerchItem = { id, name: "New Item", category: "Apparel", variant: "", sku: "", price: 0, stock: 0, lowStockThreshold: 3, image: null, notes: "", recipe: [] };
    const next = [newItem, ...items];
    setItems(next);
    setSelectedId(id);
  };

  const deleteItem = (id: string) => {
    if (!confirm("Delete this item?")) return;
    const next = items.filter((it) => it.id !== id);
    setItems(next);
    setSelectedId(null);
    save(next);
  };

  const addRecipeStep = (id: string) =>
    update(id, { recipe: [...(items.find((i) => i.id === id)?.recipe ?? []), { material: "", quantity: 1, unit: "pc" }] });

  const updateRecipeStep = (id: string, idx: number, patch: Partial<RecipeStep>) =>
    setItems((prev) => prev.map((it) => it.id === id ? { ...it, recipe: it.recipe.map((r, i) => i === idx ? { ...r, ...patch } : r) } : it));

  const removeRecipeStep = (id: string, idx: number) =>
    setItems((prev) => prev.map((it) => it.id === id ? { ...it, recipe: it.recipe.filter((_, i) => i !== idx) } : it));

  const uploadImage = async (id: string, file: File) => {
    setUploading(true);
    const fd = new FormData();
    fd.append("file", file);
    fd.append("itemId", id);
    const res = await fetch("/api/merch/upload", { method: "POST", body: fd });
    const data = await res.json();
    if (data.image) update(id, { image: data.image });
    setUploading(false);
  };

  const displayed = filterCat === "All" ? items : items.filter((it) => it.category === filterCat);

  const totalUnits = items.reduce((s, it) => s + it.stock, 0);
  const totalValue = items.reduce((s, it) => s + it.stock * it.price, 0);
  const lowCount = items.filter((it) => it.stock > 0 && it.stock <= it.lowStockThreshold).length;
  const outCount = items.filter((it) => it.stock === 0).length;

  return (
    <div style={{ minHeight: "100vh", background: "#15120f", color: "#f7f0e4", fontFamily: "system-ui, sans-serif" }}>
      {/* Top bar */}
      <div style={{ background: "#0e0c09", borderBottom: "1px solid #2a241c", padding: "14px 28px", display: "flex", alignItems: "center", justifyContent: "space-between", position: "sticky", top: 0, zIndex: 50 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <span style={{ fontSize: 10, letterSpacing: "0.3em", textTransform: "uppercase", color: "#cc9f5f" }}>Almyr Jules</span>
          <span style={{ color: "#2a241c" }}>·</span>
          <span style={{ fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: "#4a3e30" }}>Merch Inventory</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <a href="/merch" target="_blank" style={{ fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: "#4a3e30", textDecoration: "none" }}>View Merch Page ↗</a>
          {saved && <span style={{ fontSize: 11, color: "#4ade80" }}>Saved ✓</span>}
          {saving && <span style={{ fontSize: 11, color: "#cc9f5f" }}>Saving…</span>}
          <button onClick={() => save(items)} style={{ background: "#cc9f5f", border: "none", color: "#15120f", padding: "8px 20px", fontSize: 10, fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", cursor: "pointer" }}>
            Save All
          </button>
        </div>
      </div>

      <div style={{ display: "flex", height: "calc(100vh - 53px)" }}>
        {/* LEFT PANEL */}
        <div style={{ width: 300, flexShrink: 0, borderRight: "1px solid #2a241c", display: "flex", flexDirection: "column", overflow: "hidden" }}>
          {/* Stats */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 1, background: "#2a241c", borderBottom: "1px solid #2a241c" }}>
            {[
              { label: "Units", value: totalUnits, c: "#cc9f5f" },
              { label: "Value", value: `$${totalValue.toLocaleString()}`, c: "#cc9f5f" },
              { label: "Low Stock", value: lowCount, c: lowCount > 0 ? "#fbbf24" : "#4a3e30" },
              { label: "Out of Stock", value: outCount, c: outCount > 0 ? "#f87171" : "#4a3e30" },
            ].map(({ label, value, c }) => (
              <div key={label} style={{ background: "#15120f", padding: "12px 16px" }}>
                <div style={{ fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#4a3e30", marginBottom: 2 }}>{label}</div>
                <div style={{ fontSize: 20, fontWeight: 300, color: c }}>{value}</div>
              </div>
            ))}
          </div>

          {/* Category filter */}
          <div style={{ padding: "10px 12px", borderBottom: "1px solid #2a241c", display: "flex", gap: 4, flexWrap: "wrap" }}>
            {["All", ...CATEGORIES].map((cat) => (
              <button key={cat} onClick={() => setFilterCat(cat)} style={{ padding: "3px 10px", fontSize: 9, letterSpacing: "0.12em", textTransform: "uppercase", border: `1px solid ${filterCat === cat ? "#cc9f5f" : "#2a241c"}`, background: filterCat === cat ? "rgba(204,159,95,0.08)" : "transparent", color: filterCat === cat ? "#cc9f5f" : "#4a3e30", cursor: "pointer" }}>
                {cat}
              </button>
            ))}
          </div>

          {/* Add button */}
          <button onClick={addItem} style={{ margin: "10px 12px", padding: "8px", fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", border: "1px solid #2a241c", background: "transparent", color: "#cc9f5f", cursor: "pointer" }}>
            + Add Item
          </button>

          {/* Item list */}
          <div style={{ flex: 1, overflowY: "auto" }}>
            {displayed.map((item) => {
              const dot = statusColor(item);
              const active = selectedId === item.id;
              return (
                <div key={item.id} onClick={() => setSelectedId(active ? null : item.id)}
                  style={{ display: "flex", alignItems: "center", gap: 10, padding: "10px 14px", cursor: "pointer", borderBottom: "1px solid #1e1a14", borderLeft: `3px solid ${active ? "#cc9f5f" : "transparent"}`, background: active ? "rgba(204,159,95,0.04)" : "transparent" }}>
                  {/* Thumb */}
                  <div style={{ width: 36, height: 36, flexShrink: 0, background: "#0e0c09", borderRadius: 4, overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    {item.image ? (
                      <Image src={item.image} alt="" width={36} height={36} style={{ objectFit: "cover", width: "100%", height: "100%" }} />
                    ) : (
                      <span style={{ fontSize: 16, opacity: 0.2 }}>📦</span>
                    )}
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: 12, color: "#f7f0e4", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{item.name}</div>
                    <div style={{ fontSize: 10, color: "#4a3e30", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{item.variant || item.category}</div>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 5, flexShrink: 0 }}>
                    <span style={{ fontSize: 13, color: dot, fontWeight: 300 }}>{item.stock}</span>
                    <div style={{ width: 6, height: 6, borderRadius: "50%", background: dot }} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* RIGHT PANEL */}
        <div style={{ flex: 1, overflowY: "auto", padding: 32 }}>
          {!selected ? (
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100%", color: "#2a241c", fontSize: 13 }}>
              Select an item from the list to edit
            </div>
          ) : (
            <div style={{ maxWidth: 680 }}>
              {/* Header */}
              <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 32 }}>
                <div>
                  <h2 style={{ fontSize: 20, fontWeight: 300, color: "#f7f0e4", marginBottom: 2 }}>{selected.name}</h2>
                  {selected.variant && <div style={{ fontSize: 12, color: "#6b5e4e" }}>{selected.variant}</div>}
                </div>
                <div style={{ display: "flex", gap: 8 }}>
                  <button onClick={() => deleteItem(selected.id)} style={{ padding: "7px 14px", fontSize: 10, letterSpacing: "0.15em", textTransform: "uppercase", border: "1px solid rgba(248,113,113,0.25)", background: "transparent", color: "#f87171", cursor: "pointer" }}>Delete</button>
                  <button onClick={() => save(items)} style={{ padding: "7px 20px", fontSize: 10, fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", background: "#cc9f5f", border: "none", color: "#15120f", cursor: "pointer" }}>Save All</button>
                </div>
              </div>

              {/* Photo + Stock row */}
              <div style={{ display: "flex", gap: 32, marginBottom: 32 }}>
                {/* Photo upload */}
                <div>
                  <div className={LABEL} style={{ marginBottom: 8 }}>Photo</div>
                  <label style={{ cursor: "pointer", display: "block" }}>
                    <div style={{ width: 120, height: 120, background: "#0e0c09", border: "1px solid #2a241c", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden", position: "relative" }}>
                      {selected.image ? (
                        <Image src={selected.image} alt="" width={120} height={120} style={{ objectFit: "cover", width: "100%", height: "100%" }} />
                      ) : (
                        <span style={{ fontSize: 11, color: "#4a3e30", textAlign: "center", padding: "0 8px" }}>{uploading ? "Uploading…" : "Click to upload"}</span>
                      )}
                    </div>
                    <input type="file" accept="image/*" style={{ display: "none" }} onChange={(e) => { const f = e.target.files?.[0]; if (f) uploadImage(selected.id, f); }} />
                  </label>
                  {selected.image && (
                    <button onClick={() => update(selected.id, { image: null })} style={{ marginTop: 4, fontSize: 10, color: "#4a3e30", background: "none", border: "none", cursor: "pointer", textDecoration: "underline" }}>Remove</button>
                  )}
                </div>

                {/* Stock controls */}
                <div style={{ flex: 1 }}>
                  <div className={LABEL} style={{ marginBottom: 8 }}>Stock Count</div>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
                    <button onClick={() => adjustStock(selected.id, -10)} style={{ width: 36, height: 36, border: "1px solid #2a241c", background: "transparent", color: "#cc9f5f", cursor: "pointer", fontSize: 11 }}>−10</button>
                    <button onClick={() => adjustStock(selected.id, -1)} style={{ width: 36, height: 36, border: "1px solid #2a241c", background: "transparent", color: "#cc9f5f", cursor: "pointer", fontSize: 16 }}>−</button>
                    <input type="number" min="0" value={selected.stock}
                      onChange={(e) => update(selected.id, { stock: Math.max(0, Number(e.target.value)) })}
                      style={{ width: 72, textAlign: "center", fontSize: 28, fontWeight: 300, background: "#0e0c09", border: "1px solid #2a241c", color: statusColor(selected), padding: "6px", outline: "none" }} />
                    <button onClick={() => adjustStock(selected.id, 1)} style={{ width: 36, height: 36, border: "1px solid #2a241c", background: "transparent", color: "#cc9f5f", cursor: "pointer", fontSize: 16 }}>+</button>
                    <button onClick={() => adjustStock(selected.id, 10)} style={{ width: 36, height: 36, border: "1px solid #2a241c", background: "transparent", color: "#cc9f5f", cursor: "pointer", fontSize: 11 }}>+10</button>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                    <div style={{ width: 7, height: 7, borderRadius: "50%", background: statusColor(selected) }} />
                    <span style={{ fontSize: 11, color: "#6b5e4e" }}>
                      {selected.stock === 0 ? "Out of stock" : selected.stock <= selected.lowStockThreshold ? `Low stock: alert at ${selected.lowStockThreshold}` : "In stock"}
                    </span>
                  </div>
                </div>
              </div>

              {/* Fields */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12, marginBottom: 24 }}>
                {[
                  { label: "Name", key: "name" as const, type: "text" },
                  { label: "Variant", key: "variant" as const, type: "text", placeholder: "e.g. Black / M" },
                  { label: "Category", key: "category" as const, type: "select" },
                  { label: "Price ($)", key: "price" as const, type: "number" },
                  { label: "SKU", key: "sku" as const, type: "text", placeholder: "APP-TS-BLK-M" },
                  { label: "Low Stock Alert", key: "lowStockThreshold" as const, type: "number" },
                ].map(({ label, key, type, placeholder }) => (
                  <label key={key} style={{ display: "block" }}>
                    <span className={LABEL}>{label}</span>
                    {type === "select" ? (
                      <select className={INPUT} value={selected[key] as string} onChange={(e) => update(selected.id, { [key]: e.target.value })}>
                        {CATEGORIES.map((c) => <option key={c}>{c}</option>)}
                      </select>
                    ) : (
                      <input className={INPUT} type={type} placeholder={placeholder} value={selected[key] as string | number}
                        onChange={(e) => update(selected.id, { [key]: type === "number" ? Number(e.target.value) : e.target.value })} />
                    )}
                  </label>
                ))}
                <label style={{ display: "block", gridColumn: "1 / -1" }}>
                  <span className={LABEL}>Notes (internal)</span>
                  <input className={INPUT} value={selected.notes} placeholder="Any internal notes…" onChange={(e) => update(selected.id, { notes: e.target.value })} />
                </label>
              </div>

              {/* Divider */}
              <div style={{ borderTop: "1px solid #2a241c", marginBottom: 20 }} />

              {/* Recipe */}
              <div style={{ marginBottom: 32 }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 14 }}>
                  <div>
                    <div style={{ fontSize: 10, letterSpacing: "0.25em", textTransform: "uppercase", color: "#cc9f5f", marginBottom: 2 }}>Recipe</div>
                    <div style={{ fontSize: 11, color: "#4a3e30" }}>Materials needed to produce one unit of this item</div>
                  </div>
                  <button onClick={() => addRecipeStep(selected.id)} style={{ padding: "6px 14px", fontSize: 10, letterSpacing: "0.15em", textTransform: "uppercase", border: "1px solid #2a241c", background: "transparent", color: "#cc9f5f", cursor: "pointer" }}>
                    + Add Material
                  </button>
                </div>

                {selected.recipe.length === 0 ? (
                  <div style={{ border: "1px dashed #2a241c", padding: "24px", textAlign: "center", color: "#2a241c", fontSize: 12 }}>
                    No recipe yet. Add what you need to make this item
                  </div>
                ) : (
                  <div>
                    {/* Header row */}
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 72px 80px 32px", gap: 8, padding: "0 0 6px", marginBottom: 2 }}>
                      {["Material", "Qty", "Unit", ""].map((h) => (
                        <span key={h} style={{ fontSize: 9, letterSpacing: "0.15em", textTransform: "uppercase", color: "#4a3e30" }}>{h}</span>
                      ))}
                    </div>
                    {selected.recipe.map((step, idx) => (
                      <div key={idx} style={{ display: "grid", gridTemplateColumns: "1fr 72px 80px 32px", gap: 8, marginBottom: 6 }}>
                        <input className={INPUT} value={step.material} placeholder="e.g. Blank T-Shirt (M)"
                          onChange={(e) => updateRecipeStep(selected.id, idx, { material: e.target.value })} />
                        <input className={INPUT} type="number" min="0" step="0.5" value={step.quantity}
                          onChange={(e) => updateRecipeStep(selected.id, idx, { quantity: Number(e.target.value) })} />
                        <select className={INPUT} value={step.unit}
                          onChange={(e) => updateRecipeStep(selected.id, idx, { unit: e.target.value })}>
                          {UNITS.map((u) => <option key={u}>{u}</option>)}
                        </select>
                        <button onClick={() => removeRecipeStep(selected.id, idx)}
                          style={{ width: 32, height: 36, display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid rgba(248,113,113,0.2)", background: "transparent", color: "#f87171", cursor: "pointer", fontSize: 12 }}>
                          ✕
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Bottom save */}
              <div style={{ borderTop: "1px solid #2a241c", paddingTop: 20, display: "flex", justifyContent: "flex-end" }}>
                <button onClick={() => save(items)} style={{ padding: "10px 28px", fontSize: 10, fontWeight: 600, letterSpacing: "0.25em", textTransform: "uppercase", background: "#cc9f5f", border: "none", color: "#15120f", cursor: "pointer" }}>
                  Save All
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
