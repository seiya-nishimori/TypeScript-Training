'use client'
import Header from "@/components/Header";
import { useState } from "react";

// データの定義（Create練習と同じ形）
type User = {
    id: number;
    name: string;
    email: string;
    role: string;
};

export default function CrudUpdate() {

    // 一覧データ（最初から2人いる状態でスタート）
    const [users, setUsers] = useState<User[]>([
        { id: 1, name: "田中", email: "tanaka@example.com", role: "管理者" },
        { id: 2, name: "佐藤", email: "sato@example.com", role: "一般ユーザー" },
    ]);

    // 「今どのユーザーを編集中か」を覚えておく箱
    // 誰も編集していないときは null（＝何も選ばれていない状態）
    const [editingId, setEditingId] = useState<number | null>(null);

    // 編集フォームに入力中の名前を一時保存する箱
    const [editingName, setEditingName] = useState("");

    // 「編集」ボタンを押したときの処理
    // → その人のidをeditingIdに保存し、今の名前をeditingNameにセットする
    const startEdit = (user: User) => {
        setEditingId(user.id);
        setEditingName(user.name);
    };

    // 「キャンセル」ボタンを押したときの処理
    // → editingIdをnullに戻すだけ（＝誰も編集していない状態に戻す）
    const cancelEdit = () => {
        setEditingId(null);
        setEditingName("");
    };

    // 「保存」ボタン（フォームのsubmit）を押したときの処理
    const updateUser = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("①更新対象ID:", editingId, "新しい名前:", editingName);

        if (editingName.trim() === "") return;

        // ここがUpdate処理の核心！！
        // users.mapで配列を1件ずつ見ていき、
        // 「編集中のidと一致した人だけ」名前を書き換えた新しいオブジェクトに置き換える。
        // 一致しない人は u をそのまま返す（＝変更しない）。
        const updatedUsers = users.map((u) =>
            u.id === editingId
                ? { ...u, name: editingName } // スプレッド構文で元のデータをコピーしつつnameだけ上書き
                : u
        );

        console.log("②更新後の配列:", updatedUsers);

        setUsers(updatedUsers);

        // 編集モードを終了する
        setEditingId(null);
        setEditingName("");
    };

    return (
        <div className="p-8 max-w-4xl mx-auto">
            <Header setView={() => { }} />

            <h1 className="text-2xl font-bold mb-6 border-b-2 pb-2 border-blue-500">
                Update練習（更新）
            </h1>

            <div className="grid gap-4">
                {users.map((user) => (
                    <div key={user.id} className="p-4 bg-white shadow-md rounded-lg border">

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
                                    <h2 className="text-xl font-bold text-gray-800">{user.name}</h2>
                                    <p className="text-gray-400 text-xs font-mono">ID:{user.id}</p>
                                </div>
                                <button
                                    onClick={() => startEdit(user)}
                                    className="bg-yellow-500 text-white px-4 py-2 rounded-lg font-bold"
                                >
                                    ✏️ 編集
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
        </div>
    );
}