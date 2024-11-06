"use client";

import { modalButtonCss, modalButtonSizeCss, modalContentCss, modalDescriptionCss, modalDividerCss, modalOverlyCss, modalTitleCss } from "@/components/ExampleCode";
import NextPage from "@/components/NextPage";
import PrevPage from "@/components/PrevPage";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";

const page = () => {
  return (
    <div>
        <span className="text-sm font-semibold text-blue-500">
          custom css
        </span>
        <h1 className="text-4xl font-black py-2">
          How to use custom css
        </h1>

        <div className="mt-10">
          <h4 className="text-lg font-medium">modal overlay design override</h4>

        <SyntaxHighlighter language="css" style={dracula}>
          {modalOverlyCss}
        </SyntaxHighlighter>

        </div>


        <div className="mt-10">
          <h4 className="text-lg font-medium">modal content design override</h4>

        <SyntaxHighlighter language="css" style={dracula}>
          {modalContentCss}
        </SyntaxHighlighter>

        </div>

        <div className="mt-10">
          <h4 className="text-lg font-medium">modal title design override</h4>

        <SyntaxHighlighter language="css" style={dracula}>
          {modalTitleCss}
        </SyntaxHighlighter>

        </div>

        <div className="mt-10">
          <h4 className="text-lg font-medium">modal description design override</h4>

        <SyntaxHighlighter language="css" style={dracula}>
          {modalDescriptionCss}
        </SyntaxHighlighter>

        </div>

        <div className="mt-10">
          <h4 className="text-lg font-medium">modal button override</h4>

        <SyntaxHighlighter language="css" style={dracula}>
          {modalButtonCss}
        </SyntaxHighlighter>

        </div>

        <div className="mt-10">
          <h4 className="text-lg font-medium">modal button color design override</h4>

        <SyntaxHighlighter language="css" style={dracula}>
          {modalButtonSizeCss}
        </SyntaxHighlighter>

        </div>

        <div className="mt-10">
          <h4 className="text-lg font-medium">modal divider design override</h4>

        <SyntaxHighlighter language="css" style={dracula}>
          {modalDividerCss}
        </SyntaxHighlighter>

        </div>


        <div className="flex justify-between mt-20">
        <PrevPage url="/doc/custom-css" title="How to use custom css" />
        <NextPage url="/doc/accessibility" title="How to use accessibility" />
      </div>
    </div>
  )
}

export default page