/* ============================================================
   EDIT THIS FILE to customize your site. No other file needs
   changes. Leave a text value "" or a list [] empty and that
   part (or the whole section) is hidden automatically.
   Images: put files in the "images" folder and use paths like
   "images/me.jpg". Leave "" to show a placeholder.
   ============================================================ */
const SITE = {
  name: "Aditya Sharma",
  tagline: "",
  photo: "images/aditya.jpg",
  photoAlt: "Portrait of Aditya Sharma",

  about: {
    bio: [
      "I am a CMA Final student who likes turning accounting theory into practical work. I am looking for an industrial training opportunity where I can learn from experienced professionals and contribute to the organisation's growth"
    ],
    interests: ["Running", "Studying", "Continuous learning"],
    skills: ["Tally (certified)", "Advanced Excel (certified)", "Basic computer (certified)", "TDS compliance", "GST return support", "MIS reporting", "Internal audit support", "AI tools for everyday work"],
    experience: [
      { title: "Junior Accountant", meta: "Avin India Pvt Ltd, May 2025 to Oct 2025",
        text: "Daily accounting and compliance, TDS returns, vendor and salary payments, GST and ITR support, internal audit work and monthly MIS reports." }
    ],
    education: [
      { title: "CMA Final", meta: "The Institute of Cost Accountants of India, currently studying" },
      { title: "CMA Intermediate", meta: "Group 1 Dec 2024, Group 2 June 2026",
        text: "Group 2: 236/400 (59.00%), with 69 in Operations Management and 69 in Financial Management. Group 1: 207/400 (51.75%), with 59 in Direct and Indirect Taxation." },
      { title: "CMA Foundation", meta: "Dec 2022", text: "246/400 (61.50%), with exemption in 2 subjects." },
      { title: "Class XII, WBCHSE", meta: "2022", text: "77.00%, First Division, with 88 in Accountancy." }
    ],
    personalDetails: [
      { label: "Location", value: "Raniganj, West Bengal, India" },
      { label: "Languages", value: "English (proficient), Hindi (fluent), Bengali (fluent)" }
    ]
  },

  // Add project cards to the relevant category's projects list.
  projectGroups: [
    { title: "Microsoft Tools Project", categories: [
      { title: "Excel Project", logo: "excel", projects: [] },
      { title: "Power BI Project", logo: "powerbi", projects: [] },
      { title: "Power Query Project", logo: "powerquery", projects: [] },
      { title: "PowerPoint Project", logo: "powerpoint", projects: [] },
      { title: "Word Project", logo: "word", projects: [] }
    ]},
    { title: "ERP Software Project", categories: [
      { title: "Tally Prime", logo: "tallyprime", projects: [] },
      { title: "Tally ERP", logo: "tallyerp", projects: [] },
      { title: "SAP FICO", logo: "sap", projects: [] },
      { title: "SAP MM", logo: "sap", projects: [] }
    ]},
    { title: "AI Tools Project", logo: "ai", projects: [] }
  ],

  appsAndWebsites: [
    { name: "CMA Final MCQ Master Bank",
      description: "A free practice app for CMA Final students. Choose papers and chapters, take timed or instant-feedback quizzes, review mistakes, track progress and scan your own MCQs from photos or PDFs. Works offline.",
      image: "images/cma-mcq-icon.png", imageFit: "contain", imageBg: "#0146ad",
      link: "https://adityasharmacoc1-jpg.github.io/cma-mcq/", linkLabel: "Web app" }
  ],
  gallery: [],                     // optional: your own photos for themed galleries, e.g. [{ src: "images/me-running.jpg", caption: "Morning run" }]

  contact: {
    email: "adityasharma24441@gmail.com",
    socials: [
      { label: "Instagram", url: "https://www.instagram.com/nick_aadish/" },
      { label: "Threads", url: "https://www.threads.com/@nick_aadish" },
      { label: "X (Twitter)", url: "https://x.com/NICKAADISH" },
      { label: "GitHub", url: "https://github.com/adityasharmacoc1-jpg" },
      { label: "LinkedIn", url: "https://www.linkedin.com/in/aditya-sharma-69b4593a4" }
    ]
  },

  footerNote: ""                   // optional; defaults to © year + name
};
