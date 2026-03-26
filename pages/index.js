import React, { useState, useEffect } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import DropZone from "@/components/DropZone";
import CustomInput from "@/components/CustomInput";
import { parseMods } from "@/utils/modparser";

export default function Home() {

  const [file, setFile] = useState(null);
  const [string, setString] = useState("");
  const [allowedSpecialCharacters, setAllowedSpecialCharacters] = useState("_'[]()! -")

  useEffect(() => {
    if (file == null) return
    if (!file.name.endsWith('html')) return console.log('not an html file')

    // read file contents
    const fileReader = new FileReader()
    fileReader.onload = (e) => {

      // parse text to html
      const contents = e.target.result;
      const tempElement = document.createElement('html');
      tempElement.innerHTML = contents

      // generate modlist from html
      const modString = parseMods(tempElement, allowedSpecialCharacters)
      setString(modString)
    }
    fileReader.readAsText(file);
    
  }, [file, allowedSpecialCharacters])


  return (
    <div className={styles.container}>
      <Head>
        <title>23rd Headquarters Special Troops - Arma Modlist parser</title>
        <meta name="description" content="Convert your .html arma modlist file to an Arma server commandline modlist string" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>23rd Headquarters Special Troops</h1>
        <h3 className={styles.subtitle}>Convert your .html arma modlist file to an Arma server commandline modlist string</h3>
       
        <DropZone setFile={setFile}></DropZone>

        <h4 className={styles.subSubTitle}>allowed special characters</h4>
        <CustomInput allowedSpecialCharacters={allowedSpecialCharacters} onChange={setAllowedSpecialCharacters} />

        <h4 className={styles.subSubTitle}>output</h4>
        <div>
          <p className={styles.content}>{string}</p>
        </div>
        

      </main>
    </div>
  );
}