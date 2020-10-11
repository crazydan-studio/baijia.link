import React, {useEffect} from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

function hideNavbar() {
  if (document.__navbar_style__) {
    return;
  }

  let __navbar_style__ = document.createElement('style');
  __navbar_style__.innerHTML = ".navbar{ display: none; }";

  document.head.appendChild(__navbar_style__);
  document.__navbar_style__ = __navbar_style__;
}
// hidden navbar
if (typeof window !== 'undefined') {
  hideNavbar();
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;

  return (
    <Layout
      title={`${siteConfig.title} - ${siteConfig.tagline}`}
      description={`${siteConfig.title}: ${siteConfig.tagline}`}
      noFooter
      wrapperClassName={styles.heroMain}>
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className={clsx('hero__title', styles.heroTitle)}>{siteConfig.title}</h1>
          <p className={clsx('hero__subtitle', styles.heroSubTitle)}>{siteConfig.tagline}</p>
          <div className={styles.buttons}>
          { /* https://discuss.baijia.link */ }
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to="#">
              点击进入
            </Link>
          </div>
        </div>
      </header>
    </Layout>
  );
}

export default Home;
