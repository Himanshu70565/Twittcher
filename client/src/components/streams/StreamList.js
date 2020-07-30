import React from "react";
import {connect} from "react-redux";
import {fetchStreams,editStream} from "../../actions/index";
import {Link} from "react-router-dom";
import history from "../../history";

class  StreamList extends React.Component{
    
    componentDidMount(){
        this.props.fetchStreams();
    }


    renderButtons(stream){
        if(this.props.currentUserId===stream.userId){
            return <div className="right floated content">
                <Link to={`/streams/edit/${stream.id}`} className="ui button primary">EDIT</Link>
                <Link to={`/streams/delete/${stream.id}`} className="ui button negative">DELETE</Link>
            </div>
        }else{
            return null;
        }
    }

    renderList(){
        return this.props.streams.map((stream)=>{
                
        return  (<div className="item" key={stream.id}>
                    <i className="icon middle large aligned camera" />
                    <div className="content">
                        <Link to={`/streams/${stream.id}`} className="header">{stream.title}</Link>
                        <div className="description">{stream.description}</div>
                    </div>
                    <div>{this.renderButtons(stream)}</div>
                </div>);
                
        });
    }

    renderCreate(){
        if(this.props.currentUserId!==null){
            return (<div style={{textAlign:"right"}}>
                <Link to="/streams/new" className="ui button primary">Create Stream</Link>
            </div>);
        }
    }

    render(){
        return <div>
            <h2>Streams</h2>
            <div className="ui celled list">{this.renderList()}</div>
            {this.renderCreate()}
        </div>;
    }

}

const mapStateToProps=(state)=>{
    return {
        streams:Object.values(state.streams),
        currentUserId:state.auth.userId
    }
}

export default connect(mapStateToProps,{fetchStreams,editStream})(StreamList);