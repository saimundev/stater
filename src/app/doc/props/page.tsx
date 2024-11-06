"use client";
import NextPage from "@/components/NextPage";
import PrevPage from "@/components/PrevPage";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const page = () => {
  const modalProps = [
    {
      prop: "open",
      type: "boolean",
      default: "",
      description: "Controls the visibility of the modal or modal content.",
    },
    {
      prop: "onClose",
      type: "() => void",
      default: "",
      description: "Callback function to handle closing of the modal.",
    },
    {
      prop: "children",
      type: "React.ReactNode",
      default: "",
      description: "Content to be displayed inside the component.",
    },
    {
      prop: "size",
      type: "\"sm\",\"md\",\"lg\"",
      default: "\"sm\"",
      description: "Size of the modal.",
    },
    {
      prop: "animationType",
      type: "\"slide-up\",\"slide-down\",\"fade\",\"zoom\"",
      default: "\"zoom\"",
      description: "Type of animation used for the modal.",
    },
    {
      prop: "width",
      type: "number",
      default: "\"25vw\"",
      description: "Custom width for the modal.",
    },
    {
      prop: "disableBackdropClick",
      type: "boolean",
      default: "false",
      description: "Disables closing the modal when clicking on the backdrop.",
    },
    {
      prop: "customModalOverly",
      type: "string",
      default: "",
      description: "Custom class name to apply additional styles or override existing styles.",
    },
    {
      prop: "customModalContent",
      type: "string",
      default: "",
      description: "Custom class name to apply additional styles or override existing styles.",
    }
  ];

  const contentProps = [
    {
      prop: "children",
      type: "React.ReactNode",
      default: "",
      description: "Text content of the title.",
    },
    {
      prop: "fontSize",
      type: "string",
      default: "",
      description: "Custom font size for the title.",
    },
    {
      prop: "color",
      type: "string",
      default: "",
      description: "Color for the title.",
    },
    {
      prop: "textAlign",
      type: "\"left\",\"center\"",
      default: "\"left\"",
      description: "Text alignment for the title.",
    },
    {
      prop: "fontWidth",
      type: "\"300\",\"400\",\"500\",\"600\",\"700\",\"800\",\"900\"",
      default: "\"700\"",
      description: "Font weight for the title.",
    },
    {
      prop: "customModalTitle",
      type: "string",
      default: "",
      description: "Custom class name to apply additional styles or override existing styles.",
    },
    {
      prop: "customModalDescription",
      type: "string",
      default: "",
      description: "Custom class name to apply additional styles or override existing styles.",
    }
  ];

  const buttonProps = [
    {
      prop: "children",
      type: "React.ReactNode",
      default: "",
      description: "Content displayed inside the button.",
    },
    {
      prop: "color",
      type: "\"primary\",\"secondary\", \"success\",\"error\",\"warning\",\"info\",\"primary\"",
      default: "\"secondary\"",
      description: "Color theme for the button.",
    },
    {
      prop: "size",
      type: "\"sm\",\"md\",\"lg\"",
      default: "\"sm\"",
      description: "Size of the button.",
    },
    {
      prop: "animationOnHover",
      type: "\"slide-up\",\"slide-down\", \"fade\",\"zoom\"",
      default: "\"slide-up\"",
      description: "Animation applied when hovering over the button.",
    },
    {
      prop: "disabled",
      type: "boolean",
      default: "false",
      description: "Disables the button when set to true.",
    },
    {
      prop: "onClose",
      type: "() => void",
      default: "",
      description: "Callback for closing the button (useful if the button is part of a modal or similar component).",
    },
    {
      prop: "startIcon",
      type: "React.ReactNode",
      default: "",
      description: "Icon displayed at the start of the button.",
    },
    {
      prop: "endIcon",
      type: "React.ReactNode",
      default: "",
      description: "Icon displayed at the end of the button.",
    },
    {
      prop: "loading",
      type: "boolean",
      default: "false",
      description: "Shows a loading spinner when true.",
    },
    {
      prop: "variant",
      type: "\"contained\",\"outline\", \"text\",\"contained\"",
      default: "\"contained\"",
      description: "Variant style of the button.",
    },
    {
      prop: "customModalCancelButton",
      type: "string",
      default: "\"\"",
      description: "Custom class name to apply additional styles or override existing styles.",
    },
    {
      prop: "customModalSuccessButton",
      type: "string",
      default: "",
      description: "Custom class name to apply additional styles or override existing styles.",
    },
    {
      prop: "primary,secondary,error,success,warning,info",
      type: "string",
      default: "",
      description: "Custom class name to apply additional styles or override existing styles.",
    },
    {
      prop: "btn-sm,btn-md,btn-lg",
      type: "string",
      default: "",
      description: "Custom class name to apply additional styles or override existing styles.",
    }
  ];

  const dividerProps = [
    {
      prop: "color",
      type: "string",
      default: "",
      description: "Color of the divider line.",
    },
    {
      prop: "height",
      type: "string",
      default: "",
      description: "Height of the divider line.",
    },
    {
      prop: "customModalDivider",
      type: "string",
      default: "",
      description: "Custom class name to apply additional styles or override existing styles.",
    }
  ];
  
  
  
  
  return (
    <>
     <span className="text-sm font-semibold text-blue-500">
          Props
        </span>
        <h1 className="text-4xl font-black py-2">
          How to use props
        </h1>
   <div className="mt-10">
   <h3 className="text-2xl font-bold mb-2">Modal Component</h3>
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px] font-bold text-xl">Prop</TableHead>
          <TableHead className="font-bold text-xl">Type</TableHead>
          <TableHead className="font-bold text-xl">Default</TableHead>
          <TableHead className="text-right font-bold text-xl">Description</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {modalProps.map((props) => (
          <TableRow key={props.prop}>
            <TableCell className="font-medium text-base">{props.prop}</TableCell>
            <TableCell className="font-medium text-base">{props.type}</TableCell>
            <TableCell className="font-medium text-base">{props.default}</TableCell>
            <TableCell className="text-right font-medium text-base">{props.description}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      
    </Table>
   </div>


   <div className="mt-32">
   <h3 className="text-2xl font-bold mb-2">Title & Description Component</h3>
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px] font-bold text-xl">Prop</TableHead>
          <TableHead className="font-bold text-xl">Type</TableHead>
          <TableHead className="font-bold text-xl">Default</TableHead>
          <TableHead className="text-right font-bold text-xl">Description</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {contentProps.map((props) => (
          <TableRow key={props.prop}>
            <TableCell className="font-medium text-base">{props.prop}</TableCell>
            <TableCell className="font-medium text-base">{props.type}</TableCell>
            <TableCell className="font-medium text-base">{props.default}</TableCell>
            <TableCell className="text-right font-medium text-base">{props.description}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      
    </Table>
   </div>

   <div className="mt-32">
   <h3 className="text-2xl font-bold mb-2">Button Component</h3>
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px] font-bold text-xl">Prop</TableHead>
          <TableHead className="font-bold text-xl">Type</TableHead>
          <TableHead className="font-bold text-xl">Default</TableHead>
          <TableHead className="text-right font-bold text-xl">Description</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {buttonProps.map((props) => (
          <TableRow key={props.prop}>
            <TableCell className="font-medium text-base">{props.prop}</TableCell>
            <TableCell className="font-medium text-base">{props.type}</TableCell>
            <TableCell className="font-medium text-base">{props.default}</TableCell>
            <TableCell className="text-right font-medium text-base">{props.description}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      
    </Table>
   </div>

   <div className="mt-32">
   <h3 className="text-2xl font-bold mb-2">Divider Component
   </h3>
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px] font-bold text-xl">Prop</TableHead>
          <TableHead className="font-bold text-xl">Type</TableHead>
          <TableHead className="font-bold text-xl">Default</TableHead>
          <TableHead className="text-right font-bold text-xl">Description</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {dividerProps.map((props) => (
          <TableRow key={props.prop}>
            <TableCell className="font-medium text-base">{props.prop}</TableCell>
            <TableCell className="font-medium text-base">{props.type}</TableCell>
            <TableCell className="font-medium text-base">{props.default}</TableCell>
            <TableCell className="text-right font-medium text-base">{props.description}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      
    </Table>
   </div>
   <div className="flex justify-between mt-20">
        <PrevPage url="/doc/usage" title="How to usage" />
        <NextPage url="/doc/custom-css" title="How to use custo css" />
      </div>
    </>
    
  )
}

export default page