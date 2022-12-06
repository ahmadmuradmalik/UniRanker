import { Link } from 'react-router-dom';
const my_Profile_Picture = "./profilePicture.jpg";

function School() {
  const disablePersonalWebsiteLink = (e) => {
      // Q3: Check Thursday's lecture. Using "e", how do we stop the link from working? 
      /* YOUR CODE HERE */
      e.preventDefault()
  }
  return (
        <div className="App">

                      <h3 className="app_topHeader">This is my Schools List Page</h3>
                      <h4 className="app_author">ayo</h4>

                    </div>
                    );
  }

export default School;
