import { Link } from "@tanstack/react-router";
import { Flame, Instagram, Facebook, Twitter } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-charcoal/60">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-3">
        <div>
          <Link to="/" className="flex items-center gap-2">
            <Flame className="h-5 w-5 text-copper" />
            <span className="font-display text-xl tracking-wider">Ember & Oak</span>
          </Link>
          <p className="mt-3 max-w-xs text-sm text-muted-foreground">
            Wood-fired smash burgers, slow-smoked brisket, and the best damn fries
            on four wheels.
          </p>
        </div>
        <div className="font-display tracking-widest text-sm">
          <p className="mb-3 text-copper">Visit</p>
          <p className="text-muted-foreground">Rolling through Austin, TX</p>
          <p className="text-muted-foreground">Wed – Sun · 11am – 10pm</p>
        </div>
        <div className="flex md:justify-end gap-4 items-start">
          <a href="#" aria-label="Instagram" className="rounded-full border border-border p-2 text-muted-foreground hover:text-copper hover:border-copper transition">
            <Instagram className="h-4 w-4" />
          </a>
          <a href="#" aria-label="Facebook" className="rounded-full border border-border p-2 text-muted-foreground hover:text-copper hover:border-copper transition">
            <Facebook className="h-4 w-4" />
          </a>
          <a href="#" aria-label="Twitter" className="rounded-full border border-border p-2 text-muted-foreground hover:text-copper hover:border-copper transition">
            <Twitter className="h-4 w-4" />
          </a>
        </div>
      </div>
      <div className="border-t border-border/60 py-4 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Ember & Oak Food Truck. All rights reserved.
      </div>
    </footer>
  );
}
