"use client"
import type React from "react"
import { useState } from "react"
import Image from "next/image"

export default function LoginForm() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        console.log("Login attempt with:", username)
    }

    return (
        <form onSubmit={handleSubmit} className="portrait:space-y-[2.5vh] landscape:space-y-[2.5vw]">
            <div className="bg-[radial-gradient(circle_at_center,_#992FAF,_#200636)] portrait:border-[.1vh] portrait:p-[.6vh] landscape:p-[.6vw]  rounded-full landscape:border-[.1vw] border-[#9ecbe9ba]">
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    required
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full  landscape:border-[.1vw] portrait:border-[.1vh]  border-[#BCE4FE] text-white tracking-wide portrait:placeholder:text-[3.5vh] portrait:py-[1vh] landscape:placeholder:text-[2.8vw] landscape:py-[.1vw] portrait:px-[3vh] portrait:text-[3vh] landscape:text-[2.8vw]  landscape:px-[2vw]  rounded-full custom-placeholder praise focus:outline-none landscape:focus:ring-[.1vw] portrait:focus:ring-[.1vh] focus:ring-purple-400 "
                />
            </div>

            <div className="bg-[radial-gradient(circle_at_center,_#992FAF,_#200636)] portrait:border-[.1vh] portrait:p-[.6vh] landscape:p-[.6vw]  rounded-full landscape:border-[.1vw] border-[#9ecbe9ba]">
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="w-full  landscape:border-[.1vw] portrait:border-[.1vh]  border-[#BCE4FE] text-white tracking-wide portrait:placeholder:text-[3.5vh] portrait:py-[1vh] landscape:placeholder:text-[2.8vw] landscape:py-[.1vw] portrait:px-[3vh] portrait:text-[3vh] landscape:text-[2.8vw]  landscape:px-[2vw]  rounded-full custom-placeholder praise focus:outline-none landscape:focus:ring-[.1vw] portrait:focus:ring-[.1vh] focus:ring-purple-400 "
                />
            </div>

            <button
                type="submit"
                className="w-full cursor-pointer hover:scale-110 transition-all flex justify-center"
            >
                <div className="relative portrait:w-[16vh] landscape:w-[13vw] aspect-[3/2]">
                    <Image
                        src="/assets/images/login-button.png"
                        alt="login-button"
                        fill
                        className="object-contain"
                        priority
                    />
                </div>
            </button>
        </form>
    )
}
