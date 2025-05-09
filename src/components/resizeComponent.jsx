import { useEffect, useState } from 'react';

const ResizeComponent = () => {
    // useStateを設定。状態変数sizeと状態変化変数setSize、初期値は画面の高さ。
    const [size, setSize] = useState(window.innerHeight);

    useEffect(() => {
        console.log("ResizeComponentがマウントされた");
        const handleResize = () => {
            console.log("リサイズされた！");
            // 強制的にレンダリング。setSizeで画面高さを更新することでuseEffectが再度実行される。
            setSize(window.innerHeight);
        };

        // ブラウザのresizeイベントを監視し、handleResizeを実行するリスナーを設定。
        window.addEventListener("resize", handleResize);

        return () => {
            // クリーンアップ関数。コンポーネントがアンマウントされると実行。
            // アンマウントとは画面リロード、親コンポーネントの再レンダリング、propsの変更、stateの更新などで発生する。
            // ここでは「表示/非表示」のボタンを押して、ResizeComponentが画面から消えるタイミングでリスナーを解除している。
            window.removeEventListener("resize", handleResize);
            console.log("リスナー解除！ResizeComponentがアンマウントされた");
        };
        // 空配列により初回マウント時のみ実行される。サイズ変更しても「リサイズされた」だけ表示。
        // 依存配列なしの場合、初回だけでなくstateやpropsが変更されるたびに実行されるため、
        // 画面高さ変更＝state変更＝レンダリング発生、により毎回「リスナー解除！」「マウントされた」が表示される。
        // 配列の中を指定すると、指定したstate等が変更時に実行されるため、
        // 例えばsizeを指定すると、高さ変更の度に「リスナー解除！」と「マウントされた」が出る。
    }, []);

    return (
        <div>
            <p>ウィンドウサイズ: {size}px</p>
        </div>
    );
};

const View = () => {
    // useStateを設定。状態変数showと状態変化変数setShow、初期値はtrue。
    const [show, setShow] = useState(true);

    return (
        // クリックイベント設定。showは真偽値を保つため、!showでtrue/falseが反転する。
        // show=true:ResizeComponentを表示、false:非表示。
        <div>
            <button onClick={() => setShow(!show)}>表示/非表示</button>
            {show && <ResizeComponent />}
        </div>
        // 本来、showの動きはResizeComponentに関係ないが、
        // 親コンポーネントの変更もレンダリングに該当するため、ボタンを押すとResizeComponentが再描写され、
        // 結果的にクリーンアップ関数が実行される。
        // 逆に非表示だとResizeComponentはアンマウント状態なので、サイズ変更してもコンソールには表示されない。
    );
};

// StrictModeの場合、2回実行されるためコンソールには2回分表示される。

export default View;
