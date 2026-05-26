'use client'
import Header from "@/components/Header";
import { useState } from "react";

export default function CrudDelete() {

    //データの削除処理を行う練習

    //データ削除のアルゴリズムは、
    // イベント発生: ユーザーがボタンをクリック。user.id（例：2）が deleteUser 関数に渡される。
    // 論理（filter）: filter が [1, 2, 3] という配列をチェックし、「2 じゃないもの」つまり [1, 3] という新しい配列を作る。
    // 状態の更新（setUsers）: setUsers が呼ばれ、React が「データが変わった！画面を描き直せ！」と命令。Read（map）が走り、ID 2 が消えた画面が表示される。


    // 1. 状態管理（データ作成）：削除練習のdelete

    const [users, setUsers] = useState([
        { id: 1, name: "田中", email: "tanaka@example.com", role: "管理者" },
        { id: 2, name: "佐藤", email: "sato@example.com", role: "一般ユーザー" },
        { id: 3, name: "鈴木", email: "suzuki@example.com", role: "一般ユーザー" },
    ])

    // イベント発生: ユーザーがボタンをクリック。user.id（例：2）が deleteUser 関数に渡される。
    // 2. 削除する関数（削除関数の作成）

    const deleteUser = (targetId: number) => {
        //filter使って「クリックされたID以外」のユーザーだけ残す
        const updatedUsers = users.filter(user => user.id! == targetId);
        //新しい配列をセットして画面を更新する
        //どうやって作るか：更新の状態（setUsers） : setUsersが呼ばれ、Reactが「データが変わったから画面を修正してと命令する」Read(map)が走り、ID２が消えた画面が表示される。

        setUsers(updatedUsers);

    }




    return (

        // 先ほどの CrudRead コンポーネントに、「削除ボタン」 と 「削除を実行する関数」 を追加します。
        // 「削除ボタン」 と 「削除を実行する関数」 を追加します。
        <div className="p-8 max-w-4xl mx-auto">
            <Header setView={() => { }} />
            <h1 className="text-2xl font-bold mb-6 border-b-2 pb-2 border-red-500">
                CRUD 練習：Delete（削除）
            </h1>

            <div className="grid gap-4">
                {users.map(user => (
                    <div key={user.id} className="p-4 bg-white shadow-md rounded-lg border flex justify-between items-center">
                        <div>
                            <p className="text-sm text-blue-600 font-bold">{user.role}</p>
                            <h2 className="text-xl font-bold text-gray-800">{user.name}</h2>
                        </div>

                        {/* 3. 削除ボタンの設置 */}
                        <button
                            onClick={() => deleteUser(user.id)}
                            className="bg-red-50 text-red-600 px-4 py-2 rounded-lg hover:bg-red-600 hover:text-white transition-colors font-bold border border-red-200"
                        >
                            🗑️ 削除
                        </button>
                    </div>
                ))}
            </div>



            {
                users.length === 0 && (
                    <div className="text-center p-10 text-gray-400 ">
                        表示できるユーザーがいません。
                    </div>
                )
            }




            <p className="">
                データ削除のアルゴリズムは、
                このボタンを押したとき、裏側では以下のことが順番に起きています。

                イベント発生: ユーザーがボタンをクリック。user.id（例：2）が deleteUser 関数に渡される。

                論理（filter）: filter が [1, 2, 3] という配列をチェックし、「2 じゃないもの」つまり [1, 3] という新しい配列を作る。

                状態の更新（setUsers）: setUsers が呼ばれ、React が「データが変わった！画面を描き直せ！」と命令。Read（map）が走り、ID 2 が消えた画面が表示される。
            </p>



            <p className="">
                💡 納得ポイント：なぜ filter なの？
                初心者のうちは「配列から特定の要素を直接抜き取る」と考えがちですが、React の世界（イミュータブルと言います）では、「元のデータは壊さず、新しい状態を作って入れ替える」 のがルールです。

                filter は、まさに「条件に合うものだけを選別して、新しい配列を作る」のに最適なメソッドなんです。</p>

        </div >
    );
}