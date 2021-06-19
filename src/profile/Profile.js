import PropTypes from "prop-types";




const Profile = props =>{
   
    /** charger l'event */
    const handleName = e =>{
        e.preventDefault();
        alert("my name is Eya");
       };
   /** default props */
       Profile.defaultProps = {
        fullName: "Eya",
        bio:"engineer",
        profession:"engineer"
       };   

     /** props type */  
       Profile.propTypes = {
        fullName: PropTypes.string,
        bio: PropTypes.string,
        profession: PropTypes.string,
        handleName : PropTypes.func
      };
     /** inline-style */
      const styleImage ={borderRadius:'50%',width:'20%',height:'20%',display:'block',marginLeft:'auto',marginRight:'auto'}
      const styleText ={textAlign:'center',color:'rgb(96 85 85)',fontWeight:400}
    return (

        <>
         <a href ="/" onClick={e => handleName(e)} style={{padding:20}}>Click here to know my name </a>
         <img src={props.src} alt="profile"  style={styleImage}/>{props.children}
         <h2 style={styleText}><span style={{fontWeight:600}}>FullName :</span> {props.fullName} </h2>
         <h2 style={styleText}><span style={{fontWeight:600}}>Profession :</span>{props.profession}</h2>
         <h2 style={styleText}><span style={{fontWeight:600}}>Bio :</span> {props.bio}</h2>
         
         
         
     
        </>

    );

   
};

export default Profile;