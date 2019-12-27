import React from 'react';
import styles from './index.module.scss';

export default function Banner() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.title}>官网模板</div>
        <div className={styles.desc}>简约便捷</div>
        <a className={styles.link}>开始使用</a>
      </div>
    </div>
  );
}
