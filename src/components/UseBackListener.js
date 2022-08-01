import { useContext, useEffect } from "react";
import { Link, UNSAFE_NavigationContext, useNavigate } from "react-router-dom";

export function UseBackListener() {
    const navigate = useNavigate();

    // const useBackListener = (callback) => {
    //     const navigator = useContext (UNSAFE_NavigationContext).navigator;

    //     useEffect (() => {
    //     const listener = ({ location, action }) => {
    //         console.log("listener", { location, action });
    //         if (action === "POP") {
    //         callback({ location, action });
    //         }
    //     };
    //     const unlisten = navigator.listen(listener);
    //     return unlisten;
    //     }, [callback, navigator]);
    // };

    // useBackListener(({ location }) => {
    //     console.log("Navigated Back", { location });
    //     navigate("/", { replace: true });
    // });

    // ---------------------------------

    // function backClick() {
    //     window.onpopstate = () => {
    //         navigate("/");
    //       }
    // }

    // ---------------------------------


    const BackButton = ({ match, destination }) => {
        let parentPath;
        if (match.path === '/') {
            parentPath = `/${destination}`;
        } else {
            const arr = match.path.split('/');
            const currPage = arr[arr.length - 1];
            parentPath = arr
                .filter((item) => {
                    return item !== currPage;
                })
                .join('/');
        }
        return (
            <Link to={parentPath}>
                {match.path === '/'
                    ? `<-- ${destination.charAt(0).toUpperCase() + destination.slice(1)}`
                    : '<-- Back'}
            </Link>
        );
    };
    

    return (
        <>
        <button onClick={BackButton}>Go back</button>
        </>
    )

}