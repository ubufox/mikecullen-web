import React from 'react';

import styles from './styles/SubmitButton.module.scss';

const Component = ({
  onClick,
  label,
  disabled,
}) => {
  const buttonStyles = [styles.container];
  if (disabled) {
    buttonStyles.push(styles.disabled);
  }

  return (
    <div
      alt="submit"
      className={buttonStyles.join(' ')}
      role="button"
      tabIndex={0}
      onClick={!disabled && onClick}
      onKeyPress={!disabled && onClick}
    >
      { label }
    </div>
  );
}

Component.displayName = 'SubmitButton';

export default Component;
