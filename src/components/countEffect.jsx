import { useEffect, useState } from 'react';

const CountConsole = () => {
    const [count, setCount] = useState(0);

    // useEffectの基本形
    useEffect(() => {
        console.log(`カウントを${count}に更新しました`);
    }, [count]); // <- 依存配列

    return (
        <div>
            <p>カウント: {count}</p>
            <button onClick={() => setCount(count + 1)}>カウントアップ</button>
        </div>
    );
};

export default CountConsole;
