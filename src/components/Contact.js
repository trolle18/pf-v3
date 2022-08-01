// import { Link } from "react-router-dom"

export default function Contact() {

    // const MailTo = ({ mailto, label }) => {
    //     return (
    //         <Link to={mailto}
    //             onClick={(e) => {
    //                 window.location.href = mailto;
    //                 e.preventDefault();
    //             }}
    //         >
    //             {label}
    //         </Link>
    //     )
    // }

    return (
        <>
            <section className="contact-cntr section">
                <h2 id="contact">Contact</h2>
                <span>Feel free to send an email, whether you have any questions or just to say hi, and I'll get back to you!</span>
                {/* <button mailto="sofietrolle@hotmail.com">Get in touch</button> */}
                <a href="mailto:sofietrolle@hotmail.com">Get in touch</a>
                {/* <MailTo mailto="sofietrolle@hotmail.com" label="Get in touch"/> */}
            </section>
        
        </>
    )
};