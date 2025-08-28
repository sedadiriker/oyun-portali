import Footer from "./components/footer";
import ClientGrid from "./components/clientGrid";


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

 
  const categories = [...new Set(games.flatMap((g) => g.categories))];

  return (
    <div className="bg-gradient-to-b from-[#0b1220] to-[#0f172a] text-gray-200 min-h-screen text-center">

   

      <ClientGrid games={games} categories={categories} />


      <Footer />
    </div>
  );
}