// Artık "use client" yok

import Header from "./components/header";
import GameCard from "./components/gameCard";
import Overlay from "./components/overlay";
import Footer from "./components/footer";
import Image from "next/image";

// Veriyi sunucu tarafında çeken asenkron fonksiyon
async function getGames() {
  const res = await fetch("https://oyun-portali.vercel.app/api/famobi", {
    cache: "no-store", // Bu, her istekte verinin yeniden çekilmesini sağlar
  });
  if (!res.ok) {
    throw new Error("API'den veri alınamadı.");
  }
  return res.json();
}

export default async function Home() {
  let games = [];
  try {
    const data = await getGames();
    games = data.games || [];
  } catch (error) {
    console.error(error);
    // Hata durumunda kullanıcıya bilgi verebiliriz
    return (
      <div className="text-center mt-10 text-red-400">
        Oyunlar yüklenirken bir hata oluştu. Lütfen daha sonra tekrar deneyin.
      </div>
    );
  }

  // Öne çıkan oyunları rastgele seçme mantığı
  const featuredGames = [...games].sort(() => 0.5 - Math.random()).slice(0, 5);

  // Kategori filtresi için kategori listesini oluşturma
  const categories = [...new Set(games.flatMap((g) => g.categories))];

  return (
    <div className="bg-gradient-to-b from-[#0b1220] to-[#0f172a] text-gray-200 min-h-screen text-center">
      <Header
        // Header artık state'i kendi içinde yönetecek
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
                  // Artık tıklama olayını burada yönetemeyiz, GameCard bileşeni kendi içinde Overlay'i yönetecek.
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

      {/* Tüm oyunlar grid */}
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
            />
          ))
        )}
      </main>

      {/* Overlay ve Footer hala istemci tarafı bileşeni olmalı */}
      <Overlay />
      <Footer />
    </div>
  );
}