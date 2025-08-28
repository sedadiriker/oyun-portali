// components/GameGrid.js (Yeni İstemci Bileşeni)
"use client";

import { useState } from "react";
import GameCard from "./gameCard";
import Overlay from "./overlay";

export default function GameGrid({ games }) {
  const [selectedGame, setSelectedGame] = useState(null);

  const handleCardClick = (game) => {
    setSelectedGame(game);
  };

  const handleCloseOverlay = () => {
    setSelectedGame(null);
  };

  return (
    <>
      <main className="max-w-7xl mx-auto p-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 gap-3">
        {games.length === 0 ? (
          <p className="col-span-full text-center mt-10 text-gray-400">
            Oyun bulunamadı.
          </p>
        ) : (
          games.map((game) => (
            <GameCard
              key={game.package_id}
              game={game}
              onClick={handleCardClick} // onClick prop'u burada doğru şekilde aktarılıyor.
            />
          ))
        )}
      </main>

      {selectedGame && (
        <Overlay game={selectedGame} onClose={handleCloseOverlay} />
      )}
    </>
  );
}