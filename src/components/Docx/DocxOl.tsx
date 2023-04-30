import React from 'react'
import styles from "./DocxContent.module.scss";

interface Props {
  children: React.ReactNode;
  className?: string;
}

const DocxOl = ({children, className}: Props) => {
  return (
    <ol className={styles.docxOl + " " + className}>
      {children}
    </ol>
  )
}

export default DocxOl