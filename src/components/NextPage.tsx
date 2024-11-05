"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

type NextPageProps = {
  url: string;
  title: string;
};

const NextPage = ({ url, title }: NextPageProps) => {
  const router = useRouter();
  return (
    <div>
      <Button variant={"link"} size="lg" className="text-md text-blue-500 font-semibold group" onClick={() => router.push(url)}>
        {title}
        <div className="transition-transform duration-300 group-hover:translate-x-2">
        <ArrowRight/>
        </div>
      </Button>
    </div>
  );
};

export default NextPage;
