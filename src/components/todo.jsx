import { useState } from 'react';

function MemoApp() {
    // メモとして登録した情報を配列として記録
    const [memos, setMemos] = useState([]);
    // ユーザーが現在入力している内容を記録する変数
    const [text, setText] = useState('');

    const addMemo = () => {
        // ユーザーのtext内容が空でなければmemosに追加。trim()は前後の空白を削除する。
        if (text.trim()) {
            // ...memosで現在のmemosを展開し、textを追加する。
            setMemos([...memos, text]);
            // 入力完了したらtextは空に。
            setText('');
        }
    };

    const deleteMemo = (index) => {
        // memosの中にあるi番目の要素を特定、それ以外の要素を残して再度setMemos作成。
        // 結果的にi番目の要素は削除される。
        // _は「使わない変数」を明示するための記号。
        // memoでも良いが「memoを何かに使っている？」と勘違いされるのを防ぐ。
        setMemos(memos.filter((_, i) => i !== index));
    };

    return (
        <div className="p-4 border rounded w-fit">
            <input
                value={text}
                // 制御コンポーネントとして扱っているためonChangeが必要。書かないと入力できない。
                onChange={(e) => setText(e.target.value)}
                className="border p-1 mr-2"
                placeholder="メモを入力"
            />
            <button
                // onClickイベントは引数()を与えると即時実行されてしまう。
                onClick={addMemo} className="bg-green-500 text-white px-3 py-1 rounded">
                追加
            </button>
            <ul className="mt-4 list-disc list-inside">
                {memos.map((memo, i) => (
                    <li key={i} className="flex justify-between items-center">
                        <span>{memo}</span>
                        <button
                            // 引数i番目の要素を削除
                            // アロー関数でラップ。deleteMemo(i)だけだと、ボタン押さなくても即時実行されてしまう。
                            onClick={() => deleteMemo(i)}
                            className="text-sm text-red-500 ml-4"
                        >
                            削除
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}


export default MemoApp;

