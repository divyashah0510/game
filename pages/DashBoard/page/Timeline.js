import React from "react";
// import { experiences } from "../constants";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

export const experiences = [
  {
    title: "Java Developer",
    company_name: "Second Year of Engineering",
    // icon: java,
    iconBg: "#accbe1",
    date: "July 2022 - Nov 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Python Developer",
    company_name: "Second Year Engineering",
    // icon: python,
    iconBg: "#fbc3bc",
    date: "Jan 2023 - Apr 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Exposys Data Lab",
    // icon: mui,
    iconBg: "#b7e4c7",
    date: "May 2023 - June 2023",
    points: [
      "Developing and maintaining web applications using html, css and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "Third Year Engineering",
    // icon: react,
    iconBg: "#a2d2ff",
    date: "July 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

export const projects = [
  {
    // iconUrl: pricewise,
    theme: "btn-back-red",
    name: "Python Based Web Scraper",
    description:
      "Developed a web application that tracks and notifies users of price changes for products on Amazon, helping users find the best deals.",
    link: "https://github.com/divyashah0510/Product-Analyser",
  },
  {
    // iconUrl: threads,
    theme: "btn-back-green",
    name: "iNoteBook",
    description:
      "Created a full-stack Web app which performs basic crud operations with database connections",
    link: "https://github.com/divyashah0510/inotebook",
  },
  {
    // iconUrl: car,
    theme: "btn-back-blue",
    name: "Password Generator App",
    description: "Designed and built a desktop app for storing passwords.",
    link: "https://github.com/divyashah0510/PasswordGenerator",
  },
  {
    // iconUrl: snapgram,
    theme: "btn-back-pink",
    name: "Society Maintenance App",
    description:
      "Built a complete java application of Society Maintenance , allowing user friendly UI and easing the societal work.",
    link: "https://github.com/divyashah0510/sms",
  },
  {
    // iconUrl: estate,
    theme: "btn-back-black",
    name: "Mail Dispatcher Application",
    description:
      "Developed a web application for sending mass mail messages to various customers",
    link: "https://github.com/divyashah0510/Mail_Dispatcher",
  },
  {
    // iconUrl: FR,
    theme: "btn-back-yellow",
    name: "E-Commerce Web Application",
    description:
      "Created family owned business online web app called FitRight .",
    link: "https://github.com/akshayrathod205/Sem5-MPR-Frontend",
  },
];

const Timeline = () => {
  return (
    <div className="mt-20">
      <h1 className="flex justify-center items-center text-7xl font-extrabold -tracking-tighter homeGlow mb-1 sm:text-7xl">
        Timeline
      </h1>
      <div className="mt-3 flex bg-transparent">
        <VerticalTimeline className="bg-transparent">
          {experiences.map((experience) => (
            <VerticalTimelineElement
              className="bg-transparent"
              key={experience.company_name}
              // date={experience.date}
              icon={
                <div className=" flex justify-center items-center w-full h-full bg-transparent">
                  <img
                    src={experience.icon}
                    alt={experience.company_name}
                    className="w-[60%] h-[60%] object-contain bg-transparent"
                  />
                </div>
              }
              iconStyle={{ background: experience.iconBg }}
              contentStyle={{
                borderBottom: "8px",
                borderStyle: "solid",
                borderBottomColor: experience.iconBg,
                boxShadow: "none",
                backgroundColor: "transparent",
              }}
            >
              <div className="bg-transparent">
                <h3 className="text-white text-xl font-poppins font-semibold bg-transparent">
                  {experience.title}
                </h3>
                <p
                  className="text-white font-medium font-base bg-transparent"
                  style={{ margin: 0 }}
                >
                  {experience.company_name}
                </p>
              </div>
              <ul className="bg-transparent">
                {experience.points.map((point, index) => (
                  <li
                    key={`experience-point-${index}`}
                    className="text-white font-normal pl-1 text-sm bg-transparent"
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default Timeline;
