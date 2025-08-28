// components/ClientGrid.js
"use client";

import { useState, useMemo } from 'react';
import Header from "./header";
import GameGrid from "./gameGrid";

export default function ClientGrid({ games, categories }) {
  const [selectedCategory, setSelectedCategory] = useState("");

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
      <GameGrid games={filteredGames} />
    </>
  );
}