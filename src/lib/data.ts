export const services = [
  {
    slug: "detailing-paint-correction",
    title: "Detailing & Paint Correction",
    shortDesc: "Restore, protect, and shine — bespoke car detailing that brings your vehicle back to life.",
    longDesc: "At Konings, we provide bespoke detailing and professional paint correction services tailored to your vehicle's unique needs. Every car is treated individually with a 55-stage deep clean, paint decontamination, and interior detailing as standard.",
    icon: "Sparkles",
    tiers: [
      {
        name: "Konings Elite Standard",
        price: 900,
        description: "Outstanding results in paint refinement with 15-25 hours of precision machine polishing and selective wet sanding. 100% scratch and swirl removal. Paint Correction Factor: Up to 99%.",
        features: ["55-stage deep clean", "Paint decontamination", "Interior detailing", "15-25 hours machine polishing", "Selective wet sanding", "Up to 99% correction"],
      },
      {
        name: "Konings Signature",
        price: 1900,
        description: "Over 100 hours of meticulous machine polishing and extensive wet sanding. Mirror-like, competition-ready surface. Ideal for collectors, show cars, and museum-quality restorations.",
        features: ["Everything in Elite Standard", "100+ hours polishing", "Extended wet sanding", "Deep interior & leather restoration", "Dry ice cleaning", "Cosmetic repairs & headlight restoration"],
      },
    ],
  },
  {
    slug: "new-car-protection",
    title: "New Car Protection",
    shortDesc: "New isn't always perfect — enhance, protect, preserve with our expert ceramic and PPF protection.",
    longDesc: "Your brand-new vehicle deserves the best protection from day one. Our New Car Protection service combines thorough preparation with ceramic coating and PPF application to preserve that factory-fresh finish for years to come.",
    icon: "ShieldCheck",
    tiers: [
      {
        name: "Ceramic Shield",
        price: 750,
        description: "Professional ceramic coating application with full paint decontamination and single-stage machine polish to prepare a flawless base.",
        features: ["Full paint decontamination", "Single-stage machine polish", "Ceramic coating application", "Wheel coating", "Glass coating", "Interior protection"],
      },
      {
        name: "Ultimate New Car",
        price: 2400,
        description: "Complete new car protection combining PPF on high-impact areas with full ceramic coating and interior protection.",
        features: ["Full front PPF", "Full body ceramic coating", "Wheel & caliper coating", "Glass coating", "Interior leather protection", "Maintenance kit included"],
      },
    ],
  },
  {
    slug: "paint-protection-film",
    title: "Paint Protection Film",
    shortDesc: "Protect your car's paint with XPEL PPF — an invisible, self-healing barrier against chips, scratches, and stains.",
    longDesc: "As an official XPEL installation centre, we offer the highest quality paint protection film available. XPEL's self-healing technology eliminates fine scratches and swirl marks when exposed to heat.",
    icon: "Shield",
    tiers: [
      { name: "Essential Front", price: 839, description: "Front bumper, partial bonnet and wings, side mirrors.", features: ["Front bumper", "Partial bonnet", "Partial wings", "Side mirrors"] },
      { name: "Full Front", price: 1580, description: "Full bonnet and wings, front bumper, headlights and side mirrors.", features: ["Full bonnet & wings", "Front bumper", "Headlights", "Side mirrors"] },
      { name: "Front + Performance Pack", price: 2160, description: "Full front plus A-pillars, partial roof, sideskirts and lower rear arches.", features: ["Full front coverage", "A-pillars", "Partial roof", "Sideskirts", "Lower rear arches"] },
      { name: "Full Coverage", price: 4560, description: "Every exposed painted surface.", features: ["Every painted surface", "Complete protection", "Self-healing technology", "10-year warranty"] },
    ],
  },
  {
    slug: "dry-ice-blasting",
    title: "Dry-Ice Blasting",
    shortDesc: "Restore your car with dry ice blasting — gentle, chemical-free cleaning that restores and preserves without damage.",
    longDesc: "Dry ice blasting is the ultimate cleaning method for engine bays, suspension components, and undercarriages. The process uses frozen CO2 pellets that sublimate on impact, leaving zero residue and preserving original materials.",
    icon: "Snowflake",
    tiers: [
      {
        name: "Engine Bay",
        price: 350,
        description: "Full engine bay dry ice cleaning with protective coating application.",
        features: ["Engine bay cleaning", "Component degreasing", "Protective coating", "Dressing applied"],
      },
      {
        name: "Full Undercarriage",
        price: 950,
        description: "Complete undercarriage, suspension, and engine bay dry ice cleaning with anti-corrosion treatment.",
        features: ["Full undercarriage", "Suspension cleaning", "Engine bay", "Anti-corrosion treatment", "Protective coatings"],
      },
    ],
  },
  {
    slug: "ceramic-coating",
    title: "Ceramic Coating",
    shortDesc: "Long-lasting protection with a deep, glossy finish that repels water, dirt, and UV damage.",
    longDesc: "Our professional-grade ceramic coatings create a permanent bond with your vehicle's paintwork, providing years of protection against environmental contaminants, UV rays, and minor scratches while delivering an incredible depth of gloss.",
    icon: "Gem",
    tiers: [
      {
        name: "Single Layer",
        price: 600,
        description: "Professional ceramic coating with single-stage polish preparation and single layer application.",
        features: ["Paint decontamination", "Single-stage polish", "1 layer ceramic coating", "Wheel faces coated", "2-year durability"],
      },
      {
        name: "Multi Layer",
        price: 1200,
        description: "Premium multi-layer ceramic coating with paint correction and complete vehicle coverage.",
        features: ["Full paint correction", "3 layers ceramic coating", "Wheels & calipers coated", "Glass coating", "Trim coating", "5-year durability"],
      },
    ],
  },
];

