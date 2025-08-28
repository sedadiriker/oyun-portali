export async function GET() {
  const res = await fetch("https://api.famobi.com/feed");
  const data = await res.json();

  
  return new Response(JSON.stringify(data), {
    headers: { "Content-Type": "application/json" },
  });
}
