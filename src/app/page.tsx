


'use client';
import React from "react";
import dynamic from 'next/dynamic';
import styles from "./page.module.css";

const TextEditor = dynamic(() => import('@/Component/Editor/Editor'), {
  ssr: false, // Disable server-side rendering
});

export default function Home() {
  return (
    <div className={styles.page}>
      <h1>Hello</h1>
      <TextEditor />
    </div>
  );
}
