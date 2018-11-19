class App extends React.Component {
 render () {
   return (
     <div className='section'>
       <h1>A N I M E M E S</h1>
       <Animals />
     </div>
   )
 }
}

ReactDOM.render(
  <App />,
  document.querySelector('.container')
)
