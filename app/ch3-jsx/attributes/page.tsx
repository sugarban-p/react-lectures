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
      <h3>VS Code 轉換延伸套件 - html to JSX</h3>
      <div>&#42; 不要手動轉換 &#42;</div>
    </>
  );
}
