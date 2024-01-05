import React from "react";
// import { experiences } from "../constants";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

export const experiences = [
  {
    title: "Title 1",
    company_name: "Some text",
    // icon: java,
    iconBg: "#16a34a",
    date: "July 2022 - Nov 2022",
    points: [
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea rerum reprehenderit repellat soluta aspernatur voluptate quam. Eos hic illum dolores labore fuga explicabo voluptatum perferendis expedita esse doloremque! Doloribus, at!",
    ],
  },
  {
    title: "Title 2",
    company_name: "Some text",
    // icon: java,
    iconBg: "white",
    date: "July 2022 - Nov 2022",
    points: [
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea rerum reprehenderit repellat soluta aspernatur voluptate quam. Eos hic illum dolores labore fuga explicabo voluptatum perferendis expedita esse doloremque! Doloribus, at!",
    ],
  },
  {
    title: "Title 3",
    company_name: "Some text",
    // icon: java,
    iconBg: "#16a34a",
    date: "July 2022 - Nov 2022",
    points: [
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea rerum reprehenderit repellat soluta aspernatur voluptate quam. Eos hic illum dolores labore fuga explicabo voluptatum perferendis expedita esse doloremque! Doloribus, at!",
    ],
  },
  {
    title: "Title 4",
    company_name: "Some text",
    // icon: java,
    iconBg: "white",
    date: "July 2022 - Nov 2022",
    points: [
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea rerum reprehenderit repellat soluta aspernatur voluptate quam. Eos hic illum dolores labore fuga explicabo voluptatum perferendis expedita esse doloremque! Doloribus, at!",
    ],
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
