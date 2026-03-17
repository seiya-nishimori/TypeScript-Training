'use client';

import { useEffect, useState } from "react";

export default function Home() {
    const [message, setMessage] = useState("バックエンドに接続中...");

    useEffect(() => {
        fetch("http://localhost:8000/")
            .then((res) => res.json())
            .then((data) => setMessage(data.message))
            .catch((err) => {
                console.error("通信エラー:", err);
                setMessage("バックエンドから返事がありません");
            });
    }, []);

    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-100">
            <div className="p-10 bg-white rounded-2xl shadow-xl text-center">
                <h1 className="text-2xl font-bold text-gray-800 mb-4">
                    勤怠管理システム 構築テスト
                </h1>
                <div className="text-xl font-mono text-blue-600 bg-blue-50 p-4 rounded-lg border border-blue-200">
                    {message}
                </div>
            </div>
        </div>
    );
}