'use client';

import Child from './child';

export default function Parent() {
  return (
    <>
      <h2>父屬性 (Parent)</h2>
      <p>↓ (import Child from &apos;./child&apos;;)</p>
      <div className="container-child">
        <Child
          title="標題"
          price={100}
          isConnected={true}
          array={[1, 2, 3]}
          object={{ x: 1, y: 2 }}
          func={(a, b) => a + b}
          jsx={<strong>基本上甚麼資料型別都能傳，非常強大的功能</strong>}
        ></Child>
      </div>
    </>
  );
}
