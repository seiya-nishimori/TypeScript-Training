'use client';
import { useState } from "react";
import Header from "@/components/Header";


// この画面の名前は「InPractice」です
export default function InPractice() {
    // 1. データの準備（中身を1つのオブジェクトにまとめると管理しやすくなります）
    const people = {
        // 1. データのリスト（名簿のようなもの）
        A: { name: "田中さん", age: 25 },
        B: { name: "佐藤さん" }, // ageなし
        C: { name: "赤ちゃん", age: 0 },
        D: { name: "匿名の人", age: null }
    };

    // 2. 「いま誰を選択しているか」を管理する（Reactの基本！）
    // selected が「いま誰か」、setSelected が「切り替える手」です
    const [selected, setSelected] = useState<keyof typeof people>("A");

    // 3. 選択されたデータを取り出す
    // 3. メモ（selected）を見て、図鑑からその人のデータを取り出します
    const target = people[selected];

    // 4. 「in」で判定（ここが本質！）
    // 4. 「in」という道具を使って、データの中に "age" という項目があるか調べます
    // 結果は「ある(true)」か「ない(false)」のどちらか。
    const hasAge = "age" in target;


    //ここからは、「もし項目があったらこう表示する、なかったらこうする」という条件分岐をしています。
    return (
        <div className="p-10 max-w-2xl mx-auto min-h-screen bg-gray-50">
            <Header setView={() => { }} />

            <h1 className="text-3xl font-extrabold pb-4 mb-8 text-center text-purple-700 border-b-4 border-purple-200">
                in演算子 判定シミュレーター
            </h1>

            {/* --- ボタンエリア --- */}
            <div className="grid grid-cols-2 gap-3 mb-10">
                {/* 図鑑（people）の全員分、ボタンを作って並べます */}
                {Object.keys(people).map((key) => (
                    <button
                        key={key}
                        // クリックされたら、その人にメモを書き換える
                        onClick={() => setSelected(key as keyof typeof people)}
                        className={`p-4 rounded-xl font-bold transition-all shadow-sm ${selected === key
                            ? "bg-purple-600 text-white scale-105 shadow-purple-200"
                            : "bg-white text-gray-600 hover:bg-purple-50"
                            }`}
                    >
                        {people[key as keyof typeof people].name} を検査
                    </button>
                ))}
            </div>

            {/* --- 結果表示エリア --- */}
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
                <div className="mb-6">
                    <p className="text-sm text-gray-400 uppercase tracking-widest font-bold">現在のデータ内容</p>
                    {/* データの正体（黒い画面の文字）を表示 */}
                    <pre className="bg-gray-800 text-green-400 p-4 rounded-lg mt-2 font-mono text-sm">
                        {JSON.stringify(target, null, 2)}
                    </pre>
                </div>

                <div className="flex items-center justify-between p-6 rounded-xl bg-purple-50 border-2 border-purple-100">
                    <span className="text-xl font-bold text-gray-700">"age" という項目は...</span>

                    {/* もし「ある(hasAgeがtrue)」なら */}
                    {hasAge ? (
                        <div className="flex flex-col items-end">
                            <span className="text-2xl font-black text-green-600 italic">ある！ (true)</span>
                            <span className="text-sm text-green-500 font-bold">値: {String(target.age)}</span>
                        </div>
                    ) : (  // そうでなければ（項目がなければ）
                        <span className="text-2xl font-black text-red-500 italic">ない！ (false)</span>
                    )}
                </div>

                {/* 実務的な使い分けの例 */}
                <div className="mt-8 pt-6 border-t border-gray-100">
                    <p className="text-center text-gray-500 italic">
                        {hasAge
                            ? `✅ ageが定義されているので、年齢に基づいた処理が可能です。`
                            : `⚠️ ageが定義されていません。エラー回避の処理が必要です。`}
                    </p>
                </div>


            </div>
        </div>
    );
}