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
     <ModalDescription>This is modal Description</ModalDescription>
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
