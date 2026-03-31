'use client';


import Link from "next/link"; // Next.js推奨のリンク機能


// 「Page」という名前ではなく「IfPracticeContent」などの部品名にする
export default function IfPracticeContent() {




    // --- 練習1：数値判定 ---
    const score = 85;
    const scoreMsg = score >= 80 ? "合格" : "不合格";

    // --- 練習2：型判定 (typeof) ---
    let testValue: any = 100;
    let typeMsg = typeof testValue === "number" ? "これは数字です" : "これは文字です";

    // --- 練習3：Switch分岐 ---
    let color = "red";
    let colorMsg = "";
    switch (color) {
        case "red": colorMsg = "止まれ"; break;
        case "blue": colorMsg = "進め"; break;
        default: colorMsg = "注意";
    }

    return (
        <div className="p-10 max-w-xl mx-auto">
            <h1 className="text-3xl font-bold border-b-2 pb-2 mb-10 text-center text-green-600">
                If文・判定パターンの練習
            </h1>

            <div className="space-y-6">
                <div className="p-4 border rounded shadow-sm bg-white">
                    <h2 className="font-bold text-gray-500 text-sm">1. 数値判定</h2>
                    <p className="text-xl">スコア {score} は「{scoreMsg}」</p>
                </div>

                <div className="p-4 border rounded shadow-sm bg-white">
                    <h2 className="font-bold text-gray-500 text-sm">2. 型判定 (typeof)</h2>
                    <p className="text-xl">{typeMsg}</p>
                </div>

                <div className="p-4 border rounded shadow-sm bg-white">
                    <h2 className="font-bold text-gray-500 text-sm">3. 信号判定 (switch)</h2>
                    <p className="text-xl">信号が {color} なら「{colorMsg}」</p>
                </div>
            </div>


        </div>
    );
}