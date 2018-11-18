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
              <td className='animal' onClick={()=> { this.props.getAnimal(animal); this.props.toggleState('animalListIsVisible', 'animalIsVisible')}}>
                <h3> {animal.title} </h3>
              </td>
              <td>
                  <button className=''>Edit</button>
              </td>
              <td>
                  <button className='' onClick={() => this.props.deleteAnimal(animal,index)}>Delete</button>
              </td>
            </tr>
          )
        })}
        </tbody>
      </table>
    )
  }
}