export const ppfZones = [
  { id: "bonnet", label: "Bonnet", price: 450 },
  { id: "front-bumper", label: "Front Bumper", price: 380 },
  { id: "rear-bumper", label: "Rear Bumper", price: 350 },
  { id: "left-wing", label: "Left Wing", price: 280 },
  { id: "right-wing", label: "Right Wing", price: 280 },
  { id: "left-door-front", label: "Left Front Door", price: 320 },
  { id: "left-door-rear", label: "Left Rear Door", price: 320 },
  { id: "right-door-front", label: "Right Front Door", price: 320 },
  { id: "right-door-rear", label: "Right Rear Door", price: 320 },
  { id: "roof", label: "Roof", price: 400 },
  { id: "left-sill", label: "Left Sill", price: 180 },
  { id: "right-sill", label: "Right Sill", price: 180 },
  { id: "headlights", label: "Headlights", price: 150 },
  { id: "mirrors", label: "Side Mirrors", price: 100 },
  { id: "a-pillars", label: "A-Pillars", price: 120 },
  { id: "boot", label: "Boot/Trunk Lid", price: 380 },
];

export const ppfFilmTypes = [
  { id: "ultimate-plus", name: "XPEL Ultimate Plus", description: "Virtually invisible, self-healing urethane layer", priceMultiplier: 1.0 },
  { id: "stealth-satin", name: "XPEL Stealth Satin", description: "Matte/satin finish with self-healing technology", priceMultiplier: 1.15 },
  { id: "ultimate-black", name: "XPEL Ultimate Plus Black", description: "Gloss black finish for accent panels", priceMultiplier: 1.1 },
  { id: "colour", name: "XPEL Colour PPF", description: "Colour change and paint protection in one", priceMultiplier: 1.25 },
];

export const carModels = [
  { id: "porsche-911", name: "Porsche 911", image: "🏎️" },
  { id: "mclaren-720s", name: "McLaren 720S", image: "🏎️" },
  { id: "ferrari-f40", name: "Ferrari F40", image: "🏎️" },
  { id: "range-rover", name: "Range Rover", image: "🚙" },
  { id: "bmw-m4", name: "BMW M4", image: "🚗" },
];

