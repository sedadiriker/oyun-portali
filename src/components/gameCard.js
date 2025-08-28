"use client";
import Image from "next/image";

export default function GameCard({ game, onClick }) {
  return (
    <div
      className="bg-[#111827] rounded-md overflow-hidden shadow cursor-pointer hover:scale-105 transition-transform duration-200"
      onClick={() => onClick(game)}
    >
      <Image
        src={game.thumb}
        alt={game.name}
        width={220}
        height={120}
        className="w-full h-[120px] object-cover rounded-t-lg"
      />
      <div className="p-1">
        <p className="font-semibold text-xs truncate">{game.name}</p>
      </div>
    </div>
  );
}
