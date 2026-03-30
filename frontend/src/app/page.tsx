'use client';
import { useState } from "react";     //ハンバーガーメニューの開いているかの状態確認をする



export default function Home() {

    // ハンバーガーメニューが開いているかどうかの状態確認をuseStateを使って判定する（初期値はfalse =閉じている）
    // 1. メニューの開閉状態
    const [isOpen, setIsOpen] = useState(false);
    // 2. 現在の表示画面を管理 ('home' または 'table' または 'if-practice')
    const [view, setView] = useState('home');



    // 表の見出しデータを配列にまとめます

    const headers: string[] = ['名前', '年齢', '退職状況', '3歳以上？', '山田さんかどうか', '１歳以上かつ退職者', 'どちらか一方', "3歳以外か"];


    type User = {
        name: string;     //文字列
        age: number;      //数字
        status: boolean;    //真偽値

    };

    const users: User[] = [
        { name: "山田太郎", age: 2, status: true },
        { name: "せいや", age: 4, status: false }
    ];


    // １人のデータを｛｝で囲込み、それを[]でリスト化します



    return (

        <div className="p-10 relative"> {/*relativeを追加*/}

            {/* ハンバーガーメニューここから作成する */}


            {/* fixed top-5 right-5 は、これはTailwindのCSSのクラスで画面の右上に固定してねと指示してる */}
            {/* z-50は、デザインの「重なり順（奥行き）」を決める数字です。 */}
            {/* なぜハンバーガーメニューに「z-50」が必要なの？
            ハンバーガーメニューは、開いたときに**「下の文字やテーブルの上に重なって」**見えないといけません。
            もし z-index を指定しないと、後から書いたコードや、他の要素にメニューが潜り込んでしまい、クリックできなくなったり見えなくなったりすることがあります。
            現実での例え： */}


            {/* 机の上に書類（テーブルデータ）がたくさん並んでいるとします。ハンバーガーメニューは、その書類の一番上に置く「付箋」のようなものです。z-50 と指定することで、「どんなに書類が増えても、この付箋は一番上に置いてね」と命令している状態です。 */}
            <div className="fixed top-5 right-5 z-50">
                {/* ボタン：クリックするたびにisOpenを反転させる */}

                <button

                    // setIsOpen(!isOpen):ボタンを押したときに、今の状態を「反対」にします（trueならfalseに、falseならtrueに）。これで開閉が切り替わります。
                    onClick={() => setIsOpen(!isOpen)}
                    className="p-2 bg-gray-800 text-white rouded-md"
                >
                    {isOpen ? '閉じる' : 'メニュー'}

                </button>


                {/* メニュー本体：isOpenがtrueの時だけハンバーガーメニューが表示される　　divとulとli   */}
                {/* {isOpen && (...)}:「論理積（&&）」を使ったテクニックです。isOpen が true の時だけ、右側のタグが表示されます。 */}

                {/* isOpenがtrueの時だけ、ハンバーガーメニューの中の項目が表示される */}
                {isOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 shadow-lg rounded-md overflow-hiden">
                        <ul className="text-gray-700">

                            <li className="p-3 hover:bg-gray-100" cursor-pointer border-b>
                                if文
                            </li>
                            {/* <li className="p-3 hover:bg-gray-100" cursor-pointer border-b>
                                ループ
                            </li> */}
                            <li className="p-3 hover:bg-gray-100" cursor-pointer border-b>
                                テーブル作成
                            </li>
                            {/* <li className="p-3 hover:bg-gray-100" cursor-pointer border-b>
                                連想配列
                            </li> */}


                        </ul >
                    </div>
                )}
            </div>

            {/* ーーーーハンバーガーメニューここまでーーーー */}

















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
                            {/*                             
                                このようなイメージです。
                                if(user.status){
                                //trueの時
                                "退職済み"
                                }else{
                                //falseの時
                                "在職中"
                                }

                                ちなみにこんな書き方もできます。
                                const result = num > 10 ? "大きい" : "小さい";

                                10より大きかったら大きいがresult に入ります。 */}
                            <td className="border border-gray-300 p-2">{user.status ? "退職済み" : "在職中"}</td>


                            {/* 3歳以上か */}
                            <td className="border border-gray-300 p-2">
                                {user.age >= 3 ? "はい" : "いいえ"}
                            </td>


                            {/* 山田さんかどうか （名前が一致するか判定　＝＝＝）*/}
                            <td className="border border-gray-300 p-2">
                                {user.name === "山田太郎" ? "本人です" : "本人じゃないです"}
                            </td>


                            {/* １歳以上かつ退職者 （二つの条件が正しいかどうか判定　＆＆）*/}
                            <td className="border border-gray-300 p-2">
                                {user.age >= 1 && user.status === true ? "対象者" : "非対称"}
                            </td>


                            {/* どちらか一方 */}
                            <td className="border border-gray-300 p-2">
                                {user.name === "山田太郎" || user.name === "せいや" ? "対象" : "非対称"}
                            </td>


                            {/* 3歳以外か（！＝＝　否定）　～ではない */}

                            <td className="border border-gray-300 p-2">
                                {user.age !== 3 ? "3歳以外" : "3歳です"}
                            </td>

                        </tr>
                    ))}

                </tbody>


            </table>





        </div>



    )
}