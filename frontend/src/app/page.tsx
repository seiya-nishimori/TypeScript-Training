'use client';
import { useState } from "react";
// ★絶対パスでのインポート
import Header from "@/components/Header";

// if文練習のページ読み込み
import IfPractice from "@/components/IfPractice";

export default function Home() {

    // 画面遷移（画面切り替え）
    const [view, setView] = useState('home');

    // テーブル用のデータ（以前のコードと同じ）
    const headers: string[] = ['名前', '年齢', '退職状況', '3歳以上？', '山田さんかどうか', '１歳以上かつ退職者', 'どちらか一方', "3歳以外か"];
    const users = [
        { name: "山田太郎", age: 2, status: true },
        { name: "せいや", age: 4, status: false }
    ];

    return (
        <div className="p-10 relative">
            {/* ヘッダーコンポーネントを配置 */}
            <Header setView={setView} />

            {/* viewの状態によって表示を切り替える */}
            {view === 'home' ? (
                /* --- ホーム画面 --- */
                <div>
                    <h1 className="text-3xl font-bold border-b-2 pb-2 mb-10 text-center">TypeScript 練習帳</h1>

                    <h2 className="text-center mb-4">アルゴリズムとフローチャートを意識しよう</h2>

                    <div className="grid grid-cols-1 gap-4 max-w-md">
                        <button
                            // () => ... と書くことで、「ボタンが押された時だけ、この中身を実行してね！」という予約票
                            onClick={() => setView('table')}
                            className="p-6 border-2 border-blue-500 rounded-xl hover:bg-blue-50 text-left font-bold"
                        >
                            📊 テーブル作成の練習
                        </button>
                        <button
                            onClick={() => setView('if-practice')}
                            className="p-6 border-2 border-green-500 rounded-xl hover:bg-green-50 text-left font-bold"
                        >
                            🌿 if文・条件分岐の練習
                        </button>
                    </div>
                </div>

            ) : view === 'table' ? (
                /* --- テーブル練習画面 --- */
                <div>
                    <h1 className="text-3xl font-bold border-b-2 pb-2 mb-10 text-blue-600">テーブル作成練習</h1>
                    <table className="border-collapse border border-gray-400">
                        <thead className="bg-gray-100 text-sm">
                            <tr>
                                {headers.map((text, i) => (
                                    <td key={i} className="border border-gray-300 p-2">{text}</td>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user, i) => (
                                <tr key={i}>
                                    <td className="border border-gray-300 p-2">{user.name}</td>
                                    <td className="border border-gray-300 p-2">{user.age}</td>
                                    <td className="border border-gray-300 p-2">{user.status ? "退職済み" : "在職中"}</td>
                                    <td className="border border-gray-300 p-2">{user.age >= 3 ? "はい" : "いいえ"}</td>
                                    <td className="border border-gray-300 p-2 text-xs">{user.name === "山田太郎" ? "本人" : "他人"}</td>
                                    <td className="border border-gray-300 p-2 text-xs">{user.age >= 1 && user.status ? "対象" : "-"}</td>
                                    <td className="border border-gray-300 p-2 text-xs">{user.name === "山田太郎" || user.name === "せいや" ? "対象" : "-"}</td>
                                    <td className="border border-gray-300 p-2 text-xs">{user.age !== 3 ? "以外" : "3歳"}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

            ) : (
                /* --- if文練習画面 --- */


                <IfPractice />
            )}

        </div>
    );
}