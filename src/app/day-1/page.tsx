"use client";
import { AlignJustify, House, LucideIcon, Mail, Settings, User, X } from "lucide-react";
import { useState } from "react";

export default function Page() {

    const [isClicked, setIsClicked] = useState(false);

    const icons = [House, Mail, User, Settings]

    return (
        <div className="min-h-[200vh]">
            <div className="fixed top-5 left-5">
                <div className="bg-gray-100 p-4 rounded-full cursor-pointer">
                    {isClicked ?
                        <ShowIcon icon={X} onClick={() => setIsClicked(false)} /> :
                        <ShowIcon icon={AlignJustify} onClick={() => setIsClicked(true)} />}
                    {
                        icons.map((icon, idx) => {
                            const Icon = icon;
                            return (
                                <div style={isClicked ? { top: (idx + 1) * 90 + "%" } : { top: 0 }} className="absolute bg-gray-100 p-4 rounded-full left-1/2 -translate-x-1/2 -z-10 duration-200" key={idx}>
                                    <Icon className="text-gray-500 hover:text-black" />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

function ShowIcon({ icon, className, onClick }: { icon: LucideIcon, className?: string, onClick?: () => void }) {

    const Icon = icon;
    return (
        <div className="relative">
            <Icon className={className} onClick={onClick} />
        </div>
    )
}