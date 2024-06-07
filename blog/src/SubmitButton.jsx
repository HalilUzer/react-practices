import {ClipLoader} from "react-spinners";
import {MdOutlineDone} from "react-icons/md";
import React from "react";

export default function SubmitButton({isLoading, isDone}) {
    return <button type="submit">{isLoading ? <ClipLoader size={25}/> : isDone ?
        <MdOutlineDone size={25}/> : "Submit"}</button>
}