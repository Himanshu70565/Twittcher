import React from "react";
import {connect} from "react-redux";
import {createStream} from "../../actions";
import StreamForm from "./StreamForm";

class StreamCreate extends React.Component {

    onSubmit=(formValues)=>{
        
        if(this.props.auth!==undefined&&this.props.auth.isSignedIn){
            this.props.createStream(formValues);
        }else{
            alert("Sign in First")
        }
    }

    render() {
        return (<div>
            <h1>Create a Stream</h1>
            <StreamForm onSubmit={this.onSubmit} title="" description=""/>
        </div>);
    }

}

const mapStateToProps=(state)=>{
    return {
        auth:state.auth
    }
}

export default connect(mapStateToProps,{createStream})(StreamCreate);