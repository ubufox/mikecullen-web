import React from 'react';
import { Link } from 'react-router-dom';
import MediaQuery from 'react-responsive';

import { TABLET_WIDTH } from '../styles/media_queries';

import logo from '../styles/assets/makemikecullenfamous.png';
import headsDesktop from '../styles/assets/heads_desktop.jpg';
import headsMobile from '../styles/assets/heads_mobile.jpg';
import nextArrow from '../styles/assets/arrow_next.png';

import styles from './Welcome.module.scss';

const Component = () => {
  return (
    <div className={styles.fullContainer}>
      <div className={styles.itemContainer}>
        <img
          alt="logo"
          className={styles.logo}
          src={logo}
        />
        <MediaQuery minWidth={TABLET_WIDTH}>
          <img
            alt="heads"
            className={styles.heads}
            src={headsDesktop}
          />
        </MediaQuery>
        <MediaQuery maxWidth={TABLET_WIDTH - 1}>
          <img
            alt="heads"
            className={styles.heads}
            src={headsMobile}
          />
        </MediaQuery>
        <div className={styles.text}>
          <div>
          </div>
          <div>
            Welcome to&nbsp;
            <span className={[styles.highlight, styles.green].join(' ')}>
              MakeMikeCullenFamous.com!
            </span>
            &nbsp;We purchased this domain about a year ago after having a few drinks
            with our good friend&nbsp;
            <span className={[styles.highlight, styles.red].join(' ')}>
              Mike Cullen
            </span>
            , who is a&nbsp;
            <span className={[styles.highlight, styles.pink].join(' ')}>
              seriously funny guy
            </span>
            . &nbsp;And now as his birthday approaches, we&apos;d really appreciate if
            you&apos;d watch a few of his&nbsp;
            <span className={[styles.highlight, styles.yellow].join(' ')}>
              hilarious videos
            </span>
            &nbsp;and tell us what you think!
          </div>
          <Link to="/gallery" className={[styles.text, styles.link].join(' ')}>
            Let&apos;s make Mike famous
            <img
              alt="next"
              src={nextArrow}
              className={styles.next}
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

Component.displayName = 'Welcome';

export default Component;
