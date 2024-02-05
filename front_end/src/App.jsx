import { Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import './App.scss';
import Login from './pages/Login';
import Registration from './pages/Registration';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Router >
        <Routes>
          <Route path='/main' element={<Home />} />
          <Route path='/' element={<Login />}/>
          <Route path='/login/registration' element={<Registration />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
