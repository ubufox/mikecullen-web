import React from 'react';

const Component = ({
  onClick,
  isSelected,
  text,
}) => {
  const optionStyles = [];
  if (isSelected) {
    optionStyles.push();
  }

  return (
    <div>
      <div>

      </div>
      <div>
        { text }
      </div>
    </div>
  );
}

Component.displayName = 'Option';

export default Component;
