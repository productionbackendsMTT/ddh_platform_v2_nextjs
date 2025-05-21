'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import Notification from '@/components/layout/Notification';


export default function LogoutPage() {
    const router = useRouter();

    useEffect(() => {
        async function logout() {
            try {
                const response = await fetch('/api/auth/logout', {
                    method: 'POST',
                    credentials: 'include'
                });

                const data = await response.json();
                if (!response.ok) {
                    toast.custom((t) => (
                        <Notification
                            className="sm:rotate-0 -rotate-90"
                            visible={t.visible}
                            message={data?.message || 'Logout failed'}
                        />
                    ));
                    setTimeout(() => {
                        toast.remove();
                    }, 2000);
                } else {
                    toast.custom((t) => (
                        <Notification
                            className="sm:rotate-0 -rotate-90"
                            visible={t.visible}
                            message={data?.message}
                        />
                    ));
                    setTimeout(() => {
                        toast.remove();
                    }, 2000);
                    router.push('/login');
                }

             
            } catch (error) {
                toast.custom((t) => (
                    <Notification
                        className="sm:rotate-0 -rotate-90"
                        visible={t.visible}
                        message={'Logout failed'}
                    />
                ));
                setTimeout(() => {
                    toast.remove();
                }, 2000);
                router.push('/');
            }
        }

        logout();
    }, [router, toast]);

    return null;
}