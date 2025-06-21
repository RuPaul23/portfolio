export const myProjects = [
	{
		id: 1,
		title: "LexiSignAR: AR-Glass for Disabled People",
		description:
			"AR Glass for communicating with disabled people using ASL gesture translation.",
		subDescription: [
			"Built an AR-based ASL translator using Unity and OpenCV.",
			"Designed wearable AR glasses with RPi Zero and OLED display.",
			"Used VGG16 CNN for accurate real-time gesture recognition.",
			"Optimized AR performance for mobile and embedded devices.",
		],
		href: "https://github.com/RuPaul23/LexiSignAR",
		logo: "/assets/logos/Unity.png",
		image: "/assets/projects/AR_Frame.jpeg",
		tags: [
			{ id: 1, name: "Unity", path: "/assets/logos/Unity.png" },
			{ id: 2, name: "C#", path: "/assets/logos/csharp.svg" },
			{ id: 3, name: "AutoCAD Fusion 360", path: "/assets/logos/fusion360.jpg" },
			{ id: 4, name: "RPi", path: "/assets/logos/Raspberry_Pi_logo.jpg" },
		],
	},
	{
		id: 2,
		title: "Fish-0-Bot: Bio-inspired Robotic Fish",
		description:
			"A robotic fish system designed for autonomous underwater exploration using simulated and physical components.",
		subDescription: [
			"Designed CAD model in Plasticity and Fusion 360 for hydrodynamic structure.",
			"Simulated navigation using ESP32 sensors (gyro, motion, ultrasonic) in UE5.",
			"Developed real-time underwater object detection using ArduCam integration.",
			"Planned integration with Raspberry Pi 4 for extended environmental sensing.",
		],
		href: "https://github.com/RuPaul23/Fish0Bot",
		logo: "/assets/logos/fusion360.jpg",
		image: "/assets/projects/Fish-0-Bot.jpg",
		tags: [
			{ id: 1, name: "Fusion 360", path: "/assets/logos/fusion360.jpg" },
			{ id: 2, name: "ESP32", path: "/assets/logos/esp32.png" },
			{ id: 3, name: "RPi", path: "/assets/logos/Raspberry_Pi_logo.jpg" },
			{ id: 4, name: "Unreal Engine", path: "/assets/logos/UE.jpg" },
			{ id: 5, name: "Plasticity", path: "/assets/logos/Plasticity.png" },
		],
	},
	{
		id: 3,
		title: "Prescribo: AI-Powered Healthcare App",
		description:
			"A smart healthcare system that manages prescriptions, reminders, health tracking, and AI-driven insights.",
		subDescription: [
			"Built using Flutter and Firebase for cross-platform performance and data handling.",
			"Integrated GeminiAPI for personalized medical suggestions and chatbot features.",
			"Enabled AI-based insights, medication alerts, and online medicine ordering.",
			"Selected for Google Solution Challenge 2024 (Regional India).",
		],
		href: "https://www.linkedin.com/posts/rohitpaul23_healthcareinnovation-prescriboapp-geminiintegrate-activity-7224446437411942401-R3yD",
		logo: "/assets/logos/flutter-inner.svg",
		image: "/assets/projects/Prescribo.png",
		tags: [
			{ id: 1, name: "Flutter", path: "/assets/logos/flutter-inner.svg" },
			{ id: 2, name: "GeminiAPI", path: "/assets/logos/gemini.png" },
			{ id: 3, name: "Firebase", path: "/assets/logos/firebase.png" },
			{ id: 4, name: "Figma", path: "/assets/logos/figma.png" },
		],
	},
	{
		id: 4,
		title: "Drop Guardian: AI Dropout Predictor",
		description:
			"An intelligent system to detect student dropout risks using predictive analytics and intervention frameworks.",
		subDescription: [
			"Developed with ReactJS, Flask, and Firebase for full-stack integration.",
			"Applied ML models to assess dropout risks during COVID-19 disruptions.",
			"Incorporated Intel OneAPI and achieved award at IISc Intel Hackathon 2023.",
			"Enabled educators to track, identify, and intervene based on real-time analytics.",
		],
		href: "",
		logo: "/assets/logos/react.svg",
		image: "/assets/projects/DropGuardian.png",
		tags: [
			{ id: 1, name: "ReactJS", path: "/assets/logos/react.svg" },
			{ id: 2, name: "Flask", path: "/assets/logos/flask.png" },
			{ id: 3, name: "Intel OneAPI", path: "/assets/logos/intel.png" },
			{ id: 4, name: "Firebase", path: "/assets/logos/firebase.png" },
		],
	},
	{
		id: 5,
		title: "Seed Master: Agricultural Robot",
		description:
			"An autonomous robot that automates seed sowing, soil watering, and soil mixing to boost farm productivity.",
		subDescription: [
			"Designed in Blender and Sketchfab with logic integrated in Unreal Engine 5.",
			"Automates key farming operations, reducing manual labor requirements.",
			"Improves precision of seed placement and soil management using robotic systems.",
			"Recognized in Ninjacart Hackathon (Bangalore) and Innovathon (Assam Startup).",
		],
		href: "https://github.com/RuPaul23/SeedMaster",
		logo: "/assets/logos/UE.jpg",
		image: "/assets/projects/Seedmaster.png",
		tags: [
			{ id: 1, name: "Unreal Engine", path: "/assets/logos/UE.jpg" },
			{ id: 2, name: "Blender", path: "/assets/logos/blender.jpg" },
			{ id: 3, name: "AutoCAD Fusion 360", path: "/assets/logos/fusion360.jpg" },
		],
	},
	{
		id: 6,
		title: "AR Indoor Navigation System",
		description:
			"AR-powered real-time indoor navigation system for hospitals, malls, and complex buildings.",
		subDescription: [
			"Developed using Unity and AR Foundation to guide users with adaptive paths and markers.",
			"Implemented OpenCV-based obstacle detection to enhance navigation safety.",
			"Designed real-time AR overlays for intuitive indoor guidance and feedback.",
			"Optimized for cross-device mobile performance and accessibility.",
		],
		href: "https://github.com/RuPaul23/ARNavigation",
		logo: "/assets/logos/Unity.png",
		image: "/assets/projects/ARNav.png",
		tags: [
			{ id: 1, name: "Unity", path: "/assets/logos/Unity.png" },
			{ id: 2, name: "OpenCV", path: "/assets/logos/OpenCV_Logo.png" },
		],
	},
];

