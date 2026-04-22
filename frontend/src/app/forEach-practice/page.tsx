'use client'
import Header from "@/components/Header";


//基本構文（書き方）
//配列.forEach((配列 , インデックス　)　=> {//繰り返し処理})；



export default function forEachPracrice() {


    //forEachを使って、１２３を表示せよ

    // const numbers: number[] = [1, 2, 3];      //numbersは配列宣言

    // numbers.forEach((i) => {
    //     console.log(i);
    // })




    // コードを表示するための変数宣言
    const code = `
    const numbers: number[] = [1, 2, 3];  //numbersは配列宣言

    numbers.forEach((i) => {
        console.log(i);
    })


    【出力結果】
    1
    2
    3

`;

    //----コードを画面に表示する（ここまで）




    // たろう、じろう、さぶろうをforEachを使って表示する

    const members = ["太朗", "次郎", "三郎"];

    members.forEach((members) => {
        console.log(members + "さん、こんにちは！")
    })


    //forEachを使って１２３４５を順番に表示せよ

    let numbers: number[] = [1, 2, 3, 4, 5];

    numbers.forEach((number) => {

        console.log(number);
    });




    return (



        <div className="p-10 ">


            {/* ヘッダーを表示 */}
            <Header setView={() => { }} />

            <h1 className="text-center text-3xl font-bold border-b-2 font-green-600 mt-8 pb-4 ">foreEach（配列処理）</h1>

            <p className="mt-4 ">結論：TypeScriptの forEach は 「配列の中身を1つずつ取り出して処理する関数」。ループ処理をシンプルに書ける。</p>

            <pre className="bg-gray-400 mt-4 ">
                <code>{code}</code>
            </pre>



        </div>



    );
}