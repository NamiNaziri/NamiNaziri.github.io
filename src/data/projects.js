// Featured project data, ported from the previous site's ProjectList.jsx.
// Gallery item `kind` is one of: 'image' | 'youtube'.
// `poster` is the blurred panel backdrop, so it points at the downscaled
// copies in /img/backdrops (~93KB total vs 3MB for the full-size art).

export const featuredProjects = [
  {
    slug: 'ends',
    title: 'ENDS',
    role: 'Gameplay Programmer (Character, Control, Camera)',
    description:
      "I worked as a game programmer on ENDS, focusing on the 3Cs (Character, Control, Camera), making sure of the gameplay's fluidity and responsiveness. This single-player game combines sandbox and RPG elements, following Rahim and Sonny as they navigate a gritty crime drama. Combat, exploration, and dynamic interactions shape their journey.",
    highlights: [
      'Locomotion & combat built on motion matching, foot locking, and motion warping',
      'Hand-to-hand combat system with combos, paired animations, and environment interactions',
      'Motion-warped, hand-IK driven interaction system for object alignment',
      'Mutable-based dynamic character customization with a full UI',
      'Gameplay Camera system for locomotion, combat, and customization',
    ],
    tags: ['Unreal Engine', 'Motion Matching', 'Blueprint', 'Animation', 'C++'],
    poster: '/img/backdrops/ends.jpg',
    links: {
      steam: 'https://store.steampowered.com/app/2870130/ENDS/',
      blog: '/blog/ends',
    },
    gallery: [
      { kind: 'youtube', id: 'fCXc0gthyeQ', thumbnail: '/img/ends/tumb.jpg' },
      { kind: 'image', src: '/img/ends/6.gif', thumbnail: '/img/ends/6.png' },
      { kind: 'image', src: '/img/ends/7.gif', thumbnail: '/img/ends/7.png' },
      { kind: 'image', src: '/img/ends/steps.gif', thumbnail: '/img/ends/steps.png' },
      { kind: 'image', src: '/img/ends/10.gif', thumbnail: '/img/ends/10.png' },
      { kind: 'image', src: '/img/ends/11.gif', thumbnail: '/img/ends/11.png' },
      { kind: 'image', src: '/img/ends/combatstance.gif', thumbnail: '/img/ends/combatstance.png' },
      { kind: 'image', src: '/img/ends/combat.gif', thumbnail: '/img/ends/combat.png' },
      { kind: 'image', src: '/img/ends/vault.gif', thumbnail: '/img/ends/vault.png' },
    ],
  },
  {
    slug: 'horse-locomotion',
    title: 'Horse Locomotion System',
    role: 'Animation Programmer',
    description:
      "This project implements an advanced horse locomotion system in Unreal Engine, utilizing motion matching for fluid and responsive transitions across various movement states such as idle, walk, trot, canter, gallop, and sprint. The system features dynamic mounting, where the player's position relative to the horse triggers automatic AI adjustments to position the player correctly before executing the mounting animation. Sudden changes in movement direction are handled with smooth transitions, ensuring control and responsiveness even without dedicated pivot animations. The rider's head orientation is driven by the player's view, and inverse kinematics (IK) is applied to the rider's hands and reins, contributing to more natural interactions and improving overall realism in the system.",
    highlights: [
      'Motion-matched transitions across idle / walk / trot / canter / gallop / sprint',
      'Dynamic mounting driven by relative player-to-horse positioning',
      'Directional changes handled without dedicated pivot animations',
      'Head-orientation and hand/rein IK driven by player view',
    ],
    tags: ['Blueprint', 'Animation', 'Motion Matching', 'Unreal Engine'],
    poster: '/img/backdrops/horse-locomotion.jpg',
    links: {
      play: 'https://drive.google.com/file/d/1i1E2Y9_XJu0J4Ga0CgloJYzAxGFCRgaQ/view?usp=sharing',
    },
    gallery: [
      { kind: 'youtube', id: '9nisXo66SGY', thumbnail: '/img/horseLocomotion/tt.png' },
      { kind: 'image', src: '/img/horseLocomotion/horseLoco.gif', thumbnail: '/img/horseLocomotion/th_gif.png' },
      { kind: 'image', src: '/img/horseLocomotion/background.png', thumbnail: '/img/horseLocomotion/background.png' },
    ],
  },
  {
    slug: 'space-invaders',
    title: 'Space Invaders',
    role: 'Gameplay Programmer',
    description:
      "This is a Space Invaders clone made using Unreal Engine as an entry for the 'Games Job Fair Spring 2023 - Unreal Engine Programming Challenge'. Selected as one of the top 3 entries; the code structure was reviewed by Chris Rock, Lead Gameplay Programmer at Neon Koi (PlayStation).",
    highlights: [
      'Top 3 entry in the Games Job Fair Unreal Engine Programming Challenge',
      'Code reviewed by Neon Koi (PlayStation) Lead Gameplay Programmer',
    ],
    tags: ['C++', 'Blueprint', 'Unreal Engine'],
    poster: '/img/backdrops/space-invaders.jpg',
    links: {
      itch: 'https://naminaziri.itch.io/space-invaders',
      github: 'https://github.com/NamiNaziri/SpaceInvaders',
      blog: '/blog/space-invaders',
    },
    gallery: [
      { kind: 'image', src: '/img/spaceInvader/SpaceInvaders.gif', thumbnail: '/img/spaceInvader/SI_thumbnail.png' },
      { kind: 'image', src: '/img/spaceInvader/SI_2.png', thumbnail: '/img/spaceInvader/SI_2.png' },
      { kind: 'youtube', id: 'JWBiKHRHcaw', thumbnail: '/img/spaceInvader/SI_yt.jpg' },
      { kind: 'image', src: '/img/spaceInvader/Nami_Naziri_UE_Challenge.png', thumbnail: '/img/spaceInvader/Nami_Naziri_UE_Challenge.png' },
      { kind: 'image', src: '/img/spaceInvader/si_review.png', thumbnail: '/img/spaceInvader/si_review.png' },
      { kind: 'image', src: '/img/spaceInvader/SI_1.png', thumbnail: '/img/spaceInvader/SI_1.png' },
    ],
  },
  {
    slug: 'lost-radiance',
    title: 'Lost Radiance',
    role: 'Programmer, 48h Game Jam',
    description:
      "Created in Unreal Engine 5 for the Games Now! Game Jam 2023, on the theme 'missing'. A cosmic odyssey where light has gone astray and you become the new star amidst the void. As shadows and darkness compel other stars to assail you, your survival becomes crucial. Showcased at Kumma Gallery and reviewed by judges from Supercell, Housemarque, Futureplay, and Platonic Partnership.",
    highlights: [
      'Selected for the Kumma Gallery showcase out of the game jam entries',
      'Praised for simple, engaging mechanics and strong visual presentation',
    ],
    tags: ['C++', 'Blueprint', 'Unreal Engine'],
    poster: '/img/backdrops/lost-radiance.jpg',
    links: {
      itch: 'https://naminaziri.itch.io/lost-radiance',
    },
    gallery: [
      { kind: 'image', src: '/img/s.png', thumbnail: '/img/s.png' },
      { kind: 'image', src: '/img/lostRadiance.jpg', thumbnail: '/img/lostRadiance.jpg' },
      { kind: 'youtube', id: 'dR0P4tOlGsU', thumbnail: '/img/lr_thumnail.jpg' },
      { kind: 'image', src: '/img/LostRadiance/LR_e1.jpg', thumbnail: '/img/LostRadiance/LR_e1.jpg' },
      { kind: 'image', src: '/img/LostRadiance/LR_e2.jpg', thumbnail: '/img/LostRadiance/LR_e2.jpg' },
      { kind: 'image', src: '/img/LostRadiance/LR_e3.jpg', thumbnail: '/img/LostRadiance/LR_e3.jpg' },
    ],
  },
]

