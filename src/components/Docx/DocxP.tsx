import React from 'react'
import styles from "./DocxContent.module.scss";

interface Props {
  children: React.ReactNode
  className?: string;
}

const DocxP = ({children, className}: Props) => {
  return (
    <div className={styles.docxP + " " + className}>
      {children}
    </div>
  )
}

export default DocxP