export const projects = [
  {
    id: "1",
    title: "Ferrari F40 — Full Signature Restoration",
    car: "Ferrari F40",
    service: "Konings Signature",
    hours: 120,
    description: "A two-week intensive restoration of this iconic supercar. Complete paint correction, wet sanding, dry ice blasting of undercarriage, and multi-layer ceramic coating.",
    products: ["Rupes polisher", "Meguiar's M105", "Gyeon Q2 Mohs+", "XPEL Ultimate Plus"],
    tags: ["Paint Correction", "Ceramic Coating", "Classic"],
    beforeColor: "#8B4513",
    afterColor: "#DC143C",
  },
  {
    id: "2",
    title: "Porsche 911 GT3 RS — Full PPF Coverage",
    car: "Porsche 911 GT3 RS",
    service: "Full Coverage PPF",
    hours: 45,
    description: "Complete XPEL Ultimate Plus coverage on this Guards Red GT3 RS. Every painted panel protected with self-healing film.",
    products: ["XPEL Ultimate Plus", "XPEL DAP software", "Gyeon Q2 Skin"],
    tags: ["PPF", "New Car Protection"],
    beforeColor: "#666666",
    afterColor: "#FF0000",
  },
  {
    id: "3",
    title: "Rolls-Royce Phantom — New Car Protection",
    car: "Rolls-Royce Phantom",
    service: "Ultimate New Car",
    hours: 60,
    description: "Brand new Phantom VIII received full front PPF, multi-layer ceramic coating, wheel and caliper protection, and full interior leather treatment.",
    products: ["XPEL Ultimate Plus", "Gyeon Q2 Mohs+", "Gyeon LeatherShield"],
    tags: ["New Car Protection", "PPF", "Ceramic Coating"],
    beforeColor: "#1a1a2e",
    afterColor: "#0f0f23",
  },
  {
    id: "4",
    title: "McLaren 720S — Elite Paint Correction",
    car: "McLaren 720S",
    service: "Konings Elite Standard",
    hours: 22,
    description: "Stunning Papaya Spark 720S brought in with swirl marks and light scratches. Full 55-stage deep clean followed by precision machine polishing achieving 99% correction.",
    products: ["Rupes LHR21", "Meguiar's M105/M205", "Gyeon Q2 Pure EVO"],
    tags: ["Paint Correction", "Detailing"],
    beforeColor: "#CC5500",
    afterColor: "#FF6600",
  },
  {
    id: "5",
    title: "Mercedes 190E Cosworth — 100-Hour Detail",
    car: "Mercedes 190E 2.5-16V",
    service: "Konings Signature",
    hours: 100,
    description: "Classic Mercedes receiving the full Signature treatment. Extensive wet sanding to remove decades of swirl marks, leather restoration, and engine bay dry ice cleaning.",
    products: ["3M Trizact", "Menzerna HC400", "Gyeon Q2 Mohs+", "Colourlock leather care"],
    tags: ["Classic", "Paint Correction", "Interior"],
    beforeColor: "#2F4F4F",
    afterColor: "#4682B4",
  },
  {
    id: "6",
    title: "Lamborghini Huracán Sterrato — PPF & Ceramic",
    car: "Lamborghini Huracán Sterrato",
    service: "Full Coverage PPF + Ceramic",
    hours: 55,
    description: "This striking Sterrato received full XPEL Stealth Satin PPF for a unique matte finish, topped with ceramic coating for ultimate protection.",
    products: ["XPEL Stealth", "Gyeon Q2 Mohs+", "Gyeon Q2 Rim"],
    tags: ["PPF", "Ceramic Coating", "Supercar"],
    beforeColor: "#90EE90",
    afterColor: "#32CD32",
  },
  {
    id: "7",
    title: "Porsche Carrera GT — Museum Preparation",
    car: "Porsche Carrera GT",
    service: "Konings Signature",
    hours: 140,
    description: "Prepared for the National Motor Museum at Beaulieu. Full cosmetic restoration including paint correction, wet sanding, undercarriage dry ice blasting, and display-ready finish.",
    products: ["Festool SHINEX", "Menzerna HC1000", "Swissvax Crystal Rock"],
    tags: ["Classic", "Museum", "Paint Correction"],
    beforeColor: "#C0C0C0",
    afterColor: "#D4AF37",
  },
  {
    id: "8",
    title: "Ferrari 599 GTO — Maintenance Detail",
    car: "Ferrari 599 GTO",
    service: "Maintenance Detail",
    hours: 8,
    description: "Regular maintenance detail for a returning client. Decontamination wash, light polish, ceramic coating top-up, and interior refresh.",
    products: ["Gyeon Q2 Cure", "Gyeon Q2 Wet Coat", "Auto Finesse products"],
    tags: ["Maintenance", "Detailing"],
    beforeColor: "#8B0000",
    afterColor: "#FF0000",
  },
];

