import React, { useState } from 'react';

import Option from './Option';
import SubmitButton from './SubmitButton';

import styles from './styles/Form.module.scss';


const Component = ({ options, onSubmit, loading }) => {
  const [selectedOption, select] = useState(null);

  if (options === 0) {
    return <div />;
  }

  const selectOption = (option) => () => select(option);

  const optionElements = options.map((o) => (
    <Option
      onClick={selectOption(o.id)}
      isSelected={selectedOption === o.id}
      text={o.text}
    />
  ));

  const submit = () => onSubmit(selectedOption);

  console.log('submit');
  console.log(submit);

  return (
    <div className={styles.container}>
      <div className={styles.optionsContainer}>
        { optionElements }
      </div>
      <SubmitButton
        onClick={submit}
        label="submit"
        disabled={!selectedOption || loading}
      />
    </div>
  );
}

Component.displayName = 'Form';

export default Component;
