import React, { useState } from "react"
import { Outlet } from "react-router-dom"
import Header from "../components/Header.tsx"
import Navigation from "../components/Navigation"
import Footer from "../components/Footer.tsx"

export default function RootRouter() {
    const [keyword, setKeyword] = useState('')

    return (
        <div className='flex flex-col shadow bg-white min-h-[100vh] w-full max-w-[800px] m-auto dark:bg-gray-600 dark:text-white transition-colors'>
            <Header />
            <Navigation keyword={keyword} setKeyword={setKeyword} />
            <main className="grow">
                <Outlet context={keyword} />
            </main>
            <Footer />
        </div>
    )
}