import React from "react";
import {connect} from "react-redux";
import {signIn,signOut} from "../actions";

class GoogleAuth extends React.Component {



  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: '490440841114-d18lnbtsefjh30hsub47jnrcbdp3lj13.apps.googleusercontent.com',
        scope: 'email'
      }).then(() => {
        this.auth = window.gapi.auth2.getAuthInstance();
        this.onAuthChange(this.auth.isSignedIn.get());
        this.auth.isSignedIn.listen(this.onAuthChange);
      });
    });
  }

  onAuthChange = (isSignedIn) => {
      if(isSignedIn){
        this.props.signIn(this.auth.currentUser.get().getId());
      }else{
        this.props.signOut();
      }  
  };

  renderAuthButton() {

    if (this.props.isSignedIn === null) {
      return <div>I dont Know the status</div>;
    } else if (this.props.isSignedIn) {
      return <button onClick={this.onSignOutClick} className="ui red button"><i className="google icon" />Sign out</button>
    } else {
      return <button onClick={this.onSignInClick} className="ui red button"><i className="google icon" />Sign in</button>
    }
  }

  onSignInClick = () => {
    this.auth.signIn();
  }

  onSignOutClick = () => {
    this.auth.signOut();
  }

  render() {
    return <div>{this.renderAuthButton()}</div>;
  }

}

const mapStateToProps=(state)=>{
  return {isSignedIn:state.auth.isSignedIn};
}

export default connect(mapStateToProps,{signIn,signOut})(GoogleAuth);