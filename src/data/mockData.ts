export type Model = {
  id: string
  name: string
  year: number
  heroImage: string
  gallery: string[]
  technical: string
  history: string
  anecdotes: string[]
}

export type Brand = {
  id: string
  name: string
  country: string
  regionLabel: string
  location: {
    lat: number
    lng: number
  }
  logo: string
  description: string
  timelineStart: number
  timelineEnd: number
  models: Model[]
}

export const brands: Brand[] = [
  {
    id: 'bmw',
    name: 'BMW',
    country: 'Germany',
    regionLabel: 'Munich, Germany',
    location: { lat: 48.1351, lng: 11.582 },
    logo: 'https://logo.clearbit.com/bmw.com',
    description: 'Precision engineering and sporty luxury from Bavaria.',
    timelineStart: 1960,
    timelineEnd: 2025,
    models: [
      {
        id: 'bmw-2002',
        name: 'BMW 2002 Turbo',
        year: 1973,
        heroImage:
          'https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=1600&q=80',
        gallery: [
          'https://images.unsplash.com/photo-1493238792000-8113da705763?auto=format&fit=crop&w=800&q=80',
          'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=800&q=80',
          'https://images.unsplash.com/photo-1427751840561-9852520f8ce8?auto=format&fit=crop&w=800&q=80',
        ],
        technical:
          '2.0L turbocharged inline-four, rear-wheel drive, 170 hp, 4-speed manual gearbox.',
        history:
          'The 2002 Turbo paved the way for BMW’s modern sporty DNA and helped democratize turbocharging in Europe.',
        anecdotes: [
          'First turbocharged production model from BMW.',
          'The reversed “Turbo” script on the front spoiler was often removed to avoid provoking other drivers.',
        ],
      },
      {
        id: 'bmw-m3-e30',
        name: 'BMW M3 E30',
        year: 1986,
        heroImage:
          'https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=1600&q=80',
        gallery: [
          'https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=800&q=80',
          'https://images.unsplash.com/photo-1511910849309-0cc02e42e42e?auto=format&fit=crop&w=800&q=80',
        ],
        technical:
          'Naturally aspirated 2.3L S14, 200 hp, 5-speed manual gearbox, widened bodywork.',
        history:
          'Developed for Group A homologation in DTM, the E30 M3 became the benchmark for sporty sedans.',
        anecdotes: [
          'DTM champion as early as its first full season.',
          'The rear wing is essential to reach its 235 km/h top speed safely.',
        ],
      },
      {
        id: 'bmw-i8',
        name: 'BMW i8',
        year: 2014,
        heroImage:
          'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1600&q=80',
        gallery: [
          'https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=800&q=80',
          'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=800&q=80',
        ],
        technical:
          'Plug-in hybrid with turbocharged 3-cylinder engine + electric motor, intelligent all-wheel drive.',
        history:
          'The i8 symbolizes BMW’s move toward high-end electrification with a futuristic silhouette.',
        anecdotes: [
          'Carbon structure and butterfly doors help keep weight in check.',
          'Blue light signatures highlight the BMW i sub-brand.',
        ],
      },
    ],
  },
  {
    id: 'toyota',
    name: 'Toyota',
    country: 'Japan',
    regionLabel: 'Toyota City, Japan',
    location: { lat: 35.0829, lng: 137.1569 },
    logo: 'https://logo.clearbit.com/toyota-global.com',
    description: 'Accessible innovation and legendary reliability.',
    timelineStart: 1965,
    timelineEnd: 2025,
    models: [
      {
        id: 'toyota-2000gt',
        name: 'Toyota 2000GT',
        year: 1967,
        heroImage:
          'https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=1600&q=80',
        gallery: [
          'https://images.unsplash.com/photo-1471444928139-48c5bf5173f8?auto=format&fit=crop&w=800&q=80',
        ],
        technical:
          '2.0L inline-six, 150 hp, lightweight aluminium body co-developed with Yamaha.',
        history:
          'Often considered the first Japanese supercar, revealed to the world through the James Bond film “You Only Live Twice”.',
        anecdotes: [
          'Only 351 units were produced.',
          'Two targa-top examples were built specifically for Hollywood.',
        ],
      },
      {
        id: 'toyota-supra-a80',
        name: 'Toyota Supra A80',
        year: 1993,
        heroImage:
          'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1600&q=80',
        gallery: [
          'https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=800&q=80',
          'https://images.unsplash.com/photo-1441148345475-03a2e82f9719?auto=format&fit=crop&w=800&q=80',
        ],
        technical:
          '3.0L 2JZ-GTE twin-turbo, 330 hp (stock), 6-speed Getrag V160 manual gearbox.',
        history:
          'A JDM icon, popularized by drifting, tuning culture and the Fast & Furious franchise.',
        anecdotes: [
          'The 2JZ can handle more than 1000 hp with heavy-duty tuning.',
          'Sold in Europe as a twin-turbo model rated at 326 hp.',
        ],
      },
    ],
  },
  {
    id: 'ferrari',
    name: 'Ferrari',
    country: 'Italy',
    regionLabel: 'Maranello, Italy',
    location: { lat: 44.5361, lng: 10.8642 },
    logo: 'https://logo.clearbit.com/ferrari.com',
    description: 'Italian passion and extreme performance.',
    timelineStart: 1950,
    timelineEnd: 2025,
    models: [
      {
        id: 'ferrari-250-gto',
        name: 'Ferrari 250 GTO',
        year: 1962,
        heroImage:
          'https://images.unsplash.com/photo-1462396881884-de2c07cb95ed?auto=format&fit=crop&w=1600&q=80',
        gallery: [
          'https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=800&q=80',
        ],
        technical:
          '3.0L Colombo V12, 300 hp, 5-speed gearbox, ultra-light Scaglietti bodywork.',
        history:
          'A GT racing icon, victorious at the Tour de France Automobile and other major events.',
        anecdotes: [
          'Only 36 authenticated examples exist.',
          'Has held world records at auction for a collector car.',
        ],
      },
      {
        id: 'ferrari-sf90',
        name: 'Ferrari SF90 Stradale',
        year: 2019,
        heroImage:
          'https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=1600&q=80',
        gallery: [
          'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=800&q=80',
          'https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=800&q=80',
        ],
        technical:
          '4.0L twin-turbo V8 plus three electric motors, 1000 hp combined, advanced torque vectoring.',
        history:
          'The first plug-in hybrid supercar from Ferrari produced in significant numbers.',
        anecdotes: [
          'eDrive mode offers up to 25 km of fully electric driving.',
          'Its name celebrates 90 years of the Scuderia Ferrari.',
        ],
      },
    ],
  },
  {
    id: 'ford',
    name: 'Ford',
    country: 'USA',
    regionLabel: 'Dearborn, USA',
    location: { lat: 42.3223, lng: -83.1763 },
    logo: 'https://logo.clearbit.com/ford.com',
    description: 'Everyday usability and blue-collar performance icons.',
    timelineStart: 1950,
    timelineEnd: 2025,
    models: [],
  },
  {
    id: 'chevrolet',
    name: 'Chevrolet',
    country: 'USA',
    regionLabel: 'Detroit, USA',
    location: { lat: 42.3314, lng: -83.0458 },
    logo: 'https://logo.clearbit.com/chevrolet.com',
    description: 'American muscle, trucks and attainable sports cars.',
    timelineStart: 1950,
    timelineEnd: 2025,
    models: [],
  },
  {
    id: 'porsche',
    name: 'Porsche',
    country: 'Germany',
    regionLabel: 'Stuttgart, Germany',
    location: { lat: 48.7758, lng: 9.1829 },
    logo: 'https://logo.clearbit.com/porsche.com',
    description: 'Rear-engined legends and precision-engineered sports cars.',
    timelineStart: 1950,
    timelineEnd: 2025,
    models: [],
  },
  {
    id: 'mercedes',
    name: 'Mercedes-Benz',
    country: 'Germany',
    regionLabel: 'Stuttgart, Germany',
    location: { lat: 48.7758, lng: 9.1829 },
    logo: 'https://logo.clearbit.com/mercedes-benz.com',
    description: 'Luxury comfort blended with cutting-edge technology.',
    timelineStart: 1950,
    timelineEnd: 2025,
    models: [],
  },
  {
    id: 'nissan',
    name: 'Nissan',
    country: 'Japan',
    regionLabel: 'Yokohama, Japan',
    location: { lat: 35.4437, lng: 139.638 },
    logo: 'https://logo.clearbit.com/nissan-global.com',
    description: 'From GT-R icons to practical electrified city cars.',
    timelineStart: 1950,
    timelineEnd: 2025,
    models: [],
  },
  {
    id: 'opel',
    name: 'Opel',
    country: 'Germany',
    regionLabel: 'Rüsselsheim, Germany',
    location: { lat: 49.9896, lng: 8.4156 },
    logo: 'https://logo.clearbit.com/opel.com',
    description: 'European everyday hatchbacks and compact commuters.',
    timelineStart: 1950,
    timelineEnd: 2025,
    models: [],
  },
  {
    id: 'skoda',
    name: 'Škoda',
    country: 'Czech Republic',
    regionLabel: 'Mladá Boleslav, Czech Republic',
    location: { lat: 50.4114, lng: 14.9035 },
    logo: 'https://logo.clearbit.com/skoda-auto.com',
    description: 'Simply clever family cars with huge usable space.',
    timelineStart: 1950,
    timelineEnd: 2025,
    models: [],
  },
  {
    id: 'tesla',
    name: 'Tesla',
    country: 'USA',
    regionLabel: 'Austin, USA',
    location: { lat: 30.2672, lng: -97.7431 },
    logo: 'https://logo.clearbit.com/tesla.com',
    description: 'Electric-only lineup and over-the-air software culture.',
    timelineStart: 2003,
    timelineEnd: 2025,
    models: [],
  },
  {
    id: 'lamborghini',
    name: 'Lamborghini',
    country: 'Italy',
    regionLabel: 'Sant’Agata Bolognese, Italy',
    location: { lat: 44.6528, lng: 11.1342 },
    logo: 'https://logo.clearbit.com/lamborghini.com',
    description: 'V12 drama, sharp angles and outrageous supercars.',
    timelineStart: 1963,
    timelineEnd: 2025,
    models: [],
  },
  {
    id: 'range-rover',
    name: 'Range Rover',
    country: 'United Kingdom',
    regionLabel: 'Solihull, United Kingdom',
    location: { lat: 52.4128, lng: -1.7782 },
    logo: 'https://logo.clearbit.com/landrover.com',
    description: 'Luxury SUVs designed for both city lights and mud.',
    timelineStart: 1970,
    timelineEnd: 2025,
    models: [],
  },
  {
    id: 'dodge',
    name: 'Dodge',
    country: 'USA',
    regionLabel: 'Auburn Hills, USA',
    location: { lat: 42.6584, lng: -83.1498 },
    logo: 'https://logo.clearbit.com/dodge.com',
    description: 'Loud, straight-line muscle and characterful V8s.',
    timelineStart: 1950,
    timelineEnd: 2025,
    models: [],
  },
  {
    id: 'aston-martin',
    name: 'Aston Martin',
    country: 'United Kingdom',
    regionLabel: 'Gaydon, United Kingdom',
    location: { lat: 52.183, lng: -1.5476 },
    logo: 'https://logo.clearbit.com/astonmartin.com',
    description: 'Hand-built GTs mixing British elegance and racing heritage.',
    timelineStart: 1950,
    timelineEnd: 2025,
    models: [],
  },
  {
    id: 'bentley',
    name: 'Bentley',
    country: 'United Kingdom',
    regionLabel: 'Crewe, United Kingdom',
    location: { lat: 53.1004, lng: -2.4438 },
    logo: 'https://logo.clearbit.com/bentleymotors.com',
    description: 'Ultra-luxury grand tourers with huge torque.',
    timelineStart: 1950,
    timelineEnd: 2025,
    models: [],
  },
  {
    id: 'rolls-royce',
    name: 'Rolls-Royce',
    country: 'United Kingdom',
    regionLabel: 'Goodwood, United Kingdom',
    location: { lat: 50.8617, lng: -0.7594 },
    logo: 'https://logo.clearbit.com/rolls-roycemotorcars.com',
    description: 'The pinnacle of quiet, bespoke automotive luxury.',
    timelineStart: 1950,
    timelineEnd: 2025,
    models: [],
  },
  {
    id: 'cadillac',
    name: 'Cadillac',
    country: 'USA',
    regionLabel: 'Detroit, USA',
    location: { lat: 42.3314, lng: -83.0458 },
    logo: 'https://logo.clearbit.com/cadillac.com',
    description: 'Sharp-edged American luxury sedans and SUVs.',
    timelineStart: 1950,
    timelineEnd: 2025,
    models: [],
  },
  {
    id: 'honda',
    name: 'Honda',
    country: 'Japan',
    regionLabel: 'Tokyo, Japan',
    location: { lat: 35.6762, lng: 139.6503 },
    logo: 'https://logo.clearbit.com/honda.com',
    description: 'VTEC screamers, Type R hatchbacks and efficient hybrids.',
    timelineStart: 1960,
    timelineEnd: 2025,
    models: [],
  },
  {
    id: 'subaru',
    name: 'Subaru',
    country: 'Japan',
    regionLabel: 'Tokyo, Japan',
    location: { lat: 35.6895, lng: 139.6917 },
    logo: 'https://logo.clearbit.com/subaru-global.com',
    description: 'All-wheel-drive icons loved on rally stages and in the snow.',
    timelineStart: 1960,
    timelineEnd: 2025,
    models: [],
  },
  {
    id: 'fiat',
    name: 'Fiat',
    country: 'Italy',
    regionLabel: 'Turin, Italy',
    location: { lat: 45.0703, lng: 7.6869 },
    logo: 'https://logo.clearbit.com/fiat.com',
    description: 'Compact city cars and cheeky Italian runabouts.',
    timelineStart: 1950,
    timelineEnd: 2025,
    models: [],
  },
  {
    id: 'mitsubishi',
    name: 'Mitsubishi',
    country: 'Japan',
    regionLabel: 'Tokyo, Japan',
    location: { lat: 35.7061, lng: 139.7671 },
    logo: 'https://logo.clearbit.com/mitsubishi-motors.com',
    description: 'Rally-bred Lancer Evos and robust SUVs.',
    timelineStart: 1960,
    timelineEnd: 2025,
    models: [],
  },
]

export const getBrandById = (id: string) => brands.find((brand) => brand.id === id)

export const getModelById = (brandId: string, modelId: string) => {
  const brand = getBrandById(brandId)
  return brand?.models.find((model) => model.id === modelId)
}

