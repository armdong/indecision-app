import React from 'react'
import Header from './Header'
import Action from './Action'
import Options from './Options'
import AddOption from './AddOption'
import OptionModal from './OptionModal'

class IndecisionApp extends React.Component {
  state = {
    options: [],
    selectedOption: undefined
  }

  componentDidMount() {
    try {
      const json = localStorage.getItem('options')
      const options = JSON.parse(json)

      if (options) {
        this.setState(() => ({ options }))
      }
    } catch (e) {
      // Do nothing at all
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options)
      localStorage.setItem('options', json)
    }
  }

  handleDeleteOptions = () => {
    this.setState(() => ({
      options: []
    }))
  }

  handleDeleteOption = (optionToRemove) => {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => option !== optionToRemove)
    }))
  }

  handlePick = () => {
    const randomNum = Math.floor(Math.random() * this.state.options.length)
    const option = this.state.options[randomNum]

    this.setState(() => ({
      selectedOption: option
    }))
  }

  handleAddOption = (option) => {
    if (!option) {
      return 'Enter valid value to add item'
    } else if (this.state.options.indexOf(option) > -1) {
      return 'This option already exists'
    }

    this.setState((prevState) => ({
      options: [...prevState.options, option]
    }))
  }

  handleClearSelectedOption = () => {
    this.setState(() => ({
      selectedOption: undefined
    }))
  }

  render() {
    const subtitle = "Put your life in the hands of a computer"
    const { options, selectedOption } = this.state
    const {
      handlePick,
      handleDeleteOption,
      handleDeleteOptions,
      handleAddOption,
      handleClearSelectedOption
    } = this

    return (
      <div>
        <Header subtitle={subtitle} />
        <div className="container">
          <Action
            hasOptions={options.length > 0}
            handlePick={handlePick}
          />
          <Options
            options={options}
            handleDeleteOptions={handleDeleteOptions}
            handleDeleteOption={handleDeleteOption}
          />
          <AddOption
            handleAddOption={handleAddOption}
          />
        </div>
        <OptionModal
          selectedOption={selectedOption}
          handleClearSelectedOption={handleClearSelectedOption}
        />
      </div>
    )
  }
}

export default IndecisionApp