export const mySocials = [
  {
    name: "Email",
    href: "mailto:paulrohit2021@gmail.com",
    icon: "/assets/socials/Email.png",
  },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/rohitpaul23/",
    icon: "/assets/socials/linkedIn.svg",
  },
  {
    name: "Github",
    href: "https://github.com/RuPaul23",
    icon: "/assets/socials/github.png",
  },
];

// Experiences and Skills
export const experiences = [
  {
    title: "Final Year Research Intern",
    job: "Physical Research Laboratory, Ahmedabad (PRL, ISRO)",
    date: "Jan 2025 – Present",
    image: "/assets/work/ISRO.svg",
    contents: [
      "Developed and optimized laser and path configurations using Zemax OpticStudio for enhanced simulation accuracy in satellite-based LIDAR systems.",
      "Implemented full space-based LIDAR simulation in Unreal Engine integrating laser CAD models with physics simulation.",
      "Conducting research on Mount Hunga Tonga-Hunga Haapai 2022 eruption using geophysical data modeling and analytical tools for volcanology insights."
    ]
  },
  {
    title: "Summer Research Intern",
    job: "Indian Institute of Technology, Goa (IIT, Goa)",
    date: "Jul 2024 – Present",
    image: "/assets/work/IITGoa.svg",
    contents: [
      "Developed a bike simulation in Unreal Engine 5 with accurate real-world dynamics using advanced physics modeling.",
      "Implemented adaptive traffic systems simulating traffic regulations and road interactions.",
      "Contributed to road safety awareness by analyzing diverse traffic conditions in the simulation."
    ]
  },
  {
    title: "Research And Development Intern",
    job: "Da'Spatio Rhobotique Laboratory Pvt. Ltd. (DSRL Global, IIT Guwahati)",
    date: "May 2023 – Present",
    image: "/assets/work/DSRL.png",
    contents: [
      "Designed highly detailed seasonal environments in Unreal Engine 5 for robotic navigation and simulations.",
      "Enhanced robotic vision algorithms with novel feature extraction techniques improving object detection accuracy.",
      "Implemented and optimized YOLO-based deep learning vision models for real-time object recognition and efficiency."
    ]
  },
  {
    title: "Summer Research Intern",
    job: "Jadavpur University, Kolkata (JU, Kolkata)",
    date: "Jul 2023 – Aug 2023",
    image: "/assets/work/JU.png",
    contents: [
      "Improved MCQ generation using text analysis, classification, and regional translation methods.",
      "Enhanced NLP models by optimizing PKE, RAKE, and distractor generation methods.",
      "Developed bidirectional English-Bengali MCQ translation system using RAKE for educational applications."
    ]
  },
];

// Skills and Tools
export const skills = [
  {
    name: "Unreal Engine",
    img: "/assets/logos/UE.jpg"
  },
  {
    name: "Fusion 360",
    img: "/assets/logos/fusion360.jpg"
  },
  {
    name: "Unity",
    img: "/assets/logos/Unity.png"
  },
  {
    name: "Blender",
    img: "/assets/logos/blender.jpg"
  },
  {
    name: "ReactJS",
    img: "/assets/logos/react.svg"
  },
  {
    name: "OpenCV",
    img: "/assets/logos/OpenCV_Logo.png"
  },
  {
    name: "Figma",
    img: "/assets/logos/figma.png"
  },
  {
    name: "Tailwind CSS",
    img: "/assets/logos/tailwindcss.svg"
  },
  {
    name: "Firebase",
    img: "/assets/logos/firebase.png"
  },
  {
    name: "C#",
    img: "/assets/logos/csharp.svg"
  },
  {
    name: "ESP32",
    img: "/assets/logos/esp32.png"
  },
  {
    name: "Raspberry Pi",
    img: "/assets/logos/Raspberry_Pi_logo.jpg"
  }
];
