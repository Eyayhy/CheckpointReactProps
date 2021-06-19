import './App.css';
import Profile from './profile/Profile';
import img from './images/profile.jpg';


const  App = ()=>{
 


  return (
    <>


   <Profile  src={img} fullName="Eya Yahyaoui" bio=" `I'm an in engineer Information Systems and Software Engineering `" profession="Software Engineer"/>

    
   
    </>
  );
}

export default App;
