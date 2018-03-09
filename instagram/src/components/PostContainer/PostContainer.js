import React from "react";
import './PostContainer.css';
import {CommentSection} from "../CommentSection/CommentSection.js";

const PostContainer = props => {
    const { data } = props;
    return(
        <div className="Post_Init">
            {data.map(user => {
                return (
                    <div className="Post__Section">
                     <div className="Post__Head">
                         <div className="Post__Thumbnail"><img className="Post_Thumb" src={user.thumbnailUrl} alt='user thumbnail img'/></div>
                        <div className="Post__Username">{user.username}</div>
                        </div>  
                      <div className="Post__ImgContainer"><img className="Post__Img" src={user.imageUrl} alt='post picture' /></div>
                      <CommentSection comment={this.state.comment} />;
                    </div>
                );
            })}
            </div>
    )
}
            


export {PostContainer};