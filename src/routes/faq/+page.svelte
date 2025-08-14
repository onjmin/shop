<script lang="ts">
    const faqs = [
        { question: "不良交換", link: "#" },
        { question: "商品が届かない", link: "#" },
        { question: "延期", link: "#" },
        { question: "キャンセル", link: "#" },
        { question: "返品", link: "#" },
        { question: "決済エラー", link: "#" },
        { question: "再販", link: "#" },
        { question: "パーツ購入", link: "#" },
    ];

    const importantNews = [
        "2025/08/14 【注意喚起】TikTokでの弊社なりすましDMについて",
        "2024/05/31 お電話対応終了のお知らせ",
        "2024/02/28 公式ホームページリニューアルオープン",
    ];

    const recentNews = [
        "2025/07/29 夏季休業のお知らせ",
        "2025/08/01 津波警報に伴う商品お届けの遅延について",
        "2025/08/04 チャットサポート臨時休業のお知らせ",
    ];
</script>

<div
    class="max-w-5xl mx-auto p-6 space-y-8 text-gray-100 bg-gray-900 rounded-lg shadow-lg"
>
    <h1 class="text-3xl font-bold">お問い合わせ（FAQ）</h1>

    <!-- キーワード検索 -->
    <div>
        <label for="faqSearch" class="block mb-2 text-gray-300"
            >よく使われるキーワード</label
        >
        <input
            id="faqSearch"
            type="text"
            placeholder="FAQを検索..."
            class="w-full p-2 rounded bg-gray-800 border border-gray-700 text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <div class="flex flex-wrap gap-2 mt-2">
            {#each faqs as faq}
                <a
                    href={faq.link}
                    class="bg-gray-700 px-3 py-1 rounded hover:bg-blue-600 transition"
                >
                    {faq.question}
                </a>
            {/each}
        </div>
    </div>

    <!-- 重要なお知らせ -->
    <div>
        <h2 class="text-xl font-semibold mb-2 text-yellow-400">
            重要なお知らせ
        </h2>
        <ul class="list-disc list-inside space-y-1">
            {#each importantNews as news}
                <li>{news}</li>
            {/each}
        </ul>
    </div>

    <!-- 最近のお知らせ -->
    <div>
        <h2 class="text-xl font-semibold mb-2">最近のお知らせ</h2>
        <ul class="list-disc list-inside space-y-1">
            {#each recentNews as news}
                <li>{news}</li>
            {/each}
        </ul>
    </div>

    <p class="text-sm text-gray-400">
        ご質問の内容によっては、ログインして公式ショップやサポートページをご確認ください。
    </p>
</div>
