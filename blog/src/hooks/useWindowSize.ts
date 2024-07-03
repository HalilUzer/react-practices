import { useState, useEffect } from "react";

const useWindowSize = () => {
    const [windowsSize, setWindowsSize] = useState<{ width: number, height: number }>()

    useEffect(() => {
        const handleResize = () => {
            setWindowsSize({
                width: window.innerWidth,
                height: window.innerHeight
            })
        }
        handleResize();
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);;
    }, []);

    return windowsSize;
}

export default useWindowSize;