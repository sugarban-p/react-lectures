'use client';

import InputText from './_components/input-text';
import TextArea from './_components/text-area';
import OptionSelect from './_components/option-select';
import OptionRadio from './_components/option-radio';

export default function ControlledPage() {
  return (
    <>
      <h1>可控表單元件</h1>
      <hr />
      <InputText></InputText>
      <hr style={{ border: '1px dashed #5C5C5B' }} />
      <TextArea></TextArea>
      <hr style={{ border: '1px dashed #5C5C5B' }} />
      <OptionSelect></OptionSelect>
      <hr style={{ border: '1px dashed #5C5C5B' }} />
      <OptionRadio></OptionRadio>
    </>
  );
}
