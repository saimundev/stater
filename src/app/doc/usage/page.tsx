"use client";

import {
  buildInComponentStartCode,
  modalAnimatedStartCode,
  modalIconButtonStartCode,
  modalLoadingButtonStartCode,
  modalWithButtonStartCode,
  simpleStartCode,
} from "@/components/ExampleCode";
import MoreInfo from "@/components/MoreInfo";
import NextPage from "@/components/NextPage";
import PrevPage from "@/components/PrevPage";
import {
  Modal,
  ModalCancelButton,
  ModalDescription,
  ModalFooter,
  ModalHeader,
  ModalSuccessButton,
  ModalTitle,
} from "@/components/modal/Modal";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Frown } from "lucide-react";
import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";

const UsagePage = () => {
  const [simpleOpen, setSimpleOpen] = useState(false);
  const [componentModalOpen, setComponentOpen] = useState(false);
  const [buttonModalOpen, setButtonModalOpen] = useState(false);
  const [animatedModalOpen, setAnimatedModalOpen] = useState(false);
  const [LoadingButtonModalOpen, setLoadingButtonModalOpen] = useState(false);
  const [CustomCssModalOpen, setCustomCssModalOpen] = useState(false);
  const [iconModalOpen, setIconModalOpen] = useState(false);
  const [largeModalOpen, setLargeModalOpen] = useState(false);
  const [size, setSize] = useState<"lg" | "md" | "sm">("lg");
  const [buttonSize, setButtonSize] = useState<"lg" | "md" | "sm">("sm");
  const [buttonColor, setButtonColor] = useState<
    "primary" | "secondary" | "info" | "error" | "success" | "warning"
  >("secondary");
  const [animationType, setANimationType] = useState<
    "fade" | "zoom" | "slide-up" | "slide-down"
  >("slide-down");

  return (
    <div>
      <div className="">
        <span className="text-sm font-semibold text-blue-500">Usage</span>
        <h1 className="text-4xl font-black py-2">How to usage</h1>
      </div>

      <div className="mt-10">
        <h1 className="modal-type-title">Start with simple modal</h1>

        <SyntaxHighlighter language="javascript" style={dracula}>
          {simpleStartCode}
        </SyntaxHighlighter>
        <Modal open={simpleOpen} onClose={() => setSimpleOpen(false)}>
          <h1 className="text-xl font-semibold mb-4">This is a Modal Title</h1>
          <p>
            Please review the details of your action before confirming. This
            operation is crucial and cannot be reversed once executed. Ensure
            that all information presented is accurate and aligns with your
            intentions. By proceeding, you acknowledge that you accept full
            responsibility for this change.
          </p>
        </Modal>
        <Button
          onClick={() => setSimpleOpen(true)}
          size={"lg"}
          className="mt-2"
        >
          Open Modal
        </Button>
      </div>

      <div className="mt-20">
        <h1 className="modal-type-title">
          Start with build in component modal
        </h1>

        <SyntaxHighlighter language="javascript" style={dracula}>
          {buildInComponentStartCode}
        </SyntaxHighlighter>
        <Modal
          open={componentModalOpen}
          onClose={() => setComponentOpen(false)}
        >
          <ModalHeader>
            <ModalTitle>This is a Modal Title</ModalTitle>
          </ModalHeader>
          <ModalDescription>
            Provide a concise and informative description that effectively
            communicates the purpose of the modal to the user.
          </ModalDescription>
        </Modal>
        <Button
          onClick={() => setComponentOpen(true)}
          size={"lg"}
          className="mt-2"
        >
          Open Modal
        </Button>
      </div>

      <div className="mt-20">
        <h1 className="modal-type-title">Large Modal With Modal Control</h1>

        <SyntaxHighlighter language="javascript" style={dracula}>
          {buildInComponentStartCode}
        </SyntaxHighlighter>
        <Modal
          open={largeModalOpen}
          onClose={() => setLargeModalOpen(false)}
          size={size || "lg"}
        >
          <ModalHeader>
            <ModalTitle>This is a Modal Title</ModalTitle>
          </ModalHeader>
          <ModalDescription>
            Provide a concise and informative description that effectively
            communicates the purpose of the modal to the user.
          </ModalDescription>
        </Modal>
        <div className="flex justify-between items-center">
          <Button
            onClick={() => setLargeModalOpen(true)}
            size={"lg"}
            className="mt-2"
          >
            Open Modal
          </Button>
          <Select
            value={size}
            onValueChange={(value) => setSize(value as "lg" | "md" | "sm")}
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select Size" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="sm">Small</SelectItem>
              <SelectItem value="md">Medium</SelectItem>
              <SelectItem value="lg">Large</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="mt-20">
        <h1 className="modal-type-title">modal with button</h1>

        <SyntaxHighlighter language="javascript" style={dracula}>
          {modalWithButtonStartCode}
        </SyntaxHighlighter>
        <Modal open={buttonModalOpen} onClose={() => setButtonModalOpen(false)}>
          <ModalHeader>
            <ModalTitle>This is a Modal Title</ModalTitle>
          </ModalHeader>
          <ModalDescription>
            Provide a concise and informative description that effectively
            communicates the purpose of the modal to the user.
          </ModalDescription>

          <ModalFooter>
            <ModalCancelButton
              size={buttonSize || "sm"}
              color={buttonColor || "secondary"}
            >
              Cancel
            </ModalCancelButton>
            <ModalSuccessButton>Continue</ModalSuccessButton>
          </ModalFooter>

          <div className="mt-2">
            <span className="text-black/90 text-sm font-semibold mb-4">
              Show Button Preview
            </span>
            <div className="flex justify-between items-center">
              <Select
                value={buttonSize}
                onValueChange={(value) =>
                  setButtonSize(value as "lg" | "md" | "sm")
                }
              >
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Change Button Size" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="sm">Small</SelectItem>
                  <SelectItem value="md">Medium</SelectItem>
                  <SelectItem value="lg">Large</SelectItem>
                </SelectContent>
              </Select>

              <Select
                value={buttonColor}
                onValueChange={(value) =>
                  setButtonColor(
                    value as
                      | "primary"
                      | "secondary"
                      | "info"
                      | "error"
                      | "success"
                      | "warning"
                  )
                }
              >
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Change Button Color" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="primary">Primary</SelectItem>
                  <SelectItem value="secondary">Secondary</SelectItem>
                  <SelectItem value="success">Success</SelectItem>
                  <SelectItem value="info">Info</SelectItem>
                  <SelectItem value="warning">Warning</SelectItem>
                  <SelectItem value="error">Error</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </Modal>
        <Button
          onClick={() => setButtonModalOpen(true)}
          size={"lg"}
          className="mt-2"
        >
          Open Modal
        </Button>

        <MoreInfo text="You can customize the button with props to change color (primary, secondary, success, info, error, warning), apply hover animations (fade, zoom, slide-up, slide-down), control size (sm, md, lg), set variants (contained, outline, text), and enable the disabled state." />
      </div>

      <div className="mt-20">
        <h1 className="modal-type-title">Animated modal</h1>

        <SyntaxHighlighter language="javascript" style={dracula}>
          {modalAnimatedStartCode}
        </SyntaxHighlighter>

        <Modal
          open={animatedModalOpen}
          onClose={() => setAnimatedModalOpen(false)}
          animationType={animationType || "slide-down"}
        >
          <ModalHeader>
            <ModalTitle>This is a Modal Title</ModalTitle>
          </ModalHeader>
          <ModalDescription>
            Provide a concise and informative description that effectively
            communicates the purpose of the modal to the user.
          </ModalDescription>
          <ModalFooter>
            <ModalCancelButton onClose={() => setAnimatedModalOpen(false)}>
              Cancel
            </ModalCancelButton>
            <ModalSuccessButton>Continue</ModalSuccessButton>
          </ModalFooter>
        </Modal>
        <div className="flex justify-between items-center">
          <Button
            onClick={() => setAnimatedModalOpen(true)}
            size={"lg"}
            className="mt-2"
          >
            Open Modal
          </Button>
          <Select
            value={animationType}
            onValueChange={(value) =>
              setANimationType(
                value as "fade" | "zoom" | "slide-up" | "slide-down"
              )
            }
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select Size" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="fade">Fade</SelectItem>
              <SelectItem value="zoom">Zoom</SelectItem>
              <SelectItem value="slide-up">Slide-up</SelectItem>
              <SelectItem value="slide-down">Slide-Down</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <MoreInfo text="You can customize the modal animation types  (zoom, fade, slide-up, slide-down)" />
      </div>

      <div className="mt-20">
        <h1 className="modal-type-title">Loading button modal</h1>

        <SyntaxHighlighter language="javascript" style={dracula}>
          {modalLoadingButtonStartCode}
        </SyntaxHighlighter>

        <Modal
          open={LoadingButtonModalOpen}
          onClose={() => setLoadingButtonModalOpen(false)}
        >
          <ModalHeader>
            <ModalTitle>This is a Modal Title</ModalTitle>
          </ModalHeader>
          <ModalDescription>
            Provide a concise and informative description that effectively
            communicates the purpose of the modal to the user.
          </ModalDescription>
          <ModalFooter>
            <ModalCancelButton onClose={() => setLoadingButtonModalOpen(false)}>
              Cancel
            </ModalCancelButton>
            <ModalSuccessButton loading>Continue</ModalSuccessButton>
          </ModalFooter>
        </Modal>
        <Button
          onClick={() => setLoadingButtonModalOpen(true)}
          size={"lg"}
          className="mt-2"
        >
          Open Modal
        </Button>
        <MoreInfo text="You can customize the button loading. you can pass props loading" />
      </div>

      <div className="mt-20">
        <h1 className="modal-type-title">Icon Button Modal</h1>

        <SyntaxHighlighter language="javascript" style={dracula}>
          {modalIconButtonStartCode}
        </SyntaxHighlighter>

        <Modal open={iconModalOpen} onClose={() => setIconModalOpen(false)}>
          <ModalHeader>
            <ModalTitle>This is a Modal Title</ModalTitle>
          </ModalHeader>
          <ModalDescription>
            Provide a concise and informative description that effectively
            communicates the purpose of the modal to the user.
          </ModalDescription>
          <ModalFooter>
            <ModalCancelButton onClose={() => setIconModalOpen(false)}>
              Cancel
            </ModalCancelButton>
            <ModalSuccessButton startIcon={<Frown />}>
              Continue
            </ModalSuccessButton>
          </ModalFooter>
        </Modal>
        <Button
          onClick={() => setIconModalOpen(true)}
          size={"lg"}
          className="mt-2"
        >
          Open Modal
        </Button>
        <MoreInfo text="You can add icons to the button and display them at the start or end using the props startIcon and endIcon." />
      </div>

      <div className="mt-20">
        <h1 className="modal-type-title">Custom CSS Modal</h1>

        <SyntaxHighlighter language="javascript" style={dracula}>
          {modalWithButtonStartCode}
        </SyntaxHighlighter>

        <Modal
          open={CustomCssModalOpen}
          onClose={() => setCustomCssModalOpen(false)}
        >
          <ModalHeader>
            <ModalTitle>This is a Modal Title</ModalTitle>
          </ModalHeader>
          <ModalDescription>
            Provide a concise and informative description that effectively
            communicates the purpose of the modal to the user.
          </ModalDescription>
          <ModalFooter>
            <ModalCancelButton onClose={() => setCustomCssModalOpen(false)}>
              Cancel
            </ModalCancelButton>
            <ModalSuccessButton>Continue</ModalSuccessButton>
          </ModalFooter>
        </Modal>
        <Button
          onClick={() => setCustomCssModalOpen(true)}
          size={"lg"}
          className="mt-2"
        >
          Open Modal
        </Button>
        <MoreInfo text="You can customize the modal overlay color using the CSS class customModalOverlay and the modal box color using the CSS class customModalContent." />
      </div>

      <div className="flex justify-between mt-20">
        <PrevPage url="/doc/installation" title="How to install" />
        <NextPage url="/doc/props" title="How to use props" />
      </div>
    </div>
  );
};

export default UsagePage;
