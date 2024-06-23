'use client';
import styles from './style.module.scss'
import { useState } from 'react';
import Project from '../Project';
import { motion } from 'framer-motion';


const projects = [
  {
    title: "Visionary: Eye Health and Illness Detection Application",
    // src: "c2montreal.png",
    color: "#000000",
    des: "Visionary is a web-based application designed to detect eye-related illnesses and help users manage their eye health. The application includes five eye-related tests to assess Vision Acuity, Contrast Sensitivity, Color Blindness, Astigmatism, and Field Vision. Visionary leverages advanced algorithms and a user-friendly interface to provide accurate results and personalized recommendations.",
    tech: "MongoDB , Express.Js , Node.Js , React.js , SVG",
    link: "dd"},
  {
    title: "LearnUp: An Educational Platform for Online Learning",
    // src: "officestudio.png",
    color: "#8C8C8C",
    des: "LearnUp is a comprehensive learning platform designed to streamline course management and enhance the overall learning experience. The platform features robust payment gateway integration, enabling seamless transactions for course enrollment. LearnUp supports various multimedia content, interactive assessments, and progress tracking, making it an effective tool for both educators and students.",
    tech: "MongoDB , Express.Js , Node.Js , React.js , Docker",
    link: "dd"},
  {
    title: "The Sky Films International",
    // src: "officestudio.png",
    color: "#8C8C8C",
    des: "Developed a feature-rich website for Sky Films International, a video production company, using the MERN (MongoDB, Express.js, React, Node.js) stack. The website includes a dynamic portfolio showcasing the company's projects, client testimonials, and an integrated contact form. It features video embedding, responsive design, and an admin panel for content management. The site enhances the company's online presence and engagement with potential clients.",
    tech: "MongoDB , Express.Js , Node.Js , React.js",
    link: "dd"},
  {
    title: "BookPals: Book Exchange Mobile Application",
    // src: "locomotive.png",
    color: "#EFE8D3",
    des: "BookPals is a dynamic mobile application developed using the React Native framework. The app revolutionizes the way users exchange books by incorporating personalized book recommendations and suggestions. BookPals facilitates a community-driven approach to book sharing, enhancing the reading experience through social interaction and engagement.",
    tech: "MongoDB , Express.Js , Node.Js , ReactNative",
    link: "dd"},
  {
    title: "Cleaning Service Management System",
    // src: "silencio.png",
    color: "#706D63",
    des: "The Cleaning Service Management System is an advanced solution developed using the MERN (MongoDB, Express.js, React, and Node.js) stack. This system incorporates cutting-edge features such as location tracking, chatbot integration, and QR code scanning, offering a comprehensive platform for managing cleaning services. The user-friendly interface and robust backend capabilities enhance operational efficiency and customer satisfaction.",
    tech: "MongoDB , Express.Js , Node.Js , React.js , CSS",
    link: "dd"},
  {
    title: "PharMac - Online Pharmacy Management System",
    // src: "silencio.png",
    color: "#706D63",
    des: "PharMac is a Kotlin-based drug management application powered by Firebase. This innovative app simplifies the process of purchasing medications by offering a centralized platform for users to search and buy medications from various pharmacies. PharMac ensures secure transactions and provides users with real-time updates on their orders, promoting a hassle-free pharmacy experience.",
    tech: "Kotlin , MySQL",
    link: "dd"},
  {
    title: "Billo Food - Online Food Ordering System",
    // src: "silencio.png",
    color: "#706D63",
    des: "Billo Food is a comprehensive Java-based online food ordering system designed to cater to customers' culinary needs efficiently. Utilizing object-oriented programming (OOP) principles and following the Model-View-Controller (MVC) architecture, the system allows users to browse menus, place orders, and track delivery statuses. The integration of MySQL for database management ensures data consistency and reliability.",
    tech: "JAVA , JavaScript , MySQL",
    link: "dd"},
  {
    title: "FlyBuy.LK - Online Shopping Platform",
    // src: "silencio.png",
    color: "#706D63",
    des: "FlyBuy.lk is a premier online shopping platform that provides a seamless and convenient experience for customers to browse, discover, and purchase a wide range of products. The platform features an intuitive user interface and robust backend support, ensuring efficient handling of customer queries, order processing, and inventory management. Developed using HTML, CSS, JavaScript, and PHP, FlyBuy.lk stands out for its user-friendly design and reliable performance.",
    tech: "HTML , CSS , PHP , MySQL",
    link: "dd"
  }
  
]

const titleVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      type: 'spring',
      stiffness: 70,
    },
  },
};

export default function Index() {

const [selectedProject, setSelectedProject] = useState(null);

  return (
  <main className={styles.main}>
    
    <div className={styles.body}>
    <motion.div
      className={styles.projectstitle}
      initial="hidden"
      whileInView="visible"
      variants={titleVariants}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      Showcase
    </motion.div>
    
    {
          projects.map((project, index) => (
            <Project
              index={index}
              title={project.title}
              description={project.des}
              tech={project.tech}
              isSelected={selectedProject === index}
              setSelectedProject={setSelectedProject}
              key={index}
            />
          ))
        }
    </div>
    
  </main>
  )
}
