"use client";

import React from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { Button } from "./ui/button";

const DocsFooter = () => {
  const handleGoLink = (type: "GITHUB" | "LINKEDIN") => {
    if (type === "GITHUB") {
      window.open("https://github.com/saimundev", "_blank");
    } else {
      window.open("https://bd.linkedin.com/in/saimundev", "_blank");
    }
  };
  return (
    <div className="flex justify-between py-14 border-t border-gray-200 mt-20">
      <span>
        Copyright © <a href="http://saimundev.vercel.app" target="_blank" className="text-blue-500">saimundev</a>{" "}
      </span>
      <div className="flex gap-4">
        <Button
          size={"icon"}
          variant={"outline"}
          onClick={() => handleGoLink("GITHUB")}
        >
          <BsGithub />
        </Button>
        <Button
          size={"icon"}
          variant={"outline"}
          onClick={() => handleGoLink("LINKEDIN")}
        >
          <BsLinkedin />
        </Button>
      </div>
    </div>
  );
};

export default DocsFooter;
