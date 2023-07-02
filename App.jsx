import React from "react";
import Sidebar from "./components/section-1/sidebar";
import Main from "./components/section-2/main";
import Accounts from "./components/section-3/accounts";

const app = () => {
    return (
        <>
            <div className="flex">
                <div className=" w-1/12">
                    <Sidebar />
                </div>
                <div className="w-3/5">
                    <Main />
                </div>
                <div className="w-1/3 ">
                    <Accounts />
                </div>
            </div>

        </>
    )
}

export default app;