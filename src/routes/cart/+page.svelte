<script lang="ts">
    // カートの固定商品モック
    let cart = [
        {
            id: 1,
            name: "ねんどろいど おんJシリーズ 束音ロゼ（再販）",
            price: 5800,
            discount: 10,
            quantity: 1,
            img: "https://i.imgur.com/VSyr9Ni.png",
        },
    ];

    // 割引後価格
    function discountedPrice(item: (typeof cart)[0]) {
        return Math.round(item.price * (1 - item.discount / 100));
    }

    // 小計
    function itemSubtotal(item: (typeof cart)[0]) {
        return discountedPrice(item) * item.quantity;
    }

    // 合計
    $: total = cart.reduce((sum, item) => sum + itemSubtotal(item), 0);

    function increaseQuantity(item: (typeof cart)[0]) {
        item.quantity += 1;
    }

    function decreaseQuantity(item: (typeof cart)[0]) {
        if (item.quantity > 1) item.quantity -= 1;
    }

    function removeItem(id: number) {
        cart = cart.filter((item) => item.id !== id);
    }
</script>

<div
    class="max-w-4xl mx-auto p-6 bg-gray-900 text-gray-100 rounded-lg shadow-lg space-y-6"
>
    <h1 class="text-2xl font-bold mb-4">カート</h1>

    {#if cart.length === 0}
        <p class="text-gray-400">カートに商品が入っていません。</p>
    {:else}
        <div class="space-y-4">
            {#each cart as item}
                <div
                    class="flex gap-4 items-center bg-gray-800 p-4 rounded-lg border border-gray-700"
                >
                    <img
                        src={item.img}
                        alt={item.name}
                        class="w-24 h-24 object-cover rounded"
                    />

                    <div class="flex-1 space-y-1">
                        <div class="font-semibold">{item.name}</div>
                        <div>
                            <span class="text-red-400 font-bold"
                                >¥{discountedPrice(item).toLocaleString()}</span
                            >
                            <span class="text-gray-400 line-through ml-2"
                                >¥{item.price.toLocaleString()}</span
                            >
                        </div>

                        <!-- 数量操作 -->
                        <div class="flex gap-2 items-center mt-2">
                            <button
                                class="px-2 bg-gray-700 rounded"
                                on:click={() => decreaseQuantity(item)}
                                >-</button
                            >
                            <span>{item.quantity}</span>
                            <button
                                class="px-2 bg-gray-700 rounded"
                                on:click={() => increaseQuantity(item)}
                                >+</button
                            >
                        </div>

                        <div class="text-gray-300 text-sm mt-1">
                            小計: ¥{itemSubtotal(item).toLocaleString()}
                        </div>
                    </div>

                    <button
                        class="text-red-500 hover:text-red-400"
                        on:click={() => removeItem(item.id)}
                    >
                        削除
                    </button>
                </div>
            {/each}
        </div>

        <!-- 合計 -->
        <div class="flex justify-end text-lg font-bold mt-4">
            合計: ¥{total.toLocaleString()}
        </div>

        <!-- 購入ボタン -->
        <div class="flex justify-end mt-4">
            <a
                href="order"
                class="bg-blue-600 px-6 py-3 rounded-lg hover:bg-blue-700 transition text-white"
            >
                購入手続きへ
            </a>
        </div>
    {/if}
</div>
