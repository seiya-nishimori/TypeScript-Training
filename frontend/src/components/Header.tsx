'use client';
import { useState } from "react";
import Link from "next/link";

type HeaderProps = {
    setView: (view: string) => void;
};

export default function Header({ setView }: HeaderProps) {
    const [isOpen, setIsOpen] = useState(false);

    // ★ どのカテゴリーが開いているかを管理する箱
    // null なら全部閉じている、'loop' ならループ項目が開いている...という仕組み
    const [openCategory, setOpenCategory] = useState<string | null>(null);

    const itemStyle = "p-3 pl-8 hover:bg-gray-100 transition-colors border-b last:border-none cursor-pointer block text-sm";
    const categoryTitleStyle = "p-5 bg-gray-50 font-bold text-xs text-gray-500 border-b cursor-pointer hover:text-gray-800 flex justify-between items-center";

    // カテゴリーをクリックした時の動き
    const toggleCategory = (category: string) => {
        setOpenCategory(openCategory === category ? null : category);
    };

    return (
        <div className="fixed top-5 right-5 z-50">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="px-4 py-2 bg-gray-800 text-white rounded-full shadow-lg hover:bg-gray-700 font-bold"
            >
                {isOpen ? '✕ 閉じる' : '☰ メニュー'}
            </button>

            {isOpen && (
                <div className="absolute right-0 mt-3  w-64 bg-white border border-gray-200 shadow-2xl rounded-xl overflow-hidden">

                    {/* --- カテゴリー：基本 --- */}
                    <div className={categoryTitleStyle} onClick={() => toggleCategory('basic')}>
                        <span>条件分岐・判定</span>
                        <span>{openCategory === 'basic' ? '▼' : '▶'}</span>
                    </div>
                    {openCategory === 'basic' && (
                        <div className="bg-white">
                            <Link href="/if-practice" className={itemStyle} onClick={() => setIsOpen(false)}>🌿 if / typeof（型判定）   </Link>
                            <Link href="/switch-practice" className={itemStyle} onClick={() => setIsOpen(false)}>🚦 switch （条件分岐）  </Link>
                            <Link href="/in-practice" className={itemStyle} onClick={() => setIsOpen(false)}>🔍 in （プロパティを見るもの）</Link>
                            <Link href="/instanceof-practice" className={itemStyle} onClick={() => setIsOpen(false)}>🆔instanceof(クラスを見るものもの)</Link>
                        </div>
                    )}

                    {/* --- カテゴリー：ループ（ここから新しく作る！） --- */}
                    <div className={categoryTitleStyle} onClick={() => toggleCategory('loop')}>
                        <span>ループ処理（繰り返し）</span>
                        <span>{openCategory === 'loop' ? '▼' : '▶'}</span>
                    </div>
                    {openCategory === 'loop' && (
                        <div className="bg-white animate-in slide-in-from-top-1 duration-200">
                            <Link href="/for-practice" className={itemStyle} onClick={() => setIsOpen(false)}>🔢 for (回数を決めてカウント)</Link>
                            <Link href="/for-of-practice" className={itemStyle} onClick={() => setIsOpen(false)}>🏃 for...of (配列の中を駆け抜ける)</Link>
                            <Link href="/while-practice" className={itemStyle} onClick={() => setIsOpen(false)}>🔄 while (条件がOKな間はずっと)</Link>
                            <Link href="/do-while-practice" className={itemStyle} onClick={() => setIsOpen(false)}>🚦 do...while (まずは1回やってみる)</Link>
                            <Link href="/forEach-practice" className={itemStyle} onClick={() => setIsOpen(false)}>🎯 forEach (要素一つ一つに命令)</Link>
                        </div>
                    )}



                    {/* --- カテゴリー：配列関数 (map / filter / 変換)--- */}
                    <div className={categoryTitleStyle} onClick={() => toggleCategory('array')}>
                        <span>配列関数 (配列のメソッド一覧一覧)</span>
                        <span>{openCategory === 'array' ? '▼' : '▶'}</span>
                    </div>
                    {openCategory === 'array' && (
                        <div className="bg-white animate-in slide-in-from-top-1 duration-200">

                            <Link href="/map-practice" className={itemStyle} onClick={() => setIsOpen(false)}>🧪map</Link>
                            <Link href="/filter-practice" className={itemStyle} onClick={() => setIsOpen(false)}>🧪filter</Link>
                            <Link href="/find-practice" className={itemStyle} onClick={() => setIsOpen(false)}>🧪find</Link>
                            <Link href="/some-practice" className={itemStyle} onClick={() => setIsOpen(false)}>🧪some</Link>
                            <Link href="/reduce-practice" className={itemStyle} onClick={() => setIsOpen(false)}>🧪reduce</Link>
                            <Link href="/sort-practice" className={itemStyle} onClick={() => setIsOpen(false)}>🧪sort</Link>
                            <Link href="/flat-practice" className={itemStyle} onClick={() => setIsOpen(false)}>🧪flat</Link>
                            <Link href="/flatMap-practice" className={itemStyle} onClick={() => setIsOpen(false)}>🧪flatMap</Link>
                        </div>
                    )}

                    {/* --- その他 --- */}
                    <Link href="/" onClick={() => setIsOpen(false)} className="p-2 text-center block text-blue-500 font-bold border-t hover:bg-blue-50">
                        🏠 ホームへ戻る
                    </Link>
                </div>
            )}
        </div>
    );
}