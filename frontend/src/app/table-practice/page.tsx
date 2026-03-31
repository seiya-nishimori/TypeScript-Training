'use client';

export function TableContent() {
    const headers: string[] = ['名前', '年齢', '退職状況', '3歳以上？', '山田さんかどうか', '１歳以上かつ退職者', 'どちらか一方', "3歳以外か"];
    const users = [
        { name: "山田太郎", age: 2, status: true },
        { name: "せいや", age: 4, status: false }
    ];

    return (
        <div className="p-4">
            <h1 className="text-3xl font-bold border-b-2 pb-2 mb-10 text-blue-600 text-center">テーブル作成練習</h1>
            <div className="overflow-x-auto">
                <table className="mx-auto border-collapse border border-gray-400">
                    <thead className="bg-gray-100 text-sm font-bold">
                        <tr>
                            {headers.map((text, i) => (
                                <td key={i} className="border border-gray-300 p-2 whitespace-nowrap">{text}</td>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, i) => (
                            <tr key={i} className="hover:bg-gray-50">
                                <td className="border border-gray-300 p-2">{user.name}</td>
                                <td className="border border-gray-300 p-2 text-center">{user.age}</td>
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
        </div>
    );
}

// ページとしても機能するように
export default function TablePage() {
    return <TableContent />;
}