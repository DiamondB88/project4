class Animal extends React.Component {
  render () {
    return (
      <div>
        <div>
          <div>
            <div>
              <img src={this.props.animal.image} alt={this.props.animal.title} />
            </div>
          </div>
          <div className=''></div>
          <div className=''>
            <div>
              <h3 className=''><span>Title:</span> {this.props.animal.title} </h3>
              <p className=''><span>Description:</span> {this.props.animal.description} </p>
            </div>
            <div className=''>
            </div>
          <div className=''>
            <button className='' onClick={()=> this.props.toggleState('animalListIsVisible', 'animalIsVisible')}>See Full List</button>
          </div>
          </div>
        </div>
        <AnimalForm animal={this.props.animal}   handleSubmit={this.props.handleSubmit}/>
      </div>
    )
  }
}
