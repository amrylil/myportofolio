import {
  FaJs,
  FaHtml5,
  FaReact,
  FaLaravel,
  FaPhp,
  FaNodeJs,
} from "react-icons/fa";
import { FiYoutube } from "react-icons/fi";
import {
  SiTailwindcss,
  SiGin,
  SiGo,
  SiFlutter,
  SiDart,
  SiPostgresql,
  SiMongodb,
  SiKotlin,
  SiFirebase,
  SiMongoose,
} from "react-icons/si";

export const projectsData = [
  {
    title: "Personal Website",
    description:
      "My personal website, I created this website to display my profile, skills and projects. As well as my place to try new technology.",
    type: "Frontend",
    techStack: [
      { name: "JavaScript", icon: FaJs },
      { name: "HTML", icon: FaHtml5 },
      { name: "Tailwind", icon: SiTailwindcss },
      { name: "ReactJs", icon: FaReact },
    ],
    imageUrl: "images/projectPic/portofolio1.jpg",
    url: "https://github.com/AmryLil/myportofolio",
    demoUrl: "https://lil-portofolio.vercel.app/",
  },
  {
    title: "Blood Donor System API",
    description:
      "A RESTful API for managing donors and blood stock with OAuth authentication, using PostgreSQL for the database and Cloudinary for image storage.",
    type: "Backend",
    techStack: [
      { name: "Golang", icon: SiGo },
      { name: "Gin", icon: SiGin },
      { name: "PostgreSQL", icon: SiPostgresql },
    ],
    imageUrl: "images/projectPic/apidonor.jpg",
    url: "https://github.com/amrylil/donor-api",
    demoUrl: "https://donor-darah.duckdns.org/swagger/index.html",
  },
  {
    title: "Blood Donor System Mobile App",
    description:
      "A mobile application for donor registration, viewing donor locations, events, and blood needs, connected to a backend API.",
    type: "Mobile",
    techStack: [
      { name: "Flutter", icon: SiFlutter },
      { name: "Dart", icon: SiDart },
    ],
    imageUrl: "images/projectPic/donordarahapp.png",
    url: "https://github.com/amrylil/donor_mobile_app",
    demoUrl: "https://your-demo-link.com/...",
  },
  {
    title: "Coffee Shop E-commerce",
    description:
      "An e-commerce website for a coffee shop with features for a menu, shopping cart, and checkout.",
    type: "Fullstack",
    techStack: [
      { name: "Laravel", icon: FaLaravel },
      { name: "Tailwind", icon: SiTailwindcss },
      { name: "PHP", icon: FaPhp },
      { name: "PosgreSql", icon: SiPostgresql },
    ],
    imageUrl: "images/projectPic/coffeshop.jpg",
    url: "https://github.com/amrylil/hotel-reservasi-app",
    demoUrl: "https://coffeshop-main-je8hnu.laravel.cloud/...",
  },
  {
    title: "Hotel Reservation System",
    description:
      "A hotel reservation application with features for booking rooms, online payment via Midtrans, and reservation management.",
    type: "Fullstack",
    techStack: [
      { name: "Express.js", icon: FaNodeJs },
      { name: "ReactJS", icon: FaReact },
      { name: "MongoDB", icon: SiMongodb },
      { name: "Tailwind", icon: SiTailwindcss },
      { name: "Mongoose", icon: SiMongoose },
    ],
    imageUrl: "images/projectPic/reservasi-hotel.jpg",
    url: "https://github.com/amrylil/hotel-reservasi-app",
    demoUrl: "https://your-demo-link.com/...",
  },
  {
    title: "Finance Track API",
    description:
      "Backend API for a financial tracking application, responsible for managing income and expense data. Built with Laravel and PostgreSQL.",
    type: "Backend",
    techStack: [
      { name: "Laravel", icon: FaLaravel },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "PHP", icon: FaPhp },
    ],
    imageUrl: "images/projectPic/api-finance-track.jpg",
    url: "https://github.com/amrylil/finance_report_api",
    demoUrl: "https://your-docs-link.com/...",
  },
  {
    title: "Music Player Mobile App",
    description:
      "The music player app enables users to play local and online music (via the YouTube API). Users can create and share playlists with others.",
    type: "Mobile",
    techStack: [
      { name: "Kotlin", icon: SiKotlin },
      { name: "Firebase", icon: SiFirebase },
      { name: "YouTube API", icon: FiYoutube }, // Assuming YouTube API is represented by MongoDB icon for consistency
    ],
    imageUrl: "images/projectPic/mobileapp.jpg",
    url: "https://github.com/AmryLil/MusicPlayer",
    demoUrl:
      "https://play.google.com/store/apps/details?id=com.amry.musicplayer",
  },
];
