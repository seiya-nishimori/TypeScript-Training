'use client'
import Header from "@/components/Header";


//do {繰り返したい処理} while (条件式);


//① 処理を実行
// ↓
// ② 条件をチェック
// ↓
// true → もう一回
// false → 終了



export default function DoWhilePractice() {

    //do whileを使って、０１２を順番にコンソールに表示せよ

    //ポイントは、１回は処理を実行してから、繰り返しをするってこと
    // let i = 0;
    // do {
    //     console.log(i);
    //     i++;
    // } while (i < 3);



    //ユーザー入力チェック（数字を入力して下さい）

    // let input;

    // do {
    //     input = prompt("数字を入力して下さい");
    // } while (!input);



    //APIリトライ

    // let success = false;

    // do {
    //     success = callApi();    //これは実際にAPIがある場合の設定なので動作確認はできないかも
    // } while (!success);


    // do whileを使って12345を表示せよ

    // let result = "";
    // let i = 0;

    // do {
    //     i += 1;
    //     result += i;
    // } while (i < 5);

    // console.log(result);



    //do...while の使用
    //do...while ループを少なくとも 1 回は実行し、 i が 5 より小さいという条件を満たさなくなるまで反復します。(12345)

    //本来なら i < 5 が外れた時点で止まるはずですが、React（Next.js）のコンポーネントの再レンダリングや、書き換えのタイミングによっては、
    // この「条件が一生 true になり続けるパターン（特に i > 0）」が原因でブラウザのメモリを食いつぶし、接続が遮断されることがあります。


    // let result = "";
    // let i = 0;
    // do {
    //     i += 1;
    //     result += `${i}`;
    // } while (i < 5);

    // console.log("数字出力：" + result);




    // ログインと友達確認
    //使ってる変数と関数を定義する

    const userAgent = {
        loggedIn: true,
        getFriend: () => ["たろう", "はなこ"]
    };


    const handleFriend = (name: string) => console.log("友達を処理：", name);



    //ログインしてるかの判断と友達がいるかいないかの判断

    do {
        if (!userAgent.loggedIn) {
            console.log("ログインしてません");
            break;
        }

        const friends = userAgent.getFriend();
        if (!friends.length) {
            console.log("友達がみつかりません");
            break;
        }

        for (const friend of friends) {
            handleFriend(friend);
        }
    } while (false);







    return (

        <div className="mt-4 p-8">

            {/* ヘッダーを表示 */}
            <Header setView={() => { }} />


            <h1 className="text-center text-3xl text-bold border-b-2 font-green-600 mt-8 pb-4 ">Do-While（繰り返し処理）</h1>
            <p className="p-4 text-red-400 font-bold ">結論：do-while は「必ず1回は処理を実行してから、条件をチェックして繰り返すループ」です。</p>


            <h1 className="text-center font-bold ">whileとdo whileの違い</h1>
            <ul className="">
                <h2 className="">なぜ使うのか？普通のwhileとの違いは？</h2>
                <li className="">while →条件を先にチェック</li>
                <li className="">do-while → 処理を先に１回実行してからチェックする</li>
            </ul>

            <h1 className="text-red-400 font-bold text-center mt-4 ">ポイントは、１回は処理を実行してから、繰り返しをするってこと</h1>


        </div>



    );
}