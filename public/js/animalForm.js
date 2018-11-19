class AnimalForm extends React.Component {
  constructor (props) {
  super(props)
  this.state = {
    title: '',
    description: '',
    image: ''
  }
  this.handleChange = this.handleChange.bind(this)
  this.handleSubmit = this.handleSubmit.bind(this)
}
componentDidMount(){
  if(this.props.animal){
    this.setState({
      title: this.props.animal.title,
      description: this.props.animal.description,
      image: this.props.animal.image,
      id: this.props.animal.id
    })
  }
}
handleChange (event) {
this.setState({[event.target.id]: event.target.value})
}
  handleSubmit (event) {
    event.preventDefault()
    this.props.handleSubmit(this.state)
    console.log(this.state)
}
render () {
return (
  <div className=''>
    <form onSubmit={this.handleSubmit}>
      <label className='label' for='title'>Title</label>
      <div className='control'>
        <input
          className='input'
          type='text'
          id='title'
          onChange={this.handleChange}
          value={this.state.title}
        />
      </div>
      <label className='label' for='description'>Caption</label>
      <div className='control'>
        <input
          className='input'
          type='text'
          onChange={this.handleChange}
          value={this.state.description}
          id='description'
        />
      </div>
      <label className='label' for='image'>Image</label>
      <div className='control'>
        <input className='input'
          type='text'
          id='image'
          onChange={this.handleChange}
          value={this.state.image}
        />
      </div>
      <div className='control'>
        <input className='submit' type='submit' />
      </div>
    </form>
<<<<<<< HEAD
    {!this.state.id ?
    <button className="" onClick={()=> this.props.toggleState('animalListIsVisible', 'addAnimalIsVisible')}>Cancel</button>: ''}

=======
      <button className='cancel' onClick={()=> this.props.toggleState('animalListIsVisible', 'addAnimalIsVisible')}>Cancel</button>
>>>>>>> 4790ce0e92786e8232043b8d8a870c9e7955a239
  </div>
    )
  }
}
