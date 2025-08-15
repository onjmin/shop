<script lang="ts">
    // --- フォーム状態 ---
    let name = "";
    let email = "";
    let address = "";
    let quantity = 1;

    // --- 商品情報モック ---
    const product = {
        name: "（再販）ねんどろいど おんJシリーズ 束音ロゼ 【送料無料】",
        price: 5800,
        discount: 10,
        mainImage: "https://i.imgur.com/VSyr9Ni.png",
    };
    const discountedPrice = Math.round(
        product.price * (1 - product.discount / 100),
    );

    let prankMessage = "";
    let prankStyle = "";

    function handleSubmit(e: Event) {
        e.preventDefault();

        // ランダムな位置に「うそぴょ〜ン！」表示
        const x = Math.random() * 80 + 10; // ビューポートの10〜90%位置
        const y = Math.random() * 80 + 10;
        prankStyle = `position:fixed; top:${y}%; left:${x}%;
            font-size:2rem; color:pink; font-weight:bold;
            transform:rotate(${Math.random() * 30 - 15}deg);
            text-shadow:2px 2px 4px #000; z-index:9999;`;
        prankMessage = "うそぴょ〜ン！";

        // 数秒後に消える
        setTimeout(() => (prankMessage = ""), 2000);
    }
</script>

<div
    class="max-w-lg mx-auto p-6 space-y-6 bg-gray-900 text-gray-100 rounded-lg shadow-lg"
>
    <!-- 選択中商品モック -->
    <div
        class="flex gap-4 items-center border border-gray-700 rounded-lg p-4 bg-gray-800"
    >
        <img
            src={product.mainImage}
            alt={product.name}
            class="w-24 h-24 object-cover rounded"
        />
        <div class="flex-1 space-y-1">
            <div class="font-semibold text-lg">{product.name}</div>
            <div>
                <span class="text-red-400 font-bold text-lg"
                    >¥{discountedPrice.toLocaleString()}</span
                >
                <span class="text-gray-400 line-through ml-2"
                    >¥{product.price.toLocaleString()}</span
                >
            </div>
        </div>
    </div>

    <!-- 注文フォーム（バリデーションなし） -->
    <form on:submit={handleSubmit} class="space-y-5">
        <div>
            <label for="name" class="block text-sm mb-1">お名前</label>
            <input
                id="name"
                type="text"
                bind:value={name}
                class="w-full p-2 rounded bg-gray-800 border border-gray-700 focus:border-blue-500 focus:outline-none"
            />
        </div>

        <div>
            <label for="email" class="block text-sm mb-1">メールアドレス</label>
            <input
                id="email"
                type="email"
                bind:value={email}
                class="w-full p-2 rounded bg-gray-800 border border-gray-700 focus:border-blue-500 focus:outline-none"
            />
        </div>

        <div>
            <label for="address" class="block text-sm mb-1">配送先住所</label>
            <textarea
                id="address"
                bind:value={address}
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
                class="w-24 p-2 rounded bg-gray-800 border border-gray-700 focus:border-blue-500 focus:outline-none"
            />
        </div>

        <button
            type="submit"
            class="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg shadow transition"
        >
            注文を確定する
        </button>
    </form>

    {#if prankMessage}
        <div style={prankStyle}>{prankMessage}</div>
    {/if}
</div>
