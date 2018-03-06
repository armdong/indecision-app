import React from 'react'

const Action = ({
  hasOptions,
  handlePick
}) => (
  <div>
    <button
      onClick={handlePick}
      disabled={!hasOptions}
    >
      What should I do?
    </button>
  </div>
)

export default Action