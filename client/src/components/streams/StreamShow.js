import React from "react";
import flv from "flv.js";
import {connect} from "react-redux";
import {fetchStream} from "../../actions";


class StreamShow extends React.Component{

    constructor(props){
        super(props);
        this.videoRef=React.createRef();
    }

    componentDidMount(){
        this.props.fetchStream(this.props.match.params.id);
        this.player=flv.createPlayer({
            type:'flv',
            url:`http://localhost:8005/live/${this.props.match.params.id}.flv`
        })
        this.player.attachMediaElement(this.videoRef.current);
        this.player.load();
    }

    renderContent(){
        if(!this.props.stream){
            return <div>Loading...</div>
        }

        return (
            <div className="content">
                <video style={{width:"100%"}} controls ref={this.videoRef}/>
                <div className="header"><h1>Title : {this.props.stream.title}</h1></div>
                <div className="header"><h4>Description : {this.props.stream.description}</h4></div>
            </div>
        );

    }

    render(){
        return <div>{this.renderContent()}</div>;
    }
}

const mapStateToProps=(state,ownProps)=>{
    return {
        stream:state.streams[ownProps.match.params.id]
    }
}

export default connect(mapStateToProps,{fetchStream})(StreamShow);