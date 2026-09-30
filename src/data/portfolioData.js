export const personalInfo = {
  name: "Ayushi Singh",
  role: "B.Tech CSE (AI-ML) Student ",
  internshipGoal: "Open to Web Development & Full Stack Internships",
  tagline: "Building intelligent and modern digital experiences.",
  bio: "Second-year engineering student with a strong interest in technology, programming, and software development. Eager to learn new skills and apply theoretical knowledge to real-world projects.",
  aboutText: "Second-year engineering student with a strong interest in technology, programming, and software development. Eager to learn new skills and apply theoretical knowledge to real-world projects. Passionate about problem-solving, AI, and emerging technologies, with a focus on building practical and impactful solutions.",
  aboutMeRightCol: "B.Tech CSE (AI-ML) Student passionate about building intelligent and modern digital experiences. Eager to learn new skills and apply theoretical knowledge to real-world projects.",
  email: "ayushisingh7819@gmail.com",
  phone: "9335247487",
  location: "Varanasi, India (Open to Internships)",
  cvPath: "/Ayushi_Resume.pdf",
  cvImagePath: "/assets/resume/Ayushi_Singh_CV.png",
  stats: [
    { label: "CGPA", value: "8.3", sub: "LPU Academic Standard" },
    { label: "LeetCode Solved", value: "70+", sub: "Data Structures & Algorithms" },
    { label: "Major Projects", value: "2+", sub: "Full-Stack & AI Applications" },
    { label: "Hackathon Awards", value: "2", sub: "Competitive Achievements" },
  ],
  socials: {
    github: "https://github.com/ayushisingh7819",
    linkedin: "http://www.linkedin.com/in/ayushi-singh-792969343",
    leetcode: "https://leetcode.com/u/ayushisingh07",
  },
  hobbies: [
    "Chess",
    "Travelling",
    "Badminton",
    "Exploring new technologies",
    "Problem solving"
  ],
  participations: [
    "Secured 3rd position in a 24-hour inter-college hackathon among nearly 100 participating teams",
    "Achieved a top 7 position in a Web Development Hackathon competing against senior students and experienced teams.",
    "Worked on real-world project development, UI design, and team collaboration during hackathons."
  ],
  futureGoals: "I aspire to build a career in AI/ML and software development, continuously strengthening my technical and problem-solving skills while contributing to innovative real-world solutions. In the long term, I aim to pursue an MBA to develop strong managerial and strategic skills and grow into leadership roles.",
  status: "Open to Web Development & Full Stack Internships"
};

export const languages = [
  { name: "English", level: "Full Professional Proficiency", status: "Fluent", progress: 100 },
  { name: "Hindi", level: "Native / Bilingual", status: "Native", progress: 100 },
  { name: "Spanish", level: "Elementary / Learning", status: "Learning", progress: 65 }
];

export const techStack = [
  {
    category: "Frontend Development",
    description: "Building responsive, modern, and accessible user interfaces",
    items: [
      { name: "React.js", level: "Advanced", icon: "Code2" },
      { name: "JavaScript (ES6+)", level: "Advanced", icon: "FileCode" },
      { name: "TypeScript", level: "Intermediate", icon: "FileJson" },
      { name: "Tailwind CSS", level: "Advanced", icon: "Palette" },
      { name: "Vite", level: "Advanced", icon: "Zap" },
      { name: "HTML5 & CSS3", level: "Advanced", icon: "Layout" },
    ]
  },
  {
    category: "Backend & Systems",
    description: "Architecting robust backend services and RESTful APIs",
    items: [
      { name: "Node.js", level: "Intermediate", icon: "Server" },
      { name: "Express.js", level: "Intermediate", icon: "Cpu" },
      { name: "REST APIs", level: "Advanced", icon: "Network" },
    ]
  },
  {
    category: "Database & Cloud",
    description: "Managing structured and unstructured data pipelines",
    items: [
      { name: "MongoDB", level: "Intermediate", icon: "Database" },
      { name: "MongoDB Atlas", level: "Intermediate", icon: "Cloud" },
      { name: "MySQL / SQL", level: "Intermediate", icon: "Table" },
      { name: "Firebase / Firestore", level: "Intermediate", icon: "Flame" },
    ]
  },
  {
    category: "AI & Machine Learning",
    description: "Integrating intelligent models and LLM APIs into web software",
    items: [
      { name: "Python", level: "Advanced", icon: "Terminal" },
      { name: "Pandas & NumPy", level: "Advanced", icon: "FileCode" },
      { name: "Matplotlib & Seaborn", level: "Intermediate", icon: "Palette" },
      { name: "Gemini API", level: "Advanced", icon: "Sparkles" },
      { name: "OpenAI API", level: "Advanced", icon: "Bot" },
    ]
  },
  {
    category: "Developer Tools & Platforms",
    description: "Modern workflow toolchain and cloud hosting platforms",
    items: [
      { name: "Git & GitHub", level: "Advanced", icon: "GitBranch" },
      { name: "VS Code & Cursor", level: "Advanced", icon: "Code" },
      { name: "Jupyter & Google Colab", level: "Advanced", icon: "Terminal" },
      { name: "Netlify & Render", level: "Intermediate", icon: "Globe" },
    ]
  }
];

