'use client'
import Header from "@/components/Header";
import { useState } from "react";


//重要：returnの上では、データや処理を準備してる（状態管理、関数、データの計算）
//上がロッジック

type User = {
    id: number;
    name: string;
    email: string;
    role: string;
};

export default function CrudCreate() {
    // ① 一覧データ
    //データの置き場所を作る
    // usersは、今の一覧データ（読み取り専用）
    // setUsersは、usrsを書き換える為の関数
    const [users, setUsers] = useState<User[]>([
        { id: 1, name: "田中", email: "tanaka@example.com", role: "管理者" },
        { id: 2, name: "佐藤", email: "sato@example.com", role: "一般ユーザー" },
    ]);

    // ② 入力中の文字を一時保存するState
    // ユーザーがinputに文字を打つたびに、その文字をinputNameという箱に一時保存する
    //Reactのルールで、「画面の見た目」と「裏側のデータ」を常に一致させる仕組みなので、→入力中の文字も裏側でデータとして持っておく必要があるから。
    const [inputName, setInputName] = useState("");



    // ③ 追加処理
    //追加ボタンが押されたときの処理
    const createUser = (e: React.FormEvent) => {
        //フォーム送信時のページの再読み込みをやめる（これがないとページがリロードされて、データが消えるから）
        e.preventDefault();
        console.log("①入力値:", inputName);

        //入力された文字が空文字なら、処理を中断。
        if (inputName.trim() === "") return;

        //追加したいデータの「設計を作るだけ」（まだusersには入ってない）
        const newUser: User = {
            id: Date.now(),
            name: inputName,
            email: `${Date.now()}@example.com`,
            role: "一般ユーザー",
        };

        console.log("②新規ユーザー:", newUser);


        //ここが一番重要。...usesは「今の全員をコピーする」という意味です。
        //そこにnewUserを追加した「新しい配列」を作ってそれで丸ごと置き換えてます。
        //スプレッド構文(配列をコピー)：...users　 配列をコピーして新しい配列を作る
        
        setUsers([...users, newUser]);

        //最期に入力欄を空にリセット。
        setInputName("");
    };

    return (

        //returnの下では、実際の画面を作ってる（画面）
        //input,Button,一覧表示などを行っている
        //画面をどう表示するかを作る（入力欄を表示、ボタンを表示、タイトルを表示、usersの人数分だけカードを表示、）
        //下がUI作成

        <div className="p-8 max-w-4xl mx-auto">
            <Header setView={() => { }} />
            <h1 className="text-2xl font-bold mb-6 border-b-2 pb-2 border-green-500">
                Create練習（作成）
            </h1>

            <form onSubmit={createUser} className="mb-8 p-4 bg-gray-50 rounded-xl border flex gap-3">
                <input
                    type="text"
                    value={inputName}
                    onChange={(e) => setInputName(e.target.value)}
                    placeholder="新しいユーザーの名前を入力"
                    className="flex-1 p-2 border rounded-lg"
                />
                <button type="submit" className="bg-green-600 text-white px-6 py-2 rounded-lg font-bold">
                    ✨ 追加
                </button>
            </form>

            <div className="grid gap-4">
                {/* 画面に表示する部分 */}
                {/* usersという配列を1つずつ取り出して、＜div＞を作ってる */}
                {users.map((user) => (
                    // Reactが「土のカードが誰か」を見分けるための目印（これがないとReactが警告を出す）
                    <div key={user.id} className="p-4 bg-white shadow-md rounded-lg border">
                        <p className="text-sm text-blue-600 font-bold">{user.role}</p>
                        <h2 className="text-xl font-bold text-gray-800">{user.name}</h2>
                        <p className="text-gray-400 text-xs font-mono">ID: {user.id}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}