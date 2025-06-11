"use client"
import type React from "react"
import { useState } from "react"
import Image from "next/image"
import toast from "react-hot-toast"
import { useRouter } from "next/navigation"
import Notification from "./Notification"

export default function LoginForm() {
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setIsLoading(true);

        const formData = new FormData(event.currentTarget);
        const username = formData.get("username") as string;
        const password = formData.get("password") as string;

        try {
            const response = await fetch('/api/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password }),
                credentials: 'include'
            });

            const data = await response.json();

            if (!response.ok) {
                toast.custom(t => (
                    <Notification
                        visible={t.visible}
                        className="sm:rotate-0 -rotate-90"
                        message={data?.message || 'Login failed'}
                    />
                ));
            } else {
                toast.custom(t => (
                    <Notification
                        visible={t.visible}
                        className="sm:rotate-0 -rotate-90"
                        message="Login successful"
                    />
                ));
                router.push('/');
            }

        } catch (error) {
            toast.error('Network error. Try again.');
        } finally {
            setIsLoading(false);
            setTimeout(() => toast.remove(), 2000);
        }
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="portrait:space-y-[2.5vh] landscape:space-y-[2.5vw]"
        >
               <div className="bg-[radial-gradient(circle_at_center,_#992FAF,_#200636)] portrait:border-[.1vh] portrait:p-[.6vh] landscape:p-[.6vw]  rounded-full landscape:border-[.1vw] border-[#9ecbe9ba]">
                <input
                    type="text"
                    placeholder="Username"
                    name="username"
                    className="w-full  landscape:border-[.1vw] portrait:border-[.1vh]  border-[#BCE4FE] text-white tracking-wide portrait:placeholder:text-[3.5vh] portrait:py-[1vh] landscape:placeholder:text-[2.8vw] landscape:py-[.1vw] portrait:px-[3vh] portrait:text-[3vh] landscape:text-[2.8vw]  landscape:px-[2vw]  rounded-full custom-placeholder praise focus:outline-none landscape:focus:ring-[.1vw] portrait:focus:ring-[.1vh] focus:ring-purple-400 "
                />
            </div>

            <div className="bg-[radial-gradient(circle_at_center,_#992FAF,_#200636)] portrait:border-[.1vh] portrait:p-[.6vh] landscape:p-[.6vw]  rounded-full landscape:border-[.1vw] border-[#9ecbe9ba]">
                <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    className="w-full  landscape:border-[.1vw] portrait:border-[.1vh]  border-[#BCE4FE] text-white tracking-wide portrait:placeholder:text-[3.5vh] portrait:py-[1vh] landscape:placeholder:text-[2.8vw] landscape:py-[.1vw] portrait:px-[3vh] portrait:text-[3vh] landscape:text-[2.8vw]  landscape:px-[2vw]  rounded-full custom-placeholder praise focus:outline-none landscape:focus:ring-[.1vw] portrait:focus:ring-[.1vh] focus:ring-purple-400 "
                />
            </div>

            <button
                type="submit"
                disabled={isLoading}
                className="w-full cursor-pointer hover:scale-110 transition-all flex justify-center disabled:opacity-50 disabled:pointer-events-none"
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
