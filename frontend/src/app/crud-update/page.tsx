'use client'
import Header from "@/components/Header";
import { useState } from "react";

//解析のポイントは、今から探す場所の目的を決めてから読む（型定義？　箱State? 処理関数？　表示JSX？）　目的の意識が初心者と経験者の違いだから
//このファイルには、関数が３つあります。それぞれ「ボタンを押したら何が起きるか」を日本語にする。

// データの定義（Updateなので既存データを更新できるようにする）
//型定義を探す（データ「型」を知る）
//➀TypeScriptでは、まずTypeやinterfaceを探す（このアプリで扱うデータ「変数」はこういう形ですって説明してくれてる設計図だから）
type User = {
    id: number;
    name: string;
    email: string;
    role: string;
};


export default function CrudUpdate() {

    // Stateを洗い出す（「箱」を把握する）
    //useStateは「値を覚えておく箱」です。

    //Stateが出たら、「初期値は何か」「誰がこの箱を書き換えるか」をセットで確認する！！　★重要

    // 一覧データ（最初から2人いる状態でスタート）
    // usersは、ユーザー一覧（配列）
    const [users, setUsers] = useState<User[]>([
        { id: 1, name: "田中", email: "tanaka@example.com", role: "管理者" },
        { id: 2, name: "佐藤", email: "sato@example.com", role: "一般ユーザー" },

    ]);
    // 「今どのユーザーを編集中か」を覚えておく箱
    // 誰も編集していないときは null（＝何も選ばれていない状態）
    // editingIdは、今編集中の人のID（誰も編集してなければnull）
    // editingNameは、編集フォームに今入力されている名前

    //editingIdがnumber | nullである理由は？（誰も編集してない状態を表現する為に、nullが必要です。）もしnumber型だけにしてしまうと「編集してない」を表現する方法がなくなる
    //編集中と編集なし状態を管理する

    const [editingId, setEditingId] = useState<number | null>(null);


    // 編集フォームに入力中の名前を一時保存する箱(入力中の箱作成)
    const [editingName, setEditingName] = useState("");

    // 「編集」ボタンを押したときの処理
    // → その人のidをeditingIdに保存し、今の名前をeditingNameにセットする

    const startEdit = (user: User) => {
        setEditingId(user.id);
        setEditingName(user.name);
    }

    // 「キャンセル」ボタンを押したときの処理
    // → editingIdをnullに戻すだけ（＝誰も編集していない状態に戻す）
    //cancelEdit関数は、キャンセルボタンを押した時に呼ばれる関数（箱を空に戻すだけ）

    const cancelEdit = () => {
        setEditingId(null);
        setEditingName("");
    };


    // 「保存」ボタン（フォームのsubmit）を押したときの処理
    //updateUser関数は、保存ボタンを押したときに呼ばれる関数（ここが一番重要です）
    //API連携：今はuseStateだけで完結してますが、実際のアプリではこのupdateUsersの中で、fetch("/api/users/" + editingId, { method: "PATCH", body: ... }) のようにAPI読んで、DB更新してから
    //setUsersする形になる


    const updateUser = (e: React.FormEvent) => {

        e.preventDefault();
        console.log("➁更新対象ID:", editingId, "新しい名前：", editingName);

        if (editingName.trim() === "") return;


        // ここがUpdate処理の核心！！  (ここから読んでいく)
        // users.mapで配列を1件ずつ見ていき、
        //users.map で全ユーザーを1件ずつ確認
        // 「編集中のidと一致した人だけ」名前を書き換えた新しいオブジェクトに置き換える。
        // 一致しない人は u をそのまま返す（＝変更しない）。

        // updatedUsersで新しい配列が完成する
        //mapは、どんな処理か？→　「全件チェックして新しい配列を作る」処理
        //mapは必ず元と同じ件数の配列を返すという性質がある（「:uで一致しない人はそのまま返す」という書き方と忘れると、一致しない人のデータが消えてしまうので注意が必要です。）



        const updatedUsers = users.map((u) =>
            // u.id === editingId がtrueの時に、{...u, name: editingName }　に書き換え
            u.id === editingId  ? { ...u, name: editingName } 
                //スプレッド構文の意味は？（uのなかみ「id,email,role」などを全てコピーしつつ、nameだけ新しい値で上書きするという書き方。）
                // スプレッド構文を使わずに、{name: editingName}だけ書いてしまうと、id,email,roleが消えてしまう。
               // スプレッド構文で元のデータをコピーしつつnameだけ上書き

                // u.id === editingId がfalseの時に、uをそのまま返す（変更なし）
                : u
        );


        console.log("②更新後の配列:", updatedUsers);


        // setUsers(updatedUsers)で画面が再描画される
        setUsers(updatedUsers);

        // 編集モードを終了する（通常表示に戻る）
        setEditingId(null);
        setEditingName("");

    };

    return (

        //UI画面
        //JSX（表示部分）を最後に見る
        //JSXを読むときは、条件分岐（参考演算子や＆＆）だけを最初に探すのがコツ！！！！


        <div className="p-8 max-w-4xl mx-auto">

            {/* Headerという部品（コンポーネント）に、setViewという名前で”何もしない空の関数を渡してる”という意味。 */}
            {/* 本来はヘッダーの中でボタンが押されたときに、画面を切り替えるための関数ですが、ここではまだ使わない」為に、あえて空にしてます。 */}
            <Header setView={() => { }} />


            <h1 className="text-2xl font-bold mb-6 border-b-2 pb-2 border-blue-500">
                Update練習（更新）
            </h1>

            <div className="grid gap-4">
                {/* 全ユーザーで１件ずつ確認 */}
                {users.map((user) => (




                    // borderでデータエリア内の外側の部分を黒線で囲んでいる
                    // shadow-mdでデータエリア外のmargin-bottom(下)に影をつける

                    <div key={user.id} className="p-4 bg-white shadow-md rounded-lg border ">

                        {/* これは「今見ているカードのuser.idが、編集中のID（edtingId）と一致してたら編集フォームを出す、そうで無ければ通常表示にする」 */}
                        {/* まずは条件分岐の骨組みだけ拾って行く（Tailwindのクラスは後回しでOK） */}

                        {editingId === user.id ? (


                            // 編集モード中のUI（フォーム表示）
                            <form onSubmit={updateUser} className="flex gap-2 items-center">


                                <input
                                    type="text"
                                    value={editingName}
                                    onChange={(e) => setEditingName(e.target.value)}
                                    className="flex-1 p-2 border rounded-lg"
                                    autoFocus
                                />

                                <button
                                    type="submit"
                                    className="bg-blue-600 text-white px-4 py-2 rounded-lg font-bold"
                                >
                                    保存
                                </button>
                                <button
                                    type="button"
                                    onClick={cancelEdit}

                                    className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg font-bold"
                                >
                                    キャンセル
                                </button>
                            </form>
                        ) : (

                            // 通常表示中のUI
                            <div className="flex justify-between items-center">
                                <div>
                                    <p className="text-sm text-blue-600 font-bold">{user.role}</p>
                                    <h2 className="text-xl font-bold text-gray-800 ">{user.name}</h2>
                                    <p className="text-gray-400 text-xs font-mono">ID:{user.id}</p>
                                </div>

                                <button
                                    // ボタンを押したときに呼ばれる関数（editingIdとeditingNameに値をセットするだけ）ここから
                                    onClick={() => startEdit(user)}
                                    className="bg-yellow-500 text-white px-4 py-2 rounded-lg font-bold "
                                >
                                    ✏️編集
                                </button>
                            </div>
                        )}

                    </div>
                ))}
            </div>

            <p className="m-5">
                users.map の中で「id が一致する人だけ新しいオブジェクトに置き換える」のがUpdateの核心です。
                Delete練習では、この考え方を応用して「一致する人だけ配列から除外する（filter）」という処理を学びます。
            </p>


            {/* ここから解析 */}
            <h2 className="m-2 font-bold ">コード解析のポイント</h2>
            <p className="p-2 ">
                「型定義→State→関数→JSX」の順で目的を決めて読むのが基本の型です。今回のupdateUserのように、Update処理は「mapで全件チェックしながら、一致する人だけ新しいオブジェクトに
                置き換える」というのがReactの定番パターンです。今のうちに「map=全員チェックして置き換え」「filter=条件に合う人だけ残す」の違いを図で覚えておくと、次が楽になる。
            </p>


        </div>
    );
}