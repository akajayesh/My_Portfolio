export const PORTFOLIO_DATA = {
  hero: {
    name: "Jayesh",
    roles: [
      "Backend Engineer",
      "Full Stack Developer",
      "AI Engineer",
      "Software Tester"
    ],
    description: "Driven software engineering student looking for internship opportunities to architect scalable backend systems, deploy intelligent AI solutions, and build seamless full-stack experiences.",
    resumeLink: "https://drive.google.com/file/d/1ZlzMAlq6l9WAQwBPwCMcId2ESXjEpKv_/view?usp=sharing",
    heroImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuDf16yInUK-WZsnTv3galWSCweM4Gi8MhI00Mr3pzU1mfoR6379XZqOEckWM4Fk75PLdRy2jBBdGx4Vuuz_3u-1P6RXPrXEHmWqi_6xn8TuTpTOKaKaz_fu1k72COswzK64-saFcAmGhQmo0jXNZLu8FFyFB6MVacXWdJwaqkY1S8WObJuw3t4lncTkETP0sJQgSqFebYqRssGL6q0tFeJxvyBr7qhnl3pklFhndfvgiXy2AbXVEmAU5jRJ0Izv0DosXFVt17qoMHM",
  },
  about: {
    paragraphs: [
      "I am an engineer focused on the nexus of backend performance and artificial intelligence. My approach to software development is rooted in precision engineering—treating codebases as living ecosystems that must be scalable, maintainable, and robust.",
      "Whether it's fine-tuning transformer models for predictive security or optimizing RESTful architectures for multi-user productivity tools, I prioritize technical excellence over shortcuts. I am constantly exploring how AI can be integrated into traditional backend workflows to create more intuitive and efficient software solutions."
    ],
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB4LP2yT6TAL3y5qy7Kf_jAyORBC7UTRQMfrXFd_TEFV5InutVTBdzKJ8LdIsndZHdxN9xmJSmxXGlDjgi_yMATCXhtkKXpj_btYP-LnIkwllzhCc-NAUCZxvDenMFypmqyHIvk4IzCqJayCm4p4CCvEoPm8HxKoTVm61t0mrzDIYSRaFEJs4bsWS9SHqkXaNkbafpJ7vf2xotZn-kqwJa6t7ZGE5UUrVUn9UUjixztzQbbyiFDwCTJYzp56BwlWn7BsYdxRjPMs4Y"
  },
  projects: [
    {
      id: "permaware",
      title: "PermAware",
      category: "AI / Security",
      description: "AI-based Android app permission risk classification system. Achieved 92.5% accuracy using fine-tuned BERT models for risk assessment.",
      tags: ["PYTHON", "BERT", "ML"],
      links: [
        { label: "SOURCE", url: "https://github.com/akajayesh/PermAware", icon: "github" },
        { label: "DEMO", url: "#", icon: "external-link" }
      ],
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDWN7nOCuT8mcHc7744M8DvX98DpVfv0kZn1Zp3XwWGwykOeIVALtyNkLoPXaJJuM5aXEOUQGL8kspTynHhuONpJECdVQ1o9Ne-8izS0bqGWB3ziKZ2iZMqhDNo94eMztsnP-c4MnJWND3NJlBLoJGEnaw0qDgLHY_FDt1WS6xd_ByesAYnZ91NMwrrC8X9X4Jtvn1Nt0Qwku9K0Xo7TOoB1xBCl5dGjNnjZcSLFVQk4SaSpnvubzPXK4VtlRF0yj5lgzr-aARKP2M"
    },
    {
      id: "friday",
      title: "F.R.I.D.A.Y",
      category: "Backend / AI",
      description: "Multi-turn Django chatbot featuring robust session context management. Optimized backend logic resulting in a 40% reduction in codebase complexity.",
      tags: ["DJANGO", "NLP", "BACKEND"],
      links: [
        { label: "SOURCE", url: "https://github.com/akajayesh/FRIDAY", icon: "github" }
      ],
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDb29OI36ogmltf0rEu2C3iOffrWYaDucP-b9I6vDTlTT0YW5b1UUuGuepzN-wIX17yHwir6TYPq1EfV6r9Q2sPDvLxKXg1RRiz-Al0NtkptRgm_wGtV6aw7PEXe3n5vAAVI-KPblh_IQnq2XW_pfdA9zu4AcRNV1a2fkULHQQmc9tJprzLdjxKoDV8bLCwoK0q3Tu41HBJpwl0L1Tv-l3hVwpGOPEv3Q-7GaP3gcz4Ew1zfKDVlUL3-vYOanChYMtNXQ2DJThBsm0"
    },
    {
      id: "flowtime",
      title: "FlowTime",
      category: "SaaS / Full Stack",
      description: "Productivity SaaS with integrated Pomodoro timers and detailed analytics. Built with React and Django REST Framework for seamless synchronization.",
      tags: ["REACT", "DRF", "TAILWIND"],
      links: [
        { label: "SOURCE", url: "https://github.com/akajayesh/FlowTime", icon: "github" },
        { label: "LIVE", url: "#", icon: "globe" }
      ],
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCyPZeM9Y7QpDLSWm2VC9ln6ZECmqy7BxqANNXLJd6SJABUe7qZdKjwDhE-0BsWbfxPxFSCor_CDqZlVT6mm3iimeDRmdXKhIbS8RliPUtaYXMCEB8YhI6diliOr6rHIoi7YV5KMUaQKSrFlq812Oh47Zun-OGCXp_I8EXFrkCkzWzKQXDV-f2q7OANU4yI7ZsnJRtZuDDT6o_x88-G2NHYR_Nes2M-M1VJ8jVVJ5kGIRhdKrP6kIPW-OXXAn9PqfhPBI6Xgmsv714"
    }
  ],
  skills: {
    frontend: [
      { name: "React.js", proficiency: "90%" },
      { name: "Tailwind CSS", proficiency: "95%" },
      { name: "JavaScript (ES6+)", proficiency: "85%" },
      { name: "TypeScript", proficiency: "75%" }
    ],
    backend: [
      { name: "Python / Django", proficiency: "95%" },
      { name: "Node.js / Express", proficiency: "80%" },
      { name: "RESTful APIs", proficiency: "95%" },
      { name: "PostgreSQL / SQL", proficiency: "85%" }
    ],
    ai: [
      { name: "Fine-tuning (BERT)", proficiency: "80%" },
      { name: "TensorFlow / PyTorch", proficiency: "70%" },
      { name: "NLP Pipeline", proficiency: "85%" },
      { name: "Data Analytics", proficiency: "80%" }
    ],
    testing: ["SELENIUM", "PYTEST", "JUNIT"],
    tools: ["GIT", "DOCKER", "AWS"]
  },
  contact: {
    email: "jayeshsutar312@gmail.com",
    phone: "+91-7387885582",
    location: "Mumbai, Maharashtra, India",
    github: "https://github.com/akajayesh", // Link placeholder if real user's repo isn't specified
    linkedin: "https://www.linkedin.com/in/jayeshsutar89951825a" 
  }
};
