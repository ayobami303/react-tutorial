import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class Home extends Component {
    state = {
        posts: []
    }

    componentDidMount(){
        // axios.get('https://jsonplaceholder.typicode.com/posts')
        // .then(response => {
        //     this.setState({ posts: response.data.slice(0, 10) });
        // });
    }

    render(){
        const { posts } = this.props;
        const postList = posts.length ? (
            posts.map(post => {
                return(
                    <div className="post card" key={post.id}>
                        <div className="card-content">
                            <Link to={`/${post.id}`}>
                                <div className="card-title">{post.title}</div>
                            </Link>
                                <p>{post.body}</p>
                        </div>
                    </div>
                );
            })
        ): (
            <div className="center"><p>No post yet</p></div>
        );
        return(
            <div className='container'>
                <h1 className='center'>Home</h1>
                {postList}
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        posts: state.posts
    }
}

export default connect(mapStateToProps, { })(Home);