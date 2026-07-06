import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/gallery", label: "Gallery" },
  { to: "/pricing", label: "Packages" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${
        scrolled
          ? "bg-ivory/90 backdrop-blur-md shadow-[0_1px_0_0_var(--color-border)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-6 py-4 md:grid-cols-3 md:py-5">
        <Link
          to="/"
          className={`min-w-0 truncate font-serif text-2xl tracking-wide md:justify-self-start ${
            scrolled ? "text-jade-deep" : "text-ivory"
          }`}
        >
          Anaya <span className="text-gold">·</span> Spa
        </Link>

        <nav className="hidden items-center justify-center gap-8 md:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              activeProps={{ className: "text-gold" }}
              className={`text-[0.78rem] uppercase tracking-[0.22em] transition-colors hover:text-gold ${
                scrolled ? "text-jade-deep/80" : "text-ivory/90"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex md:justify-self-end">
          <Link to="/book" className="btn-primary text-[0.72rem]">
            Book Now
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
          className={`shrink-0 md:hidden ${scrolled ? "text-jade-deep" : "text-ivory"}`}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden">
          <div className="mx-4 mb-4 rounded-2xl border border-border bg-ivory/95 p-6 shadow-luxe backdrop-blur-md">
            <nav className="flex flex-col gap-4">
              {links.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  activeOptions={{ exact: l.to === "/" }}
                  activeProps={{ className: "text-gold" }}
                  className="text-xs uppercase tracking-[0.22em] text-jade-deep/80"
                >
                  {l.label}
                </Link>
              ))}
              <Link
                to="/book"
                onClick={() => setOpen(false)}
                className="btn-primary mt-2 justify-center text-[0.72rem]"
              >
                Book Now
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
