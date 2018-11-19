class App extends React.Component {
 render () {
   return (
     <div className='section'>
       <Animals />
     </div>
   )
 }
}

ReactDOM.render(
  <App />,
  document.querySelector('.container')
)
