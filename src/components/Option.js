import React from 'react'

const Option = ({
  optionText,
  handleDeleteOption
}) => (
  <p>
    {optionText}
    <button
      className="button button--link"
      onClick={() => handleDeleteOption(optionText)}
    >
      remove
    </button>
  </p>
)

export default Option