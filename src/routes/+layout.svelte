<script lang="ts">
	import "../app.css";
	import favicon from "$lib/assets/favicon.svg";
	import { resolve } from "$app/paths";

	const { children } = $props();
	const title = "ねんどろいどショップ";
	const description =
		"人気キャラクターのねんどろいどを予約・購入できる公式通販サイト。送料無料・予約特典つき！";
	const image = "https://i.imgur.com/AQV3TtI.png";
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>{title}</title>
	<meta name="description" content={description} />

	<!-- Open Graph -->
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:type" content="website" />
	<meta property="og:url" content={resolve("/")} />
	<meta property="og:image" content={image} />

	<!-- Twitter Card -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={image} />

	<!-- Apple Touch Icon -->
	<link rel="apple-touch-icon" href={image} />

	<!-- ブランドカラー：オレンジ寄りレッドでポップに -->
	<meta name="theme-color" content="#F97316" />

	<script
		src="https://cdn.jsdelivr.net/npm/gif.js.optimized/dist/gif.js"
	></script>
</svelte:head>

<div class="min-h-screen flex flex-col bg-gray-900 text-gray-100">
	<!-- ヘッダー -->
	<header class="bg-gray-800 shadow">
		<div
			class="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center"
		>
			<h1 class="text-xl font-bold text-blue-400">
				ねんどろいどショップ
			</h1>
			<nav class="flex gap-4 text-sm font-medium">
				<a href={resolve("/")} class="hover:text-blue-300">ホーム</a>
				<a href="cart" class="hover:text-blue-300">カート</a>
				<a href="faq" class="hover:text-blue-300">お問い合わせ</a>
			</nav>
		</div>
	</header>

	<!-- メインコンテンツ -->
	<main class="flex-1 max-w-6xl mx-auto w-full px-4 py-6">
		{@render children?.()}
	</main>

	<!-- フッター -->
	<footer
		class="bg-gray-800 border-t border-gray-700 py-4 mt-8 text-center text-sm text-gray-400"
	>
		&copy; 2025 ねんどろいどショップ. All rights reserved.
	</footer>
</div>
