export const simpleStartCode = `
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

export const buildInComponentStartCode = `
import React, { useState } from "react";
import {
 Modal,
 ModalCancelButton,
 ModalDescription,
 ModalFooter,
 ModalHeader,
 ModalSuccessButton,
 ModalTitle,
} from "react-beautiful-modals";


const App = () => {
 const [open, setOpen] = useState(false);


 return (
   <Modal open={open} onClose={() => setOpen(false)}>
     <ModalHeader>
       <ModalTitle>This is modal title</ModalTitle>
     </ModalHeader>
     <ModalDescription>This is modal Description</ModalDescription>
   </Modal>
 );
};


export default App;
`;

export const modalWithButtonStartCode = `
import React, { useState } from "react";
import {
 Modal,
 ModalCancelButton,
 ModalDescription,
 ModalFooter,
 ModalHeader,
 ModalSuccessButton,
 ModalTitle,
} from "react-beautiful-modals";


const App = () => {
 const [open, setOpen] = useState(false);


 return (
   <Modal open={open} onClose={() => setOpen(false)}>
     <ModalHeader>
       <ModalTitle>This is modal title</ModalTitle>
     </ModalHeader>
      <ModalDivider/>
     <ModalDescription>This is modal Description</ModalDescription>
      <ModalDivider/>
     <ModalFooter>
       <ModalCancelButton onClose={() => setOpen(false)}>
         Cancel
       </ModalCancelButton>
       <ModalSuccessButton>Continue</ModalSuccessButton>
     </ModalFooter>
   </Modal>
 );
};


export default App;
`;

export const modalAnimatedStartCode = `
import React, { useState } from "react";
import {
 Modal,
 ModalCancelButton,
 ModalDescription,
 ModalFooter,
 ModalHeader,
 ModalSuccessButton,
 ModalTitle,
} from "react-beautiful-modals";


const App = () => {
 const [open, setOpen] = useState(false);


 return (
   <Modal open={open} onClose={() => setOpen(false)} animationType="slide-up">
      <ModalHeader>
       <ModalTitle>This is modal title</ModalTitle>
     </ModalHeader>
     <ModalDescription>This is modal Description</ModalDescription>
     <ModalFooter>
       <ModalCancelButton  onClose={() => setOpen(false)}>
         Cancel
       </ModalCancelButton>
       <ModalSuccessButton>Continue</ModalSuccessButton>
     </ModalFooter>
   </Modal>
 );
};


export default App;
`;

export const modalLoadingButtonStartCode = `
import React, { useState } from "react";
import {
 Modal,
 ModalCancelButton,
 ModalDescription,
 ModalFooter,
 ModalHeader,
 ModalSuccessButton,
 ModalTitle,
} from "react-beautiful-modals";


const App = () => {
 const [open, setOpen] = useState(false);


 return (
   <Modal open={open} onClose={() => setOpen(false)} >
     <ModalHeader>
       <ModalTitle>This is modal title</ModalTitle>
     </ModalHeader>
     <ModalDescription>This is modal Description</ModalDescription>
     <ModalFooter>
       <ModalCancelButton  onClose={() => setOpen(false)}>
         Cancel
       </ModalCancelButton>
       <ModalSuccessButton>Continue</ModalSuccessButton>
     </ModalFooter>
   </Modal>
 );
};


export default App;
`;

export const modalIconButtonStartCode = `
import React, { useState } from "react";
import {
 Modal,
 ModalCancelButton,
 ModalDescription,
 ModalFooter,
 ModalHeader,
 ModalSuccessButton,
 ModalTitle,
} from "react-beautiful-modals";


const App = () => {
 const [open, setOpen] = useState(false);


 return (
   <Modal open={open} onClose={() => setOpen(false)} >
     <ModalHeader>
       <ModalTitle>This is modal title</ModalTitle>
     </ModalHeader>
     <ModalDescription>This is modal Description</ModalDescription>
     <ModalFooter>
       <ModalCancelButton endIcon={<Frown />  onClose={() => setOpen(false)}>
         Cancel
       </ModalCancelButton>
       <ModalSuccessButton startIcon={<Frown />>Continue</ModalSuccessButton>
     </ModalFooter>
   </Modal>
 );
};


export default App;
`;

export const modalOverlyCss = `
.customModalOverly {
      background: #000000cc;
      width: "100%",
      height: "100vh",
      backdropFilter: "blur(2px)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      position: "fixed",
      top: 0,
      left: 0,
        

}
`;

export const modalContentCss = `
.customModalContent {
  position: relative;
  padding: 24px;
  border-radius: 8px;
  background: #fff;
  max-height: 80vh;
  overflow-y: auto;
}
`;

export const modalTitleCss = `
.customModalTitle {
  font-size: var(--title-font-size);
  font-weight: 700;
  color: black;
}

`;

export const modalDescriptionCss = `
.customModalDescription {
  font-size: 15px;
  color: #000000cc;
  padding: 20px 0px;
  line-height: 18px;
  max-height: 500px;
  overflow-y: auto;
  margin-bottom: 10px;
  text-align: justify;
  padding-right: 4px;
}
`;

export const modalButtonCss = `
.secondary {
  background-color: var(--secondary-color);
  color: black;
}
.error {
  background-color: var(--error-color);
  color: white;
}

.success {
  background-color: var(--success-color);
  color: white;
}

.warning {
  background-color: var(--waring-color);
  color: white;
}
.info {
  background-color: var(--info-color);
  color: white;
}
`;

export const modalButtonSizeCss = `
.btn-sm {
  padding: 12px 20px;
  font-size: var(--btn-sm-font-size);
  font-weight: 600;
  border-radius: var(--btn-sm-border-radios);
}

.btn-md {
  padding: 14px 22px;
  font-size: var(--btn-md-font-size);
  font-weight: 600;
  border-radius: var(--btn-md-border-radios);
}

.btn-lg {
  padding: 16px 24px;
  font-size: var(--btn-lg-font-size);
  font-weight: 600;
  border-radius: var(--btn-lg-border-radios);
}
`;

export const modalDividerCss = `
.customModalDivider {
  width: 100%;
  height: 1px;
  background-color: #e5e4e2;
  margin: 8px 0px;
 
}
`;
