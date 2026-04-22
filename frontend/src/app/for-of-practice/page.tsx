
'use client';

import Header from "@/components/Header";// 共通のヘッダー部品を読み込む




export default function ForOfPractice() {



    //全部回せる
    // const numbers = [1, 2, 3];
    // for (const n of numbers) {

    //     console.log(n);
    // }


    //順番に回す
    // let myArray = [1, 2, 3, 4, 5];
    // for (let i = 0; i < myArray.length; i++) {
    //     console.log(myArray[i]);
    // }


    // let meArray = [1, 2, 3, 4, 5];
    // for (let i = 5; i < meArray.length; i--) {
    //     console.log(meArray[i]);
    // }


    // var someArray = [9, 2, 5];
    // for (var item in someArray) {
    //     console.log(item); // 0,1,2
    // }

    // var someArray = [9, 2, 5];
    // for (var item in someArray) {
    //     console.log(someArray[item]); // 0,1,2
    // }


    // for...in：キーを取り出す（ここがコンソールにでない）
    // const user = { name: "Seiya", age: 25 };

    // for (const key in user) {
    //     console.log(`${key}: ${user[key as keyof typeof user]}`);
    // }
    // 出力:
    // name: Taro
    // age: 25


    // for...of：値を取り出す
    // ここがコンソールにでない）
    // const colors = ["red", "green", "blue"];

    // for (const color of colors) {
    //     console.log(color);
    // }
    // 出力:
    // red
    // green
    // blue


    // 画面に表示する内容（JSX）を返す
    return (

        <div className="">
            {/* ヘッダーを表示 */}
            <Header setView={() => { }} />

            <h1 className="text-center font-bold text-blue-400 text-3xl mt-8  pb-4 border-b-2 ">for ofとは？</h1>
            <p className="mt-4 p-4 ">for...of は、配列や文字列などの「中身」を一つずつ取り出して処理する、TypeScript（JavaScript）で最もよく使われる便利なループ構文です。</p>


            <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm mt-8">
                <h3 className="text-lg font-bold text-slate-800 mb-3 flex items-center">
                    <h1 className="w-5 h-5 mr-2 text-blue-500" />
                    for of 特徴
                </h3>
                <ul className="space-y-3 text-slate-600 text-sm">

                    <li className="flex items-start"><p className="w-4 h-4 mt-0.5 mr-2 text-blue-500 flex-shrink-0" /> 中身を直接取り出すので読みやすい</li>
                    <li className="flex items-start"><p className="w-4 h-4 mt-0.5 mr-2 text-blue-500 flex-shrink-0" /> 配列の範囲外を参照するバグが起きない</li>
                    <li className="flex items-start"><p className="w-4 h-4 mt-0.5 mr-2 text-blue-500 flex-shrink-0" /> Reactで単純なリスト表示をするときに最適</li>

                </ul>
            </div>





        </div >

    );
}