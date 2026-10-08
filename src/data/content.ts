export interface ServiceItem {
  icon: string;
  title: string;
  desc: string;
}

export interface ConsultingTeam {
  title: string;
  badge: string;
  desc: string;
  image: string;
}

export interface TestimonialItem {
  quote: string;
  author: string;
  role: string;
  company: string;
  image: string;
}

export const CODEKINGS_CONTENT = {
  meta: {
    title: 'CodeKings · Freelance Android Developer · Belgium',
    description: 'Freelance Android developer based in Belgium. Native Kotlin development, secure banking-grade code, and user-friendly mobile experiences.',
    domain: 'codekings.be',
  },
  nav: {
    about: 'About',
    services: 'Services',
    tech: 'Tech Stack',
    consulting: 'Consulting',
    clients: 'Clients',
    contact: 'Contact',
  },
  hero: {
    label: 'Available for freelance work',
    h1: 'I craft Android apps that people love to use.',
    p: 'Freelance Android developer with over a decade of experience building polished, secure, and maintainable mobile applications for startups, banks, and established brands.',
    ctaPrimary: 'Get in touch',
    ctaOutline: 'Learn more',
  },
  stats: {
    yearsNumber: '10+',
    yearsLabel: 'Years of Experience',
    langNumber: 'Kotlin',
    langLabel: 'Language of Choice',
    ratingNumber: '5★',
    ratingLabel: 'Client Satisfaction',
  },
  about: {
    label: 'About',
    title: 'Turning ideas into native Android experiences.',
    p1: 'I’m Bram, a freelance Android developer based in Belgium, working under the name CodeKings. Although I started years ago with a great interest in web development, the rise of smartphones brought a real passion for Android. For over a decade I’ve been designing and developing native Android applications — from early-stage prototypes to mission-critical banking apps.',
    p2: 'Even in my spare time, I do development and work outside my comfort zone with Android TV, Google Home, Google Cast, and the occasional backend. I focus on writing user-friendly, secure, and maintainable code that scales effortlessly.',
    greenTitle: 'Green',
    greenText: 'Not only is the Android robot green, but I try to limit our ecological footprint too. One of the things I do is limit the impact of going to work: I compensate my CO² at Treecological, but also go to work by bike!',
  },
  services: {
    label: 'Services',
    title: 'What I can do for you',
    desc: 'End-to-end Android development, from initial architecture through Google Play release and beyond.',
    items: [
      {
        icon: '📱',
        title: 'Android App Development',
        desc: 'Native Kotlin applications built with Jetpack Compose and modern Android architecture guidelines.',
      },
      {
        icon: '🔒',
        title: 'Secure Banking-Grade Code',
        desc: 'Specialized experience securing banking apps (Belfius, ING) with strict cryptographic and security standards.',
      },
      {
        icon: '⚡',
        title: 'User Friendly UX',
        desc: 'We see good user experience as the ultimate achievement. Count on us for proactive advice on flows, animations, and screens.',
      },
      {
        icon: '🛠️',
        title: 'Maintainable Architecture',
        desc: 'Easy-to-read, reusable, and tested code. Daily engineering standards built for long-term scalability in large teams.',
      },
    ] as ServiceItem[],
  },
  tech: {
    label: 'Tech Stack',
    title: 'Technologies I work with',
    desc: 'A decade of Android means deep expertise across modern mobile ecosystems.',
    tags: [
      'Kotlin',
      'Jetpack Compose',
      'Android SDK',
      'Coroutines & Flow',
      'Android TV',
      'Google Cast',
      'Google Home',
      'Dagger / Hilt',
      'Room / SQLite',
      'Retrofit / Ktor',
      'Clean Architecture',
      'CI / CD',
      'Git',
      'Firebase',
      'Unit & UI Testing',
    ],
  },
  consulting: {
    label: 'Consulting',
    title: 'Teams I’ve worked with',
    desc: 'Embedded with product teams to ship features, secure architectures, and deliver award-winning apps.',
    items: [
      {
        title: 'Belfius Mobile',
        badge: 'Banking',
        desc: 'Contributed to one of Belgium’s most popular and award-winning banking apps, working on secure native Android features within a large-scale agile team.',
        image: './images/belfius_logo.png',
      },
      {
        title: 'MyING.be (ING)',
        badge: 'Banking',
        desc: 'Key player in the development team of the MyING.be app at ING, focusing on reliability, security, and mature delivery.',
        image: './images/ing_logo.jpg',
      },
    ] as ConsultingTeam[],
  },
  clients: {
    label: 'Clients',
    title: 'Client Testimonials',
    desc: 'Don’t take our word for it – here’s what project managers say:',
    items: [
      {
        quote: 'Bram was essential for our award winning app as he never ceases to improve (even in his spare time). Bram doesn’t stop at coding, but he will also challenge business and UX to bring the best solution towards the user. On top of that he is a teamplayer and possesses those soft skills that are so hard to find (communicative, pro active, empathic).',
        author: 'Tom Decroix',
        role: 'Project Manager',
        company: 'Belfius',
        image: './images/belfius_logo.png',
      },
      {
        quote: 'Bram was one of the key players in the development team of the MyING.be app at ING. He is a motivated and delivery focussed person, and is a real team player. Bram is a young professional with an amazing maturity!',
        author: 'Tom Dewaele',
        role: 'Project Manager',
        company: 'ING',
        image: './images/ing_logo.jpg',
      },
    ] as TestimonialItem[],
  },
  contact: {
    title: 'Let’s build something great.',
    desc: 'Have a project in mind or need an experienced freelance Android developer? I’d love to hear about it.',
    email: 'bram@codekings.be',
    linkedin: 'https://www.linkedin.com/in/bram-van-leeuwen/',
    treecological: 'https://www.treecological.be',
    github: 'https://github.com/bramvanleeuwen',
  },
  footer: '© 2026 CodeKings · Belgium',
};
