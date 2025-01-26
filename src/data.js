// src/data.js

export const about = {
    name: "Bitra Bhaskara Yashwant",
    location: "Binghamton, NY",
    contact: "(813) 593-8899",
    email: "bbitra1@binghamton.edu",
  };
  
  export const education = [
    {
      degree: "Master of Science in Computer Science, Artificial Intelligence Track",
      school:
        "Binghamton University, State University of New York, Thomas J. Watson College of Engineering and Applied Science",
      gpa: "3.92 / 4.00",
      graduation: "Expected May 2025",
    },
    {
      degree: "Bachelor of Science in Computer Science",
      school:
        "Binghamton University, State University of New York, Thomas J. Watson College of Engineering and Applied Science",
      gpa: "3.82 / 4.00",
      honors: "Dean’s List: Fall 2022 – Spring 2024",
      graduation: "May 2024",
    },
  ];
  
  export const relevantCoursework =
    "Intro to Machine Learning, Data Structures and Algorithms, Intro to Artificial Intelligence, Social Media Data Pipelines, Science of Cybersecurity, Operating Systems, Computer Architecture, Intro to Computer Security, Intro to Data Mining, Programming Languages";
  
  export const technicalSkills = {
    programmingLanguages: ["C++", "C", "JavaScript", "Python", "X-86 Assembly"],
    frameworksAndTools: [
      "React.js",
      "Docker",
      "AWS",
      "Flask",
      "D3.js",
      "Wireshark",
      "Git",
      "GitHub",
      "Linux",
      "Unix",
      "Visual Studio Code",
      "Jupyter Notebook",
      "LTspice",
    ],
    databases: ["MongoDB", "MySQL", "PostgreSQL"],
    certifications: ["Relational Database Systems"],
  };
  
  export const experience = [
    {
      title: "Software Developer",
      organization: "CoreCard Inc",
      location: "Atlanta, Georgia",
      duration: "July 2023 – August 2023",
      points: [
        "Developed a 3D interactive visualization prototype using D3.js, Dash, and Python libraries, resulting in a 30% reduction in client analysis time through clear, interactive graphics.",
        "Optimized Flask integration to handle 50+ API calls daily, improving data retrieval by 20% and simplifying workflows for client-facing reports.",
        "Delivered a high-fidelity visualization prototype to over 10 clients, showcasing analytical features that directly impacted decision-making processes and led to actionable insights for credit card data initiatives exceeding $500K.",
      ],
    },
    {
      title: "Machine Learning Engineer",
      organization: "CoreCard Inc",
      location: "Atlanta, Georgia",
      duration: "May 2023 – June 2023",
      points: [
        "Engineered a fraud detection system for credit card transactions using scikit-learn pipelines, achieving 85% accuracy and outperforming prior benchmarks by 10%.",
        "Optimized data pipelines with scikit-learn, leveraging SMOTE for class imbalance and evaluating models like Random Forest, K-Nearest Neighbors, and XGBoost using F1-score and AUC metrics.",
        "Deployed the system via a Flask REST API, enabling real-time fraud alerts and reducing fraud by 25% across 1M+ transactions.",
      ],
    },
    {
      title: "Backend Developer",
      organization: "Sultan Qaboos Hospital",
      location: "Salalah, Oman",
      duration: "May 2022 – August 2022",
      points: [
        "Analyzed patient information data flows in the hospital’s cardiac facilities, identifying inefficiencies that reduced data retrieval time by 40%.",
        "Orchestrated the management and organization of 100K+ records using MongoDB, Excel, and Power BI, ensuring 100% data integrity.",
        "Devised and executed a secure retrieval process for patient records, enhancing diagnostic speed and protecting sensitive information.",
      ],
    },
  ];
  
  export const projects = [
    {
      title: "Evil Twin Attack",
      location: "Binghamton, NY",
      technologies: [
        "Python",
        "Wireshark",
        "Kali Linux",
        "Aircrack Suite",
        "DNS Services",
        "USB Wi-Fi Adapters",
      ],
      duration: "August 2024 - December 2024",
      points: [
        "Engineered Evil Twin attack simulations using rogue APs, exposing 10+ network vulnerabilities and capturing credentials with 80% success.",
        "Developed a Python script to block rogue AP connections, improving detection speed by 50% with real-time BSSID monitoring.",
        "Investigated and deployed decoy SSIDs alongside fake captive portals, misdirecting over 90% of attackers while identifying critical security gaps to enhance overall network defenses.",
      ],
    },
    {
      title: "Social Media Data Crawlers",
      location: "Binghamton, NY",
      technologies: [
        "Python",
        "MongoDB",
        "Flask",
        "AJAX",
        "Chart.js",
        "Bootstrap",
        "Moderate Hate Speech library",
        "Hugging Face",
      ],
      duration: "August 2024 - December 2024",
      points: [
        "Scraped and processed 100K+ data points from 2 subreddits, 2 4chan boards, and 2 YouTube channels to analyze trends in technology and movies.",
        "Executed real-time scraping, resolving 95% of rate limits and HTTP errors, processed 10,000+ data points in MongoDB, and assessed toxicity with 90% accuracy using a Flask-based dashboard and LLM chatbot.",
        "Generated insights into trend creation, concluding Reddit’s structured discussions are 30% more effective for long-term trends while 4chan excels in short-term viral trends.",
      ],
    },
  ];
  
  export const leadership = [
    {
      title: "Teaching Assistant",
      organization: "Binghamton University School of Computing",
      location: "Binghamton, NY",
      duration: "August 2024 – Present",
      points: [
        "Guided over 50 students through complex topics in TypeScript, DOM API, React.js integration techniques, and MongoDB connectivity principles.",
        "Led weekly labs on HTML/CSS best practices, guiding students to design and deploy full-stack web applications.",
        "Conducted office hours to review student code, troubleshoot errors, and reinforce industry-standard design principles.",
      ],
    },
    {
      title: "Vice President",
      organization: "Theta Tau Engineering Fraternity",
      location: "Binghamton, NY",
      duration: "December 2023 – May 2024",
      points: [
        "Directed all committee chairpersons, directing fraternity committees and operations to ensure the smooth execution of events.",
        "Motivated team members and established clear milestones and deadlines, enhancing overall productivity and boosting engagement by 25%.",
      ],
    },
    {
      title: "Silver Team Member",
      organization: "Duke of Edinburgh’s International Award",
      location: "Salalah, Oman",
      duration: "April 2016 – December 2019",
      points: [
        "Organized outreach programs delivering essential resources to 200+ homeless individuals, increasing program participation by 30%.",
        "Strengthened partnerships with 5+ local organizations, boosting outreach efficiency by 20%.",
      ],
    },
  ];
  