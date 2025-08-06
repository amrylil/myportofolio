import {
  FaJs,
  FaHtml5,
  FaReact,
  FaLaravel,
  FaPhp,
  FaNodeJs,
} from "react-icons/fa";
import { FaGolang } from "react-icons/fa6";
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
  SiMysql,
  SiAlpinedotjs,
  SiFilament,
  SiLivewire,
  SiGoland,
  SiReact,
  SiJavascript,
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
    title: "Donor System API",
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
    title: "Donor System Mobile App",
    description:
      "A mobile application for donor registration, viewing donor locations, events, and blood needs, connected to a backend API.",
    type: "Mobile",
    techStack: [
      { name: "Flutter", icon: SiFlutter },
      { name: "Dart", icon: SiDart },
    ],
    imageUrl: "images/projectPic/donor.jpg",
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
    url: "https://github.com/amrylil/coffeshop",
    demoUrl: "https://coffeshop-main-je8hnu.laravel.cloud",
  },
  {
    title: "Helpdesk LLDIKTI 9",
    description:
      "A helpdesk system developed during my MSIB Batch 7 internship at LLDIKTI 9. I worked on the backend API, while the frontend was built using React JS.",
    type: "Fullstack",
    techStack: [
      { name: "Golang", icon: FaGolang, color: "#00ADD8" },
      { name: "Gin", icon: SiGin, color: "#008ECF" },
      { name: "SQL Server", icon: SiMysql, color: "#A91D22" },
      { name: "ReactJS", icon: SiReact, color: "#61DAFB" },
      { name: "JavaScript", icon: FaJs, color: "#F7DF1E" },
      { name: "Tailwind", icon: SiTailwindcss, color: "#38BDF8" },
    ],
    imageUrl: "images/projectPic/dikti.jpg",
    url: "https://github.com/amrylil/helpdesk-lldikti9",
    demoUrl: "https://cshelpdesk-fe-v-2-2024-forked.vercel.app/",
  },
  {
    title: "Hotel Reservation Website",
    description:
      "Frontend website for hotel booking, integrated with backend API to display available rooms, handle reservations, and payments.",
    type: "Frontend",
    techStack: [
      { name: "ReactJS", icon: FaReact },
      { name: "Tailwind", icon: SiTailwindcss },
      { name: "Javascript", icon: SiJavascript },
      { name: "Html", icon: FaHtml5 },
    ],
    imageUrl: "images/projectPic/hotel.jpg",
    url: "https://github.com/amrylil/hotel-reservasi-view",
    demoUrl: "https://hotel-reservasi.vercel.app",
  },
  {
    title: "Hotel Reservation API",
    description:
      "Backend RESTful API for hotel room booking, payment integration with Midtrans, and reservation management.",
    type: "Backend",
    techStack: [
      { name: "Express.js", icon: FaNodeJs },
      { name: "MongoDB", icon: SiMongodb },
      { name: "Mongoose", icon: SiMongoose },
    ],
    imageUrl: "images/projectPic/backend.png",
    url: "https://github.com/amrylil/hotel-reservasi-api",
    demoUrl: "https://hotel-api-demo.vercel.app/docs",
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
    imageUrl: "images/projectPic/backend.png",
    url: "https://github.com/amrylil/finance_report_api",
    demoUrl: "https://your-docs-link.com/...",
  },

  // {
  //   title: "VistaRoom",
  //   description:
  //     "A hotel reservation platform that allows users to book rooms, manage reservations, and handle online payments with a clean and responsive interface.",
  //   type: "Fullstack",
  //   techStack: [
  //     { name: "Laravel", icon: FaLaravel, color: "#FF2D20" },
  //     { name: "MySQL", icon: SiMysql, color: "#00758F" },
  //     { name: "Alpine.js", icon: SiAlpinedotjs, color: "#8BC0D0" },
  //     { name: "Tailwind", icon: SiTailwindcss, color: "#38BDF8" },
  //     { name: "JavaScript", icon: FaJs, color: "#F7DF1E" },
  //   ],
  //   imageUrl: "images/projectPic/vistaroom.jpg",
  //   url: "https://github.com/amrylil/reservasi-hotel",
  //   demoUrl:
  //     "https://play.google.com/store/apps/details?id=com.amry.musicplayer",
  // },
  {
    title: "Handmade Store",
    description:
      "An e-commerce platform for selling handmade crafts online with features for catalog browsing, cart, and checkout.",
    type: "Fullstack",
    techStack: [
      { name: "Laravel", icon: FaLaravel, color: "#FF2D20" },
      { name: "MySQL", icon: SiMysql, color: "#00758F" },
      { name: "Alpine.js", icon: SiAlpinedotjs, color: "#8BC0D0" },
      { name: "Tailwind", icon: SiTailwindcss, color: "#38BDF8" },
      { name: "JavaScript", icon: FaJs, color: "#F7DF1E" },
    ],
    imageUrl: "images/projectPic/handmade.jpg",
    url: "https://github.com/amrylil/handmade",
    demoUrl:
      "https://play.google.com/store/apps/details?id=com.amry.musicplayer",
  },
  {
    title: "LeoniCare",
    description:
      "A web application to manage blood donations, donor registrations, and blood stock information with an admin dashboard using Filament and Livewire.",
    type: "Fullstack",
    techStack: [
      { name: "Laravel", icon: FaLaravel, color: "#FF2D20" },
      { name: "Filament", icon: SiFilament, color: "#16A34A" },
      { name: "Livewire", icon: SiLivewire, color: "#9333EA" },
      { name: "Tailwind", icon: SiTailwindcss, color: "#38BDF8" },
      { name: "MySQL", icon: SiMysql, color: "#00758F" },
    ],
    imageUrl: "images/projectPic/leonicare.jpg",
    url: "https://github.com/amrylil/redlife",
    demoUrl: "https://leonicare.laravel.cloud",
  },
  {
    title: "Music Player Mobile App",
    description:
      "The music player app enables users to play local and online music (via the YouTube API). Users can create and share playlists with others.",
    type: "Mobile",
    techStack: [
      { name: "Kotlin", icon: SiKotlin },
      { name: "Firebase", icon: SiFirebase },
      { name: "YouTube API", icon: FiYoutube },
    ],
    imageUrl: "images/projectPic/mobileapp.jpg",
    url: "https://github.com/AmryLil/MusicPlayer",
    demoUrl:
      "https://play.google.com/store/apps/details?id=com.amry.musicplayer",
  },
];
