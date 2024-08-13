import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST() {
	const cookieStore = cookies();

	cookieStore.delete("persistentCookieValue");
	cookieStore.delete("sessionCookieValue");

	return NextResponse.json({ message: "Cookies cleared" });
}