export const projects = [
  {
    id: "zenora",
    title: "Zenora – AI-Powered Student Platform",
    tagline: "All-in-one AI ecosystem for academic success and career progress",
    description: "An AI-powered student platform designed to make college life easier and more organized through academic assistance, career guidance, mock tests, study planning, campus resources and coding progress tracking.",
    technologies: [
      "React.js",
      "Firebase Authentication",
      "Firestore",
      "Gemini API",
      "JavaScript",
      "HTML/CSS",
      "Netlify"
    ],
    features: [
      "AI academic assistance & concept explainer using Gemini API",
      "Career roadmap generation tailored to student goals",
      "Automated study planning and schedule optimizer",
      "Interactive mock tests with instant scoring",
      "Curated student campus resources repository",
      "GitHub & LeetCode coding progress tracking dashboard"
    ],
    liveUrl: "https://zenoraastudy.netlify.app/",
    githubUrl: "https://github.com/ayushisingh7819",
    featured: true,
    badge: "Featured AI Project",
    accentColor: "from-blue-600 to-indigo-600"
  },
  {
    id: "gramsetu",
    title: "GramSetu – AI-Powered Farmer-to-Market Platform",
    tagline: "Connecting rural agricultural producers directly with markets",
    description: "A full-stack agricultural platform connecting farmers and markets through AI-powered recommendations, demand-supply analysis, maps and digital procurement workflows.",
    technologies: [
      "React.js",
      "Vite",
      "Node.js",
      "Express.js",
      "MongoDB Atlas",
      "OpenAI API",
      "REST APIs",
      "JWT Authentication",
      "Tailwind CSS",
      "Netlify",
      "Render"
    ],
    features: [
      "Secure JWT authentication & user profile management",
      "Real-time crop market pricing & analytics",
      "Interactive location maps for mandi discovery",
      "AI-driven crop recommendations & disease advice",
      "Predictive demand-supply analysis for optimal sales timing",
      "Streamlined digital procurement & trade workflows"
    ],
    liveUrl: "https://grramsetuu.netlify.app/",
    githubUrl: "https://github.com/ayushisingh7819",
    featured: true,
    badge: "Full-Stack & AI",
    accentColor: "from-emerald-600 to-teal-600"
  }
];

export const journeyTimeline = [
  {
    year: "2029",
    title: "B.Tech CSE (AI-ML)",
    institution: "Lovely Professional University, Punjab",
    description: "Pursuing specialized Bachelor of Technology in Computer Science & Engineering with focus on Artificial Intelligence and Machine Learning (July 2025 – Expected May 2029). CGPA: 8.3.",
    type: "Education",
    current: true
  },
  {
    year: "2026",
    title: "HACK AI – Season 2 (24-Hour AI Hackathon)",
    institution: "Lovely Professional University & byteXL",
    description: "Actively participated in the 24-hour AI Hackathon 'HACK AI - Season 2' organized by Student Career Committee in collaboration with byteXL (April 9-10, 2026). Achieved Top 7 position.",
    type: "Hackathon",
    current: false,
    hasCertificate: true,
    certId: "cert-hack-ai"
  },
  {
    year: "2025",
    title: "Code-A-Thon (3rd Position)",
    institution: "Metaverse Organization @ LPU Punjab",
    description: "Secured 3rd position in a 24-hour inter-college hackathon among nearly 100 participating teams (September 26, 2025). ID: CATBYMETAXANGAAR3732.",
    type: "Achievement",
    current: false,
    hasCertificate: true,
    certId: "cert-codeathon"
  },
  {
    year: "Present",
    title: "Open to Web Development & Full Stack Internships",
    institution: "Available for Internship Opportunities",
    description: "Eager to learn new skills and apply theoretical knowledge to real-world projects. Open to Web Development and Full-Stack internship opportunities.",
    type: "Internship Goal",
    current: false
  }
];

