'use client';

export default function IfPractice() {

    // if分の練習をしていきます

    // ここで練習用の計算や判定ができる

    // 変数宣言
    const score = 85;
    let message = "";


    // 合格か判定する

    if (score > 80) {
        message = "素晴らしい！合格です！"

    } else {
        message = "不合格です"
    }



    // ２．【重要】最後に必ず return でHTML（JSX）を返す！

    return (
        <div className="">

            <h1 className="text-3xl border-b-2 pb-2 mb-10 text-center font-bold text-green-600">if文練習</h1>
            <p>ここからif文の特訓を始めましょう！</p>
            <p>結果：{message}</p>
        </div>
    )
}