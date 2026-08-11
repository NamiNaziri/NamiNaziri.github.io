// CV content, ported verbatim from the previous site's CV/* components.

export const personalInfo = {
  name: 'Nami Naziri',
  title: 'Gameplay & Animation Programmer',
  photo: '/img/2.jpg',
  summary:
    "Hey there, my name is Nami. I hold a Master's in Computer Science from Aalto University and I'm proficient in Unreal Engine, particularly where gameplay, AI, and animation intersect. My experience includes working with animation components such as blending, layering, and state machines, as well as AI components such as behavior trees, smart objects, state trees, environment query systems, and AI perception.",
  links: {
    itch: 'https://naminaziri.itch.io/',
    github: 'https://github.com/NamiNaziri/',
    linkedin: 'https://www.linkedin.com/in/naminaziri/',
  },
}

export const experience = [
  {
    title: 'Game AI / Gameplay Engineer',
    org: 'RichardRendering · Freelance',
    image: '/img/RR.jfif',
    date: 'Apr 2023 - Present',
    location: 'Remote',
    description: 'Freelance engineer on AI-driven crowd and NPC systems.',
    highlights: [
      'NPC behaviors via behavior trees, including mantling with Nav Link Proxies and player/path following',
      'Crowd system built on the MassEntity framework, with an accessory and animation system for crowd agents',
      'Smart-object-driven crowd interactions — agents identify, claim, and use props such as benches',
      'Diagnosed and fixed crowd-system performance bottlenecks, improving frame rate',
    ],
  },
  {
    title: 'Animation Programmer',
    org: 'Byzantian Interactive, Inc.',
    image: '/img/byzantian_interactive_logo.jfif',
    date: 'Jun 2025 - Aug 2025',
    location: 'Finland',
    description: 'Animation programming contract on a third-person action title.',
    highlights: [
      'Owned the 3Cs (Character, Control, Camera) for the player character, iterating on animation and camera systems for responsive movement and combat feel',
      // TODO: confirm exact wording — LinkedIn export lost two words here ("locomotion, ___, ___, and related features")
      "Designed and implemented the player's animation system in C++ and Animation Blueprints, including locomotion, combat, and traversal",
      'Built and maintained multi-stage boss animation systems using Animation Layer Interfaces, and experimented with motion matching for boss locomotion',
      'Developed gameplay abilities and core systems within the Gameplay Ability System, covering rolling, magic abilities, input buffering, and a targeting system',
      // TODO: confirm exact wording — LinkedIn export cut off after "resolving numerous ___"
      'Collaborated with a cross-disciplinary team of programmers and designers, teaching best practices for the animation systems and resolving numerous edge cases',
    ],
  },
  {
    title: 'Programmer, Character Locomotion Development (Motion Matching)',
    org: 'Concrete Realm',
    image: '/img/concrete_realm_games_logo.jfif',
    date: 'Jan 2025 - May 2025',
    location: 'Remote',
    description: 'Programmer on ENDS, focused on the 3Cs — character, control, and camera.',
    highlights: [
      'Locomotion & combat systems built on motion matching, foot locking, and motion warping',
      'Hand-to-hand combat system with combos, paired animations, and environmental interactions',
      'Motion-warped, hand-IK driven interaction system for character-object alignment',
      'Mutable-based dynamic character customization system with a full UI',
      'Gameplay Camera system for locomotion, combat, and customization',
    ],
  },
  {
    title: 'Graduate Research Assistant',
    org: 'Aalto University Department of Computer Science · MIME Lab',
    image: '/img/aalto.png',
    date: 'Apr 2024 - Jun 2024',
    location: 'On-site',
    description: 'Research assistant applying machine learning to character animation.',
    highlights: [
      'Character animation systems built on VAEs and GANs',
      'Kinematic and physics-based animation generation for adaptable character behavior',
      'Isaac Gym-based physics simulation and deep reinforcement learning',
      'Full-body collision avoidance for multi-character environments while preserving reference animation',
    ],
  },
]

export const education = [
  {
    title: "Master's degree, Computer Science",
    org: 'Aalto University',
    image: '/img/aalto.png',
    date: 'Aug 2022 - Dec 2024',
    location: 'Espoo, Finland',
    description: 'Master Thesis: Multi-character collision avoidance',
  },
  {
    title: 'Bachelor of Science, Computer Engineering',
    org: 'Isfahan University of Technology',
    image: '/img/iut.jfif',
    date: '2018 - 2022',
    location: 'GPA: 18.13/20',
    description:
      'Thesis: Analysis of the animation graph in Unreal Engine and implementation of an animation system using OpenGL.',
  },
]

export const skills = [
  { title: 'Programming', items: ['C/C++', 'Blueprint', 'Python', 'JavaScript', 'MATLAB', 'C#', 'SQL'] },
  { title: 'Software', items: ['Unreal Engine', 'GitHub', 'Perforce', 'MATLAB', 'Docker'] },
  { title: 'Gameplay Systems', items: ['Gameplay Ability System', 'Behavior Tree', 'State Tree', 'Mass AI'] },
  { title: 'Animation', items: ['Motion Matching', 'State Machines', 'Blend Spaces', 'Animation Blueprint', 'IK'] },
]

export const awards = [
  {
    title: 'Kumma Gallery Showcase – Lost Radiance (Games Now! Game Jam 2023)',
    body: (
      <>
        Developed Lost Radiance, which was selected by industry professionals to be showcased at Kumma Gallery.
        <br />
        <strong>Judges:</strong> Essi Jukkala (<strong>Supercell</strong>), Eevi Korhonen (<strong>Housemarque</strong>),
        Tatu Laine (<strong>Futureplay</strong>), and Jussi Loukiainen (<strong>Platonic Partnership</strong>)
        <br />
        <strong>Feedback:</strong> Recognized for its simple yet engaging mechanics and strong visual presentation.
        <br />
        <a href="https://www.instagram.com/p/C7cN6jRtFZY/?img_index=1" target="_blank" rel="noopener noreferrer">
          More
        </a>
      </>
    ),
  },
  {
    title: 'Unreal Engine Programming Challenge – Space Invaders',
    body: (
      <>
        <div>
          Space Invaders game selected as one of the top 3 entries. The code structure was reviewed by Chris Rock, Lead
          Gameplay Programmer at Neon Koi (PlayStation).
        </div>
        <a href="https://gamesjobfair.com/programming-challenges-unrealengine-unity" target="_blank" rel="noopener noreferrer">
          More
        </a>
      </>
    ),
  },
  {
    title: "Finland Scholarship for Master's Studies",
    body: <div>Awarded a merit-based scholarship covering full tuition fees and a €5000 grant for living expenses.</div>,
  },
]

export const certificates = [
  {
    text: 'Winner of Unreal Engine Programming Challenge - Game Job Fair - Spring 2023',
    link: '/img/spaceInvader/Nami_Naziri_UE_Challenge.png',
  },
]
