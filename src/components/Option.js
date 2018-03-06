import React from 'react'

const Option = ({
  optionText,
  handleDeleteOption
}) => (
  <p>
    {optionText}
    <button
      onClick={() => handleDeleteOption(optionText)}
    >
      remove
    </button>
  </p>
)

export default Option