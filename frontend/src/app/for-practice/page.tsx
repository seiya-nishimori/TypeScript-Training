'use client';
import { useState } from "react";// 画面の状態（データの変化）を管理するツールを読み込む
import Header from "@/components/Header";// 共通のヘッダー部品を読み込む

export default function ForPractice() {// この画面（ページ）全体の名前を定義
    // 表示する「カードの数」だけを管理する

    // boxCount: 現在画面に表示されている箱の数。初期値は 0。
    // setBoxCount: boxCount の数字を書き換えるための専用関数。
    const [boxCount, setBoxCount] = useState(0);

    const runLoop = () => {
        // ボタンを押すたびにリセットして、for文を回す
        let count = 0;


        // 【for文のアルゴリズム】
        // 1. let i = 0 : iというカウンターを0からスタート
        // 2. i < 3     : iが3より小さい間は、{ } の中身を繰り返す
        // 3. i++       : 1回終わるごとに i を 1 増やす
        for (let i = 0; i < 3; i++) {
            // ループが回るたびに count を増やす
            count = count + 1;
        }

        // 最終的な数（3）をセットして、画面にその分だけ表示させる
        setBoxCount(count);
    };


    // 【リセット】初期表示（0）に戻す
    // リセットボタンを押した時、boxCount を 0 に上書きする
    const resetLoop = () => {
        setBoxCount(0);
    };



    return (
        // 画面全体のレイアウト設定（余白や背景色）
        <div className="pt-24 p-10 min-h-screen bg-gray-50">
            {/* ヘッダーを表示 */}
            <Header setView={() => { }} />

            {/* タイトルを表示 */}
            <h1 className="text-3xl font-bold text-center mb-10">🔢 for文：見える化練習</h1>

            <div className="flex flex-col items-center gap-8">
                {/* 【実行ボタン】クリックすると runLoop が動く */}
                <button
                    onClick={runLoop}
                    className="bg-blue-600 text-white px-8 py-4 rounded-full font-bold shadow-lg hover:bg-blue-700 active:scale-95 transition-all"
                >
                    3回ループを実行して箱を作る！
                </button>



                {/* 【箱の表示エリア】 */}
                <div className="flex gap-4 flex-wrap justify-center">
                    {/* boxCountが3なら、3回分だけ<div>を表示する */}
                    {/* Array.from({ length: boxCount }): boxCountの数だけ長さを持つ空の配列を作る */}
                    {/* .map((_, i) => ...): その配列の数だけ、中身（div）を繰り返し生成する */}
                    {Array.from({ length: boxCount }).map((_, i) => (
                        <div
                            key={i}// Reactが各要素を識別するためのID（お約束）
                            className="w-32 h-32 bg-white border-4 border-blue-400 rounded-2xl flex items-center justify-center text-2xl font-black text-blue-500 shadow-md animate-bounce"
                            // style: 出現タイミングを少しずつずらして、パラパラ感を出す
                            style={{ animationDelay: `${i * 0.05}s` }}
                        >
                            {/* i は 0, 1, 2... と増えるので、人間に分かりやすく +1 して表示 */}
                            {i + 1}個目
                        </div>
                    ))}
                </div>


                {/* リセットボタンの表示 */}
                {/* 【リセットボタン】クリックすると resetLoop が動く */}
                <button
                    onClick={resetLoop}
                    className="bg-gray-400 text-white px-8 py-4 rounded-full font-bold shadow-md hover:bg-gray-500 active:scale-95 transition-all"
                >
                    リセット
                </button>


                {/* 【条件付き表示】もし箱が0個なら、メッセージを出す */}

                {boxCount === 0 && (
                    <p className="text-gray-400">まだループは実行されていません</p>
                )}
            </div>
        </div>
    );
}