class Animal extends React.Component {
  render () {
    return (
      <div>
        <div>
          <div className="spacing">
              <img src={this.props.animal.image} alt={this.props.animal.title} className="editPageImage"/>
              <div className="editPageH3Div">
                <h3 className='editPageH3'><span>Title:</span> {this.props.animal.title} </h3>
                <p className='editPageH3'><span>Description:</span> {this.props.animal.description} </p>
              </div>
          </div>
          <div className='animalForm'>
            <button className='seeFullList' onClick={()=> this.props.toggleState('animalListIsVisible', 'animalIsVisible')}>See Full List</button>
          </div>
        </div>
        <AnimalForm animal={this.props.animal} handleSubmit={this.props.handleSubmit} />
      </div>
    )
  }
}
