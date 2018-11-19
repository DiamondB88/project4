class AnimalList extends React.Component {
  render (){
    return (
      <table>
        <tbody>
        {this.props.animals.map((animal, index) => {
          return (
            <tr>
            <td onClick={()=> { this.props.getAnimal(animal); this.props.toggleState('animalListIsVisible', 'animalIsVisible')}}>
                <img src={animal.image} alt={animal.title} />
              </td>
              <td className='animalList' onClick={()=> { this.props.getAnimal(animal); this.props.toggleState('animalListIsVisible', 'animalIsVisible')}}>
              </td>
              <td>
                  <button className='' onClick={()=> { this.props.getAnimal(animal); this.props.toggleState('animalListIsVisible', 'animalIsVisible')}}>Edit</button>
              </td>
              <td>
                  <button className='animalList' onClick={() => this.props.deleteAnimal(animal,index)}>Delete</button>
              </td>
            </tr>
          )
        })}
        </tbody>
      </table>
    )
  }
}
