import React from 'react'
import Option from './Option'

const Options = ({
  options,
  handleDeleteOptions,
  handleDeleteOption
}) => (
  <div>
    <button
      className="button button--link"
      onClick={handleDeleteOptions}
    >
      Remove All
    </button>
    {options.length === 0 && <p>Please add an option to get started!</p>}
    {options.map((option, idx) =>
      <Option
        key={option}
        optionText={option}
        handleDeleteOption={handleDeleteOption}
      />
    )}
  </div>
)

export default Options