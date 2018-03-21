import React, { Component } from 'react';
import './App.css';
import './components/PostContainer/PostContainer.css'
import './components/CommentSection/CommentSection.css' 
import  dummyData  from './dummy-data.js'
import {SearchBar} from './components/SearchBar/SearchBar.js'
import {PostContainer} from './components/PostContainer/PostContainer.js'
import { CommentSection } from './components/CommentSection/CommentSection';


class App extends Component {
  constructor(){
    super();
    this.state = {
      name: "Info",
      Data: [],
      CommentData: []
    };
    console.log('Constructed');
  }

  componentDidMount(){
    console.log("Mounting...")
    this.setState({ Data: dummyData});
    this.setState({CommentData: dummyData.comments});
  }
  render() {
    return (
   <div className="App">
      <navbar className="Nav__Section">
      <div className="Nav__Logo">
      <img src={require (`./components/media/Insta-Logo.jpg`)} alt="Instagram-Text-Logo" />
      </div>
       <div className="Nav__Search">
        <SearchBar />
       </div>
       <div className="Nav__Icons">
       <button className="Nav__IconButton Icon__Button"><img src={require (`./components/media/compass.jpg`)} alt="insta-compass" /></button>
       <button className="Nav__IconButton Icon__Button"><img src={require (`./components/media/navheart.jpg`)} alt="insta-heart" /></button>
       <button className="Nav__IconButton Icon__Button"><img src={require (`./components/media/navsilo.jpg`)} alt="insta-silouette" /></button>

       </div>
       
      </navbar>
      
      <div>
        <PostContainer name={this.state.name} data={this.state.Data} comment={this.state.CommentData} />;
      </div>

      {/* <div className="Post__Section">
        <div className="Post__Head">Username</div>
        <div className="Post__Picture">Pic Box</div>
        <div className="Comment__Section">
          <div className="Comment__Buttons">
            <div className="Comment__ButtonsLeft">
              <button className="Comment__ButtonIcon Icon__Button"><img src={require (`./components/media/commheart.jpg`)} alt="comment-heart" /></button>
               <button className="Comment__ButtonIcon Icon__Button"><img src={require (`./components/media/commbubb.jpg`)} alt="comment-bubble" /></button>
            </div>
            <button className="Comment_ButtonIcon Icon__Button"><img src={require (`./components/media/bookmark.jpg`)} alt="comment-heart" /></button>
          </div>
          <div className="Comment__Likes">Comment Likes</div>
          <div className="Comment__Text">Comment Text</div>
          <div className="Comment__New">Add a comment...</div>
        </div>
      </div> */}

      </div>

    );
  }
}

export default App;
