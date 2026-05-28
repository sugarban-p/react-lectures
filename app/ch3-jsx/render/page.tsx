'use client';

export default function RenderPage() {
  return (
    <>
      <h1>JSX 渲染範例</h1>
      <hr />
      <h3>數字 (Number)</h3>
      <div>&#123;1 - 1&#125; &gt;&gt; {1 - 1}</div>
      <div>&#123;NaN&#125; &gt;&gt; {NaN}</div>
      <h3>字串 (String)</h3>
      <div>字串 or &#123;&apos;字串&apos;&#125; &gt;&gt; {'字串'}</div>
      <div>
        &#123;&#96;在字串內插值&#123;1 + 1&#125;&#96;&#125; &gt;&gt;{' '}
        {`在字串內插值 ${1 + 1}`}
      </div>
      <div>&#123;1 - 1&#125; &gt;&gt; {1 - 1}</div>
      <div>&#123;1 - 1&#125; &gt;&gt; {1 - 1}</div>
      <h3>JSX 內註解</h3>
      <div>
        &#123;&#47;&#42; 註解符號 &#42;&#47;&#125; &gt;&gt; {/* 註解符號 */}
      </div>
      <h3>布林值 (Boolean) - 不會渲染</h3>
      <div>&#123;true&#125; &gt;&gt; {true}</div>
      <div>&#123;false&#125; &gt;&gt; {false}</div>
      <h3>陣列 (Array)</h3>
      <div>&#123;[1, 2, 3]&#125; &gt;&gt; {[1, 2, 3]}</div>
      <div>
        &#123;[&apos;a&apos;, &apos;b&apos;]&#125; &gt;&gt; {['a', 'b']}
      </div>
      <div>&#42; 陣列裡的html標籤要加上唯一key屬性 &#42;</div>
      <div>
        &#123;[&lt;span key=&quot;1&quot;&gt;標籤1&lt;&#47;span&gt;]&#125;
        &gt;&gt; {[<span key="1">標籤1</span>]}
      </div>
      <div>
        &#123;[&lt;span key=&quot;1&quot;&gt;標籤1&lt;&#47;span&gt;, &lt;span
        key=&quot;2&quot;&gt;標籤2&lt;&#47;span&gt;]&#125; &gt;&gt;{' '}
        {[<span key="1">標籤1</span>, <span key="2">標籤2</span>]}
      </div>
      <h3>物件 (Object)</h3>
      <div>&#42; 物件無法直接渲染 (會出現程式錯誤) &#42;</div>
      <div>
        &#123;&#123;a: 1, b: 2&#125;&#125; &gt;&gt; Runtime Error: Objects are
        not valid as a React child
      </div>
      <div>=&gt; 改用JSON字串</div>
      <div>
        &#123;&#123;a: 1, b: 2&#125;&#125; &gt;&gt;{' '}
        {JSON.stringify({ a: 1, b: 2 })}
      </div>
      <div>&#42; null - 不會渲染 &#42;</div>
      <div>&#123;null&#125; &gt;&gt; {null}</div>
      <h3>undefined - 不會渲染</h3>
      <div>&#123;undefined&#125; &gt;&gt; {undefined}</div>
    </>
  );
}
