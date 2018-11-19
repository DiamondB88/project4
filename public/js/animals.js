class Animals extends React.Component {
  constructor (props){
    super(props)
    this.state = {
      animalListIsVisible: true,
      addAnimalIsVisible: false,
      animalIsVisible: false,
      editanimalIsVisible: false,
      animals: [],
      animal: {}
    }
    this.toggleState = this.toggleState.bind(this)
    this.getAnimals = this.getAnimals.bind(this)
    this.getAnimal = this.getAnimal.bind(this)
    this.deleteAnimal=this.deleteAnimal.bind(this)
    this.handleCreate = this.handleCreate.bind(this)
    this.handleCreateSubmit = this.handleCreateSubmit.bind(this)
    this.handleUpdateSubmit = this.handleUpdateSubmit.bind(this)
  }
  componentDidMount () {
  this.getAnimals()
}
deleteAnimal (animal, index) {
  fetch('animal/' + animal.id,
    {
      method: 'DELETE'
    })
    .then(data => {
      this.setState({
        animals: [
          ...this.state.animals.slice(0, index),
          ...this.state.animals.slice(index + 1)
        ]
      })
    })
}
  getAnimals () {
  fetch('/animal')
    .then(response => response.json())
    .then(data => {
      this.setState({
        animal: data
      })
      console.log(data);
    }).catch(error => console.log(error))
}
handleCreate (animal) {
    console.log([animal, ...this.state.animals])
    this.setState({animals: [animal, ...this.state.animal]})
  }
handleCreateSubmit (animal) {
    fetch('/animal', {
      body: JSON.stringify(animal),
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
    })
      .then(createdAnimal => {
        return createdAnimal.json()
      })
      .then(jsonedAnimal => {
        this.handleCreate(jsonedAnimal)
        this.toggleState('addAnimalIsVisible', 'animalListIsVisible')
      })
      .catch(error => console.log(error))
}
handleUpdateSubmit (animal) {
    fetch('/animal/'+ animal.id, {
      body: JSON.stringify(animal),
      method: 'PUT',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
    })
      .then(updatedAnimal => {
        return updatedAnimal.json()
      })
      .then(jsonedAnimal => {
        this.getAnimal()
        this.toggleState('AnimalListIsVisible', 'AnimalIsVisible')
      })
      .catch(error => console.log(error))

}
getAnimal(animal){
  this.setState({animal: animal})
}

  toggleState (st1, st2) {
    this.setState({
      [st1]: !this.state[st1],
      [st2]: !this.state[st2]
    })
  }

 render () {

   return (
     <div className=''>
       <h2> Crazy Animals </h2>
        {
          this.state.animalListIsVisible
          ? <button
              className='' onClick={()=>this.toggleState('addAnimalIsVisible', 'animalListIsVisible')}>
              Add a Meme
            </button>
          : ''
        }
        {
          this.state.animalListIsVisible
          ? <AnimalList
            toggleState={this.toggleState}
            animals={this.state.animals}
            getAnimal ={this.getAnimal}
            deleteAnimal={this.deleteAnimal}
          />
          : ''
        }
        {
          this.state.addAnimalIsVisible
          ? <AnimalForm
          toggleState={this.toggleState}
          handleCreate={this.handleCreate}
          handleSubmit={this.handleCreateSubmit}
          /> : ''
        }
        {
          this.state.animalIsVisible
          ? <Animal
          toggleState={this.toggleState}
          animal={this.state.animal}
          handleSubmit={this.handleUpdateSubmit}
          /> : ''
        }
     </div>
   )
 }
}
