import Dashboard from '../Dashboard/Dashboard';
import Drivers from '../Drivers/Drivers';
import Commuters from '../commuters/Commuters';
import OwnerLogin from '../vehicleOwner/OwnerLogin';
import './Home.css'
import React,{useState} from 'react';
function Home(){
    

        
  const [content, setContent] = useState(<Dashboard/>);
  

  const handleButtonClick = (contentType) => {
    switch (contentType) {
      default:
        setContent(<Dashboard/>);
        break;
      case 'drivers':
        setContent(<Drivers/>);
        break;
      case 'conductors':
        setContent('Conductors content goes here.');
        break;
      case 'dashboard':
        setContent(<Dashboard/>);
        break;
        case 'commuters':
            setContent( <Commuters/>);
            break;
      case 'vehicleOwners':
        setContent(<OwnerLogin/>);
        break;
      
      
    }
  };

  function handleExitButtonClick(){
    const confirmExit = window.confirm('Are you sure you want to exit?');
    if (confirmExit) {
      // Close the application
      window.close();
    }
  }
  

  return (
    <div className="App">
      <div className="sidebar">
      <button onClick={() => handleButtonClick('dashboard')}>Dashboard</button>
      <button onClick={() => handleButtonClick('commuters')}>Commuters</button>
        <button onClick={() => handleButtonClick('drivers')}>Drivers</button>
        <button onClick={() => handleButtonClick('conductors')}>Conductors</button>
        <button onClick={() => handleButtonClick('vehicleOwners')}>Vehicle Owners</button>
        <button onClick={() => handleExitButtonClick()}>Exit</button>
      </div>
      <div className="content">
        {content }
      </div>
    </div>
  );
        
    
}

export default Home;