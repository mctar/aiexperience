export function Footer() {
  return (
    <footer className="border-t border-slate-200/60 bg-white/30 py-8 text-center text-slate-500 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} AI Experience. Alle rettigheter reservert.
        </p>
      </div>
    </footer>
  );
}
