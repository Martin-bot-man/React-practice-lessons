import profilePic from './assets/martin.png'
function Card(){
return(
    <div className = 'card'>
           <img className='card-image'src={profilePic}alt="Profile picture"></img>

         <h2 className='card-title'>Martin Tube</h2>
         <p className='card-text'>I am studying Software Engineering and love playing soccer</p>
    </div>
);
}
export default Card;