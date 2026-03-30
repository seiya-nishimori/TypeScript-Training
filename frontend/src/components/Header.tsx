'use client';
import { useState } from "react";

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
                        <li
                            onClick={() => { setView('home'); setIsOpen(false); }}
                            className="p-3 hover:bg-gray-100 cursor-pointer border-b"
                        >
                            ホーム画面
                        </li>
                        <li
                            onClick={() => { setView('if-practice'); setIsOpen(false); }}
                            className="p-3 hover:bg-gray-100 cursor-pointer border-b text-green-600"
                        >
                            if文練習
                        </li>
                        <li
                            onClick={() => { setView('table'); setIsOpen(false); }}
                            className="p-3 hover:bg-gray-100 cursor-pointer text-blue-600"
                        >
                            テーブル作成
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
}