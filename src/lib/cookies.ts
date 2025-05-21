"use server";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
export const getCookie = async () => {
  const cookieStore = await cookies();
  const token = cookieStore.get("accessToken")?.value;
  return token;
};

export const deleteCookie = async () => {
  const cookie = await cookies()
  cookie.delete("accessToken");
};

export const getCurrentUser = async () => {
  const token = await getCookie();
  const user = jwt.decode(token as string);
  return user;
};