import download from '../assest/download.png'
import { BrowserRouter, Routes, Route, Link, Outlet,useNavigate } from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Login from './login';
import { propTypes } from 'react-bootstrap/esm/Image';

const Profile = () => {
  let navigate= useNavigate(); 
  const Change=()=>{
   navigate('/login');
 }
  return (
    <>
      <div className="row1" style={{ backgroundColor: 'cyan', clear: 'both', display: 'table', width: '100%' }}>
        <div className="col-1" style={{ width: '50%', float: 'left' }}>
        </div>
        <div className='col-2' style={{ width: '50%', float: 'left' }}>
          {/* <button onClick={Change} style={{ border: 'none', borderRadius: '10px', margin: '10px', padding: '8px', color: 'white', backgroundColor: 'red', float: 'right', cursor: 'pointer' }} >signup</button> */}
          <button style={{ border: 'none', borderRadius: '10px', margin: '10px', padding: '8px', color: 'white', backgroundColor: 'red', float: 'right' }}>Login</button>
        </div>
      </div>
      <div className='row2' style={{ textAlign: 'center', backgroundColor: 'blue',clear: 'both',display:'table',width: '100%',height: '50px',paddingTop:'50px' }}>
        <nav> 
          {/* <Link to='/' >About us</Link> */}
          <Link to='/contactus'>Contact US</Link>
        </nav>
      </div>
      <div className='row3' style={{ backgroundColor: '' ,marginTop: '-15px'}}>
        <Outlet />
      </div></>
  );
}
export default Profile;