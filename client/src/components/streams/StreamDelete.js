import React, { Fragment } from "react";
import Modal from "../../Modal";
import {connect} from "react-redux";
import {fetchStream,deleteStream }from "../../actions";
import history from "../../history";

class StreamDelete extends React.Component{

    componentDidMount(){
        this.props.fetchStream(this.props.match.params.id);
        console.log(this.props.stream);
    }

    renderActions=()=>{
        return (
            <div>
                <button onClick={this.handleDelete} className="ui primary button">DELETE</button>
                <button onClick={()=>history.push('/')}className="ui button">CANCEL</button>
            </div>
        );
    }

    renderContent=()=>{

        if(!this.props.stream){
            return <Fragment>Are you sure you want to delte a stream ?</Fragment>
        }

        return (
            <Fragment>
                Are you sure you want to delete a stream?
                <div className="ui content">Title: {this.props.stream.title}</div>
                <div className="ui content">Description: {this.props.stream.description}</div>
            </Fragment>
        );
    }

    handleDelete=()=>{
        this.props.deleteStream(this.props.match.params.id);
    }

    render(){
        return (
            <div>
                <h2>Stream Delete Component</h2>
                <Modal 
                  title="Delete a Stream"
                  content={this.renderContent()}
                  actions={this.renderActions()}
                  stream={this.props.stream}
                />    
            </div>
        );
    }
}

const mapStateToProps=(state,ownProps)=>{
    return {
        stream:state.streams[ownProps.match.params.id]
    }
}

export default connect(mapStateToProps,{fetchStream,deleteStream})(StreamDelete);