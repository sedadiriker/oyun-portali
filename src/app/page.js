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

  const filteredGames = category
    ? games.filter((g) => g.categories.includes(category))
    : games;

  const categories = [...new Set(games.flatMap((g) => g.categories))];

  return (
    <div className="bg-gradient-to-b from-[#0b1220] to-[#0f172a] text-gray-200 min-h-screen">
      <Header category={category} setCategory={setCategory} categories={categories} />

      <main className="max-w-6xl mx-auto p-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-3">
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
            <GameCard key={game.package_id} game={game} onClick={setOverlayGame} />
          ))
        )}
      </main>

      <Overlay game={overlayGame} onClose={() => setOverlayGame(null)} />
        <Footer />
    </div>
  );
}
