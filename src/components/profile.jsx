import { useState } from 'react';

function ProfileForm() {
    // useStateを使って、名前と年齢を管理する。
    // name=状態変数（現在値）, setName=状態を更新する関数
    const [name, setName] = useState('');
    const [age, setAge] = useState('');

    return (
        <div className="p-4 border rounded w-fit">
            <div className="mb-2">
                <label className="block text-sm">名前：</label>
                <input
                    type="text"
                    // inputのvalue属性に状態変数を指定
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="border p-1 w-full"
                />
            </div>
            <div className="mb-2">
                <label className="block text-sm">年齢：</label>
                <input
                    type="number"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    className="border p-1 w-full"
                />
            </div>
            <p className="mt-2 text-gray-700">
                あなたは <strong>{name || '未入力'}</strong> さん（{age || '年齢不明'}）ですね。
            </p>
            {/*  名前と年齢を一発でリセット。状態更新関数には明示的に('')を与える。空だとinputはリセットされない */}
            <button onClick={() => { setName(''); setAge(''); }} className="px-3 py-1 bg-gray-300 rounded">リセット</button>
        </div>
    );
}
export default ProfileForm;