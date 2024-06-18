import { Outlet } from "react-router-dom"
import Header from "./components/Header"
import Nav from "./components/Navigation"
import Footer from "./components/Footer"

export default function RootRouter() {
    return (
        <div className='flex flex-col shadow bg-white min-h-[100vh] w-full max-w-[800px] m-auto'>
            <Header />
            <Nav />
            <main className="grow">
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}