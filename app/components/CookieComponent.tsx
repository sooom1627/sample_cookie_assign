"use client";

import { useState } from "react";

interface CookieButtonProps {
	initialPersistentValue: string;
	initialSessionValue: string;
}

export default function CookieComponent({
	initialPersistentValue,
	initialSessionValue,
}: CookieButtonProps) {
	const [cookieValues, setCookieValues] = useState({
		persistentCookieValue: initialPersistentValue,
		sessionCookieValue: initialSessionValue,
	});

	const handleSetCookie = async () => {
		// クッキーを設定
		await fetch("/api/set-cookie", { method: "POST" });

		// 最新のクッキー値を取得
		const response = await fetch("/api/get-cookie");
		const data = await response.json();
		setCookieValues(data);
	};

	const handleClearCookie = async () => {
		// クッキーをクリア
		await fetch("/api/clear-cookie", { method: "POST" });

		// 最新のクッキー値を取得
		const response = await fetch("/api/get-cookie");
		const data = await response.json();
		setCookieValues(data);
	};

	return (
		<div>
			<div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 py-4">
				<p>Persistent Cookie: {cookieValues.persistentCookieValue}</p>
				<p>Session Cookie: {cookieValues.sessionCookieValue}</p>
			</div>
			<button
				onClick={handleSetCookie}
				className="rounded-md px-3.5 py-2 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-blue-600"
			>
				<span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-blue-600 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
				<span className="relative text-blue-600 transition duration-300 group-hover:text-white ease">
					クッキーを設定
				</span>
			</button>
			<button
				onClick={handleClearCookie}
				className="rounded-md px-3.5 py-2 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-red-600"
			>
				<span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-red-600 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
				<span className="relative text-red-600 transition duration-300 group-hover:text-white ease">
					クッキーをクリア
				</span>
			</button>
		</div>
	);
}
