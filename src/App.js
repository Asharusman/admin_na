import logo from './logo.svg';
import './App.css';
import MiniDrawer from './components/Drawer/drawer';
import Sidebar from './components/Sidebar/Sidebar';
import Footer from './components/Footer/Footer';
import  Dashboard  from './components/Dashboard/Dashboard';
import  Project  from './components/Projects/Project';
import  Tasks  from './components/Tasks/Tasks';
import  Timelog  from './components/Timelogs/Timelog';
import  Expenses  from './components/Expenses/Expenses';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    <div>
 <MiniDrawer/>
 {/* <Footer/> */}
 {/* <Routes>
          <Route path="/dashboard" element={<Dashboard />}/>
          <Route path="/project" element={<Project/> }/>
          <Route path="/tasks" element={<Tasks/> }/>
          <Route path="/timelog" element={<Timelog/> }/>
          <Route path="/expenses" element={<Expenses/> }/>
      </Routes> */}
 {/* <Sidebar/> */}
    </div>
  );
}

export default App;
