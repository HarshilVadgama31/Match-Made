import React from 'react'
import Header from "../components/Header";
import LeftBar from "../components/LeftBar";

function MatchFeed() {
    return (
        <>
            <div className="flex flex-col h-screen w-full bg-bg_light dark:bg-bg_dark">
                <Header/>
                <LeftBar/>
            </div>
        </>
    )
}

export default MatchFeed