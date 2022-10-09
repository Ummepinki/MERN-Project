
import './App.css';
import { Routes, Route} from "react-router-dom";
import Login from './Component/login/Login';
import app from './firebase.init';
import { getAuth } from "firebase/auth";
const auth = getAuth(app);
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />

      </Routes>
    </div>
  );
}

export default App;
