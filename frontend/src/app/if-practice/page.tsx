'use client';


import Header from "@/components/Header";
import Link from "next/link"; // Next.js推奨のリンク機能


// 「Page」という名前ではなく「IfPracticeContent」などの部品名にする
export default function IfPracticeContent() {


    // ーーーー練習:Typeofによる検品ーーーー
    const inputData: any = 5000;
    let typeErrorMessage = "";
    let tax = 0;

    let price = 2000;




    //計算する前に「ｎｕｍｂｅｒ型」かどうかをチェックする
    if (typeof inputData !== "number") {

        typeErrorMessage = `エラー：数値以外です（型：${typeof inputData}）`;

    } else {
        tax = inputData * 0.1;
    }

    return (
        <div className="p-10 max-w-xl mx-auto">

            {/* ここにハンバーガーメニューを置かないと表示されない */}

            <Header setView={(view) => console.log(view)} />


            {/* ここいらないかも、下で別のブロックにまとめたほうがきれいかもしれない */}
            <h1 className="text-3xl font-bold border-b-2 pb-2 mb-10 text-center text-green-600">
                typeof文・判定パターンの練習
            </h1>


            {/* 入力値の確認 */}
            <div className="mb-6 border rounded bg-gray-50">
                <p>入力データ<span className="">{inputData}</span></p>
                <p>データの型<span className="">{typeof inputData}</span></p>
            </div>


            {/* 判定結果の表示 */}
            <div className="p-6 border-2 rounded-lg">
                {typeErrorMessage ? (
                    //エラーがある場合
                    <p className="text-red-500">{typeErrorMessage}</p>

                ) : (

                    // エラーがない場合
                    <p className="text-green-600 font-bold">
                        検品ＯＫ！ 消費税(10%):{tax}円
                    </p>
                )}
            </div>



            <div className="mt-10">
                <p className="">
                    練習：コードの<code className="bg-gray-200">inputData</code>を
                    <code className="text-blue-600">2000</code> （数値）に変えて保存してみてください

                </p>
            </div>


        </div>
    );

}