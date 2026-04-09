'use client';
// ★絶対パスでのインポート
import Header from "@/components/Header";
import Link from "next/link";



//ホーム画面です（リンクを使って各学習項目のページに画面遷移してます）


export default function Home() {

    // 画面遷移（画面切り替え）
    //ページリンクを使って、画面遷移を行う


    return (
        <div className=" p-10 relative">

            {/* ここにハンバーガーメニューを置かないと表示されない */}

            <Header setView={(view) => console.log(view)} />

            <div>
                <h1 className="text-3xl font-bold border-b-2 pb-2 mb-10 text-center">TypeScript 練習帳</h1>

                <h2 className="text-center mb-1">ページリンクを使って、画面遷移を行う</h2>

                <h2 className="text-center mb-4">アルゴリズムとフローチャートを意識しよう</h2>


                <div className="flex flex-col items-center justify-center gap-6 max-w-md mx-auto">


                    {/* if文練習 */}
                    <Link href="/if-practice" className="w-full">
                        <div className="w-full p-6 border-2 border-green-500 rounded-xl hover:bg-green-50 hover:scale-105 text-center font-bold">
                            🌿 if文・条件分岐
                        </div>
                    </Link>

                    {/* テーブルページへのリンク */}
                    <Link href="/table-practice" className="w-full">
                        <div className="p-6 border-2 border-blue-500 rounded-xl hover:bg-blue-50 hover:scale-105 text-center font-bold cursor-pointer transition">
                            📊 テーブル作成
                        </div>
                    </Link>


                    {/* in (オブジェクト構造判定) */}
                    <Link href="/in-practice" className="w-full">
                        <div className="p-6 border-2 border-purple-500 rounded-xl hover:bg-purple-50 hover:scale-105 text-center font-bold cursor-pointer transition">
                            🔍 in (オブジェクト構造判定)
                        </div>
                    </Link>


                    {/* Instanceof練習（ArrayとDateの判定） */}
                    <Link href="/instanceof-practice" className="w-full">
                        <div className="p-6 border-2 border-orange-500 rounded-xl hover:bg-orange-50 hover:scale-105 text-center font-bold cursor-pointer transition">
                            🆔 Instanceof練習（ArrayとDateの判定）
                        </div>
                    </Link>


                    {/* Switch文練習 */}
                    <Link href="/switch-practice" className="w-full">
                        <div className="p-6 border-2 border-red-500 rounded-xl hover:bg-red-50 hover:scale-105 text-center font-bold cursor-pointer transition">
                            🚦 Switch文練習
                        </div>
                    </Link>




                </div>
            </div>

        </div>


    );
}