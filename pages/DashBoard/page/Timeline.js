import React from "react";
// import { experiences } from "../constants";
import yodaIcon from '../../../public/images/gregu.png'
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

export const experiences = [
  {
    title: "Escape from the Empire",
    company_name: "Dagobah Adventures",
    icon: yodaIcon,
    iconBg: "#16a34a",
    date: "A long time ago, in a galaxy far, far away",
    points: [
      "Baby Yoda, the cutest creature in the universe, found itself in a perilous situation.",
      "The Galactic Empire, enchanted by Baby Yoda's adorableness, wanted to capture it for research.",
      "Yoda, being wise, sensed danger and embarked on a journey to escape from the clutches of the Empire.",
      "Using the Force, Yoda cleverly navigated through dense forests and swampy lands, always staying one step ahead.",
      "Encountering various creatures along the way, Baby Yoda's cuteness melted even the coldest hearts, making unexpected allies.",
      "The Empire, relentless in its pursuit, sent stormtroopers and bounty hunters to capture the tiny green escape artist.",
      "But Yoda, with its small stature and incredible agility, managed to outsmart them at every turn.",
      "Through trials and tribulations, Yoda's adventure became a legend, inspiring hope and laughter across the galaxy.",
    ],
  },
  {
    title: "Friendship with Ewoks",
    company_name: "Endor Expeditions",
    // icon: yodaIcon,
    iconBg: "white",
    date: "A little later, on the forest moon of Endor",
    points: [
      "During Yoda's escape, it stumbled upon the forest moon of Endor, home to the curious and lovable Ewoks.",
      "At first, the Ewoks were cautious, but Yoda's charm quickly won them over.",
      "Yoda and the Ewoks formed an unlikely friendship, and together they devised clever schemes to outsmart the Empire's forces.",
      "The Ewoks, known for their primitive yet effective technology, provided Yoda with ingenious gadgets to aid in the escape.",
      "As the Empire's grip tightened, the combined forces of Baby Yoda and the Ewoks created chaos and confusion, giving them the upper hand.",
      "In the end, the Empire retreated, defeated by the resilience and cuteness of the unlikely alliance.",
      "Baby Yoda bid farewell to its Ewok friends, continuing its journey through the vast galaxy, leaving behind a trail of smiles and laughter.",
    ],
  },
  {
    title: "Hitchhiking with Han Solo",
    company_name: "Millennium Falcon Ventures",
    // icon: yodaIcon,
    iconBg: "#16a34a",
    date: "Onboard the Millennium Falcon",
    points: [
      "In a twist of fate, Baby Yoda found itself hitchhiking on the Millennium Falcon, captained by the charming Han Solo.",
      "The Millennium Falcon, known for its speed and agility, took Yoda to new and unexplored corners of the galaxy.",
      "Han Solo, initially puzzled by the tiny passenger, soon appreciated the wisdom and cuteness that Yoda brought to the crew.",
      "Together with Chewbacca, they embarked on daring missions, outsmarting Imperial cruisers and navigating through asteroid fields.",
      "As the Millennium Falcon soared through the stars, Baby Yoda's influence on the crew became legendary.",
      "Eventually, Yoda bid farewell to Han Solo and Chewbacca, continuing its journey as a galactic wanderer.",
    ],
  },
  // Additional experiences with baby Yoda's adventures
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
                  {/* <img
                    src={experience.icon}
                    alt={experience.company_name}
                    className="w-[60%] h-[60%] object-contain bg-transparent"
                  /> */}
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
