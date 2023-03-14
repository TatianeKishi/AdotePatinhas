import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'


function App() {
  return (
    <Router>
      <ul>
        <li>INICIO</li>
        <li>DOE UM BICHINHO</li>
        <li>PERFIL</li>
        <li>INTERESSES</li>
        <li>NOS APOIE</li>
      </ul>
      {/* <Switch>
        <Route exact path='/'>
          <Inicio/>
        </Route>
      </Switch> */}
      {/* <p>Footer</p> */}
    </Router>
  );
}

export default App;
