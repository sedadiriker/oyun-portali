"use client";

export default function GameCard({ game, onClick }) {
  return (
    <div
      className="bg-[#111827] rounded-lg overflow-hidden shadow cursor-pointer hover:scale-[1.05] transition"
      onClick={() => onClick(game)}
    >
      <img
        src={game.thumb}
        alt={game.name}
        className="w-full aspect-[3/2] object-cover"
      />
      <div className="p-2">
        <p className="font-semibold text-sm truncate">{game.name}</p>
      </div>
    </div>
  );
}
