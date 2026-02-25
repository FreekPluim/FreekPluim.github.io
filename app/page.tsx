"use client";

import PortfolioItem from "../components/PortfolioItemComponent";
import projects from "../data/projects.json";
import TagFilter from "../components/TagFilterComponent";
import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const Projects = projects.Projects;

  const allTags: Array<string> = [
    "All",
    "Unity",
    "Unreal Engine 5.4",
    "Web",
    "VR",
    "AR",
    "GameJam",
  ];

  const [tag, setTag] = useState("All");

  const handleTagChange = (newTag: string) => {
    setTag(newTag);
  };

  const filteredProjects = Projects.filter((project) =>
    project.Tags.includes(tag),
  );

  return (
    <>
      <h1 className="text-8xl p-5 text-center mb-30 mt-20">Freek Pluim</h1>

      {/*ABOUT ME*/}
      <div className="flex flex-col md:flex-row justify-center gap-20 lg:gap-50 pb-10 p-10 mb-30">
        <img
          src="/pfp.png"
          alt="Profile Picture"
          className="flex self-center max-h-75 max-w-75 lg:max-w-100 lg:max-h-100 rounded-full"
        />
        <div>
          <h1 className="text-5xl pb-3 w-full ">About Me</h1>
          <p className="max-w-200 lg:mt-15 text-xl">
            My name is Freek Pluim, I graduated from Saxion University of
            Applied Science as a gameplay programmer at the study Creative Media
            & Game Technology.
            <br />I have been developing games for 5 years, mainly in Unity (C#)
            but also in Unreal Engine (Blueprints and C++). I have also worked
            with Web in Angular, React, TypeScript and JavaScript. <br />
            In my free time, I love working on my own projects and participating
            in GameJams, as well as playing games, volleybal and TTRPGs with
            friends.
          </p>
        </div>
      </div>

      <h1 className="text-5xl pl-5 pb-3 w-full flex justify-center mb-10">
        Projects
      </h1>

      {/*TAG FILTERS*/}
      <div className="w-full items-center flex justify-center">
        <div className="pl-5 pb-3 flex flex-wrap justify-center gap-3 max-w-200">
          {allTags.map((t, index) => (
            <div key={index}>
              <TagFilter
                Tag={t}
                onClick={handleTagChange}
                isSelected={tag === t}
              />
            </div>
          ))}
        </div>
      </div>

      {/*Portfolio Items*/}
      <div className="grid lg:grid-cols-5 md:grid-cols-2 gap-5 ml-5 mr-5">
        {filteredProjects.map((project, index) => (
          <PortfolioItem
            key={index}
            title={project.Name}
            videoSrc={project.Video}
            img={project.Img}
            oneLiner={project.Oneliner}
            tags={project.Tags}
            description={project.Description}
            github={project.GitHub}
            itch={project.Itch}
          />
        ))}
      </div>

      {/*FOOTER*/}
      <footer className="flex flex-row justify-center gap-20 pt-10 pb-10">
        <a
          href="https://www.linkedin.com/in/freek-pluim/"
          target="_blank"
          className="font-bold text-lg"
        >
          Linked-In
        </a>
        <a
          href="https://www.github.com/FreekPluim"
          target="_blank"
          className="font-bold text-lg"
        >
          GitHub
        </a>
        <a
          href="https://s4lt1.itch.io/"
          target="_blank"
          className="font-bold text-lg"
        >
          Itch.io
        </a>
      </footer>
    </>
  );
}
