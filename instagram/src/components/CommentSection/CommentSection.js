import React from 'react';
import './CommentSection.css';

const CommentSection = props => {
    const { data } = props;
    return(
        <div className="Comment_Init">
            {data.map(user => {
                return(
                    <div>
                        <div className="Comment__Section">
                             <div className="Comment__Buttons">
                                <div className="Comment__ButtonsLeft">
                                    <button className="Comment__ButtonIcon Icon__Button"><img src={require (`../media/commheart.jpg`)} alt="comment-heart" /></button>
                                    <button className="Comment__ButtonIcon Icon__Button"><img src={require (`../media/commbubb.jpg`)} alt="comment-bubble" /></button>
                                </div>
                                <button className="Comment_ButtonIcon Icon__Button"><img src={require (`../media/bookmark.jpg`)} alt="comment-heart" /></button>
                            </div>
                            <div className="Comment__Likes">Comment Likes</div>
                            <div className="Comment__Text">Comment Text</div>
                            <div className="Comment__New">Add a comment...</div>
                         </div>
                    </div>
                    
                )
            })}
        </div>
    )
}

export {CommentSection};