'use client'

import Header from "@/components/Header";// 共通のヘッダー部品を読み込む


//「繰り返し処理には、forループやwhileループなどの構文を使います。何回も同じような処理を繰り返したいときに便利ですよ。
// 例えば何かを10回表示するとか!


export default function whilePractice() {


    // ここはコメントアウトしてるのにコンソールに１０－０が表示される謎の状態（ctrl+F5してるのに）
    // let count = 10;
    // while (count > 0) {
    //     console.log(count);
    //     count++;
    // }



    // 12345をコンソールにwhile使って出して下さい。
    // ここはコンソールにすらでない
    // let arr = [1, 2, 3, 4, 5];
    // let i = 0;
    // while (i < arr.length) {
    //     console.log(arr[i]);
    //     i++;
    // }


    //for文の練習
    for (let i = 1; i <= 5; i++) {
        console.log("数字：" + i);
    }


    return (
        <div className="p-10">
            <h1 className="text-center text-3xl border-b-2 font-bold pt-5 pb-4 mb-8 ">while文練習</h1>


            <h1 className="text-center font-bold ">処理内容</h1>
            <p className="pb-5 ">while文は、指定された条件が真と評価される限り、コードのブロックを繰り返し実行することができます。
                アイテムのリストを処理したり、ユーザーからの入力を待つなど、特定の条件が満たされる限り一連の命令を実行する必要がある場合に特に有効です。<br />
            </p>


            <h1 className="text-center font-bold ">注意</h1>
            <p className="">注意しなければならないのは、whileループの条件が常にtrueの場合、決して終了しない無限ループを作り出すことです。
                したがって、条件が最終的にfalseに評価されるようにすることが重要です。あああああ
            </p>


            <h1 className="text-center font-bold "> 繰り返し処理（ループ）とは？</h1>
            <p className="">for文：決まった回数だけ繰り返すときに使います<br />
                while文：ある条件が「真（true）」の間、ずっと繰り返します
            </p>

            {/* ヘッダーを表示 */}
            <Header setView={() => { }} />



        </div>


    );
}


