'use client'

import Header from "@/components/Header";// 共通のヘッダー部品を読み込む

import { useEffect } from "react";


//「繰り返し処理には、forループやwhileループなどの構文を使います。何回も同じような処理を繰り返したいときに便利ですよ。
// 例えば何かを10回表示するとか!
//繰り返しを正確に扱えるようになると、配列操作、数値計算、データ処理など、あらゆる場面で効率的にコードを書けるようになります。
//注意：無限ループになるとサーバーが落ちたりするので無限ループの処理は絶対に入れないこと


export default function whilePractice() {


    // ここはコメントアウトしてるのにコンソールに１０－０が表示される謎の状態（ctrl+F5してるのに） ここでFor文が一生回ってクラッシュ
    // let count = 10;
    // while (count >= 1) {
    //     console.log(count);
    //     count--;
    // }



    // 12345をコンソールにwhile使って出して下さい。(while)
    // ここはコンソールにすらでない
    // let arr = [1, 2, 3, 4, 5];
    // let i = 0;
    // while (i < arr.length) {
    //     console.log(arr[i]);
    //     i++;
    // }


    //for文の練習
    // for (let i = 1; i <= 5; i++) {
    //     console.log("数字：" + i);
    // }


    // カウント：1~5までをwhile使って出して
    // let i = 1;
    // while (i <= 5) {
    //     console.log("カウント:" + i);
    //     i++;
    // }


    console.log("ホットリロード確認");


    //5. 実践例：合計値を求める
    //for文やwhile文を使うと、数字を足し合わせることも簡単にできます。例えば、「1から10までの合計」を求めたいとき
    //for文を使った例：

    // let total = 0;
    // for (let i = 1; i <= 10; i++) {
    //     total += i;   //tatal = tatal+i
    // }

    // console.log("合計：" + total);


    //for文やwhile文を使うと、数字を足し合わせることも簡単にできます。例えば、「1から10までの合計」を求めたいとき
    //while文を使った例：


    let total = 0;
    let i = 1;
    while (i <= 10) {

        total += i;
        i++;
    }

    console.log("合計：" + total);


    //配列の中にある文字列を順番に表示するコードをTypeScriptで記載せよ。

    const fruits = ["りんご", "みかん", "ぶどう", "もも"];

    //for文で記載
    for (let i = 0; i < fruits.length; i++) {

        console.log("フルーツ：" + fruits[i]);
    }

    //while文で記載
    let index = 0;
    while (index < fruits.length) {

        console.log("カウント：" + fruits[index]);

        index++;

    }








    return (
        <div className="p-10 ">

            {/* ヘッダーを表示 */}
            <Header setView={() => { }} />


            <h1 className="text-center text-3xl border-b-2 font-bold pt-5 pb-4 mb-8 ">while文練習</h1>


            <h1 className="text-center text-red-600 pb-8 ">while文は、「条件が成り立つ限り」ずっと繰り返す処理です。</h1>

            <h1 className="text-center font-bold ">処理内容</h1>
            <p className="pb-5 ">while文は、指定された条件が真と評価される限り、コードのブロックを繰り返し実行することができます。
                アイテムのリストを処理したり、ユーザーからの入力を待つなど、特定の条件が満たされる限り一連の命令を実行する必要がある場合に特に有効です。<br />
            </p>


            <h1 className="text-center font-bold ">注意</h1>
            <p className="pb-10 ">注意しなければならないのは、whileループの条件が常にtrueの場合、決して終了しない無限ループを作り出すことです。
                したがって、条件が最終的にfalseに評価されるようにすることが重要です。aaaaaiiiiiii
            </p>


            <h1 className="text-center font-bold "> 繰り返し処理（ループ）とは？</h1>
            <h2 className="text-center font-bold">forとwhileの違い</h2>
            <p className="pb-10 text-center text-red-400">for文：決まった回数だけ繰り返すときに使います<br />
                <br />while文：ある条件が「真（true）」の間、ずっと繰り返します
            </p>


            <h1 className="text-center font-bold">学習完了！！！！</h1>





        </div>


    );
}


