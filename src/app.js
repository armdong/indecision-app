
class IndecisionApp extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      options: ['Thing one', 'Thing two', 'Thing three']
    }

    this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
    this.handlePick = this.handlePick.bind(this)
    this.handleAddOption = this.handleAddOption.bind(this)
  }

  handleDeleteOptions() {
    this.setState(() => ({
      options: []
    }))
  }

  handlePick() {
    const randomNum = Math.floor(Math.random() * this.state.options.length)
    const option = this.state.options[randomNum]
    alert(option)
  }

  handleAddOption(option) {
    if (!option) {
      return 'Enter valid value to add item'
    } else if (this.state.options.indexOf(option) > -1) {
      return 'This option already exists'
    }

    this.setState((prevState) => ({
      options: [...prevState.options, option]
    }))
  }

  render() {
    const title = "Indecision"
    const subtitle = "Put your life in the hands of a computer"

    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action
          hasOptions={this.state.options.length > 0}
          handlePick={this.handlePick}
        />
        <Options
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
        />
        <AddOption
          handleAddOption={this.handleAddOption}
        />
      </div>
    )
  }
}

class Header extends React.Component {
  render() {
    const { title, subtitle } = this.props

    return (
      <div>
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
      </div>
    )
  }
}

class Action extends React.Component {
  render() {
    return (
      <div>
        <button
          onClick={this.props.handlePick}
          disabled={!this.props.hasOptions}
        >
          What should I do?
        </button>
      </div>
    )
  }
}

class Options extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { options } = this.props

    return (
      <div>
        <button onClick={this.props.handleDeleteOptions}>Remove All</button>
        {options.map((option, idx) =>
          <Option key={`option-${idx}`} optionText={option} />
        )}
      </div>
    )
  }
}

class Option extends React.Component {
  render() {
    const { optionText } = this.props

    return (
      <p>{optionText}</p>
    )
  }
}

class AddOption extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      error: undefined
    }

    this.handleAddOption = this.handleAddOption.bind(this)
  }

  handleAddOption(e) {
    e.preventDefault()

    const option = e.target.elements.option.value.trim()
    const error = this.props.handleAddOption(option)

    this.setState(() => ({ error }))
  }

  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option"/>
          <button>Add Option</button>
        </form>
      </div>
    )
  }
}

ReactDOM.render(
  <IndecisionApp />,
  document.getElementById('app')
)