import React from 'react';

import styles from './styles/Option.module.scss';

const Component = ({
  onClick,
  isSelected,
  text,
}) => {
  const boxStyles = [styles.box];
  const textStyles = [styles.text];

  if (isSelected) {
    boxStyles.push(styles.selectedBox);
    textStyles.push(styles.selectedText);
  }

  return (
    <div
      alt="option"
      className={styles.container}
      role="button"
      tabIndex={0}
      onClick={onClick}
      onKeyPress={onClick}
    >
      <div className={boxStyles.join(' ')} />
      <div className={textStyles.join(' ')}>
        { text }
      </div>
    </div>
  );
}

Component.displayName = 'Option';

export default Component;
