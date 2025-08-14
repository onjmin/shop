<script lang="ts">
    import * as v from "valibot";

    let name = $state("");
    let email = $state("");
    let address = $state("");
    let quantity = $state(1);
    let cardNumber = $state("");
    let cardExpiry = $state("");
    let cardCvc = $state("");

    let errors: Record<string, string> = $state({});

    // Valibotスキーマ
    // Valibotスキーマ
    const orderSchema = v.object({
        name: v.pipe(v.string(), v.minLength(1, "お名前を入力してください")),
        email: v.pipe(
            v.string(),
            v.email("正しいメールアドレスを入力してください"),
        ),
        address: v.pipe(
            v.string(),
            v.minLength(5, "住所を5文字以上で入力してください"),
        ),
        quantity: v.pipe(
            v.number(),
            v.minValue(1, "数量は1以上で入力してください"),
        ),
        cardNumber: v.pipe(
            v.string(),
            v.regex(
                /^[0-9]{13,19}$/,
                "カード番号は13〜19桁の数字で入力してください",
            ),
        ),
        cardExpiry: v.pipe(
            v.string(),
            v.regex(
                /^(0[1-9]|1[0-2])\/[0-9]{2}$/,
                "有効期限はMM/YY形式で入力してください",
            ),
        ),
        cardCvc: v.pipe(
            v.string(),
            v.regex(/^[0-9]{3,4}$/, "CVCは3〜4桁の数字で入力してください"),
        ),
    });

    function handleSubmit() {
        errors = {};
        const result = v.safeParse(orderSchema, {
            name,
            email,
            address,
            quantity: Number(quantity),
            cardNumber: cardNumber.replace(/\s+/g, ""),
            cardExpiry,
            cardCvc,
        });

        if (!result.success) {
            errors = {};

            for (const err of result.issues) {
                // path が存在して、先頭が文字列なら使用
                const key = err.path?.[0];
                if (typeof key === "string") {
                    errors[key] = err.message;
                }
            }
            return;
        }

        alert("注文を受け付けました！");
    }
</script>

<div
    class="max-w-lg mx-auto bg-gray-900 text-gray-100 p-6 rounded-lg shadow-lg"
>
    <h1 class="text-xl font-bold mb-6">今すぐ予約注文</h1>

    <form class="space-y-5">
        <!-- 名前 -->
        <div>
            <label for="name" class="block text-sm mb-1">お名前</label>
            <input
                id="name"
                type="text"
                bind:value={name}
                class="w-full p-2 rounded bg-gray-800 border border-gray-700 focus:border-blue-500 focus:outline-none"
            />
            {#if errors.name}<p class="text-red-400 text-xs">
                    {errors.name}
                </p>{/if}
        </div>

        <!-- メール -->
        <div>
            <label for="email" class="block text-sm mb-1">メールアドレス</label>
            <input
                id="email"
                type="email"
                bind:value={email}
                class="w-full p-2 rounded bg-gray-800 border border-gray-700 focus:border-blue-500 focus:outline-none"
            />
            {#if errors.email}<p class="text-red-400 text-xs">
                    {errors.email}
                </p>{/if}
        </div>

        <!-- 住所 -->
        <div>
            <label for="address" class="block text-sm mb-1">配送先住所</label>
            <textarea
                id="address"
                bind:value={address}
                class="w-full p-2 rounded bg-gray-800 border border-gray-700 focus:border-blue-500 focus:outline-none"
            ></textarea>
            {#if errors.address}<p class="text-red-400 text-xs">
                    {errors.address}
                </p>{/if}
        </div>

        <!-- 数量 -->
        <div>
            <label for="quantity" class="block text-sm mb-1">数量</label>
            <input
                id="quantity"
                type="number"
                bind:value={quantity}
                min="1"
                class="w-24 p-2 rounded bg-gray-800 border border-gray-700 focus:border-blue-500 focus:outline-none"
            />
            {#if errors.quantity}<p class="text-red-400 text-xs">
                    {errors.quantity}
                </p>{/if}
        </div>

        <!-- クレカ番号 -->
        <div>
            <label for="cardNumber" class="block text-sm mb-1">カード番号</label
            >
            <input
                id="cardNumber"
                type="text"
                inputmode="numeric"
                placeholder="1234 5678 9012 3456"
                bind:value={cardNumber}
                class="w-full p-2 rounded bg-gray-800 border border-gray-700 focus:border-blue-500 focus:outline-none"
            />
            {#if errors.cardNumber}<p class="text-red-400 text-xs">
                    {errors.cardNumber}
                </p>{/if}
        </div>

        <!-- 有効期限 & CVC -->
        <div class="flex gap-4">
            <div class="flex-1">
                <label for="cardExpiry" class="block text-sm mb-1"
                    >有効期限</label
                >
                <input
                    id="cardExpiry"
                    type="text"
                    placeholder="MM/YY"
                    bind:value={cardExpiry}
                    class="w-full p-2 rounded bg-gray-800 border border-gray-700 focus:border-blue-500 focus:outline-none"
                />
                {#if errors.cardExpiry}<p class="text-red-400 text-xs">
                        {errors.cardExpiry}
                    </p>{/if}
            </div>
            <div class="w-24">
                <label for="cardCvc" class="block text-sm mb-1">CVC</label>
                <input
                    id="cardCvc"
                    type="text"
                    inputmode="numeric"
                    bind:value={cardCvc}
                    class="w-full p-2 rounded bg-gray-800 border border-gray-700 focus:border-blue-500 focus:outline-none"
                />
                {#if errors.cardCvc}<p class="text-red-400 text-xs">
                        {errors.cardCvc}
                    </p>{/if}
            </div>
        </div>

        <!-- 注文ボタン -->
        <button
            type="submit"
            class="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg shadow transition"
        >
            注文を確定する
        </button>
    </form>
</div>
