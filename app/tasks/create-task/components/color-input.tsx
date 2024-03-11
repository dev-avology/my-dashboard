import React, { useState } from 'react';
import Chrome from '@uiw/react-color-chrome';
import { GithubPlacement } from '@uiw/react-color-github';


interface ColorPickerProps {
    onCheckboxChange: (value?: string,checked?:boolean) => void; // Add a prop for handling checkbox changes
  }

  const ColorPicker: React.FC<ColorPickerProps> = ({ onCheckboxChange}) => {

  const [hex, setHex] = useState("#d29c9c53");

  const handleClick = (hex: string) => {
    // Ensure that hex is a non-empty string before proceeding

      onCheckboxChange(hex,true); 

  };

  return (
    <>
      <Chrome
        color={hex}
        style={{ float: 'left' }}
        placement={GithubPlacement.Right}
        onChange={(color) => {
          setHex(color.hexa);
        }}
      />
      <div style={{ background: hex, marginTop: 30, padding: 10 }} onClick={() => handleClick(hex)}>
        {hex}
      </div>
    </>
  );
}
export default ColorPicker;