'use client';

import InputText from './_components/input-text';
import TextArea from './_components/text-area';

export default function ControlledPage() {
  return (
    <>
      <h1>可控表單元件</h1>
      <hr />
      <InputText></InputText>
      <hr style={{ border: '1px dashed #5C5C5B' }} />
      <TextArea></TextArea>
    </>
  );
}
