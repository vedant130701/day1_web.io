import React from "react";
import "../styles.css";

class Post extends React.Component{
  render(){
    return(
      
         
       
          <div className="post">
            <div className="votes">
            <img 
            className="upvote"
            alt="upvote"
            src="https://image.flaticon.com/icons/svg/2316/2316622.svg"/>
              <p>100</p>
              
            <img 
            className="downvote"
            alt="downvote"
            src="https://image.flaticon.com/icons/svg/2316/2316643.svg"/>
            </div>
          <div className="post-right">
          {this.props.content}
          <img src={this.props.image}/>
          </div>
          </div>
    );
  }
}
  export default Post;

