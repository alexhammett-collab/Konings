// High-quality Unsplash images for the prototype
// All images are free to use via Unsplash license

const unsplash = (id: string, w = 1920) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&q=80&auto=format&fit=crop`;

export const images = {
  // Hero backgrounds
  hero: unsplash("1544636331-e26879cd4d9b", 2400), // Dark McLaren P1 side shot
  heroAlt: unsplash("1503376780353-7e6692767b70", 2400), // Porsche 911 dark moody

  // Service section backgrounds
  detailing: unsplash("1618843479313-40f8afb4b4d8", 1280), // Car being detailed/polished
  ppf: unsplash("1580273916550-e323be2ae537", 1280), // Close-up car paint glossy
  ceramic: unsplash("1542362567-b07e54358753", 1280), // Reflective car surface
  dryIce: unsplash("1609521263047-f8f205293f24", 1280), // Engine bay clean
  newCar: unsplash("1616455579100-2ceaa4eb2d37", 1280), // Brand new car showroom

  // About section
  workshop: unsplash("1619405399517-d7fce0f13302", 1280), // Car workshop/studio
  mclaren: unsplash("1544636331-e26879cd4d9b", 1280), // Supercar dark

  // Gallery project images
  ferrariRed: unsplash("1583121274602-3e2820c69888", 1280), // Red Ferrari
  porsche911: unsplash("1614162692292-7ac56d7f7f1e", 1280), // Porsche 911
  rollsRoyce: unsplash("1563720223185-11003d516935", 1280), // Rolls-Royce luxury
  mclarenOrange: unsplash("1492144534655-ae79c964c9d7", 1280), // Dark dramatic car
  mercedesClassic: unsplash("1507136566006-cfc505b114fc", 1280), // Classic Mercedes
  lamborghini: unsplash("1544636331-e26879cd4d9b", 1280), // Lamborghini
  porscheGT: unsplash("1503376780353-7e6692767b70", 1280), // Porsche 911
  ferrariGTO: unsplash("1618843479313-40f8afb4b4d8", 1280), // Car detail shot

  // Configurator background
  carTopDown: unsplash("1492144534655-ae79c964c9d7", 1280), // Car dramatic angle

  // Contact / map area
  winchester: unsplash("1486406146926-c627a92ad1ab", 1280), // City/location

  // Texture overlays
  darkCar: unsplash("1492144534655-ae79c964c9d7", 2400), // Dark dramatic car
  carDetail: unsplash("1619405399517-d7fce0f13302", 1280), // Detail close-up

  // Additional atmospheric
  studioLight: unsplash("1492144534655-ae79c964c9d7", 1920), // Car dramatic lighting
  nightCar: unsplash("1504215680853-026ed2a45def", 1920), // Car at night dramatic
  supercarsRow: unsplash("1503376780353-7e6692767b70", 1920), // Porsche 911 dramatic
};

// Map project IDs to their images
export const projectImages: Record<string, { before: string; after: string }> = {
  "1": { before: images.ferrariRed, after: images.ferrariRed },
  "2": { before: images.porsche911, after: images.porsche911 },
  "3": { before: images.rollsRoyce, after: images.rollsRoyce },
  "4": { before: images.mclarenOrange, after: images.mclarenOrange },
  "5": { before: images.mercedesClassic, after: images.mercedesClassic },
  "6": { before: images.lamborghini, after: images.lamborghini },
  "7": { before: images.porscheGT, after: images.porscheGT },
  "8": { before: images.ferrariGTO, after: images.ferrariGTO },
};

// Service page hero images
export const serviceImages: Record<string, string> = {
  "detailing-paint-correction": images.detailing,
  "new-car-protection": images.newCar,
  "paint-protection-film": images.ppf,
  "dry-ice-blasting": images.dryIce,
  "ceramic-coating": images.ceramic,
};
