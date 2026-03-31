'use client';
// ★絶対パスでのインポート
import Header from "@/components/Header";
import Link from "next/link";


// <Link href="/if-practice" className="w-full p-6 border-2 border-green-500 ... text-center">
//     🌿 if文・条件分岐
// </Link>

export default function Home() {

    // 画面遷移（画面切り替え）
    // const [view, setView] = useState('home');

    // テーブル用のデータ（以前のコードと同じ）
    const headers: string[] = ['名前', '年齢', '退職状況', '3歳以上？', '山田さんかどうか', '１歳以上かつ退職者', 'どちらか一方', "3歳以外か"];
    const users = [
        { name: "山田太郎", age: 2, status: true },
        { name: "せいや", age: 4, status: false }
    ];

    return (
        <div className="p-10 relative">

            <div>
                <h1 className="text-3xl font-bold border-b-2 pb-2 mb-10 text-center">TypeScript 練習帳</h1>

                <h2 className="text-center mb-4">アルゴリズムとフローチャートを意識しよう</h2>


                <div className="flex flex-col items-center justify-center gap-6 max-w-md mx-auto">
                    <button
                        className="w-full p-6 border-2 border-blue-500 rounded-xl hover:bg-blue-50 text-center font-bold"
                    >
                        📊 テーブル作成
                    </button>
                    <button
                        className="w-full p-6 border-2 border-green-500 rounded-xl hover:bg-green-50 text-center font-bold"
                    >
                        🌿 if文・条件分岐
                    </button>
                </div>
            </div>

        </div>


    );
}