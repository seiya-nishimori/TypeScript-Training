'use client'
import Header from "@/components/Header";
import { log } from "console";




//mapは全員を加工して並べる
//filterは条件に合う人だけを絞り込むーーー　例えば、（在庫がある商品だけ表示）（ログインしてるユーザーだけ表示する）


//中岡リーダーにレビューお願いする（それ完了したら次行っていい）


export default function FilterPractice() {
    // 1. もとになるデータ（10歳、25歳、18歳、30歳）
    const users = [
        { id: 1, name: "なな", age: 10 },
        { id: 2, name: "たろう", age: 25 },
        { id: 3, name: "じろう", age: 18 },
        { id: 4, name: "はなこ", age: 30 },
    ];

    // --- ここからが filter の処理 ---
    // 【練習】20歳以上（age >= 20）の人だけを抽出せよ

    const adults = users.filter((user) => {
        const isAdult = user.age >= 20;

        //     // 処理の途中で「今、誰をチェックしてる？」を出すと理解しやすいです

        console.log(`チェック中： ${user.name}さん (${user.age}歳) ->結果：${isAdult}`);


        //trueなら残る、falseなら消える
        return isAdult;
    });

    // 最後に、絞り込まれた結果をドンと出す

    console.log("--- 最終結果 (２０歳以上) ---");
    console.log(adults);





    // 2:数字の偶数だけ集めるフィルター練習

    const numbers = [1, 2, 3, 4, 5, 6];


    // 偶数なら合格（２で割って余りが０）
    const evens = numbers.filter((n) => n % 2 === 0);

    console.log(evens);


    // ３：特定の文字が含まれるものだけ集める

    const words = ["apple", "banana", "cherry", "avocado"];

    // aから始まる物だけを絞り込みかける
    const aWords = words.filter((words) => words.startsWith("a"));

    console.log(aWords);



    // 4:【練習】70点以上の「合格者」だけを抽出

    const scores = [45, 85, 60, 30, 95];

    const passedScores = scores.filter((score) => {
        const isPassed = score >= 70;
        console.log(`点数：${score} -> 合格?: ${isPassed}`);
        return isPassed;
    })

    console.log("合格した点数一覧：", passedScores);





    return (
        <div className="p-8">
            <Header setView={() => { }} />
            <h1 className="text-xl font-bold mt-10">Filter の練習（コンソールを見てね！）</h1>
            <p className="mt-4 text-gray-600">
                F12キーを押して「コンソール（Console）」タブを開いてください。<br />
                1つずつ判定されている様子がログに出るようにしています。
            </p>

            <h1 className="text-center font-bold ">Filter=絞り込み表示</h1>
        </div>
    );
}