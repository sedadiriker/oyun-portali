// app/page.js (Güncellenmiş Sunucu Bileşeni)
import Header from "./components/header";
import GameGrid from "./components/GameGrid"; // Yeni bileşeni içe aktarın
import Footer from "./components/footer";
import Image from "next/image";

// Veriyi sunucu tarafında çeken asenkron fonksiyon
async function getGames() {
  const res = await fetch("https://oyun-portali.vercel.app/api/famobi", {
    cache: "no-store",
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
    return (
      <div className="text-center mt-10 text-red-400">
        Oyunlar yüklenirken bir hata oluştu. Lütfen daha sonra tekrar deneyin.
      </div>
    );
  }

  const featuredGames = [...games].sort(() => 0.5 - Math.random()).slice(0, 5);
  const categories = [...new Set(games.flatMap((g) => g.categories))];

  return (
    <div className="bg-gradient-to-b from-[#0b1220] to-[#0f172a] text-gray-200 min-h-screen text-center">
      <Header categories={categories} />

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

      <GameGrid games={games} /> {/* Oyun listesi artık bu bileşen içinde yönetiliyor. */}

      <Footer />
    </div>
  );
}