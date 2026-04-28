'use client'
import Header from "@/components/Header";

export default function SortPractice() {


    //練習１
    //データの作成（元のデータとして表示する）
    const numbers = [10, 2, 100, 45, 8];

    // 罠：文字列としてソートされる
    // ★破壊的 なので [...] でコピーしてから使う。 元のデータの戻したいとき（テーブルの並び順をリセットしたいとき）に、コピーが必要になる
    // ★テーブルの並び替えで昇順や降順にしたいときにsortで並び替え処理をする
    //並び順を変えて見た目を変える ためのメソッドと割り切ると理解が早い。

    const simpleSort = [...numbers].sort();     //データのコピー完了

    // 正解：数字としてソート（昇順）数が少ない順
    //順番並び替え
    const correctSort = [...numbers].sort((a, b) => {    //データのコピーを完了
        console.log(`比較中:${a} と${b}`);
        return a - b;
    });


    // 下のHTMLのところにはなにをおくことでデータの表示ができるか？（numbers、simpleSort、correctSortをもってきてデータの出力をしてた）


    //練習２  sort  (並び替え)　果物の並び替え
    //データの作成
    const fruits = ["banana", "apple", "orenge"];

    fruits.sort();

    console.log(fruits);      //["apple","banana","orenge"]  (アルファベット順)






    return (
        <div className="p-8">
            <Header setView={() => { }} />

            <h1 className="text-xl font-bold mt-10 border-b-2 pb-2 border-blue-500">
                1. sort メソッドの練習
            </h1>

            <div className="mt-4 p-6 bg-white shadow-sm border rounded-xl">
                <p className="text-gray-700 leading-relaxed">
                    <b>sort</b> は「配列の中身を並び替える」メソッドです。<br />
                    データベースの項目を「新しい順」や「価格の安い順」など、見た目の表示順を変えたい時に使います。
                </p>
            </div>

            {/* 結果表示エリア */}
            {/* <div className="mt-6 p-6 bg-blue-50 border border-blue-200 rounded-xl">
                <h2 className="font-bold text-blue-800 mb-2">【実行結果】</h2>
                <div className="space-y-2">
                    <p>元のデータ: <span className="font-mono bg-white px-2 py-1 rounded">{numbers.join(", ")}</span></p>
                    <p className="text-red-500 text-sm">※罠ソート: {simpleSort.join(", ")} (文字列として判定)</p>
                    <p className="text-lg font-bold">正しいソート(昇順): <span className="text-blue-600">{correctSort.join(", ")}</span></p>
                </div>
            </div> */}

            {/* 重要なメモエリア */}
            <div className="mt-10 space-y-6">
                <section>
                    <h3 className="font-bold text-lg flex items-center">
                        <span className="mr-2">💡</span> なぜ [...numbers] と書くの？
                    </h3>
                    <div className="mt-2 p-4 bg-yellow-50 border-l-4 border-yellow-400 text-gray-700">
                        <p>
                            <code>sort</code> は、元の配列を直接書き換えてしまう<b>「破壊的」</b>な性質を持っています。<br />
                            元のデータを壊さないように、<code>[...]</code>（スプレッド演算子）を使って
                            <strong>「コピーを作ってからソートする」</strong>のが現代のプログラミングの鉄則です。
                        </p>
                    </div>
                </section>

                <section className="p-4 bg-gray-100 rounded-lg text-sm text-gray-500">
                    <p>
                        ※F12キーでコンソールを確認してください。2つの数字を何度も見比べて順番を入れ替えるアルゴリズムが見て取れます。
                    </p>
                </section>
            </div>



            <p className="space-y-2 ">
                ★破壊的 なので [...] でコピーしてから使う。 元のデータの戻したいとき（テーブルの並び順をリセットしたいとき）に、コピーが必要になる <br />
                ★テーブルの並び替えで昇順や降順にしたいときにsortで並び替え処理をする
            </p>



        </div>
    );
}