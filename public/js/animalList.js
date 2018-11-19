class AnimalList extends React.Component {
  render (){
    return (
      <div className="mainPage">
        <table>
          <tbody>
          {this.props.animals.map((animal, index) => {
            return (
              <tr className="mainPage">
                <td onClick={()=> { this.props.getAnimal(animal); this.props.toggleState('animalListIsVisible', 'animalIsVisible')}}>
                    <img src={animal.image} alt={animal.title} />
                  </td>
                  <td className='animalList' onClick={()=> { this.props.getAnimal(animal); this.props.toggleState('animalListIsVisible', 'animalIsVisible')}}>
                  </td>
                  <td>
                      <button className='animalListButton' onClick={()=> { this.props.getAnimal(animal); this.props.toggleState('animalListIsVisible', 'animalIsVisible')}}>Edit</button>
                  </td>
                  <td>
                      <button className='animalListButton' onClick={() => this.props.deleteAnimal(animal,index)}>Delete</button>
                  </td>
              </tr>
            )
          })}
          </tbody>
        </table>
      </div>
    )
  }
}
