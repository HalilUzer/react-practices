import { ClipLoader } from "react-spinners";
import { MdOutlineDone } from "react-icons/md";
import React from "react";

export default function SubmitButton({ isLoading, isDone }) {
    return <button type="submit" className="grid bg-gray-100 border border-black border-solid rounded-lg mb-2 hover:bg-gray-300 place-content-center p-1">{isLoading ? <ClipLoader size={25} /> : isDone ?
        <MdOutlineDone size={25} /> : "Submit"}</button>
}