// Smaller technical projects / prototypes.
export const otherProjects = [
  {
    slug: 'unreal-prototypes',
    title: 'Unreal Prototypes',
    description: 'A compilation of various gameplay prototypes built in Unreal Engine.',
    tags: ['Unreal Engine', 'C++', 'Blueprint', '2021-2023'],
    image: '/img/BossAI_V2.jpg',
    link: '/blog/unreal-prototypes',
  },
  {
    slug: 'animation-system',
    title: 'Animation System',
    description: 'An application for playing and blending skeletal animations, built from scratch with OpenGL and C++.',
    tags: ['C++', 'OpenGL', 'Animation', '2022'],
    image: '/img/animation.gif',
    link: 'https://github.com/NamiNaziri/Skeletal-Animation',
  },
  {
    slug: 'dual-quaternion-skinning',
    title: 'Dual Quaternion Skinning',
    description: 'Implementation of dual quaternion skinning to address the candy-wrapping artifact of linear blend skinning.',
    tags: ['C++', 'OpenGL', 'Animation', '2023'],
    image: '/img/DQS.gif',
    link: '/blog/dual-quaternion-skinning',
  },
  {
    slug: 'inverse-kinematics',
    title: 'Jacobian Inverse Kinematics',
    description: 'An inverse kinematics solver built on the Jacobian matrix, applied to a skeletal chain.',
    tags: ['C++', 'OpenGL', 'Animation', '2023'],
    image: '/img/IK.gif',
    link: '/blog/inverse-kinematics',
  },
  {
    slug: 'mesh-simplifier',
    title: 'Mesh Import and Simplification',
    description: 'A mesh importer and surface simplifier using quadric error metrics.',
    tags: ['C++', 'OpenGL', '2023'],
    image: '/img/simplifier.gif',
    link: 'https://github.com/NamiNaziri/MeshSimplifier',
  },
]
