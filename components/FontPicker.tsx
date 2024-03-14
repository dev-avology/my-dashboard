import { getAvailableFonts } from "@remotion/google-fonts";
import React, { useCallback } from "react";
import Select from 'react-select'

 
export const FontPicker: React.FC = () => {
  const newFonts = getAvailableFonts();
  const FontOptions = newFonts.map((font)=> {
    return {value:font.importName,label:font.fontFamily};
})

  return (
    <div key="fontpicker" className={`p-2 text-gray-900 rounded border border-gray-200 bg-gray-100 dark:border-gray-600`}>
      <Select options={FontOptions} isMulti/>
    </div>
  );

};