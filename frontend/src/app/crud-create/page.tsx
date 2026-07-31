'use client'
import Header from "@/components/Header";
import { useState } from "react";

//stateは、覚える箱
//inputは、入力する場所
//trimは、バリデーションチェック（入力確認をチェックする場所）
//("")は空にする場所、リセットする場所


//重要：returnの上では、データや処理を準備してる（状態管理、関数、データの計算）
//上がロッジック

// データの定義
type User = {
    id: number;
    name: string,
    email: string,
    address: string,
    phone: string,
    role: string,
};

//この関数をこのファイルの外にも公開する
export default function CrudCreate() {

    //一覧データ作成
    // usersは、今の一覧データ（読み取り専用）
    // setUsersは、userを書き換える為の関数
    const [users, setUsers] = useState<User[]>([
        { id: 1, name: "田中", email: "tanaka@example.com", address: "東京都渋谷区神南1-1-1", phone: "090-1234-5678", role: "管理者" },
        { id: 2, name: "佐藤", email: "sato@example.com", address: "大阪府大阪市北区梅田2-2-2", phone: "080-9876-5432", role: "一般ユーザー" },
    ]);


    //入力中の文字を保存するState(状態管理)
    //ユーザーがinputに文字を打つ度に、その文字をinputNameという箱に1時保存する
    //Reactのルールで、「画面の見た目」と「裏側のデータ」一致させる仕組みなので、→入力中の文字も裏側でデータとして盛っておく必要がある。

    //名前の追加
    const [inputName, setInputName] = useState("");


    //メール追加機能（機能追加）
    const [inputEmail, setInputEmail] = useState("");    //追加


    //住所の追加
    const [inputAddress, setInputAddress] = useState("");    //追加

    //電話番号の追加
    const [inputPhone, setInputPhone] = useState("");     //電話番号の追加



    //追加ボタンを押した時の処理(何がしたいか考える)
    const createUser = (e: React.FormEvent) => {
        //フォーム送信時のページの再読み込みをやめる（これがないとページがリロードされて、データが消えるから）
        e.preventDefault();
        console.log("①入力値 name", inputName, "email:", inputEmail, "address", inputAddress,);     //ログで住所が入力されたか確認（ログ確認）

        //入力された文字が空文字なら、処理を中断する(データ追加時の処理)・・・・・　追加➄
        if (inputName.trim() === "" || inputEmail.trim() === "" || inputAddress.trim() === "" || inputPhone.trim() === "") return;

        //追加したいデータの設計だけ作る（まだusersには入ってない）
        const newUser: User = {
            id: Date.now(),
            name: inputName,
            email: inputEmail,        //変更➃　（Date.now（）埋め込みをやめて実際の入力値にする）
            address: inputAddress,     //住所追加機能
            phone: inputPhone,       //電話番号の追加
            role: "一般ユーザー",
        };

        console.log("➁新規ユーザー:", newUser);



        //スプレッド構文！ここが一番重要！！  ...userは「今の全員をコピーする」という意味。
        //そこにnewUserを追加した「新しい配列」を作ってそれで丸ごと置き換えする。
        //スプレッド構文（配列をコピー）：...users  配列をコピーして新しい配列を作る


        // 入力されたデータを配列に追加する（これであってるか？？？？？？？？？？）
        // usersという配列に追加される？？？？？
        // 追加する前のデータを全部渡してる、そこにnewUserの新規ユーザーを追加する
        setUsers((prev) => [...prev, newUser]);


        //最後に入力欄をリセット
        setInputName("");
        setInputEmail("");
        setInputAddress("");      //住所の入力欄を空にする
        setInputPhone("");       //電話番号の入力欄を空にする

    };


    return (


        //returnの下では、実際の画面を作ってる（UI）
        //input,Button,一覧画面などを行ってる
        //画面をどう表示するかを作る（入力欄を表示、ボタンを表示、タイトルを表示、usersの人数分だけカードを表示、）
        //下がUI画面

        <div className="p-8 max-w-4xl mx-auto">
            <Header setView={() => { }} />

            <h1 className="text-2xl font-bold mb-6 border-b-2 pb-2 border-green-500">
                Create練習（作成）メールと名前と住所と電話
            </h1>



            {/* 入力フォームの作成 */}
            {/* grid→　要素をマス目（表）のように並べる。 */}
            {/* grid-cols-2は、２列作る！！ */}
            {/* gap-4は、マス目同士の感覚を４マス開ける */}
            {/* p-6は、内側の余白をを大きくする */}
            {/* borderは、枠線を付けます。 */}
            <form onSubmit={createUser} className="mb-8 p-6 bg-gray-50 rounded-xl border grid grid-cols-2  gap-4 ">
                {/* 新しいユーザーの名前入力欄の作成 */}

                {/* inputで入力する場所を作る */}
                {/* 入力する場所 */}
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


                {/* 住所の入力欄 */}

                <input
                    type="text"
                    value={inputAddress}
                    onChange={(e) => setInputAddress(e.target.value)}
                    placeholder="住所を入力"
                    className="flex-1 p-2 border rounded-lg"
                />


                {/* 電話番号の入力 */}

                <input
                    type="text"
                    value={inputPhone}
                    onChange={(e) => setInputPhone(e.target.value)}
                    placeholder="電話番号の入力"
                    className="flex-1 p-2 border rounded-lg"

                />


                {/* col-span-2は、２列分使うという意味。 */}

                <button type="submit" className="col-span-2 bg-green-600 text-white  py-3 rounded-lg font-bold  " >
                    ✨ 追加
                </button>
            </form>


            {/* 追加処理後に、実際に画面に表示するエリア作成 */}
            {/* ここで画面に表示する */}

            <div className="grid gap-4">
                {/* 画面に表示する部分 */}
                {/* usersという配列を取り出して、<div>を作る */}
                {/* usersの中に入っている全員を取り出して画面に表示する */}
                {/* 「users 配列の中身を画面に表示する場所」**です。 */}
                {users.map((user) => (
                    //key={user.id} →　Reactが「どのカードが誰か」を見分けるための目印（これがないとReactが警告を出す）
                    <div key={user.id} className="p-4 bg-white shadow-md rounded-lg border">

                        <p className="text-sm text-blue-600 font-bold">{user.role}</p>
                        <h2 className="text-xl font-bold text-gray-800">{user.name}</h2>
                        <p className="text-gray-500 text-sm">{user.email}</p>
                        <p className="text-gray-500 text-sm ">{user.address}</p>
                        <p className="text-gray-500 text-sm ">{user.phone}</p>
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