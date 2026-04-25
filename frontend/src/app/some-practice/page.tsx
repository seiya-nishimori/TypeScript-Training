'use client'
import Header from "@/components/Header";

export default function SomePractice() {


    //some はどんな時に使うのか？
    // filter（絞り込む）や find（1つ見つける）と違い、some は「条件に合う人が1人でもいるか？」を確認して、true か false（YESかNO）だけを返す 命令です。
    // 実務では「このカートの中に送料無料の商品は含まれているか？」や「このユーザーの中に管理者はいるか？」といった チェック処理 に使います。

    // 1. もとになるデータ（商品の在庫リスト）
    //some練習用の元になるデータの作成

    const items = [
        { name: "消しゴム", stock: 10 },
        { name: "ボールペン", stock: 0 },
        { name: "ノート", stock: 5 },
    ];

    // 【練習1】在庫切れ（stock === 0）の商品が「1つでも」あるかチェック
    //在庫切れかチェックする
    //「items の中身を 1人ずつ item という名前で呼び出すよ」と宣言しています。
    //.some(...): 「誰か一人でも条件に合う人はいますか？」という 質問コマンド。

    const hasOutOfStock = items.some((item) => {

        // 「在庫切れ」かどうかを判断するための「物差し」です。
        //item.stock（今呼んでいる商品の在庫）が 0 と等しいかどうかを計算し、その結果（true または false）を一時的に isOut という変数に保存しています。
        const isOut = item.stock === 0;

        //「今誰を調べていて、結果はどうだったか」 を人間に見えるようにする
        // つまり、ietmsの中のデータを見て、isOutに入った在庫の結果があるかどうかyes,No判定する
        //もし在庫切れの場合は　０を表示する
        console.log(`チェック中:{item.name} -> 在庫切れ ? {isOut}`);

        // １つでも true が出たら、そこで終了して全体が true になる

        return isOut;


    });



    // なんか練習１のコンソール結果がおかしい気がするので解析してもしおかしければ修正する
    // 在庫切れがあるか判定する
    console.log("結果(在庫切れがあるか判定):", hasOutOfStock);


    // 【練習2】全部の文字を調べる（例：名前に "ペン" が含まれるものがあるか）

    const hasPen = items.some((item) => item.name.includes("ペン"));

    console.log("結果（ペンが含まれるか）:", hasPen);


    //データがあってその指定したデータがあるかの確認をして、trueやfalseを見つける(some)




    return (
        <div className="p-8">
            <Header setView={() => { }} />
            <h1 className="text-xl font-bold mt-10">Some（存在チェック）の練習</h1>
            <p className="mt-4 text-gray-600">
                F12キーでコンソールを見てください。<br />
                <b>some</b> は「1人でも条件を満たせばOK」という判定です。
            </p>



            {/* <div className={`mt-6 p-4 rounded border ${hasOutOfStock ? 'bg-red-50 border-red-200' : 'bg-green-50 border-green-200'}`}>
                <h2 className="font-bold">在庫チェック結果:</h2>
                {hasOutOfStock
                    ? "⚠️ 在庫切れの商品が含まれています！発注してください。"
                    : "✅ すべての商品に在庫があります。"}
            </div> */}


            <p className="mt-8 text-center ">
                <b className="text-center  p-4 pb-8 ">some はどんな時に使うのか？</b><br />
                filter（絞り込む）や find（1つ見つける）と違い、some は「条件に合う人が1人でもいるか？」を確認して、true か false（YESかNO）だけを返す 命令です。<br />
                実務では「このカートの中に送料無料の商品は含まれているか？」や「このユーザーの中に管理者はいるか？」といった チェック処理 に使います。
            </p>


        </div>
    );
}