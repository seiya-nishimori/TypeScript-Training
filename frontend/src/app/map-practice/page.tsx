'use client'
import Header from "@/components/Header";
import { log } from "console";


export default function MapPractice() {


    // 何言ってるか分からん
    // const map = new Map<string, number>();
    // map.set("a", 1);

    // console.log(map.get("a"));


    // ["a", 1]: a というラベルを貼った引き出しに、1 というデータを入れているイメージです。
    // const map = new Map<string, number>([
    //     ["a", 1], // "a" という名前で 1 を保存
    //     ["b", 2], // "b" という名前で 2 を保存
    //     ["c", 3], // "c" という名前で 3 を保存
    //     ["d", 4],
    // ]);

    // console.log(map);

    // console.log(map.has("a"));

    // console.log(map.get("a"));

    //keyとvalueを扱うオブジェクト

    // まずオブジェクトの作成
    const me = {
        name: "ななな",
        skill: ["TypeScript", "React", "GraphQL"],
        age: 10
    }


    // me.name
    // me.skill
    // me.age


    // アクセスできるようにする
    console.log(me["name"]);

    console.log(me.skill);

    console.log(me.age);








    //元になる配列作成（データリスト）

    const food: string[] = ["ラーメン", "寿司", "カレー", "うどん"];


    return (
        <div className="mt-4 p-8 ">
            {/* ヘッダー */}
            <Header setView={() => { }} />


            <h1 className="text-center text-3xl font-bold border-b-2 text-blue-600 mt-8 pb-4 ">
                Map（配列の展開）の練習
            </h1>


            <h1 className="">new Map() は実務でいつ使うのか？<br />
                実務（高度な開発）では以下のような「検索スピード」が求められる場面で使われます。
            </h1>

            <h1 className="mt-4 ">Map の場合: ID（名前）を指定すれば、1万件あっても 一瞬（1回） で取り出せます。</h1>


            <p className="mt-4">サーバーから届いた「商品のリスト」や「メッセージの履歴」を画面に並べるために必須です。</p>

            <p className="mt-8">new Map()：複雑な計算や、大量のデータを高速で処理したい時に使う「裏技」のようなものです。</p>



            {/* インスタンス化しないといけない */}
            const map = new Map();

            <p className="">
                keyとValueを扱うオブジェクトになります。
            </p>



            {/* <div className="mt-10 max-w-md mx-auto "> */}
            {/* <h2 className="text-xl font-bold mb-4 ">今日のごはんリスト</h2>

                <ul className=""> */}
            {/* 引数に型注釈（food:string, index:number ）をつけるとより安全です */}
            {/* {food.map((food: string, index: number) => (

                        <li
                            key={index}
                            className="p-3 bg-blue-50 border border-blue-200 rounded-lg shadow-sm hover:bg-blue-100 transition-colors" */}
            {/* > */}
            {/*  indexは０から始まるので＋１してから表示 */}
            {/* {index + 1}.<span className="font-bold">{food}</span>
                        </li>


                    ))}

                </ul>
            </div> */}



            <div className="mt-10 p-6 bg-gray-100 rounded-xl ">
                <h3 className="font-bold text-gray-700 mb-2 ">💡mapのポイント</h3>
                <ul className="list-disc ml-5 text-gray-600 mb-2 ">
                    <li><b>戻り値がある：</b>`forEach`と違い、加工した結果を React に返して表示できます。</li>
                    <li><b>key の役割:</b> React が「どの項目が変更されたか」を効率よく監視するために必要です。</li>
                </ul>
            </div>



        </div>
    )
};