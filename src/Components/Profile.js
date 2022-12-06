import { Link } from 'react-router-dom';
import './styles/components.css'
const my_Profile_Picture = "./profilePicture.jpg";

function Profile() {
  const disablePersonalWebsiteLink = (e) => {
      // Q3: Check Thursday's lecture. Using "e", how do we stop the link from working? 
      /* YOUR CODE HERE */
      e.preventDefault()
  }
  return (
    <div style={{"position":"relative", "margin-left":"10%"}}>
      
      <h3 className="profile_header">Ddoski</h3>
      <img className="profile_image" src="https://res.cloudinary.com/netzero/image/upload/v1667609065/profilePicture_q5t5wc.jpg"/>
      <div style={{"clear":"both"}}></div>
      <a href="https://www.calhacks.io" onClick={(e) => disablePersonalWebsiteLink(e)}>This Link Shouldn't Work!</a>
      <div style={{"clear":"both"}}></div>

      {/* Q4: What can we wrap this button in (which tag e.g. <h1>, <p>, etc.) in order for it to go back Home? */}
      <Link to="/">
      <button className="profile_button">
      Back to Home
      </button>
      </Link>

    </div>
  );
}

export default Profile;
