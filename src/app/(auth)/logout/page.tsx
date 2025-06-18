'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import Notification from '@/components/layout/Notification';

export default function LogoutPage() {
  const router = useRouter();
  const queryClient = useQueryClient();

  const logoutMutation = useMutation({
    mutationFn: async () => {
      const res = await fetch('/api/auth/logout', {
        method: 'POST',
        credentials: 'include',
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json?.message || 'Logout failed');
      return json;
    },
    onSuccess: (data) => {
      toast.custom((t) => (
        <Notification visible={t.visible} className="sm:rotate-0 -rotate-90" message={data?.message || 'Logged out'} />
      ));
      queryClient.removeQueries(); // clear all cache
      setTimeout(() => toast.remove(), 2000);
      router.push('/login');
    },
    onError: (err: any) => {
      toast.custom((t) => (
        <Notification visible={t.visible} className="sm:rotate-0 -rotate-90" message={err.message || 'Logout failed'} />
      ));
      setTimeout(() => toast.remove(), 2000);
      router.push('/');
    },
  });

  useEffect(() => {
    logoutMutation.mutate();
  }, []);

  return null;
}
