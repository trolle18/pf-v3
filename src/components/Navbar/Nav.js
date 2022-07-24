// import { IoMenuOutline } from "react-icons/io5";
import './Nav.scss'; 
import Dropdown from "./Dropdown";

export default function Nav() {
    
    return (
        <>
            <div className="nav-cntr">
                <div className="nav-inner-cntr">

                    <div className="nav-logo"> 
                        <a href="/">Sofie Trolle</a> 
                    </div>
                    <div className="nav-links">
                        <a href="#about"> About </a> 
                        <a href="#work"> Work </a> 
                        <a href="#contact"> Contact </a>                         
                    </div>

                    {/* <div className="nav-dropdown">
                        <button>
                            <IoMenuOutline/>
                        </button>
                        <div className="dropdown-content">
                            <a href="#about"> About </a> 
                            <a href="#work"> Work </a> 
                            <a href="#contact"> Contact </a>     
                        </div>
                        <Dropdown />
                    </div> */}

                </div>
            </div>
        
        </>
    )
};




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
