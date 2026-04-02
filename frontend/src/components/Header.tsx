'use client';
import { useState } from "react";
import Link from "next/link";

// 外部から受け取るデータの型定義（setView関数を受け取る）
type HeaderProps = {
    setView: (view: string) => void;
};

export default function Header({ setView }: HeaderProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="fixed top-5 right-5 z-50">
            {/* メニューボタン */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 bg-gray-800 text-white rounded-md"
            >
                {isOpen ? '閉じる' : 'メニュー'}
            </button>

            {/* メニューの中身 */}
            {isOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 shadow-lg rounded-md overflow-hidden">
                    <ul className="text-gray-700 font-bold">
                        {/* 1. ホーム画面へ */}

                        {/* リンク使ってURLにアクセスできるようにする */}
                        <Link href="/" onClick={() => setIsOpen(false)}>
                            <li className="">
                                ホーム画面
                            </li>
                        </Link>


                        {/* if文練習へ */}
                        <Link href="/if-practice" onClick={() => setIsOpen(false)}>
                            <li className="">
                                if文練習
                            </li>
                        </Link>


                        {/* テーブル作成へ */}
                        <Link href="/table-practice" onClick={() => setIsOpen(false)}>
                            <li className="">
                                テーブル作成
                            </li>
                        </Link>


                    </ul>
                </div>
            )}
        </div>
    );
}