'use client'
import Header from "@/components/Header";
import { useState } from "react";


//重要：returnの上では、データや処理を準備してる（状態管理、関数、データの計算）
//上がロッジック

// データの定義
type User = {
    id: number;
    name: string,
    email: string,
    role: string,
};

//この関数をこのファイルの外にも公開する
export default function CrudCreate() {

    //一覧データ作成
    // usersは、今の一覧データ（読み取り専用）
    // setUsersは、userを書き換える為の関数
    const [users, setUsers] = useState<User[]>([
        { id: 1, name: "田中", email: "tanaka@example.com", role: "管理者" },
        { id: 2, name: "佐藤", email: "sato@example.com", role: "一般ユーザー" },
    ]);


    //入力中の文字を保存するState(状態管理)
    //ユーザーがinputに文字を打つ度に、その文字をinputNameという箱に1時保存する
    //Reactのルールで、「画面の見た目」と「裏側のデータ」一致させる仕組みなので、→入力中の文字も裏側でデータとして盛っておく必要がある。

    const [inputName, setInputName] = useState("");


    //メール追加機能（機能追加）
    const [inputEmail, setInputEmail] = useState("");    //追加


    //追加ボタンを押した時の処理(何がしたいか考える)
    const createUser = (e: React.FormEvent) => {
        //フォーム送信時のページの再読み込みをやめる（これがないとページがリロードされて、データが消えるから）
        e.preventDefault();
        console.log("①入力値 name", inputName, "email:", inputEmail);     //ログでメールが入力されたか確認できるようにする（追加）

        //入力された文字が空文字なら、処理を中断する(メールと名前の追加時の処理)・・・・・　追加➄
        if (inputName.trim() === "" || inputEmail.trim() === "") return;

        //追加したいデータの設計だけ作る（まだusersには入ってない）
        const newUser: User = {
            id: Date.now(),
            name: inputName,
            email: inputEmail,        //変更➃　（Date.now（）埋め込みをやめて実際の入力値にする）
            role: "一般ユーザー",
        };

        console.log("➁新規ユーザー:", newUser);



        //スプレッド構文！ここが一番重要！！  ...userは「今の全員をコピーする」という意味。
        //そこにnewUserを追加した「新しい配列」を作ってそれで丸ごと置き換えする。
        //スプレッド構文（配列をコピー）：...users  配列をコピーして新しい配列を作る



        setUsers((prev) => [...prev, newUser]);


        //最後に入力欄をリセット
        setInputName("");
        setInputEmail("");     //追加➅
    };


    return (


        //returnの下では、実際の画面を作ってる（UI）
        //input,Button,一覧画面などを行ってる
        //画面をどう表示するかを作る（入力欄を表示、ボタンを表示、タイトルを表示、usersの人数分だけカードを表示、）
        //下がUI画面

        <div className="p-8 max-w-4xl mx-auto">
            <Header setView={() => { }} />

            <h1 className="text-2xl font-bold mb-6 border-b-2 pb-2 border-green-500">
                Create練習（作成）メールと名前の追加
            </h1>



            {/* 入力フォームの作成 */}
            <form onSubmit={createUser} className="mb-8 p-4 bg-gray-50 rounded-xl border flex gap-3 ">
                {/* 新しいユーザーの名前入力欄の作成 */}
                <input
                    type="text"
                    value={inputName}
                    onChange={(e) => setInputName(e.target.value)}
                    placeholder="新しいユーザーの名前を入力"
                    className="flex-1 p-2 border rounded-lg"

                />

                {/* メールアドレス入力欄 */}

                <input
                    type="text"
                    value={inputEmail}
                    onChange={(e) => setInputEmail(e.target.value)}
                    placeholder="メールアドレスを入力"
                    className="flex-1 p-2 border rounded-lg"
                />
                <button type="submit" className="bg-green-600 text-white px-6 py-2 rounded-lg font-bold " >
                    ✨ 追加
                </button>
            </form>


            {/* 残りここだけトレースする */}
            {/* 追加処理後に、実際に画面に表示するエリア作成 */}

            <div className="grid gap-4">
                {/* 画面に表示する部分 */}
                {/* usersという配列を取り出して、<div>を作る */}
                {users.map((user) => (
                    //key={user.id} →　Reactが「どのカードが誰か」を見分けるための目印（これがないとReactが警告を出す）
                    <div key={user.id} className="p-4 bg-white shadow-md rounded-lg border">

                        <p className="text-sm text-blue-600 font-bold">{user.role}</p>
                        <h2 className="text-xl font-bold text-gray-800">{user.name}</h2>
                        <p className="text-gray-500 text-sm">{user.email}</p>
                        <p className="text-gray-400 text-xs font-mono">ID:{user.id}</p>
                    </div>
                ))}
            </div>


            <p className="m-5 ">
                ...users（スプレッド構文）が今回のロジックの核心です。ここだけは「配列をコピーして新しい配列を作る」という意味を、
                Update・Delete機能でも繰り返し使うので、今のうちに手打ちで体に入れておくと後がすごく楽になります。
            </p>
        </div >
    );
}