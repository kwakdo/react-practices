import React from 'react';

function app(props) {
    /*
        리액트 컴포넌트는 단일 루트 노드만 랜더링 할 수 있다.
        오류:
        return (
            <h2>App02</h2>
            <p>JSX Tutorial - 특징2: Single Root Node</p>
        )
    */
    return (
        <div id="App">
            <h2>App02</h2>
            <p>JSX Tutorial - 특징2: Single Root Node</p>
        </div>
    );
}

export default app;
