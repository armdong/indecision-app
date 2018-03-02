
class IndecisionApp extends React.Component {
  render() {
    const title = "Indecision"
    const subtitle = "Put your life in the hands of a computer"
    const options = ['thing one', 'thing two', 'thing three']

    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action />
        <Options options={options} />
        <AddOption />
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
  constructor(props) {
    super(props)

    this.handlePick = this.handlePick.bind(this)
  }
  handlePick() {
    alert('handlePick')
  }

  render() {
    return (
      <div>
        <button onClick={this.handlePick}>What should I do?</button>
      </div>
    )
  }
}

class Options extends React.Component {
  constructor(props) {
    super(props)

    this.handleRemoveAll = this.handleRemoveAll.bind(this)
  }

  handleRemoveAll() {
    alert('handleRemoveAll')
  }

  render() {
    const { options } = this.props

    return (
      <div>
        <button onClick={this.handleRemoveAll}>Remove All</button>
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

    this.handleAddOption = this.handleAddOption.bind(this)
  }

  handleAddOption(e) {
    e.preventDefault()

    const value = e.target.elements.option.value.trim()

    if (!!value) {
      alert('handleAddOption')
    }
  }

  render() {
    return (
      <form onSubmit={this.handleAddOption}>
        <input type="text" name="option"/>
        <button>Add Option</button>
      </form>
    )
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'))