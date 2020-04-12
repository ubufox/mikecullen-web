import React, { useState } from 'react';


const Component = ({ options, onSubmit }) => {
  const [selectedOption, select] = useState(null);

  const selectOption = (option) => () => select(option);

  const optionElements = options.map((o) => (
    <Option
      onClick={selectOption(o.id)}
      isSelected={selectedOption === o.id}
      text={o.text}
    />
  ));

  const submit = () => onSubmit(selectedOption);

  return (
    <div>
      <div>
        { optionElements }
      </div>
      <SubmitButton
        onClick={submit}
        label="submit"
      />
    </div>
  );
}

Component.displayName = 'Form';

export default Component;
