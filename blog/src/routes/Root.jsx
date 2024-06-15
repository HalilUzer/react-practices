import { Outlet } from "react-router-dom"
import Header from "../Header"
import Nav from "../Navigation"
import Footer from "../Footer"

export default function Root() {
    return (
        <div className='flex flex-col shadow bg-white min-h-[100vh] w-full max-w-[800px]'>
            <Header />
            <Nav />
            <main className="grow">
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}