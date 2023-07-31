import {
    mobile,
    backend,
    creator,
    web,
    NoxLogo,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    intel,
    teamgroup,
    nvidia,
    carrent,
    jobit,
    tripguide,
    threejs,
    link,
    fenix,
    vicee,
    nova,
    styleth,
    britt,
    palmer,
    cookie,
    beast,
    youtube,
    tiktok,
    discord,
    kick
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    // {
    //   id: "contact",
    //   title: "Contact",
    // },
    {
      id: "unifiedgaming",
      title: "Unified Gaming",
    },
  ];

  export const externalNav = [
    {
      url: "https://www.youtube.com/@ThePapaNox",
      title: "Youtube",
      icon: youtube
    },
    {
      url: "https://www.tiktok.com/@thepapanox",
      title: "TikTok",
      icon: tiktok
    },
    {
      url: "https://www.discord.gg/NoxNation",
      title:"Discord",
      icon: discord
    },
    {
      url: "https://kick.com/papanox",
      title: "Kick",
      icon: kick
    },
  ];
  
  const services = [
    {
      title: "Clip 1",
      url: "https://kick.com/papanox?clip=55202",
      icon: NoxLogo
    },
    {
      title: "Clip 2",
      url: "https://kick.com/papanox?clip=53576",
      icon: NoxLogo
    },
    // {
    //   title: "Backend Developer",
    //   icon: backend,
    // },
    // {
    //   title: "Content Creator",
    //   icon: creator,
    // },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];

  const experiences = [
    {
      title: "Core I9 13900K",
      company_name: "Intel",
      icon: intel,
      iconBg: "#383E56",
      date: "March 2020 - April 2021",
      points: [
        "Total Cores 24",
        "# of Performance-cores: 8",
        "# of Efficient-cores: 16",
        "Total Threads: 32",
        "Max Turbo Frequency: 5.80 GHz",
        "Intel® Thermal Velocity Boost Frequency: 5.80 GHz",
        "Intel® Turbo Boost Max Technology 3.0 Frequency: 5.70 GHz",
        "Performance-core Max Turbo Frequency: 5.40 GHz",
        "Efficient-core Max Turbo Frequency: 4.30 GHz",
        "Performance-core Base Frequency: 3.00 GHz",
        "Efficient-core Base Frequency: 2.20 GHz",
        "Cache: 36 MB Intel® Smart Cache",
        "Total L2 Cache: 32 MB",
        "Processor Base Power: 125 W",
        "Maximum Turbo Power: 253 W"
      ],
    },
    {
      title: "T-Force Delta RGB 32GB",
      company_name: "Team Group",
      icon: teamgroup,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Feb 2022",
      points: [
        "Module Type: DDR5 288 Pin Non-ECC Unburffered DIMM",
        "Frequency: 6000 MHZ",
        "Latency: CL30-36-36-76",
        "Capacity: 16Gbx2",
        "Data Transfer Bandwidth: 44,800 MB/s (PC5 44800)",
        "Voltage: 1.35 V",
      ],
    },
    {
      title: "PNY Geforce RTX 4090",
      company_name: "Nvidia",
      icon: nvidia,
      iconBg: "#383E56",
      date: "Jan 2022 - Jan 2023",
      points: [
        "CUDA Cores: 16384",
        "Clock Speed: 2235 MHz",
        "Boost Speed: 2520 MHz",
        "Memory Speed (Gbps): 21",
        "Memory Size: 24GB GDDR6X",
        "Memory Interface: 384-bit",
        "Memory Bandwitdh (GB/sec): 1008",
        "TDP: 450 W",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "PapaNox",
      description:
      "",
  
      tags: [
        {
          name: "President",
          color: "blue-text-gradient",
        },
        {
          name: "Founder",
          color: "green-text-gradient",
        },
        {
          name: "Member",
          color: "pink-text-gradient",
        },
      ],
      image: NoxLogo,
      source_code_link: "https://kick.com/papanox",
    },
    {
      name: "FrigidFenix",
      description:
        "",
      tags: [
        {
          name: "Vice President",
          color: "blue-text-gradient",
        },
        {
          name: "Member",
          color: "pink-text-gradient",
        },
      ],
      image: fenix,
      source_code_link: "https://www.twitch.tv/FrigidFenix",
    },
    {
      name: "ViceeLives",
      description:
        "",
      tags: [
        {
          name: "Social Media Director",
          color: "blue-text-gradient",
        },
        {
          name: "Member",
          color: "pink-text-gradient",
        },
      ],
      image: vicee,
      source_code_link: "https://www.twitch.tv/gridtv_esports",
    },
    {
      name: "NovaStorm",
      description:
        "",
      tags: [
        {
          name: "Community Manager",
          color: "blue-text-gradient",
        },
        {
          name: "Member",
          color: "pink-text-gradient",
        },
      ],
      image: nova,
      source_code_link: "https://twitter.com/NovaStorrm",
    },
    {
      name: "Styleth",
      description:
        "",
      tags: [
        {
          name: "Lead Recruiter",
          color: "blue-text-gradient",
        },
        {
          name: "Member",
          color: "pink-text-gradient",
        },
      ],
      image: styleth,
      source_code_link: "https://www.twitch.tv/Styleth",
    },
    {
      name: "AdventuresOfBrittany",
      description:
        "",
      tags: [
        {
          name: "Member",
          color: "pink-text-gradient",
        },
      ],
      image: britt,
      source_code_link: "https://www.twitch.tv/AdventuresOfBrittany",
    },
    {
      name: "NLBPalmer24",
      description:
        "",
      tags: [
        {
          name: "Member",
          color: "pink-text-gradient",
        },
      ],
      image: palmer,
      source_code_link: "https://www.twitch.tv/NLBPalmer24",
    },
    {
      name: "Cookiesaurus",
      description:
        "",
      tags: [
        {
          name: "Member",
          color: "pink-text-gradient",
        },
      ],
      image: cookie,
      source_code_link: "https://www.twitch.tv/cookiesaurus",
    },
    {
      name: "Xerobeast",
      description:
        "",
      tags: [
        {
          name: "Member",
          color: "pink-text-gradient",
        },
      ],
      image: beast,
      source_code_link: "https://kick.com/xerobeast",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };