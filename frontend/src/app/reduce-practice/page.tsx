'use client'
import Header from "@/components/Header";

export default function ReducePractice() {


    //reduceはどんな時によく使うのか？
    //実務で圧倒機に多いのは、「合計金額の計算」です。(reduceメソッド)
    //一言でいうと、**「リレー形式でバトン（計算結果）を最後までつなぐ」**仕組みです。



    //     prices.reduce(...):
    // 「この配列をギュッと1つの値にまとめますよ」という宣言です。

    // accumulator（アキュムレータ）:
    // 「これまでの合計値」を溜めておくバトンです。

    // current（カレント）:
    // 今まさに配列から取り出された**「現在の値」**です。

    // return accumulator + current:
    // 「これまでの合計」に「今の値」を足して、次のステップにバトンを渡すという命令です。

    // 第2引数の , 0):
    // これが**スタート地点（初期値）**です。「最初は0円から数え始めてね」という意味です。





    //1.もとになるデータ（商品価格リスト）（reduce練習）
    const prices: number[] = [100, 250, 500, 120];


    // 【練習1】すべての価格を足して合計を出す(reduceで合計を出す)
    const totalPrice = prices.reduce<number>((accumulator, current) => {
        console.log(`今までの合計: ${accumulator}, 今の価格: ${current}`);     //   // accumulator（アキュムレータ）:「これまでの合計値」を溜めておくバトンです。

        // 次のステップに渡す「新しい合計」を返す
        return accumulator + current;
    }, 0); // ← この "0" が大事！最初のスタート地点（初期値）です。

    console.log("最終的な合計金額:", totalPrice);









    return (
        <div className="p-8">
            <Header setView={() => { }} />
            <h1 className="text-xl font-bold mt-10">Reduce（畳み込み）の練習</h1>
            <p className="mt-4 text-gray-600">
                F12キーでコンソールを見てください。<br />
                <b>reduce</b> は、バトンを渡しながら最後に1つの値を完成させます。
            </p>

            {/* <div className="mt-6 p-4 bg-green-50 rounded border border-green-200">
                <h2 className="font-bold">集計結果:</h2>
                <p className="text-2xl font-bold">合計金額: ¥{totalPrice}</p>
            </div> */}

            {/* 解説メモのセクション */}
            <div className="mt-10 p-6 bg-gray-50 border border-gray-200 rounded-lg">
                <h2 className="font-bold text-lg mb-4">1. reduce はどんな時に使うのか？</h2>
                <p className="text-gray-700 leading-relaxed">
                    実務で圧倒的に多いのは <b>「合計金額の計算」</b> です。
                </p>
                <ul className="mt-4 space-y-2 text-gray-600 list-disc list-inside">
                    <li>ショッピングカートの合計金額を出す</li>
                    <li>テスト結果の平均点を出す</li>
                    <li>名簿から「年代ごとの人数」を集計する</li>
                </ul>
            </div>
        </div>
    );
}