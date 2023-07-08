import React, {useCallback} from 'react'
import {useDropzone} from 'react-dropzone'
import styles from "../styles/DropZone.module.css";


const DropZone = ({setFile}) => {
  
  const onDrop = useCallback(acceptedFiles => {
    const file = acceptedFiles[0]
    setFile(file)
  }, [])

  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

  return (
    <div className={styles.dropzone}  {...getRootProps()}>
      <input {...getInputProps()} />
      {
          <p className={styles.text}>drop a file here, or click to select file</p>
      }
    </div>
  );
};

export default DropZone;