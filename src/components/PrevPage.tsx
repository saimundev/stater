"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { ArrowLeft } from "lucide-react";

type NextPageProps = {
  url: string;
  title: string;
};

const PrevPage = ({ url, title }: NextPageProps) => {
  const router = useRouter();
  return (
    <div>
      <Button
        variant={"link"}
        size="lg"
        className="text-md text-blue-500 font-semibold group"
        onClick={() => router.push(url)}
      >
        <div className="transition-transform duration-300 group-hover:-translate-x-2">
          <ArrowLeft />
        </div>
        {title}
      </Button>
    </div>
  );
};

export default PrevPage;
