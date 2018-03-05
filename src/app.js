
class IndecisionApp extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      options: this.props.options
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
    const subtitle = "Put your life in the hands of a computer"

    return (
      <div>
        <Header subtitle={subtitle} />
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

IndecisionApp.defaultProps = {
  options: []
}

const Header = ({
  title,
  subtitle
}) => (
  <div>
    <h1>{title}</h1>
    {subtitle && <h2>{subtitle}</h2>}
  </div>
)

Header.defaultProps = {
  title: 'Indecision'
}

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

const Options = ({
  options,
  handleDeleteOptions
}) => (
  <div>
    <button
      onClick={handleDeleteOptions}
    >
      Remove All
    </button>
    {options.map((option, idx) =>
      <Option
        key={`option-${idx}`}
        optionText={option}
      />
    )}
  </div>
)

const Option = ({
  optionText
}) => (
  <p>{optionText}</p>
)

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

    e.target.elements.option.value = ''
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
  <IndecisionApp options={['React', 'Redux']} />,
  document.getElementById('app')
)