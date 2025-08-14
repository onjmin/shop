<script lang="ts">
	import "../app.css";
	import favicon from "$lib/assets/favicon.svg";

	const { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>ねんどろいどショップ</title>
</svelte:head>

<div class="min-h-screen flex flex-col bg-gray-50 text-gray-900">
	<!-- ヘッダー -->
	<header class="bg-white shadow">
		<div
			class="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center"
		>
			<h1 class="text-xl font-bold text-blue-700">
				ねんどろいどショップ
			</h1>
			<nav class="flex gap-4 text-sm font-medium">
				<a href="/" class="hover:text-blue-600">ホーム</a>
				<a href="/cart" class="hover:text-blue-600">カート</a>
				<a href="/about" class="hover:text-blue-600">会社概要</a>
			</nav>
		</div>
	</header>

	<!-- メインコンテンツ -->
	<main class="flex-1 max-w-6xl mx-auto w-full px-4 py-6">
		{@render children?.()}
	</main>

	<!-- フッター -->
	<footer
		class="bg-gray-100 border-t border-gray-200 py-4 mt-8 text-center text-sm text-gray-500"
	>
		&copy; 2025 ねんどろいどショップ. All rights reserved.
	</footer>
</div>
