"use client";

import { FaHtml5, FaCss3, FaFigma, FaJava, FaAndroid} from "react-icons/fa";
import {SiFlutter} from "react-icons/si";

import { Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import { Tooltip, TooltipProvider, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { motion } from "framer-motion";
import { ScrollArea } from "@/components/ui/scroll-area";


const about = {
  title: "About me",
  description: "Hi, I'm Hanzala, an Android developer with a passion for crafting seamless mobile experiences. With a sharp focus on Flutter and Dart, I transform ideas into intuitive, efficient apps that delight users. Let's create the future of mobile together!",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Hanzala Ahmed Malik",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+92) 334 5222259",
    },
    {
      fieldName: "Experience",
      fieldValue: "1+ Years",
    },
    {
      fieldName: "Skype",
      fieldValue: "Hanzala Ahmed Malik",
    },
    {
      fieldName: "Email",
      fieldValue: "hanzalaahmed6718@gmail.com",
    },
    {
      fieldName: "FreeLance",
      fieldValue: "Available",
    },
    {
      fieldName: "Language",
      fieldValue: "English, Urdu, Hindi",
    },
  ],
};

const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My Experience",
  description: "Hi, I'm Hanzala, an Android developer with a passion for crafting seamless mobile experiences. With a sharp focus on Flutter and Dart, I transform ideas into intuitive, efficient apps that delight users. Let's create the future of mobile together!",
  items: [
    {
      company: "Binary Soft Solutions",
      position: "Junior Android Developer",
      duration: "Aug 2024 - Present",
    },

    {
      company: "Artificial Intelligence Community Pakistan",
      position: "Flutter Internee",
      duration: "Spring 2024",
    },

  ]
};

const education = {
  icon: "/assets/resume/cap.svg",
  title: "My Education",
  description: "Hi, I'm Hanzala, an Android developer with a passion for crafting seamless mobile experiences. With a sharp focus on Flutter and Dart, I transform ideas into intuitive, efficient apps that delight users. Let's create the future of mobile together!",
  items: [
    {
      institute: "Riphah International University",
      degree: "Bachelor Of Science In Computer Science",
      duration: "2020 - 2024",
    },

    {
      institute: "Sir Syed Science College",
      degree: "Higher Secondary School Certificate",
      duration: "2016 - 2018",
    },

    {
      institute: "Sir Syed Public School",
      degree: "Secondary School Certificiate",
      duration: "2006 - 2016",
    },
  ],
};

const skills = {
  title: "My Skills",
  description: "Hi, I'm Hanzala, an Android developer with a passion for crafting seamless mobile experiences. With a sharp focus on Flutter and Dart, I transform ideas into intuitive, efficient apps that delight users. Let's create the future of mobile together!",
  skillList: [
    {
      icon: <FaAndroid />,
      name: "Android Development",
    },
    {
      icon: <FaJava />,
      name: "Java",
    },
    {
      icon: <SiFlutter />,
      name: "Flutter",
    },
    {
      icon: <FaHtml5 />,
      name: "Html 5",
    },
    {
      icon: <FaCss3 />,
      name: "Css 3",
    },
    {
      icon: <FaFigma />,
      name: "Figma",
    },
  ],
};

const Resume = () => {
  return (
    <motion.div
    initial = {{opacity: 0}} 
    animate= {{
      opacity: 1, 
      transition: {delay: 2.4, duration: 0.4, ease: 'easeIn'}
    }}
    className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs>
          <TabsList>
            <TabsTrigger>About Me</TabsTrigger>
            <TabsTrigger>Experience</TabsTrigger>
            <TabsTrigger>Education</TabsTrigger>
            <TabsTrigger>Skills</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
    </motion.div>
  )
}

export default Resume