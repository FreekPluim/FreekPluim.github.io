"use client";

import TagComponent from "./TagComponent";
import HoverVideoPlayer from "react-hover-video-player";
import { useState } from "react";
import { PortfolioItemModal } from "./PortfolioItemModal";

export default function PortfolioItem({
  title,
  videoSrc,
  img,
  oneLiner,
  tags,
  description,
  github,
  itch,
}) {
  const filteredTags = tags.filter((t) => t !== "All");

  const [isModalVisible, setIsModalVisible] = useState(false);

  const hasLink = github || itch ? true : false;

  return (
    <div
      onClick={(e) => {
        if (isModalVisible) return;
        setIsModalVisible(true);
      }}
      className="w-full bg-[#23122e] rounded-lg overflow-hidden shadow flex flex-col"
    >
      {videoSrc != null && (
        <HoverVideoPlayer
          className="w-full object-cover"
          videoSrc={videoSrc}
          pausedOverlay={<ThumbnailImage img={img} tags={tags} />}
          loadingOverlay={
            <div className="loading-overlay">
              <div className="loading-spinner" />
            </div>
          }
        />
      )}
      {videoSrc == null && (
        <div>
          <ThumbnailImage img={img} tags={tags} />
        </div>
      )}
      <div className="p-3 flex flex-col h-full">
        <h1 className="text-4xl text-white">{title}</h1>
        <p className="text-md text-white pt-2 pb-2">{oneLiner}</p>
        <div className="mt-auto flex flex-wrap-reverse gap-2 pt-2 pb-2">
          {filteredTags.map((tag) => (
            <TagComponent text={tag} />
          ))}
        </div>
      </div>

      <PortfolioItemModal
        isVisible={isModalVisible}
        onClose={() => setIsModalVisible(false)}
      >
        <div className="w-full p-2">
          <h1 className="text-3xl font-bold flex justify-center">{title}</h1>
          {videoSrc != null && (
            <HoverVideoPlayer
              className="w-full object-cover"
              videoSrc={videoSrc}
              pausedOverlay={<ThumbnailImage img={img} tags={tags} />}
              loadingOverlay={
                <div className="loading-overlay">
                  <div className="loading-spinner" />
                </div>
              }
            />
          )}
          {videoSrc == null && (
            <div>
              <ThumbnailImage img={img} tags={tags} />
            </div>
          )}
          {description.map((line: string) => (
            <div
              className={"mt-2"}
              dangerouslySetInnerHTML={{ __html: line }}
            ></div>
          ))}

          {hasLink && <h2 className="text-xl mt-5">Find the project here:</h2>}

          <div className="flex flex-col">
            {github != null && (
              <a href={github} target="_blank" className="font-bold mt-1">
                - GitHub Page
              </a>
            )}
            {itch != null && (
              <a href={itch} target="_blank" className="font-bold mb-1">
                - Itch Page
              </a>
            )}
          </div>

          <div className="mt-auto flex flex-wrap-reverse gap-2 pt-2">
            {filteredTags.map((tag) => (
              <TagComponent text={tag} />
            ))}
          </div>
        </div>
      </PortfolioItemModal>
    </div>
  );
}

type CheckBasedOnTagProps = {
  img: string;
  tags: string[];
};
function ThumbnailImage({ img, tags }: CheckBasedOnTagProps) {
  if (img != null) {
    return (
      <img
        src={img}
        alt={img + " Image"}
        style={{
          width: "100%",
          height: "101%",
          objectFit: "cover",
        }}
      />
    );
  } else if (tags.includes("Unity")) {
    return (
      <img
        className="w-full object-cover"
        src={"/Unity.png"}
        alt="Unity Image"
      />
    );
  } else if (tags.includes("Unreal Engine 5.4")) {
    return (
      <img
        className="w-full object-cover"
        src={"/UE.jpg"}
        alt="Unreal Engine Image"
      />
    );
  } else if (tags.includes("Web")) {
    return (
      <img className="w-full object-cover" src={"/Web.jpg"} alt="Code Image" />
    );
  }
}
