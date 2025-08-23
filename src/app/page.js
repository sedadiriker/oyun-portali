"use client";

import { useState, useEffect } from "react";
import Header from "./Header";
import GameCard from "./GameCard";
import Overlay from "./Overlay";
import Footer from "./Footer";

export default function Home() {
  const [games, setGames] = useState([]);
  const [category, setCategory] = useState("");
  const [overlayGame, setOverlayGame] = useState(null);
  const [loading, setLoading] = useState(true);
  

  useEffect(() => {
    fetch("/api/famobi")
      .then((res) => res.json())
      .then((data) => {
        setGames(data.games || []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const categories = [...new Set(games.flatMap((g) => g.categories))];

  // Öne çıkan oyunlar (rastgele seçilen 5 oyun)
  const featuredGames = [...games].sort(() => 0.5 - Math.random()).slice(0, 5);

  // Normal oyunlar, kategori filtresi uygulandı
  const filteredGames = category
    ? games.filter((g) => g.categories.includes(category))
    : games;

  return (
    <div className="bg-gradient-to-b from-[#0b1220] to-[#0f172a] text-gray-200 min-h-screen text-center">
      <Header
        category={category}
        setCategory={setCategory}
        categories={categories}
      />
        {/* Öne çıkan oyunlar */}

      <div className="flex justify-center">
        {featuredGames.length > 0 && (
          <section className="max-w-7xl mx-auto p-4">
            <h2 className="text-xl font-bold mb-2">Öne Çıkan Oyunlar</h2>
            <div className="flex overflow-x-auto gap-4 py-2">
              {featuredGames.map((game) => (
                <div
                  key={game.package_id}
                  className="min-w-[220px] bg-[#111827] rounded-lg shadow-lg cursor-pointer hover:scale-[1.05] transition flex-shrink-0"
                  onClick={() => setOverlayGame(game)}
                >
                  <img
                    src={game.thumb}
                    alt={game.name}
                    className="w-full h-[120px] object-cover rounded-t-lg"
                  />
                  <div className="p-2">
                    <p className="font-semibold text-sm truncate">
                      {game.name}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>

      {/* Tüm oyunlar grid */}
      <main className="max-w-7xl mx-auto p-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 gap-3">
        {loading ? (
          <p className="col-span-full text-center mt-10 text-gray-400">
            Oyunlar yükleniyor...
          </p>
        ) : filteredGames.length === 0 ? (
          <p className="col-span-full text-center mt-10 text-gray-400">
            Bu kategoride oyun bulunamadı.
          </p>
        ) : (
          filteredGames.map((game) => (
            <GameCard
              key={game.package_id}
              game={game}
              onClick={setOverlayGame}
            />
          ))
        )}
      </main>

      <Overlay game={overlayGame} onClose={() => setOverlayGame(null)} />
      <Footer />
    </div>
  );
}
