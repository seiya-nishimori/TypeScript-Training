'use client';



export default function Home() {



    // 表の見出しデータを配列にまとめます

    const headers: string[] = ['名前', '年齢', '退職状況'];


    type User = {
        name: string;     //文字列
        age: number;      //数字
        status: boolean;    //真偽値

    };

    const users: User[] = [
        { name: "ああ", age: 2, status: true },
        { name: "うう", age: 4, status: false }
    ];


    // １人のデータを｛｝で囲込み、それを[]でリスト化します



    return (
        <div className="p-10">
            <h1 className="text-3xl font-bold border-b-2 pb-2 mb-10" >
                TypeScript練習
            </h1>


            {/* テーブル全体 */}
            <table className="border-collapse border border-gray-400">



                {/* テーブルのヘッド部分 */}
                <thead>
                    <tr className="bg-gray-100">
                        {/* mapを使ってすべてのtdに一括で枠線と余白を付けます */}
                        {headers.map((text, index) => (
                            <td key={index} className="border border-gray-300 p-2">
                                {text}
                            </td>
                        ))}
                    </tr>
                </thead>


                {/* テーブルのデータ部分 */}
                <tbody>

                    {/* map使って箱（users）のなかから１人（user）ずつ取り出す */}
                    {/* アロー関数使って上で変数宣言して作った連想配列をテーブルに表示する */}
                    {users.map((user, index) => (

                        <tr key={index}>
                            <td className="border border-gray-300 p-2" >{user.name}</td>
                            <td className="border border-gray-300 p-2">{user.age}</td>
                            {/* ここどんな処理になってるか分からん */}
                            <td className="border border-gray-300 p-2">{user.status ? "退職済み" : "在職中"}</td>

                        </tr>
                    ))}

                </tbody>


            </table>





        </div>



    )
}