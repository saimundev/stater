"use client";

import { Check, Copy } from "lucide-react";
import { useState } from "react";

type InstallCommandProps = {
  text: string;
  type: string;
};

const InstallCommand = ({ text, type }: InstallCommandProps) => {
  const [copy, setCopy] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopy(true);

    setTimeout(() => {
      setCopy(false);
    }, 3000);
  };
  return (
    <div className="max-w-[700px] rounded-lg bg-[#1E293B]  text-white mt-4 py-2">
      <div className="text-sm font-semibold bg-[#293548] rounded-t-none py-3 px-4 flex justify-between">
        <span>{type}</span>
        <div className="cursor-pointer" onClick={handleCopy}>
          {copy ? <Check size={16} /> : <Copy size={16} />}
        </div>
      </div>
      <p className="text-base font-semibold py-4 px-4">{text}</p>
    </div>
  );
};

export default InstallCommand;
