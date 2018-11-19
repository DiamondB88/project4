class App extends React.Component {
 render () {
   return (
     <div className='section'>
       <h1>Animemes</h1>
       <Animals />
     </div>
   )
 }
}

ReactDOM.render(
  <App />,
  document.querySelector('.container')
)
