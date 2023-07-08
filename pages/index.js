import React, { useState, useEffect } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import DropZone from "@/components/DropZone";
import { parseMods } from "@/utils/modparser";

export default function Home() {

  const [file, setFile] = useState(null);
  const [string, setString] = useState("");

  useEffect(() => {
    if(file == null) return
    if (!file.name.endsWith('html')) return console.log('not an html file')

    // read file contents
    const fileReader = new FileReader()
    fileReader.onload = (e) => {

      // parse text to html
      const contents = e.target.result;
      const tempElement = document.createElement( 'html' );
      tempElement.innerHTML = contents

      // generate modlist from html
      const modString = parseMods(tempElement)
      setString(modString)
    }
    fileReader.readAsText(file);


  }, [file])

  return (
    <div className={styles.container}>
      <Head>
        <title>23rd Headquarters Special Troops - Arma Modlist parser</title>
        <meta name="description" content="Nextjs drag and drop file upload" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>23rd Headquarters Special Troops</h1>
        <h3 className={styles.subtitle}>Convert your .html arma modlist file to an Arma server commandline modlist string</h3>
        <DropZone setFile={setFile}></DropZone>
        <p className={styles.content}>{string}</p>
      </main>
    </div>
  );
}