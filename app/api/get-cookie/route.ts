import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET() {
	const cookieStore = cookies();

	const persistentCookieValue =
		cookieStore.get("persistentCookieValue")?.value ?? "未設定";
	const sessionCookieValue =
		cookieStore.get("sessionCookieValue")?.value ?? "未設定";

	return NextResponse.json({ persistentCookieValue, sessionCookieValue });
}
