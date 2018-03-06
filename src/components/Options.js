import React from 'react'
import Option from './Option'

const Options = ({
  options,
  handleDeleteOptions,
  handleDeleteOption
}) => (
  <div>
    <div className="widget-header">
      <h3 className="widget-header__title">Your Options</h3>
      <button
        className="button button--link"
        onClick={handleDeleteOptions}
      >
        Remove All
      </button>
    </div>
    {options.length === 0 && <p className="widget__message">Please add an option to get started!</p>}
    {options.map((option, index) =>
      <Option
        key={option}
        optionText={option}
        count={index + 1}
        handleDeleteOption={handleDeleteOption}
      />
    )}
  </div>
)

export default Options