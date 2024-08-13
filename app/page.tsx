import { cookies } from "next/headers";
import CookieComponent from "./components/CookieComponent";

export default function Home() {
	const cookieStore = cookies();

	const persistentCookieValue =
		cookieStore.get("persistentCookieValue")?.value ?? "any";
	const sessionCookieValue =
		cookieStore.get("sessionCookieValue")?.value ?? "any";

	return (
		<main className="min-h-screen p-4 md:p-24">
			<h1 className="text-2xl font-bold my-8">Cookie付与のサンプル</h1>
			<CookieComponent
				initialPersistentValue={persistentCookieValue}
				initialSessionValue={sessionCookieValue}
			/>
		</main>
	);
}
