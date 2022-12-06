import { Link } from 'react-router-dom';
import './styles/components.css'
const my_Profile_Picture = "./profilePicture.jpg";
import firebase from 'firebase';

function Login() {

  return (

    // Initialize Firebase
    firebase.initializeApp({
      apiKey: 'YOUR_API_KEY',
      authDomain: 'YOUR_AUTH_DOMAIN',
      databaseURL: 'YOUR_DATABASE_URL',
      projectId: 'YOUR_PROJECT_ID',
      storageBucket: 'YOUR_STORAGE_BUCKET',
      messagingSenderId: 'YOUR_MESSAGING_SENDER_ID'
    });

    var Login = React.createClass({
      // Initialize component state
      getInitialState: function() {
        return {
          email: '',
          password: '',
          error: null
        };
      },

      // Method to handle changes to the email and password fields
      handleChange: function(event) {
        this.setState({
          [event.target.name]: event.target.value
        });
      },

      // Method to handle form submission
      handleSubmit: function(event) {
        event.preventDefault();

        // Sign in with email and password
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
          .then(() => {
            // Clear error message
            this.setState({ error: null });

            // Redirect to home page
            this.props.history.push('/home');
          })
          .catch((error) => {
            // Show error message
            this.setState({ error: error.message });
          });
      },

      render: function() {
        return (
          <form onSubmit={this.handleSubmit}>
            {/* Email field */}
            <label>
              Email:
              <input
                type="email"
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
              />
            </label>

            {/* Password field */}
            <label>
              Password:
              <input
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.handleChange}
              />
            </label>

            {/* Submit button */}
            <button type="submit">Login</button>

            {/* Error message */}
            {this.state.error && <p>{this.state.error}</p>}
          </form>
        );
      }
    });
);
}
    export default Login;

