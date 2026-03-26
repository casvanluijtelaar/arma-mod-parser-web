import { useState } from 'react';
import styles from "../styles/CustomInput.module.css";


const CustomInput = ({allowedSpecialCharacters, onChange}) => {

  const [text, setText] = useState(allowedSpecialCharacters)

  const handleInput = (e) => {
    const distinct = Array.from(new Set(e.target.value)).join('')
    const output = distinct.replace(/[a-zA-Z0-9]/g, '')

    setText(output);
    onChange(output)
  };

  return (
    <div className={styles.container}>
      <input
        type="text"
        value={text}
        onChange={handleInput}
        className={styles.input}
      />
      <div className={styles.charDisplay}>
        {text.split('').map((char, index) => (
          <span key={index} className={styles.outlinedChar}>
            {char}
          </span>
        ))}
      </div>
    </div>
  );
};

export default CustomInput;
