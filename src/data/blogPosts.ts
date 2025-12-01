export type BlogPost = {
  id: string
  title: string
  excerpt: string
  readTime: string
  image: string
  content: string[]
}

export const blogPosts: BlogPost[] = [
  {
    id: 'toyota-electric-wave',
    title: 'Toyota and the silent electric wave',
    excerpt:
      'From hybrids to solid-state batteries, how Toyota prepares its next-gen EV lineup without losing reliability.',
    readTime: '4 min read',
    image:
      'https://scene7.toyota.eu/is/image/toyotaeurope/BZ0010_25_WEB_crop:Large-Landscape?ts=0&resMode=sharp2&op_usm=1.75,0.3,2,0&fmt=png-alpha',
    content: [
      'Toyota spent two decades refining hybrid know-how before accelerating its electric roadmap. Engineers in Toyota City now combine lightweight platforms with solid-state prototypes that charge in minutes.',
      'The approach stays pragmatic: frugal aerodynamics, modular battery packs, and interiors focused on calm, purposeful driving. Popular nameplates such as the Supra and Crown inspire the look of upcoming EV crossovers.',
      'This silent electric wave should reach showrooms before 2027, with the aim to deliver EVs that feel familiar yet distinctly Toyota—precise, durable and easy to trust on long tours.',
    ],
  },
  {
    id: 'bmw-heritage-reloaded',
    title: 'BMW heritage reloaded with battery tech',
    excerpt:
      'The Neue Klasse concept revives shark-nose charisma while hiding the most efficient BMW powertrain ever.',
    readTime: '3 min read',
    image:
      'https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1200&q=80',
    content: [
      'BMW’s Neue Klasse program takes inspiration from the 70s sedans but translates it into a glassy cabin, angular bodywork, and the latest cylindrical battery cells.',
      'Designers kept the driver-focused spirit: tactile controls, low cowl, and software widgets that echo classic gauge clusters. Underneath, lightweight composites and an 800V architecture promise quicker charging than today’s i4.',
      'Production models derived from Neue Klasse will start in 2025, anchoring BMW’s shift toward sculpted EVs that still feel like proper Bavarian machines.',
    ],
  },
  {
    id: 'ferrari-digital-coachwork',
    title: 'Ferrari’s digital coachwork experiment',
    excerpt:
      'Maranello artisans now mix clay modeling with real-time renders to shape its next limited-run hypercar.',
    readTime: '5 min read',
    image:
      'https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=1200&q=80',
    content: [
      'Ferrari’s styling center adopted collaborative VR caves so designers can sculpt volumes at full scale while wind specialists tweak aero in real time.',
      'The process keeps the warmth of hand-shaped surfaces—small teams still spend nights refining the clay buck—but surfaces are scanned instantly and iterated in Unreal Engine.',
      'The result is a hypercar that blends the sensuality of classic coachwork with active aero seams and dramatic lighting signatures, signaling the next era of Ferrari exclusives.',
    ],
  },
]

