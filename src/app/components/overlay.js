"use client";

export default function Overlay({ game, onClose }) {
  if (!game) return null;

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-50">
      <div className="bg-[#111827] rounded-xl shadow-lg max-w-4xl w-full flex flex-col">
        <div className="flex justify-between items-center p-3 border-b border-white/10">
          <h2 className="font-bold">{game.name}</h2>
          <button
            className="bg-red-500 text-white px-3 py-1 rounded-lg"
            onClick={onClose}
          >
            Kapat
          </button>
        </div>
        <iframe
          src={game.link}
          className="w-full h-[70vh] bg-black"
          allowFullScreen
        />
        {game.description && <p className="p-3">{game.description}</p>}
      </div>
    </div>
  );
}
