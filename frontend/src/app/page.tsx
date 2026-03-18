'use client';

import { useEffect, useState } from "react";




//Hello コンポーネント
function Hello() {
    return <h1>Hello.</h1>;

    // 文字を大きくして、赤色にしてみる（Tailwind CSS）
    // return <h1 className="text-4xl text-red-600 font-black">HELLO!!!!</h1>;
}


function HTReload() {
    return <h1 className="text-2xl text-green-500">ホットリロード動け！！</h1>;
}



export default function Home() {
    const [message, setMessage] = useState("バックエンドに接続中...");

    let str: string = 'Hello World';
    console.log("Hello, TypeScript!");

    console.log("Hello, TypeScript!  2");

    useEffect(() => {

        console.log("Hello");

        fetch("http://localhost:8000/")
            .then((res) => res.json())
            .then((data) => setMessage(data.message))
            .catch((err) => {
                console.error("通信エラー:", err);
                setMessage("バックエンドから返事がありません");
            });
    }, []);

    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-100">
            <div className="p-10 bg-white rounded-2xl shadow-xl text-center">
                <h1 className="text-2xl font-bold text-gray-800 mb-4">
                    勤怠管理システム 構築テストqqqqqq
                </h1>

                {/* ここでＨｅｌｌｏを呼び出す（関数呼び出し） */}
                <Hello />


                <div className="text-xl font-mono text-blue-600 bg-blue-50 p-4 rounded-lg border border-blue-200">
                    {message}
                </div>

                {/* （関数呼び出し） */}
                <HTReload />


                何でもいいので文字を変えて保存してみる
                // console.log("★★★ ログテスト中 ★★★");eeeeee

                console.log("★★★ ログテスト中 ★★★");

            </div>


        </div>
    );

}


// // 何でもいいので文字を変えて保存してみる
// console.log("★★★ ログテスト中 ★★★");



// // 何でもいいので文字を変えて保存してみる
// console.log("★★★ ログテスト中 ★★★");



// // 何でもいいので文字を変えて保存してみる
console.log("★★★ ログテスト中 ★★★");










