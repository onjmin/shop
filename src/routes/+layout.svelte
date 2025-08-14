<script lang="ts">
	import "../app.css";
	import favicon from "$lib/assets/favicon.svg";
	import { resolve } from "$app/paths";

	const { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>ねんどろいどショップ</title>
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
