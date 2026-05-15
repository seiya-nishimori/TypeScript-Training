'use client'
import Header from "@/components/Header";
import { useState } from "react";

export default function CrudRead() {
    //CRUD 練習：Read（読み取り）
    // CRUDの練習は、「透明なデータ」に「実体（デザイン）」を与える作業
    // Read（読み取り）とは「データという見えない概念を、人間が理解できる形に翻訳すること」です。
    //Read は、「プログラムと人間のコミュニケーションの窓口」これがないと他の操作（作成・変更・削除）がすべて「目隠し状態」になる。
    //React において、Read は 「データの現在の姿」を映し出す鏡 です。

    //「画面に見えているもの」と「プログラムの中にあるデータ」がどう繋げるか


    //練習用の初期データ(これをReadして読み込んで画面に表示する)
    const [users] = useState([
        { id: 1, name: "田中", email: "tanaka@example.com", role: "管理者" },
        { id: 2, name: "佐藤", email: "sato@example.com", role: "一般ユーザー" },
        { id: 3, name: "鈴木", email: "suzuki@example.com", role: "一般ユーザー" },
    ]);


    return (
        <div className="p-8 max-w-4xl mx-auto">
            <Header setView={() => { }} />

            {/* 見出し作成（Read） */}
            <h1 className="text-2xl font-bold mb-6 border-b-2 pb-2 border-blue-500 ">
                CRUD 練習:Read (読み取り)
            </h1>



            <div className="grid gap-4">
                {/* map を使ってユーザー一覧を表示 */}
                {/* map の再確認: 配列の中にあるオブジェクトを 1 つずつ取り出して、綺麗なカード（HTML）に変換しています。 */}
                {/* key={user.id}: React が「どのデータが誰か」を識別するために必須の目印です。CRUD では ID を使って操作するので非常に重要です。 */}
                {/* スタイリング: flex justify-between を使うことで、名前を左に、ID を右に配置して「管理画面っぽさ」を出しています。 */}



                {/* {users.map(user => (
                    <div key={user.id} className="p-4 bg-white shadow-md rounded-lg border border-gray-100 flex justify-between items-center">
                    //  ここで user.name や user.email を呼び出している 
                        <div>
                            <p className="text-sm text-blue-600 font-bold">{user.role}</p>
                            <h2 className="text-xl font-bold text-gray-800">{user.name}</h2>
                            <p className="text-gray-500 text-sm">{user.email}</p>
                        </div>
                        <span className="text-xs text-gray-300 font-mono">ID: {user.id}</span>
                    </div>
                ))} */}



                {/* map使って配列を表示、key使って上のデータを判断して1件ずつ表示する */}

                {users.map(user => (
                    <div key={user.id} className="p-4 bg-white shadw-md round-lg border border-gray-100 flex justify-between items-center ">
                        {/* ここでuser.nameやuser.email を呼び出している */}

                        <div>
                            <p className="text-sm text-blue-600 font-bold">{user.role}</p>
                            <h2 className="text-xl font-bold text-gray-800">{user.name}</h2>
                            <p className="text-gray-500 text-sm ">{user.email}</p>
                        </div>

                        <span className="text-xs text-gray-300 font-mono ">ID:{user.id}</span>
                    </div>
                ))}


                {/* 結論は、Readでデータを表示するには、keyとmapでプログラム内のデータを表示する（idでデータを１件ずつ判断する） */}

            </div>



            <p className="mt-8 text-gray-800 text-xl italic">
                💡結論:Readでデータを表示するには、keyとmapでプログラム内のデータを表示する（idでデータ1件ずつ判断する）
            </p>

            <p className="mt-8 text-gray-800 text-sm italic">
                💡 CRUD の "R" は Read。データを map で回して「見える化」することからすべてが始まります。
            </p>
        </div>
    );
}