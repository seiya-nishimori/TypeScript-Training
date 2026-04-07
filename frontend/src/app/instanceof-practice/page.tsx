'use client';
import { useState } from "react";
import Header from "@/components/Header";


// instanceof は「その人自身の身分証明書」**
// instanceof は、**「このデータはどの『型（クラス）』で作られたものか？」を判定する道具です。


// |    | typeof             | instanceof  |
// | -- | ------------------ | ----------- |
// | 用途 | プリミティブ             | オブジェクト      |
// | 例  | "string", "number" | Array, Date |



export default function SimplePractice() {

    // なんでも入る箱を用意（最初は空っぽ）

    const [data, setData] = useState<any>(null);


    return (
        <div className="pt-20 p-10 ">

            <Header setView={() => { }} />


            <h1 className="text-center font-bold text-3xl pb-4 mb-8 border-b-4 ">
                Instanceof練習（ArrayとDateの判定）
            </h1>


            <h1 className="text-xl font-bold">これは「日付」かな？</h1>


            {/* ボタンの作成　（onClickを作成する） */}

            <div className="flex gap-4 my-5">
                <button
                    className="border p-2 bg-blue-100 "
                    onClick={() => setData(new Date())}
                >
                    「日付」を入れる
                </button>

                <button
                    className="border p-2 bg-red-100 "
                    onClick={() => setData("こんにちは")}
                >
                    「文字」を入れる
                </button>
            </div>

            {/* 判定 */}

            <div className="mt-5 borer-t pt-5 ">
                {data instanceof Date ? (
                    <p className="text-green-600 font-bold">✅はい、これは「日付データ」です！</p>
                ) : (

                    <p className="text-red-600 font-bold ">✖ いいえ、日付ではありません。</p>
                )}
            </div>


            {/* 今、この中に何が入っているか確認する */}

            <p className="mt-5 text-gray-400 text-sm">
                現在データ：{data === null ? "空っぽ" : String(data)}

            </p>



        </div>

    );
}