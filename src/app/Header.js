"use client";

export default function Header({ category, setCategory, categories }) {
  return (
    <header className="sticky top-0 bg-[#0f172a]/90 backdrop-blur border-b border-white/5 p-3">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img
          src="/logo.png"
          alt="Logo"
          className="w-20 h-20 rounded-lg object-cover"
        />
        <strong>Oyun Portalı</strong>
        </div>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="bg-[#111827] border border-white/10 rounded-lg px-3 py-2"
        >
          <option value="">Tüm Oyunlar</option>
          {categories.map((cat, idx) => (
            <option key={`${cat}-${idx}`} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>
    </header>
  );
}
