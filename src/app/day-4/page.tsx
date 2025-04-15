"use client";

import { Dot } from "lucide-react";
import { useState } from "react";

export default function Page() {
    const [outer, setOuter] = useState<"free" | "premium">("free")
    const [inner, setInner] = useState<"monthly" | "annuly">("monthly")
    return (
        <div className="min-h-screen flex justify-center select-none">
            <div>
                <div className="relative mt-40 h-16 flex gap-2 items-center shadow-[2px_2px_2px_2px_rgba(0,_0,_0,_0.1)] rounded-full overflow-hidden p-1 w-[400px]">
                    <div className={`absolute w-1/2 rounded-full h-[85%] duration-300 top-1/2 -translate-y-1/2 bg-black ${outer === "free" ? "left-0" : "left-1/2"}`} />
                    <div className="relative px-5 py-3 w-1/2 text-center rounded-full overflow-hidden cursor-pointer" onClick={() => {
                        setOuter("free");
                        setInner("monthly");
                    }}>
                        <span className={`relative z-10 font-medium ${outer === "free" ? "text-white" : "text-black"}`}>
                            Free
                        </span>
                    </div>
                    <div className={`w-1/2 py-2 relative flex items-center rounded-full cursor-pointer`} onClick={() => setOuter("premium")}>
                        {outer === "premium" && <div className={`absolute h-full w-1/2 z-20 bg-white rounded-full duration-200 ${inner === "monthly" ? "left-0" : "left-1/2"}`} />}
                        <div className={`flex items-center rounded-full w-full gap-1 duration-200 absolute ${outer === "premium" ? "scale-0" : "scale-100"}`}>
                            <div className="text-center rounded-full m-auto">
                                <h3>Premium</h3>
                                <p className="flex justify-center"><span>Monthly</span> <Dot /><span>Annual</span></p>
                            </div>
                        </div>
                        <div className={`w-full z-50 relative flex ${outer === "premium" ? "scale-100" : "scale-0"}`}>
                            <span className={`rounded-full relative h-full w-1/2 text-center font-medium ${inner === "monthly" ? "text-black" : "text-white"}`} onClick={() => setInner("monthly")}>
                                Monthly
                            </span>
                            <span className={`rounded-full w-1/2 text-center font-medium ${inner === "annuly" ? "text-black" : "text-white"}`} onClick={() => setInner("annuly")}>
                                Annualy
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}