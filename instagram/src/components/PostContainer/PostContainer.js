import React from "react";
import './PostContainer.css';

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
                     
                    </div>
                );
            })}
            </div>
    )
}
            


export {PostContainer};