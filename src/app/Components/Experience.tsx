"use client";
import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { workExperience } from "../../../data/index";


export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-28 mb-28 sm:mb-40">
        <h1 className="heading my-20"> My <span className="text-purple"> Experience </span> </h1>
      <VerticalTimeline lineColor="white" animate>
        {workExperience.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
            visible
            className="my-20"
              contentStyle={{
                background: "rgb(2,0,36,1)",
                color:"#fff",
                boxShadow: "none",
                border: "1px solid rgba(0, 0, 0, 0.05)",
                textAlign: "left",
                padding: "1.3rem 2rem",

              }}
              contentArrowStyle={{
                borderRight: "7px solid  rgb(33, 150, 243)",
              }}
              date={item.date}
              icon={<img src={item.thumbnail} alt="icon" />} // Using the thumbnail as an image inside the icon prop
              iconStyle={{
                background: "rgb(33, 150, 243)",
                fontSize: "1.5rem",
              }}
            >
              <h3 className="font-semibold capitalize text-white">{item.title}</h3>
              <p className="font-normal !mt-0">{item.location}</p>
              <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
                {item.desc}
              </p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}