export const achievements = [
  {
    id: "ach-codeathon",
    title: "Code-A-Thon",
    position: "3rd Position",
    event: "24-Hour Hackathon by Metaverse Organization @ LPU Punjab",
    organization: "The Angaar Batch / W3Grads",
    date: "September 26, 2025",
    description: "Secured 3rd position in a 24-hour inter-college hackathon among nearly 100 participating teams. Certificate ID: CATBYMETAXANGAAR3732.",
    badge: "3rd Position",
    hasCertificate: true,
    file: "/assets/certificates/code-a-thon.png",
    certificateData: {
      id: "cert-codeathon",
      title: "Code-A-Thon Certificate of Completion",
      issuer: "Metaverse Organization @ LPU Punjab",
      date: "September 26, 2025",
      credentialId: "CATBYMETAXANGAAR3732",
      file: "/assets/certificates/code-a-thon.png",
      description: "For successfully participating in Code-A-Thone by Metaverse Organization @ LPU Punjab, a 24-hour hackathon conducted on 26/09/2025.",
      details: ["24-Hour Hackathon", "Full-Stack Development", "Metaverse / Angaar Batch"]
    }
  },
  {
    id: "ach-hackai",
    title: "HACK AI – Season 2",
    position: "Top 7 Finalist",
    event: "24-Hour AI Hackathon",
    organization: "Lovely Professional University & byteXL",
    date: "April 9-10, 2026",
    description: "Actively participated in the 24-hour AI Hackathon 'HACK AI - Season 2' organized by Student Career Committee in collaboration with byteXL. Achieved Top 7 ranking.",
    badge: "Top 7 Finalist",
    hasCertificate: true,
    file: "/assets/certificates/hack-ai.png",
    certificateData: {
      id: "cert-hack-ai",
      title: "HACK AI – Season 2 Certificate of Participation",
      issuer: "Lovely Professional University & byteXL",
      date: "April 9-10, 2026",
      credentialId: "LPU-HACKAI-2026",
      file: "/assets/certificates/hack-ai.png",
      description: "Has actively participated in the 24-hour AI Hackathon 'HACK AI - Season 2' at Lovely Professional University organized by Student Career Committee in collaboration with byteXL.",
      details: ["AI System Design", "LLM Integration", "Rapid Prototyping"]
    }
  }
];

export const certifications = [
  {
    id: "cert-microsoft",
    title: "Manage secrets in Java applications - Zero Trust and Zero Secrets",
    issuer: "Microsoft",
    date: "January 2, 2026",
    credentialId: "MSFT-JAVA-SEC-2026",
    file: "/assets/certificates/microsoft.png",
    description: "Has successfully completed Manage secrets in Java applications - Zero Trust and Zero Secrets.",
    details: ["Zero Trust Principles", "Secret Management", "Java Application Security"],
    color: "border-blue-500"
  },
  {
    id: "cert-hack-ai",
    title: "HACK AI – Season 2 Certificate of Participation",
    issuer: "Lovely Professional University & byteXL",
    date: "April 9-10, 2026",
    credentialId: "LPU-HACKAI-2026",
    file: "/assets/certificates/hack-ai.png",
    description: "Certificate of Participation in the 24-hour AI Hackathon 'HACK AI - Season 2'.",
    details: ["AI Hackathon", "LLM Integration", "byteXL & LPU CSE"],
    color: "border-indigo-500"
  },
  {
    id: "cert-codeathon",
    title: "Code-A-Thon Certificate of Completion",
    issuer: "Metaverse Organization @ LPU Punjab",
    date: "September 26, 2025",
    credentialId: "CATBYMETAXANGAAR3732",
    file: "/assets/certificates/code-a-thon.png",
    description: "For successfully participating in Code-A-Thone by Metaverse Organization @ LPU Punjab, a 24-hour hackathon.",
    details: ["3rd Position", "Angaar Batch", "Metaverse LPU"],
    color: "border-emerald-500"
  }
];

export const education = [
  {
    degree: "Bachelor of Technology – Computer Science & Engineering",
    institution: "Lovely Professional University, Punjab",
    period: "July 2025 – Expected May 2029",
    grade: "CGPA: 8.3 / 10.0",
    highlights: ["Focus on Artificial Intelligence, ML, and Software Development", "Active Member of Coding & Developer Clubs", "Hackathon Winner & Finalist"]
  },
  {
    degree: "Senior Secondary (Class XII)",
    institution: "Sant Atulanand Convent School, Varanasi",
    period: "Completed 2025",
    grade: "89%",
    highlights: ["Physics, Chemistry, Mathematics (PCM)", "Distinction in Computer Science"]
  },
  {
    degree: "Secondary School (Class X)",
    institution: "Sant Atulanand Convent School, Varanasi",
    period: "Completed 2023",
    grade: "79%",
    highlights: ["Foundational STEM Education", "Excellence in Mathematics & Science"]
  }
];
