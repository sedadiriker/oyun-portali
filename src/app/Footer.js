export default function Footer() {
  return (
    <footer className="fixed bottom-0 w-full bg-[#0f172a] border-t border-white/10 text-gray-400 p-4 text-center z-40">
      <p>&copy; {new Date().getFullYear()} Oyun Portalı. Tüm hakları saklıdır.</p>
    </footer>
  );
}
