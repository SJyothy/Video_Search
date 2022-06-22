import React ,{useState,useEffect} from "react";
import SearchVideo from "./components/SearchVideo";
import youtube from './apis/youtube';
import VideoList from "./components/VideoList";
import VideoDetail from "./components/VideoDetail";

const App = ()=>{
  const [videos,setVideos]=useState([]);
  const [selectedvideo,setSelectedvideo] =useState(null);

  useEffect(()=>{
    onTermSubmit('Buildings');
  },[]);

  
   //async axios request
   const onTermSubmit = async (term)=>{
    const response=
    await youtube.get('/search',{
      params:{
        q:term
      }
    });

    setVideos(response.data.items);
    setSelectedvideo(response.data.items[0]);
  };
/*--make it inline
  const onVideoSelect = (video) => {
    setSelectedvideo( video);
    
  }*/

  return (
    <div className="ui container">
     <SearchVideo onFormSubmit={onTermSubmit}/>
     <div className="ui grid">
       <div className="ui row">
         <div className="eleven wide column">
        <VideoDetail video={selectedvideo} />
        </div >
        <div className ="five wide column">
        <VideoList
         onVideoSelect={setSelectedvideo}
         videos = {videos}/>
        </div>      
      </div>
     </div>
    </div>
  );

}/*
class App extends React.Component{
  state = {videos : [],selectedvideo : null};

  componentDidMount(){
    this.onTermSubmit('Buildings');
  }

   //async axios request
  onTermSubmit = async (term)=>{
    const response=
    await youtube.get('/search',{
      params:{
        q:term
      }
    });
    this.setState({
      videos: response.data.items,
      selectedvideo: response.data.items[0]
    });
  };

  onVideoSelect = (video) => {
    this.setState({selectedvideo: video})
    
  }

  render(){
  return (
    <div className="ui container">
     <SearchVideo onFormSubmit={this.onTermSubmit}/>
     <div className="ui grid">
       <div className="ui row">
         <div className="eleven wide column">
        <VideoDetail video={this.state.selectedvideo} />
        </div >
        <div className ="five wide column">
        <VideoList onVideoSelect={this.onVideoSelect} videos = {this.state.videos}/>
        </div>      
      </div>
     </div>
    </div>
  );
}
}*/

export default App;
