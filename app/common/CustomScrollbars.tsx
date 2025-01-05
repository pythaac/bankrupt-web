import { Scrollbars } from 'react-custom-scrollbars';
import { ReactNode } from "react";

import styles from './component.module.css'

export default function CustomScrollbars({children}: {children: ReactNode}) {
    return (
      <Scrollbars
        universal
        thumbSize={50}
        renderTrackHorizontal={props => <div {...props} className={styles.track_horizontal}/>}
        renderTrackVertical={props => <div {...props} className={styles.track_vertical}/>}
        renderThumbHorizontal={props => <div {...props} className={styles.thumb_horizontal}/>}
        renderThumbVertical={props => <div {...props} className={styles.thumb_vertical}/>}
        renderView={props => <div {...props} className={styles.view}/>}>
          {children}
      </Scrollbars>
  );
}