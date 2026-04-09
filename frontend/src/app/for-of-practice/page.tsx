
'use client';

export default function ForOfPractice() {


    //全部回せる
    // const numbers = [1, 2, 3];
    // for (const n of numbers) {

    //     console.log(n);
    // }


    //順番に回す
    // let myArray = [1, 2, 3, 4, 5];
    // for (let i = 0; i < myArray.length; i++) {
    //     console.log(myArray[i]);
    // }


    // let meArray = [1, 2, 3, 4, 5];
    // for (let i = 5; i < meArray.length; i--) {
    //     console.log(meArray[i]);
    // }


    // var someArray = [9, 2, 5];
    // for (var item in someArray) {
    //     console.log(item); // 0,1,2
    // }

    // var someArray = [9, 2, 5];
    // for (var item in someArray) {
    //     console.log(someArray[item]); // 0,1,2
    // }


    // for...in：キーを取り出す（ここがコンソールにでない）
    // const user = { name: "Seiya", age: 25 };

    // for (const key in user) {
    //     console.log(`${key}: ${user[key as keyof typeof user]}`);
    // }
    // 出力:
    // name: Taro
    // age: 25


    // for...of：値を取り出す
    // ここがコンソールにでない）
    // const colors = ["red", "green", "blue"];

    // for (const color of colors) {
    //     console.log(color);
    // }
    // 出力:
    // red
    // green
    // blue


    // 画面に表示する内容（JSX）を返す
    return (
        <div>
            <h2>ループ処理のテスト</h2>
            <ul>

            </ul>
        </div>
    );
}