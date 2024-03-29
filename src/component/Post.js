import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";

class Post extends Component {
    state = {
        post: null
    }

    componentDidMount(){
        // const id = this.props.match.params.post_id;

        // axios.get('https://jsonplaceholder.typicode.com/posts/'+id)
        // .then(response => {
        //     this.setState({ post: response.data });
        // });
    }

    handleClick = (id) => {
        this.props.deletePost(id);
        this.props.history.push('/');
    }

    render(){
        const post = this.props.post ? (
            <div>
                <h4 className='center'>{this.props.post.title}</h4>
                <p>{this.props.post.body}</p>
                <div className='center'><button className='btn grey' onClick={() => this.handleClick(this.props.post.id)}>Delete post</button></div>
            </div>
        ) : (
            <div className='center'>Loading post....</div>
        )
        return(
            <div className='container'>
                {post}
            </div>
        )
    }
}

function mapStateToProps(state, ownProps){
    let id = ownProps.match.params.post_id;
    
    return {
        post: state.posts.find(post => post.id == id)
    }
}

function mapDispatchToProps(dispatch){
    return{
        deletePost: (id) => {dispatch({ type: 'DELETE_POST', id: id })}
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Post);