<script lang="ts">
    let name = "";
    let email = "";
    let address = "";
    let quantity = 1;

    const handleSubmit = () => {
        alert(`注文が完了しました。\nお名前: ${name}\n数量: ${quantity}`);
    };
</script>

<div
    class="max-w-3xl mx-auto bg-gray-900 text-gray-100 p-6 rounded-lg shadow-lg mt-8"
>
    <h1 class="text-2xl font-bold mb-6">予約注文フォーム</h1>

    <!-- 商品概要 -->
    <div class="flex items-center gap-4 mb-6">
        <img
            src="https://i.imgur.com/VSyr9Ni.png"
            alt="束音ロゼ"
            class="w-24 h-24 object-cover rounded border border-gray-700"
            width="96"
            height="96"
        />
        <div>
            <div class="font-semibold">
                ねんどろいど　おんJシリーズ　束音ロゼ
            </div>
            <div class="text-red-400 font-bold">¥5,220（税込）</div>
            <div class="text-xs text-gray-400">2026年1月発送予定</div>
        </div>
    </div>

    <!-- フォーム -->
    <form on:submit|preventDefault={handleSubmit} class="space-y-4">
        <div>
            <label for="name" class="block text-sm mb-1">お名前</label>
            <input
                id="name"
                type="text"
                bind:value={name}
                required
                class="w-full p-2 rounded bg-gray-800 border border-gray-700 focus:border-blue-500 focus:outline-none"
            />
        </div>

        <div>
            <label for="email" class="block text-sm mb-1">メールアドレス</label>
            <input
                id="email"
                type="email"
                bind:value={email}
                required
                class="w-full p-2 rounded bg-gray-800 border border-gray-700 focus:border-blue-500 focus:outline-none"
            />
        </div>

        <div>
            <label for="address" class="block text-sm mb-1">配送先住所</label>
            <textarea
                id="address"
                bind:value={address}
                required
                class="w-full p-2 rounded bg-gray-800 border border-gray-700 focus:border-blue-500 focus:outline-none"
            ></textarea>
        </div>

        <div>
            <label for="quantity" class="block text-sm mb-1">数量</label>
            <input
                id="quantity"
                type="number"
                bind:value={quantity}
                min="1"
                class="w-20 p-2 rounded bg-gray-800 border border-gray-700 focus:border-blue-500 focus:outline-none"
            />
        </div>

        <button
            type="submit"
            class="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg shadow transition"
        >
            注文を確定する
        </button>
    </form>
</div>
