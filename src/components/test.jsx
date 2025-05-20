import { useEffect } from 'react';

const TestAsync = () => {
    useEffect(() => {
        const fetchData = async () => {
            console.log("1️⃣ データ取得開始");

            // 🔴 3秒待たせる
            await new Promise(resolve => setTimeout(resolve, 3000));

            const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
            console.log("2️⃣ データが返ってきた");
            const result = await response.json();
            console.log("3️⃣ データ取得完了", result);
        };


        fetchData();
    }, []);

    return (
        <div>
            <h3>テスト中...</h3>
        </div>
    );
};

export default TestAsync;
