'use client'
import Header from "@/components/Header";

export default function FlatMapPractice() {


    // flatMap メソッド　と Set
    // Set 自体は「メソッド」ではなく、「コンストラクタ（新しいオブジェクトを作るための設計図）」です
    //コンストラクタ（Setなど）: new Something() のように、「新しい種類のデータ」を生み出すもの。Set


    //データの作成

    const users = [

        { id: 1, name: "田中", tags: ["React", "Next.js"] },
        { id: 2, name: "佐藤", tags: ["TypeScript", "Tailwind"] },
        { id: 3, name: "鈴木", tags: ["React", "TypeScript"] },
    ];


    //「名前は自由」という感覚がわかると、急にコードが自分のものになってきますよ
    //今回調べたいデータがusersの中のtagsです。
    //userでデータを1件ずつ取り出したい
    const allTags = users.flatMap(user => user.tags);

    //Setでtagsの中のデータの重複を削除して表示する
    //Array.from(...)「普通の配列（Array）」に変換します。
    //　★new Setで重複したtagsの中のデータを削除した時点では、配列ではないのでArray.fromで配列にしてあげる

    //　★ new Set() で作った「集合」は、重複がないという点では優秀ですが、実はそのままでは 「配列（Array）」 ではないため、最期にArray.fromで配列にする


    //「配列っぽいモノ」を「本物の配列」へ
    // 例えるなら、「カゴ（Set）」に入ったお菓子を、「ベルトコンベア（配列）」に並べ直す イメージです。

    // Set（カゴ）: 中身は入っているけど、順番が曖昧だったり、特定の番号（1番目、2番目...）で中身を取り出すのが苦手な構造です。

    // Array（ベルトコンベア）: [0], [1] という番号で管理でき、.map() や .join() などの便利なメソッドがすべて使える状態です。

    const uniqueTags = Array.from(new Set(allTags));




    return (
        <div className="p-8 max-w-2xl mx-auto bg-gray-50 min-h-screen">
            <Header setView={() => { }} />

            <h1 className="text-2xl font-bold mt-10 mb-8 text-purple-700 border-b-2 border-purple-200 pb-2">
                flatMap メソッドの練習
            </h1>

            {/* --- 実行結果セクション --- */}
            <div className="space-y-6 mb-12">
                <div className="p-4 bg-white rounded-xl shadow-sm border border-gray-200">
                    <h2 className="font-bold mb-3 text-gray-600 underline">もとのユーザーデータ:</h2>
                    <pre className="text-xs bg-gray-50 p-3 rounded overflow-x-auto text-gray-700">
                        {JSON.stringify(users, null, 2)}
                    </pre>
                </div>


                {/* 【実行結果】flatMap + Setで重複削除 */}
                <div className="p-6 bg-purple-50 border border-purple-200 rounded-xl shadow-sm">
                    <h2 className="font-bold text-purple-800 mb-4 text-lg">【実行結果】flatMap + Setで重複削除</h2>
                    <div className="space-y-3">
                        <p className="text-gray-700">全タグ（重複あり）:
                            <span className="ml-2 font-mono bg-white px-2 py-1 rounded border text-sm">{JSON.stringify(allTags)}</span>
                        </p>
                        <p className="text-xl font-bold text-purple-900 bg-white p-3 rounded-lg border border-purple-100 shadow-inner">
                            ユニークなタグ: {uniqueTags.join(" / ")}
                        </p>
                    </div>
                </div>
            </div>

            {/* --- 解説セクション --- */}
            <div className="grid gap-6">
                {/* 概要 */}
                <div className="bg-white p-6 rounded-xl border shadow-sm">
                    <p className="text-gray-800 leading-relaxed font-medium">
                        <span className="text-purple-600 font-bold">flatMap（フラットマップ）</span> は
                        「取り出して、平らにする」 という2つの仕事を一度にやってくれる便利な掃除機のようなメソッドです。
                    </p>
                </div>

                {/* イメージ */}
                <div className="bg-white p-6 rounded-xl border shadow-sm space-y-4 text-gray-700">
                    <h3 className="font-bold text-lg text-gray-900 border-l-4 border-purple-500 pl-3">1. flatMap のイメージ：お菓子の箱あけ</h3>
                    <p>例えば、3人の子供がいて、それぞれ 「お菓子の小袋（配列）」 を持っているとします。</p>
                    <ul className="grid grid-cols-1 gap-2 pl-4">
                        <li className="bg-gray-50 p-2 rounded">🍬 田中くん: <code className="font-bold">[チョコ, ガム]</code></li>
                        <li className="bg-gray-50 p-2 rounded">🍪 佐藤くん: <code className="font-bold">[飴, クッキー]</code></li>
                        <li className="bg-gray-50 p-2 rounded">🍫 鈴木くん: <code className="font-bold">[チョコ, 飴]</code></li>
                    </ul>
                    <p className="pt-2">あなたの手元には今「3人の子供」がいますが、欲しいのは <b>「全員のお菓子だけをまとめた1つの山」</b> です。</p>

                    <div className="grid md:grid-cols-2 gap-4 mt-4">
                        <div className="p-3 bg-red-50 rounded border border-red-100">
                            <p className="font-bold text-red-700 text-sm mb-1">普通に map すると...</p>
                            <p className="text-xs">「小袋に入ったまま」渡されます。<br />→ [[チョコ, ガム], [飴, クッキー], [チョコ, 飴]]</p>
                        </div>
                        <div className="p-3 bg-blue-50 rounded border border-blue-100">
                            <p className="font-bold text-blue-700 text-sm mb-1">flatMap すると...</p>
                            <p className="text-xs">袋を破って中身だけを1つのテーブルに広げてくれます。<br />→ [チョコ, ガム, 飴, クッキー, チョコ, 飴]</p>
                        </div>
                    </div>
                    <p className="text-center font-bold text-purple-600">これが 「平坦化（へいたんか）」 です。</p>
                </div>

                {/* Set解説 */}
                <div className="bg-white p-6 rounded-xl border shadow-sm space-y-3">
                    <h3 className="font-bold text-lg text-gray-900 border-l-4 border-green-500 pl-3">3. 【おまけ】Set（セット）って何？</h3>
                    <p className="text-gray-700">
                        コードの中に <code className="bg-gray-100 px-1 rounded text-red-500">new Set(allTags)</code> という部分がありますよね。<br />
                        これは <b>「集合（ダブりなし）」</b> を作る命令です。
                    </p>
                    <p className="text-sm text-gray-600 bg-green-50 p-3 rounded">
                        allTags のままだと、「チョコ」と「飴」が2回ずつ出てきますが、
                        new Set を通すと、<b>「同じものは1つにまとめる」</b> というルールが働き、スッキリしたリストになります。
                    </p>
                </div>

                {/* 結論 */}
                <div className="bg-purple-900 text-white p-6 rounded-xl shadow-lg">
                    <h3 className="font-bold text-lg mb-3">💡 結論：なぜこれを使うの？</h3>
                    <div className="space-y-2 text-purple-100 text-sm">
                        <p>実務では、以下のような時に使います。</p>
                        <ul className="list-disc list-inside space-y-1 ml-2">
                            <li>「記事一覧」から「使われている全カテゴリ」を抜き出したい時。</li>
                            <li>「注文履歴」から「買った全商品名」のリストを作りたい時。</li>
                        </ul>
                        <p className="mt-4 font-bold text-white text-base text-center">
                            「バラバラのデータの中にある『リスト』を1つにまとめたい！」と思ったら flatMap の出番です。
                        </p>
                    </div>
                </div>
            </div>

            {/* エラー解説 */}
            <div className="mt-12 p-4 bg-gray-100 border-l-4 border-gray-400 text-sm text-gray-600 italic">
                <p>※ TypeScriptエラー 2304 は、変数の名前間違いを教えてくれる親切なアラートです。</p>
            </div>


            <p className="">
                コンストラクタ（Setなど）: new Something() のように、「新しい種類のデータ」を生み出すもの。
            </p>
        </div>
    );
}