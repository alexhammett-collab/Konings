import Link from "next/link";
import { Phone, Mail, MapPin, Clock, ExternalLink } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-gold">K</span>ÖNINGS
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Award-winning car detailing in Winchester. Specialising in PPF, ceramic coating, paint correction, and dry ice blasting for supercars, classics, and high-end vehicles.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gold uppercase tracking-wider mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/services/detailing-paint-correction" className="hover:text-foreground transition-colors">Detailing & Paint Correction</Link></li>
              <li><Link href="/services/new-car-protection" className="hover:text-foreground transition-colors">New Car Protection</Link></li>
              <li><Link href="/services/paint-protection-film" className="hover:text-foreground transition-colors">Paint Protection Film</Link></li>
              <li><Link href="/services/dry-ice-blasting" className="hover:text-foreground transition-colors">Dry-Ice Blasting</Link></li>
              <li><Link href="/services/ceramic-coating" className="hover:text-foreground transition-colors">Ceramic Coating</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gold uppercase tracking-wider mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/configurator" className="hover:text-foreground transition-colors">PPF Configurator</Link></li>
              <li><Link href="/gallery" className="hover:text-foreground transition-colors">Project Gallery</Link></li>
              <li><Link href="/booking" className="hover:text-foreground transition-colors">Book Now</Link></li>
              <li><Link href="/tracker" className="hover:text-foreground transition-colors">Track My Car</Link></li>
              <li><Link href="/about" className="hover:text-foreground transition-colors">Our Story</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gold uppercase tracking-wider mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="text-gold mt-0.5 shrink-0" />
                <span>Gentian House, Block A, Unit 2, Moorside Road, Winchester SO23 7RX</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-gold shrink-0" />
                <a href="tel:07854719945" className="hover:text-foreground transition-colors">07854 719 945</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-gold shrink-0" />
                <a href="mailto:info@konings.co.uk" className="hover:text-foreground transition-colors">info@konings.co.uk</a>
              </li>
              <li className="flex items-center gap-2">
                <Clock size={16} className="text-gold shrink-0" />
                <span>Mon–Fri: 8am – 4pm</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Konings Detailing Ltd. Registered in England No: 06582810. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {[
              { href: "https://www.youtube.com/@KoningsDetailing", label: "YouTube" },
              { href: "https://www.facebook.com/koningsdetailing", label: "Facebook" },
              { href: "https://www.instagram.com/koningsdetailing/", label: "Instagram" },
              { href: "https://www.linkedin.com/company/konings-detailing/", label: "LinkedIn" },
            ].map((social) => (
              <a key={social.label} href={social.href} target="_blank" rel="noopener" className="text-xs text-muted-foreground hover:text-gold transition-colors flex items-center gap-1">
                <ExternalLink size={12} />
                {social.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
