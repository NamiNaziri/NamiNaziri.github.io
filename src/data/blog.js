// Metadata for every post in public/blogs. `file` is resolved against
// the Vite base URL at render time (see BlogPost.jsx).

export const posts = [
  {
    slug: 'ends',
    title: 'ENDS — Building the 3Cs',
    date: '2025-03-30',
    file: 'blogs/2025-03-30-ends.md',
    excerpt: 'Locomotion, combat, and camera work behind the character systems in ENDS.',
    tags: ['Unreal Engine', 'Motion Matching', 'Combat'],
  },
  {
    slug: 'favorite-technical-talks',
    title: 'Favorite Technical Talks',
    date: '2023-07-05',
    file: 'blogs/2023-07-05-Favorite-Technical-talks.md',
    excerpt: 'GDC and conference talks on AI and gameplay systems worth watching.',
    tags: ['AI', 'GDC'],
  },
  {
    slug: 'unreal-prototypes',
    title: 'Unreal Prototypes',
    date: '2023-05-23',
    file: 'blogs/2023-05-23-Unreal-Prototypes.md',
    excerpt: 'A compilation of gameplay and AI prototypes built in Unreal Engine.',
    tags: ['Unreal Engine', 'AI', 'Prototyping'],
  },
  {
    slug: 'space-invaders',
    title: 'Space Invaders',
    date: '2023-04-29',
    file: 'blogs/2023-04-29-Space-Invaders.md',
    excerpt: 'Devlog for the Unreal Engine Programming Challenge entry.',
    tags: ['Unreal Engine', 'C++'],
  },
  {
    slug: 'dailydump-how-to-use-smartobjects',
    title: 'DailyDump — How to Use Smart Objects',
    date: '2023-03-29',
    file: 'blogs/2023-03-29-DailyDump-How-to-use-smartobjects.md',
    excerpt: 'A practical walkthrough for wiring up gameplay-ability-based smart objects.',
    tags: ['AI', 'Smart Objects'],
  },
  {
    slug: 'dual-quaternion-skinning',
    title: 'Dual Quaternion Skinning',
    date: '2023-03-22',
    file: 'blogs/2023-03-22-Dual-quaternion-skinning.md',
    excerpt: 'Implementing DQS to solve the candy-wrapper artifact of linear blend skinning.',
    tags: ['C++', 'OpenGL', 'Animation'],
  },
  {
    slug: 'inverse-kinematics',
    title: 'Jacobian Inverse Kinematics',
    date: '2023-03-14',
    file: 'blogs/2023-03-14-Inverse-Kinematics.md',
    excerpt: 'Deriving and implementing a Jacobian-based IK solver for a skeletal chain.',
    tags: ['C++', 'OpenGL', 'Animation'],
  },
  {
    slug: 'dailydump-statetree-smartobjects',
    title: 'DailyDump — State Tree & Smart Objects',
    date: '2023-03-04',
    file: 'blogs/2023-03-04-DailyDump-StateTree-SmartObjects.md',
    excerpt: "Notes on State Tree transitions and how they pair with Smart Objects.",
    tags: ['AI', 'State Tree'],
  },
]

export const postBySlug = (slug) => posts.find((p) => p.slug === slug)
