
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";
import Login from './components/Login'
import Admin from './components/Admin'
import Logout from './components/Logout'
import Main from './components/Main'



function App() {
  return (
    <>
    
    <div className="App">
   <Router>
      <div>
          <Route exact path="/" component = {Main} />  
          <Route exact path="/login" component = {Login} />  
          <Route  path="/admin" component = {Admin} />
          <Route  path="/logout" component = {Logout} />  
      </div>
    </Router>
    </div>
    </>
  );
}

export default App;




