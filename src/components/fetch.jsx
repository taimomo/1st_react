import { useEffect, useState } from 'react';

const FetchWithLoading = () => {
    // データ取得の状態管理。最初は何もデータがないのでnull。
    const [data, setData] = useState(null);
    // ローディングの状態管理。最初は読み込みが入るのでtrue。
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // 非同期処理開始。
        const fetchData = async () => {
            console.log("📡 データを取得中...");
            setLoading(true);  // ✅ ローディング開始

            // Promiseの結果が来るまで3秒間待機。
            // resolveは、Promiseが成功すると実行される関数で、特に定義は必要ない。
            // Promiseが失敗した場合はrejectが実行される。
            await new Promise(resolve => setTimeout(resolve, 3000));

            const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
            // 結果をjsonに変換。javascript形式のオブジェクトへ。
            // json()はPromiseを返すため、awaitによって待機させる。
            const result = await response.json();

            console.log("✅ データ取得完了");
            // 取得した結果をdataにセット。
            setData(result);
            // falseにしてローディング終了。
            setLoading(false);
        };

        // 定義したfetchDataを実行。
        fetchData();
        // 依存配列は空。コンポーネントがマウントされた初回のみに実行される。
        // 依存配列書かないと、setLoadingがfalseになったタイミングのレンダリングによって、
        // ループが発生してしまう。
    }, []);

    return (
        <div>
            <h3>API Fetchの結果:</h3>

            {/* ✅ ローディング中の表示 */}
            {/* ここでのloadingはuseStateのloadingと同一で、
            true/falseで表示するhtmlを切り替えている */}
            {loading ? (
                <div className="loader">
                    <p>データを取得しています... ⏳</p>
                    <div className="spinner"></div>
                </div>
            ) : (
                <div>
                    <p><strong>タイトル:</strong> {data.title}</p>
                    <p><strong>内容:</strong> {data.body}</p>
                </div>
            )}

        </div>
    );
};

export default FetchWithLoading;