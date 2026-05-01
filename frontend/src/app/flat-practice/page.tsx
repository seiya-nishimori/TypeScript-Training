'use client'
import Header from "@/components/Header";


// flat メソッドは、「入れ子（階層）になった配列を、平ら（フラット）にする」ための非常に便利な道具です。

// 実務では、「バラバラの部署ごとに分かれた社員リストを、1つの名簿にまとめたい」といった場面でよく使います。

// 1. flat はどんな時に使うのか？
// 例えば、以下のような「配列の中に配列がある」データがあったとします。
// [[1, 2], [3, 4]]
// これを flat() すると、階層が壊れて [1, 2, 3, 4] になります。


//いろんなところからデータを集めて来たけど、配列のデータが入れ子構造（配列の中に配列が入ってたり）になってたり、
// 配列の深さが違ってたから普通の１個の配列にきれいにまとめるために使う。　（flatメソッドの実装）

//2次元配列や多次元配列を普通の１列の配列に戻す関数のこと。（flatメソッド）


export default function FlatPractice() {



    //-----------------練習１はここからーーーーーーーーーーーーーー


    // 1. もとになるデータ（カテゴリごとに分かれた商品名）
    // 配列の中に、さらに配列が入っている「2次元配列」の状態
    //まずもとになる２次元配列のデータを作成する

    const categoryItems = [
        ["消しゴム", "ボールペン"],
        ["ノート", "メモ帳"],
        ["定規", "コンパス"],
    ];


    // 【練習1】階層を平らにする（Flatten）
    // flat() を使うと、外側のカッコが外れて1つの配列にまとまります。
    //２次元配列のデータをまとめて、普通の１列の配列にする

    const allItems = categoryItems.flat();


    console.log("平らにしたデータ:", allItems);


    //-----------------練習２はここからーーーーーーーーーーーーーーーーーーーーーー


    // ★Infinityはどれだけ配列が深くても配列を１列にして欲しいと命令してくれるオプションの指定

    // 【練習2】深い階層（おまけ）
    // const deepArray = [1, [2, [3, [4]]]];
    // // 引数に数字を入れると、どこまで深く平らにするか指定できます（Infinityは全部）
    // const simpleArray = deepArray.flat(Infinity);

    // console.log("元のデータ:", categoryItems);
    // console.log("平らにしたデータ:", allItems);


    // 深い配列の階層を１列の普通の配列に変換する

    const deepArray = [1, [2, [3, [4]]]];       //１と４のデータを入れる

    // 引数に数字を入れると、どこまで深く平らにするか指定できます　（Infinityは全部）

    const simpleArray = deepArray.flat(Infinity);

    console.log("元のデータ：", simpleArray);


    console.log("平らにしたデータ:", deepArray);










    return (
        <div className="p-8">
            <Header setView={() => { }} />

            <h1 className="text-xl font-bold mt-10 border-b-2 pb-2 border-orange-500">
                flat メソッドの練習
            </h1>

            <div className="mt-6 space-y-6">
                {/* 変換前の表示 */}
                <div className="p-4 bg-gray-100 rounded-lg">
                    <h2 className="font-bold mb-2 text-gray-600 underline">変換前（2次元配列）:</h2>
                    <pre className="text-sm">
                        {JSON.stringify(categoryItems, null, 2)}
                    </pre>
                </div>

                {/* 変換後の表示 */}
                <div className="p-4 bg-orange-50 border border-orange-200 rounded-lg">
                    <h2 className="font-bold mb-2 text-orange-800">【実行結果】1つの配列に合体！</h2>
                    <p className="text-lg">
                        {allItems.join(" 、 ")}
                    </p>
                </div>
            </div>

            {/* 解説セクション */}
            <div className="mt-10 p-6 bg-white border rounded-xl shadow-sm">
                <h2 className="font-bold text-lg mb-2">💡 flat とは？</h2>
                <p className="text-gray-700">
                    「配列の入れ子」を解消して、フラットな状態にするメソッドです。<br />
                    データベースから <b>「各ユーザーが持っている商品のリスト」</b> を取得した際、
                    <code>[[商品A], [商品B, 商品C]]</code> のようにバラバラになっているものを、
                    一列に並べて表示したい時に重宝します。
                </p>
            </div>



            <p className="mt-10 p-6 bg-white border rounded-xl shadow-sm">
                ★Infinityはどれだけ配列が深くても配列を１列にして欲しいと命令してくれるオプションの指定
            </p>

        </div>
    );
}