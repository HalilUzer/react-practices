import { Outlet } from "react-router-dom"
import Header from "../Header"
import Nav from "../Nav"
import Footer from "../Footer"

export default function Root() {
    return (
        <div className='flex flex-col shadow bg-white min-h-[100vh] w-full max-w-[800px]'>
            <Header />
            <Nav />
            <main className="grow m-4">
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}