export const testimonials = [
  {
    name: "David Fisher",
    text: "I recently entrusted Konings Detailing with two of my cars — a Porsche 911 and a Toyota Yaris GR — for PPF installation, and the results have been nothing short of outstanding. What truly sets them apart is their approach. There's no sales pitch, just genuine, expert advice.",
    rating: 5,
    car: "Porsche 911 & Toyota GR Yaris",
  },
  {
    name: "Hugh Redgewell",
    text: "Mike and his team did a fantastic job on my recently acquired Alpine. I thought it was in excellent condition before the prep and ceramic coating but after... it's just stunning, with a highly polished look and feel.",
    rating: 5,
    car: "Alpine A110",
  },
  {
    name: "Darren Street",
    text: "Amazing eye opening experience into the world of car preservation. The team at Konings are refreshingly, knowledgeable, caring and expertly professional in what they do. Konings know how to do it properly.",
    rating: 5,
    car: "Porsche 911",
  },
  {
    name: "Ed Weatherby",
    text: "I am delighted with the work carried out on my A110 by Mike and his team at Konings. The standard of work is exceptional. The PPF is as good as invisible. Excellent work around all the panel edges.",
    rating: 5,
    car: "Alpine A110",
  },
  {
    name: "John Bamber",
    text: "Mike and his team have worked wonders. At 18 years the Cayman had been cared for but not cosseted and needed a refresh. The results were stunning and the car looked fantastic easily matching the new cars in the studio.",
    rating: 5,
    car: "Porsche Cayman",
  },
  {
    name: "Doug Hill",
    title: "Manager — Beaulieu Motor Museum",
    text: "We thought the car was almost immaculate until Könings Detailing started to apply their skills. The results were staggering and only once witnessed could the transformation be believed. Polite, efficient and top quality.",
    rating: 5,
    car: "Porsche Carrera GT",
  },
  {
    name: "Philip Offord",
    text: "Superb service and attention to detail. Mike and his team have done a fantastic job restoring my car to tip top condition. A truly amazing transformation. They have gone above and beyond what I had expected.",
    rating: 5,
    car: "Classic Restoration",
  },
  {
    name: "Rupert Thomas",
    text: "Brilliant, brilliant work by Mike and the team. Faultless, skilful and with exemplary customer service.",
    rating: 5,
    car: "Supercar Detailing",
  },
];

export const trackerStages = [
  { id: "received", label: "Received", icon: "Car" },
  { id: "assessment", label: "Assessment", icon: "ClipboardCheck" },
  { id: "preparation", label: "Preparation", icon: "Wrench" },
  { id: "in-progress", label: "In Progress", icon: "Cog" },
  { id: "quality-check", label: "Quality Check", icon: "Search" },
  { id: "ready", label: "Ready", icon: "CheckCircle" },
];

export const demoTrackerData = {
  vehicle: "Porsche 911 GT3 RS (2024)",
  colour: "Guards Red",
  registration: "KN24 PPF",
  service: "Full Coverage PPF + Ceramic Coating",
  estimatedCompletion: "April 22, 2026",
  currentStage: "in-progress",
  updates: [
    { stage: "received", date: "April 14, 2026", note: "Vehicle received and checked in. All existing damage documented with photography.", photos: 4 },
    { stage: "assessment", date: "April 14, 2026", note: "Full paint depth readings taken. Minor swirl marks identified on bonnet and doors. Paint in excellent overall condition.", photos: 8 },
    { stage: "preparation", date: "April 15, 2026", note: "Full decontamination wash completed. Clay bar treatment. Iron fallout removal. Paint now perfectly clean for PPF application.", photos: 6 },
    { stage: "in-progress", date: "April 16, 2026", note: "PPF installation underway. Front end completed — bonnet, bumper, wings, headlights, mirrors. Continuing with doors and rear panels tomorrow.", photos: 12 },
  ],
  messages: [
    { from: "konings", text: "Hi! Your GT3 RS is looking fantastic. We've completed the front end PPF. Just wanted to check — would you like us to add the windscreen PPF as well? It's £180 extra.", time: "April 16, 4:30 PM" },
    { from: "client", text: "Yes please, let's do the windscreen too. How is it looking?", time: "April 16, 5:15 PM" },
    { from: "konings", text: "Brilliant — we'll add that tomorrow. It's looking incredible, the film is completely invisible. Will send more photos shortly!", time: "April 16, 5:20 PM" },
  ],
};

