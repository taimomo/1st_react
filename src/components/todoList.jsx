import { useState } from 'react';

// Reactの場合、コンポーネントは大文字でスタート。
// JSXで使用する際、htmlタグと区別する目的。
function TodoList() {
    // この時点では空の配列のみ。
    // 空のオブジェクト(useState([{}]))も可能だが、空の状態でmap()等を使用するとエラーになる。
    // 初期値あり（useState([{id:0, title:start}]）)もできるが、不要な情報が表示されてしまう。
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState('');
    const [error, setError] = useState('');

    const handleAdd = () => {
        // 1. 全角・半角スペースも含めて空白を削除
        // 中間の空白は残るが、先頭・最後の空白は削除される。
        const trimmed = input.replace(/^\s+|\s+$/g, '');

        // 2. 完全に空白だけの入力を防ぐ
        if (/^\s*$/.test(trimmed)) {
            setError('空白のみの入力は無効です。');
            return;
        }
        // バリデーション。trimmedに同じタスクがあるかtitleで確認。
        // some()は配列の先頭から順に要素を評価。条件を満たす要素があった場合はtrueを返す。
        if (todos.some(todo => todo.title === trimmed)) {
            setError('同じタスクが既に存在します。');
            return;
        }

        // 上記バリデーションを通過したらタスク追加。
        const newTodo = {
            // ID作成。現在時刻をIDとして使用。
            id: Date.now(), // 一意なID
            // タイトルはtrimmedに入力した値。
            title: trimmed,
        };

        // 配列todosをイミュータブル（非破壊）な更新として展開し、newTodoを追加して再度配列に格納。
        setTodos([...todos, newTodo]);
        // 入力完了したらinputは空にする。
        setInput('');
        // エラーも空にする。
        setError('');
    };

    const handleDelete = (id) => {
        // 削除機能。削除ボタンが押されたidを特定し、それ以外のtodoは残す＝特定idのtodoは消える。
        setTodos(todos.filter(todo => todo.id !== id));
    };

    return (
        <div className="p-4 border rounded w-fit">
            <h2 className="mb-2 font-bold">ToDo リスト</h2>
            <input
                // タスクtodoの入力。value={}の形式なので制御コンポーネント。
                // onChange使用必須。
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="border p-1 mr-2"
                placeholder="タスクを入力"
            />
            <button
                // 追加ボタン押してタスク追加。対象はvalue={input}で特定できるため引数不要。
                onClick={handleAdd}
                className="bg-blue-500 text-white px-3 py-1 rounded"
            >
                追加
            </button>

            {/* もしエラーがあった場合は、バリデーションで設定した警告表示 */}
            {error && <p className="text-red-500 mt-2">{error}</p>}

            <ul className="mt-4 list-disc list-inside">
                {todos.map(todo => (
                    // map関数でtodosを展開。各todoのidをkeyとして順次表示。
                    <li key={todo.id} className="flex justify-between items-center">
                        <span>{todo.title}</span>
                        <button
                            // 削除ボタンでtodo削除。即時実行を防ぐためにアロー関数でラップ。
                            // 削除するtodoを特定するためにidを引数として渡す。
                            onClick={() => handleDelete(todo.id)}
                            className="text-sm text-red-500 ml-4"
                        >
                            削除
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;