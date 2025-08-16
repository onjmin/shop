<script>
    import { resolve } from "$app/paths";
    export let status;
</script>

<svelte:head>
    <title>{status} Not Found</title>
</svelte:head>

<div
    class="min-h-screen flex flex-col items-center justify-center text-center p-8"
>
    <h1 class="text-4xl font-bold mb-4">{status}</h1>
    <p class="text-xl mb-2">Not Found</p>
    <p class="mb-6">
        申し訳ございません。<br />指定されたページへアクセスできません。
    </p>
    <a
        href={resolve("/")}
        class="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700"
    >
        トップへ戻る
    </a>
</div>