export const stats = [
  { label: "Cars Detailed", value: 2500, suffix: "+" },
  { label: "Years Experience", value: 20, suffix: "+" },
  { label: "5-Star Reviews", value: 86, suffix: "" },
  { label: "Hours of Polishing", value: 45000, suffix: "+" },
];

export const chatResponses: Record<string, string> = {
  greeting: "Welcome to Könings Detailing. I'm here to help you find the perfect service for your vehicle. What brings you to us today?",
  new_car: "Congratulations on your new vehicle! For a new car, I'd recommend our **New Car Protection** package. It includes ceramic coating and PPF application to keep your car looking factory-fresh. Prices start from £750 for ceramic coating alone, or £2,400 for our Ultimate package with PPF. Would you like to know more about either option?",
  paint_issues: "For paint correction, we offer two exclusive levels:\n\n• **Konings Elite Standard** (from £900) — 15-25 hours of precision polishing, up to 99% correction. Perfect for most vehicles.\n\n• **Konings Signature** (from £1,900) — 100+ hours of meticulous work for absolute perfection. Ideal for collectors and show cars.\n\nBoth include our 55-stage deep clean as standard. Which sounds right for your needs?",
  ppf: "Great choice! As an official **XPEL installation centre**, we offer the very best in PPF:\n\n• **Essential Front** from £839\n• **Full Front** from £1,580\n• **Front + Performance Pack** from £2,160\n• **Full Coverage** from £4,560\n\nWe offer XPEL Ultimate Plus, Stealth Satin, and Black PPF. Would you like to try our interactive configurator to see exactly which panels to protect?",
  classic: "We have extensive experience with classic and historic vehicles. Mike worked with the **National Motor Museum at Beaulieu** — the only detailer to do so. Our Signature service is ideal for classics, including leather restoration and dry ice cleaning. What classic car do you have?",
  pricing: "Our pricing depends on the vehicle and service:\n\n• **Detailing & Paint Correction**: from £900\n• **New Car Protection**: from £750\n• **PPF (XPEL)**: from £839\n• **Dry-Ice Blasting**: from £350\n• **Ceramic Coating**: from £600\n\nWe always recommend visiting our Winchester facility for a free assessment. Shall I help you book?",
  booking: "I'd love to help you book! You can use our **Smart Booking** page to select your service, enter vehicle details, and pick a preferred date. Or call us on **07854 719 945** — we're open Monday to Friday, 8am to 4pm. Weekends by appointment.",
  fallback: "That's a great question! For the most accurate advice, I'd recommend speaking directly with Mike and the team. You can reach us on **07854 719 945** or **info@konings.co.uk**. Would you like help with anything else about our services?",
};

export const bookingAddons = [
  { id: "ceramic-wheels", name: "Ceramic Wheel Coating", price: 150 },
  { id: "ceramic-calipers", name: "Ceramic Caliper Coating", price: 120 },
  { id: "glass-coating", name: "Glass Coating (all windows)", price: 180 },
  { id: "interior-ppf", name: "Interior PPF (console & trim)", price: 250 },
  { id: "windscreen-ppf", name: "Windscreen PPF", price: 180 },
  { id: "leather-treatment", name: "Leather Protection Treatment", price: 200 },
  { id: "engine-detail", name: "Engine Bay Detail", price: 150 },
  { id: "maintenance-kit", name: "Maintenance Kit", price: 95 },
];
