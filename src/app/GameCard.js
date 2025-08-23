"use client";

export default function GameCard({ game, onClick }) {
  return (
    <div
      className="bg-[#111827] rounded-md overflow-hidden shadow cursor-pointer hover:scale-105 transition-transform duration-200"
      onClick={() => onClick(game)}
    >
      <img
        src={game.thumb}
        alt={game.name}
        className="w-full aspect-[4/3] object-cover"
      />
      <div className="p-1">
        <p className="font-semibold text-xs truncate">{game.name}</p>
      </div>
    </div>
  );
}
