import { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div className="p-4 border rounded w-fit">
            <p className="mb-2">カウント: {count}</p>
            <div className="flex gap-2">
                <button onClick={() => setCount(count + 1)} className="px-3 py-1 bg-blue-500 text-white rounded">+1</button>
                <button onClick={() => setCount(0)} className="px-3 py-1 bg-gray-300 rounded">リセット</button>
            </div>
        </div>
    );
}

export default Counter;