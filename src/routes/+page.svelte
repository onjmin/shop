<script lang="ts">
    // メイン商品情報
    const product = {
        name: "ねんどろいど　おんJシリーズ　束音ロゼ　（再販）株式会社おんJ　【送料無料】",
        price: 5800,
        discount: 10,
        labels: ["送料無料", "予約", "新品"],
        mainImage: "https://i.imgur.com/VSyr9Ni.png",
        images: [
            { src: "https://i.imgur.com/VSyr9Ni.png", alt: "角度A" },
            { src: "https://i.imgur.com/vOnkUDA.png", alt: "角度B" },
            { src: "https://i.imgur.com/bRpp4zs.png", alt: "商品パッケージ" },
        ],
    };

    const discountedPrice = Math.round(
        product.price * (1 - product.discount / 100),
    );

    // 関連商品
    const related = [
        {
            name: "ねんどろいど　おんJシリーズ　束音ロゼ　アンヘルVer.",
            src: "https://i.imgur.com/DRBqNoO.png",
            price: 6000,
            discount: 10,
        },
        {
            name: "ねんどろいど　おんJシリーズ　束音ロゼ & 矢野さとる",
            src: "https://i.imgur.com/ry0g7Tw.png",
            price: 7500,
            discount: 10,
        },
        {
            name: "ねんどろいど　Syamu_Game & 妹",
            src: "https://i.imgur.com/B5oro7w.png",
            price: 6800,
            discount: 10,
        },
        {
            name: "ねんどろいど　淫夢　野獣先輩 & 遠野",
            src: "https://i.imgur.com/A1o3PgH.jpeg",
            price: 6400,
            discount: 10,
        },
    ];

    let selectedImage = product.mainImage;
</script>

<div class="max-w-6xl mx-auto text-gray-100">
    <!-- 商品メイン -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <!-- 左: 画像ギャラリー -->
        <div>
            <img
                class="w-full rounded-lg border border-gray-700 shadow-lg bg-gray-800"
                src={selectedImage}
                alt="メイン画像"
            />

            <!-- サムネイル -->
            <div class="flex mt-4 gap-2">
                {#each product.images as img}
                    <button
                        type="button"
                        class="w-20 h-20 border border-gray-700 bg-gray-800 rounded overflow-hidden focus:outline-none focus:ring-2 focus:ring-blue-500"
                        on:click={() => (selectedImage = img.src)}
                    >
                        <img
                            src={img.src}
                            alt={img.alt}
                            class="w-full h-full object-cover hover:opacity-80"
                        />
                    </button>
                {/each}
            </div>
        </div>

        <!-- 右: 商品情報 -->
        <div class="flex flex-col">
            <h1 class="text-2xl font-bold mb-2">{product.name}</h1>

            <!-- ラベル -->
            <div class="flex gap-2 mb-3">
                <span class="bg-red-600 text-white text-xs px-2 py-1 rounded">
                    10%OFF
                </span>
                {#each product.labels as label}
                    <span
                        class="bg-green-600 text-white text-xs px-2 py-1 rounded"
                    >
                        {label}
                    </span>
                {/each}
            </div>

            <!-- 価格 -->
            <div class="mb-4">
                <span class="text-2xl text-red-400 font-bold mr-2">
                    ¥{discountedPrice.toLocaleString()}
                </span>
                <span class="text-gray-400 line-through text-sm">
                    ¥{product.price.toLocaleString()}
                </span>
            </div>

            <p class="text-sm text-gray-300 mb-6">
                人気フィギュアシリーズ「おんJ」より、束音ロゼが再登場！
                高精細造形と豊富な表情パーツで、あなただけのロゼを楽しめます。
            </p>

            <button
                class="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition"
            >
                カートに入れる
            </button>
        </div>
    </div>

    <!-- 関連商品 -->
    <div class="mt-12">
        <h2 class="text-lg font-bold mb-4">関連商品</h2>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
            {#each related as item}
                <div
                    class="border border-gray-700 rounded-lg overflow-hidden shadow bg-gray-800 hover:shadow-lg transition cursor-pointer p-2"
                >
                    <div class="relative">
                        <img
                            src={item.src}
                            alt={item.name}
                            class="w-full h-48 object-cover rounded"
                        />
                        <span
                            class="absolute top-2 left-2 bg-red-600 text-white text-xs px-2 py-1 rounded"
                        >
                            10%OFF
                        </span>
                    </div>
                    <div class="p-2">
                        <div class="text-sm font-medium line-clamp-2">
                            {item.name}
                        </div>
                        <div class="text-red-400 font-bold">
                            ¥{Math.round(item.price * 0.9).toLocaleString()}
                        </div>
                        <div class="text-gray-400 text-xs line-through">
                            ¥{item.price.toLocaleString()}
                        </div>
                    </div>
                </div>
            {/each}
        </div>
    </div>
</div>
