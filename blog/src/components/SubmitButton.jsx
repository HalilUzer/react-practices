import React from "react";

export default function SubmitButton({ children, onClick }) {   

    return (
        <button onClick={onClick} type="submit" className="grid group bg-gray-100 border border-black border-solid rounded-lg mb-2 hover:bg-gray-300 place-content-center p-1 dark:bg-dark-blue dark:hover:bg-black" >
            {children}
        </button>
    )
}