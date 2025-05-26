import { config } from "@/lib/config";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    try {
        const authorization = request.headers.get('Authorization');
        const cookieToken = request.cookies.get('accessToken')?.value;
        const authHeader = authorization || (cookieToken ? `Bearer ${cookieToken}` : '');

        const res = NextResponse.json({ message: 'Logged out' }, { status: 200 });

        res.cookies.delete('accessToken');
        res.cookies.delete('index');

        if (!authHeader) {
            return res;
        }

        try {
            const response = await fetch(`${config.server}/api/users/logout`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: authHeader,
                },
                credentials: 'include',
            });

            const data = await response.json().catch(() => null);

            if (!response.ok) {
                console.error('Failed to logout:', data);
                return res;
            }

        } catch (error) {
            console.error('Error during logout:', error);
        }

        return res;
    } catch (error) {
        const res = NextResponse.json(
            { message: 'Logged out with errors' },
            { status: 200 }
        );


        res.cookies.delete('accessToken');
        res.cookies.delete('index');

        return res;
    }
}