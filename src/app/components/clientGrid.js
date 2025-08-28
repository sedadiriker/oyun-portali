// components/ClientGrid.js
"use client";

import { useState, useMemo } from 'react';
import Header from "./header";
import GameGrid from "./gameGrid";
import Image from "next/image";

export default function ClientGrid({ games, categories }) {
  const [selectedCategory, setSelectedCategory] = useState("");

   const featuredGames = [...games].sort(() => 0.5 - Math.random()).slice(0, 5);

  const filteredGames = useMemo(() => {
    if (!selectedCategory) {
      return games;
    }
    return games.filter(game => game.categories.includes(selectedCategory));
  }, [games, selectedCategory]);

  return (
    <>
      <Header
        category={selectedCategory}
        setCategory={setSelectedCategory}
        categories={categories}
      />
         <div className="flex justify-center">
        {featuredGames.length > 0 && (
          <section className="max-w-7xl mx-auto p-4">
            <h2 className="text-xl font-bold mb-2">Öne Çıkan Oyunlar</h2>
            <div className="flex overflow-x-auto gap-4 py-2">
              {featuredGames.map((game) => (
                <div
                  key={game.package_id}
                  className="min-w-[220px] bg-[#111827] rounded-lg shadow-lg cursor-pointer hover:scale-[1.05] transition flex-shrink-0"
                >
                  <Image
                    src={game.thumb}
                    alt={game.name}
                    width={220}
                    height={120}
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
      <GameGrid games={filteredGames} />
    </>
  );
}