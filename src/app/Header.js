"use client";

export default function Header({ category, setCategory }) {
  const categoryMap = {
    arcade: "Arcade",
    skill: "Yetenek",
    action: "Aksiyon",
    puzzle: "Bulmaca",
    girls: "Kızlar",
    quiz: "Test",
    "match-3": "3’lü Eşleştirme",
    racing: "Yarış",
    sports: "Spor",
    cars: "Arabalar",
    mahjong: "Mahjong",
    educational: "Eğitici",
    "bubble-shooter": "Balon Patlatma",
    cards: "Kart Oyunları",
    "dress-up": "Giydirme",
    "make-up": "Makyaj",
    multiplayer: "Çok Oyunculu",
    "jump-and-run": "Koş ve Zıpla",
    "time-management-and-strategy": "Zaman ve Strateji",
    tamagotchi: "Tamagotchi",
    management: "Yönetim",
    cooking: "Yemek Yapma",
    breakout: "Breakout",
  };

  // Öne çıkan/popüler kategoriler (sabit veya rastgele seçebilirsiniz)
  const popularCategories = ["arcade", "action", "puzzle", "sports", "multiplayer"];

  return (
    <header className="sticky top-0 bg-[#0f172a]/90 backdrop-blur border-b border-white/5 p-3">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
        <div className="flex items-center gap-2">
          <img
            src="/logo.png"
            alt="Logo"
            className="w-20 h-20 rounded-lg object-cover"
          />
          <strong>Oyun Portalı</strong>
        </div>

        {/* Kategori select */}
      

        {/* Popüler kategori butonları */}
        <div className="flex flex-wrap gap-2 mt-2 md:mt-0">
          {popularCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`px-3 py-1 rounded-lg ${
                category === cat
                  ? "bg-blue-600 text-white"
                  : "bg-[#111827] text-gray-200 hover:bg-blue-500"
              } transition`}
            >
              {categoryMap[cat]}
            </button>
          ))}
            <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="bg-[#111827] border border-white/10 rounded-lg px-3 py-2"
        >
          <option value="">Tüm Oyunlar</option>
          {Object.entries(categoryMap).map(([key, label], idx) => (
            <option key={idx} value={key}>
              {label}
            </option>
          ))}
        </select>
        </div>
      </div>
    </header>
  );
}
