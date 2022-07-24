import { useRef, useState, useEffect } from "react";
import { useDetectOutsideClick } from "./UseDetectOutsideClick";
import { IoMenuOutline } from "react-icons/io5";
import './Nav.scss'; 


export default function DropdownTest() {
    const dropdownRef = useRef(null);
    const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
    // const [isActive, setIsActive] = useState(false);

    const onClick = () => { 
        setIsActive(!isActive) 
    };
    console.log(isActive)



    return (
        <>
            <div className="container">
                <div className="menu-container">
                    <button onClick={onClick} className="menu-trigger">
                        <IoMenuOutline/>
                    </button>

                    <nav 
                    ref={dropdownRef} 
                    className={`menu ${isActive ? "active" : "inactive"}`} >
                        <ul>
                            <li>
                                <a href="#about">About</a>
                            </li>
                            <li>
                                <a href="#work">Work</a>
                            </li>
                            <li>
                                <a href="#contact">Contact</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </>
    )
};




    // -----------------------------------------------------------------------

    // import { useState } from "react";
    // // import { useDetectOutsideClick } from "./UseDetectOutsideClick";
    // // import { IoMenuOutline } from "react-icons/io5";
    // import './Dropdown.scss'; 

    // function MenuItems({ children, shown, close }) {
    //     return shown ? ( 
        
    //         // close modal when outside of modal is clicked
    //         <div  className="modal-backdrop"
    //             onClick={() => {close(); }} >

    //             {/* do not close modal if anything inside modal content is clicked*/}
    //             <div className="modal-content" 
    //                 onClick={e => { e.stopPropagation(); }} >
                    
    //                 <button onClick={close}>Close</button>
    //                 {children}

    //             </div>

    //         </div>

    //     ) : null;
    // }

    // export default function Menu() {
    //     const [modalShown, toggleModal] = useState(false);
    //     return (
    //       <div className="">

    //         <p>modalShown: {modalShown.toString()}</p>
    //         <button
    //           onClick={() => {
    //             toggleModal(!modalShown);
    //           }}
    //         >
    //           Toggle Modal
    //         </button>
    //         <MenuItems
    //           shown={modalShown}
    //           close={() => {
    //             toggleModal(false);
    //           }}
    //         >
    //           <h1>Look! I'm inside the modal!</h1>
    //         </MenuItems>
    //       </div>
    //     );
    //   }

    // ----------------------------------------------------------------------------------

    // export default function Dropdown() {
    //     const dropdownRef = useRef(null);
    //     const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
    //     // const [isActive, setIsActive] = useState();
    //     const onClick = () => { setIsActive(!isActive) };
    //     console.log(isActive)

    //     return (
    //         <>
    //             <div className="container">
    //                 <div className="menu-container">
    //                     <button onClick={onClick} className="menu-trigger">
    //                         <IoMenuOutline/>
    //                     </button>

    //                     <nav 
    //                     ref={dropdownRef} 
    //                     className={`menu ${isActive ? "active" : "inactive"}`} >
    //                         <ul>
    //                             <li>
    //                                 <a href="#about">About</a>
    //                             </li>
    //                             <li>
    //                                 <a href="#work">Work</a>
    //                             </li>
    //                             <li>
    //                                 <a href="#contact">Contact</a>
    //                             </li>
    //                         </ul>
    //                     </nav>
    //                 </div>
    //             </div>
    //         </>
    //     )
    // };


    // ----------------------------------------------------------------------------------



    // const useOnClickOutside = (ref, handler) => {
    //     useEffect(() => {
    //         const listener = event => {
    //             if (!ref.current || ref.current.contains(event.target)) return;
    //             handler(event);
    //         };
    //         document.addEventListener("mousedown", listener);

    //         return () => {
    //             document.removeEventListener("mousedown", listener);
    //         };
    //     }, [ref, handler]);
    // };

    // const Dropdown = () => {
    //     const [open, setOpen] = useState(false);
    //     const node = React.useRef();

    //     useOnClickOutside(node, () => setOpen(false));
    //     return(
    //         <div>
    //             <div ref={node}>
    //                 <Burger open={open} setOpen={setOpen} />
    //                 <Menu open={open} setOpen={setOpen} />
    //             </div>
    //         </div>
    //     )

    // }
