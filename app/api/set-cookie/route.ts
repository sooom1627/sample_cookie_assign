import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST() {
	const cookieStore = cookies();

	const randomNumber = () =>
		Math.floor(Math.random() * 100)
			.toString()
			.padStart(2, "0");

	const persistentCookieValue = randomNumber();
	const sessionCookieValue = randomNumber();

	cookieStore.set(
		"persistentCookieValue",
		`persistent-${persistentCookieValue}`,
		{
			maxAge: 30 * 24 * 60 * 60,
		}
	);
	cookieStore.set("sessionCookieValue", `session-${sessionCookieValue}`);

	return NextResponse.json({
		persistentCookieValue: `persistent-${persistentCookieValue}`,
		sessionCookieValue: `session-${sessionCookieValue}`,
	});
}
