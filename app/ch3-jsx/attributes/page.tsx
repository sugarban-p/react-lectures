'use client';

export default function AttributesPage() {
  return (
    <>
      <h1>JSX 標籤屬性</h1>
      <hr />
      <h3>Class</h3>
      <div>class=&quot;...&quot; &gt;&gt; className=&quot;...&quot;</div>
      <h3>style</h3>
      <div>style=&quot;attr1: value1; attr2: value2;&quot;</div>
      <div>
        &gt;&gt; style=&#123;&#123;attr1: &apos;value1&apos;, attr2:
        &apos;value2&apos;&#125;&#125;;
      </div>
      <br />
      <h3>HTML to JSX 工具</h3>
      <div>
        1.{' '}
        <a href="https://marketplace.visualstudio.com/items?itemName=riazxrazor.html-to-jsx">
          {' '}
          VS Code 轉換延伸套件 - html to JSX
        </a>
      </div>
      <div>
        2.&nbsp;
        <a href="https://transform.tools/html-to-jsx">線上轉換工具</a>
      </div>
      <div>&#42; 總之不要手動轉換 &#42;</div>
    </>
  );
}
