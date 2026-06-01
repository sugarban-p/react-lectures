'use client';

import Parent from './_components/parent';
import {} from './styles/pc.css';

export default function PcPage() {
  return (
    <>
      <h1>父/子層關係</h1>
      <h3>
        【核心觀念】<u>父層渲染子層( P renders C )</u>
      </h3>
      <p>↓ (import Parent from &apos;./_components/parent&apos;;)</p>
      <div className="container-parent">
        <Parent></Parent>
      </div>
    </>
  );
}
