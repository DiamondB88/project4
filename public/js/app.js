class App extends React.Component {
 render () {
   return (
     <div className='section'>
       <h1 className='title'> Crazy Memes </h1>
       <Animals />
     </div>
   )
 }
}

ReactDOM.render(
  <App />,
  document.querySelector('.container')
)
