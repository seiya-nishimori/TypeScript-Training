'use client'
import { useState } from "react";
import Header from "@/components/Header";


//switch 文は、「もし A ならこれ、B ならこれ、どれにも当てはまらないならこれ」 という、たくさんの枝分かれ（条件分岐）をスッキリ書くための道具です。

export default function SwitchPractice() {

    //今の信号を保存する箱（初期値は”なし”）
    const [color, setColor] = useState("なし");

    //2:Switch文でメッセージを決めるアルゴリズム
    let message = "";

    switch (color) {

        case "赤":
            message = "止まれ！ 🛑";
            break;      //breakを忘れると、下の処理まで実行されてしまうから注意する

        case "黄":
            message = "注意して進め ⚠️";
            break;

        case "青":
            message = "進んでもよい 🏃";
            break;

        default:
            message = "ボタンを押して信号を変えてね";
            break;
    }



    return (
        <div className="pb-24 p-10">
            <Header setView={() => { }} />

            <h1 className="text-center font-bold text-3xl pb-4 mb-8 border-b-4">
                Switch文練習
            </h1>

            <h2 className="pb-10">
                switch 文は、「もし A ならこれ、B ならこれ、どれにも当てはまらないならこれ」 という、たくさんの枝分かれ（条件分岐）をスッキリ書くための道具です。
            </h2>

            {/* ボタンエリア */}
            <div className="flex gap-4 justify-center mb-10">
                <button onClick={() => setColor("赤")} className="p-4 bg-red-500 text-white rounded-full font-bold">赤</button>
                <button onClick={() => setColor("黄")} className="p-4 bg-yellow-400 text-balck rounded-full font-bold">黄</button>
                <button onClick={() => setColor("青")} className="p-4 bg-blue-500 text-white rounded-full font-bold">青</button>
            </div>


            {/* 表示エリア */}
            <div className="">
                <p className="text-sm text-gray-400 mb-2 text-center">現在の色：{color}</p>
                <p className="text-4xl font-black text-center pl-10">{message}</p>
            </div>


            <div className="mt-20 p-10 pl-30 bg-gray-100 rounded text-sm test-gray-600">
                <p>💡**Switch文のポイント**</p>
                <ul className="list-disc ml-5">
                    <li>`case "赤":` は「もし赤だったら」という意味。</li>
                    <li>`break:` は「ここで判定終了！」の合図。</li>
                    <li>`default:` は「どれにも当てはまらない時の意味。」</li>
                </ul>
            </div>
        </div>
    )

}