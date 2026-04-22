'use client'
import Header from "@/components/Header";



//filter が「条件に合う人を全員集めて新しい配列を作る（＝1人でも配列）」だったのに対し、
// find は「条件に合う最初の1人だけを見つけて取り出す（＝配列ではなく中身そのもの）」 という命令です。
//実務では、「商品一覧の中から、特定のIDを持つ1件の詳細データだけを抜き出す」ときに非常によく使います。

//たくさんあるデータの中から１件だけ取って来る感じかな



export default function FindPractice() {
    //まず元になる文房具のデータを３件作成する

    const products = [
        { id: "A01", name: "消しゴム", price: 100 },
        { id: "B05", name: "ボールペン", price: 150 },
        { id: "C10", name: "ノート", price: 300 },
    ];

    // 【練習1】IDが "B05" の商品を1件だけ見つける
    //ボールペンをID（B05）を使って１件見つける
    const targetId = "B05";
    const foundProduct = products.find((product) => {
        const isMatch = product.id === targetId;
        console.log(`チェック中：${product.name} (ID:${product.id})  -> 一致?: ${isMatch}`);
        return isMatch;

    });



    // 結果を確認

    console.log("---検索結果---");
    console.log(foundProduct);     //見つかればオブジェクト、無ければ　undefined



    // 【練習2】300円以上の商品を「1つだけ」見つける
    // (filterと違い、最初に見つかった時点で検索を終了します)

    const expensiveOne = products.find((p) => p.price >= 300);
    console.log("３００円以上の最初の１件を表示:", expensiveOne);




    return (
        <div className="p-8">
            <Header setView={() => { }} />
            <h1 className="text-xl font-bold mt-10">Find（1件検索）の練習</h1>
            <p className="mt-4 text-gray-600">
                F12キーでコンソールを見てください。<br />
                見つかった瞬間に「チェック中」が止まるのが <b>find</b> の特徴です！
            </p>

            {/* <div className="mt-6 p-4 bg-yellow-50 rounded border border-yellow-200">
                <h2 className="font-bold">見つかった商品:</h2> */}
            {/* findは見つからない場合もあるので、&& でチェックして表示 */}
            {/* {foundProduct && (
                    <p>{foundProduct.name} (¥{foundProduct.price})</p>
                )}
            </div> */}


            <h1 className="font-bold text-center">Findとは？</h1>
            <p className="text-center">たくさんあるデータの中から１件だけ取って来る感じかな</p>
            <p className="text-center">Filterのもっと強い版（１件だけだすから）</p>



            GitHubにコメント入れて次に進む
        </div>
    );
}