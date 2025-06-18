'use client';
import Image from 'next/image';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import { useMutation } from '@tanstack/react-query';
import Notification from './Notification';
import { LoginPayload, LoginResponse } from '@/lib/type';

async function loginFn(payload: LoginPayload): Promise<LoginResponse> {
    const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
        credentials: 'include',
    });

    const data = await res.json();
    if (!res.ok) throw new Error(data.message || 'Login failed');
    return data;
}

export default function LoginForm() {
    const router = useRouter();

    const mutation = useMutation({
        mutationFn: loginFn,
        onSuccess: () => {
            toast.custom((t) => (
                <Notification
                    visible={t.visible}
                    className="sm:rotate-0 -rotate-90"
                    message="Login successful"
                />
            ));
            router.push('/');
        },
        onError: (err: any) => {
            toast.custom((t) => (
                <Notification
                    visible={t.visible}
                    className="sm:rotate-0 -rotate-90"
                    message={err.message}
                />
            ));
        },
        onSettled: () => {
            setTimeout(() => toast.remove(), 2000);
        },
    });

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const username = formData.get('username') as string;
        const password = formData.get('password') as string;
        mutation.mutate({ username, password });
    }

    return (
        <form onSubmit={handleSubmit} className="portrait:space-y-[2.5vh] landscape:space-y-[2.5vw]">
            {/* Username input */}
            <div className="bg-[radial-gradient(circle_at_center,_#992FAF,_#200636)] portrait:border-[.1vh] portrait:p-[.6vh] landscape:p-[.6vw] rounded-full landscape:border-[.1vw] border-[#9ecbe9ba]">
                <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    className="w-full border-[#BCE4FE] text-white tracking-wide portrait:placeholder:text-[3.5vh] portrait:py-[1vh] landscape:placeholder:text-[2.8vw] landscape:py-[.1vw] portrait:px-[3vh] portrait:text-[3vh] landscape:text-[2.8vw] landscape:px-[2vw] rounded-full custom-placeholder praise focus:outline-none focus:ring-purple-400 landscape:border-[.1vw] portrait:border-[.1vh] portrait:focus:ring-[.1vh] landscape:focus:ring-[.1vw]"
                />
            </div>

            {/* Password input */}
            <div className="bg-[radial-gradient(circle_at_center,_#992FAF,_#200636)] portrait:border-[.1vh] portrait:p-[.6vh] landscape:p-[.6vw] rounded-full landscape:border-[.1vw] border-[#9ecbe9ba]">
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="w-full border-[#BCE4FE] text-white tracking-wide portrait:placeholder:text-[3.5vh] portrait:py-[1vh] landscape:placeholder:text-[2.8vw] landscape:py-[.1vw] portrait:px-[3vh] portrait:text-[3vh] landscape:text-[2.8vw] landscape:px-[2vw] rounded-full custom-placeholder praise focus:outline-none focus:ring-purple-400 landscape:border-[.1vw] portrait:border-[.1vh] portrait:focus:ring-[.1vh] landscape:focus:ring-[.1vw]"
                />
            </div>

            {/* Submit button */}
            <button
                type="submit"
                disabled={mutation.isSuccess}
                className="w-full cursor-pointer hover:scale-110 transition-all flex justify-center disabled:opacity-50 disabled:pointer-events-none"
            >
                <div className="relative portrait:w-[16vh] landscape:w-[13vw] aspect-[3/2]">
                    <Image src="/assets/images/login-button.png" alt="login-button" fill className="object-contain" priority />
                </div>
            </button>
        </form>
    );
}
