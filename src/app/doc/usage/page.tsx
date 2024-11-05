import NextPage from "@/components/NextPage";
import PrevPage from "@/components/PrevPage";
import { Button } from "@/components/ui/button";
import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";

const page = () => {
  const codeString = `
import React, { useState } from "react";
import { Modal } from "react-beautiful-modals";

const App = () => {
  const [open, setOpen] = useState(false);

  return (
    <Modal open={open} onClose={() => setOpen(false)}>
      <h1>Your content here</h1>
    </Modal>
  );
};

export default App;
`;
  return (
    <div>
      <div className="">
        <span className="text-sm font-semibold text-blue-500">Usage</span>
        <h1 className="text-4xl font-black py-2">How to usage</h1>
      </div>
      <div className="">
        <h1 className="text-xl font-medium py-2">Start with simple modal</h1>
        <Button size={"lg"}>Open Modal</Button>
        <SyntaxHighlighter language="javascript" style={dracula}>
          {codeString}
        </SyntaxHighlighter>
      </div>

      <div className="">
        <h1 className="text-xl font-medium py-2">
          Start with build in component modal
        </h1>
      </div>

      <div className="">
        <h1 className="text-xl font-medium py-2">modal with button</h1>
      </div>
      <div className="">
        <h1 className="text-xl font-medium py-2">Animated modal</h1>
      </div>
      <div className="">
        <h1 className="text-xl font-medium py-2">Loading button modal</h1>
      </div>
      <div className="">
        <h1 className="text-xl font-medium py-2">Custom css modal</h1>
      </div>

      <div className="flex justify-between mt-20">
        <PrevPage url="/doc/installation" title="How to install" />
        <NextPage url="/doc/props" title="How to use props" />
      </div>
    </div>
  );
};

export default page;
