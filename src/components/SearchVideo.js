import React,{useState} from "react";

const SearchVideo=({onFormSubmit})=>{
    const [term,setTerm]=useState('');

//make this function inline
   /*const onChangetext =(e) => {
        setTerm(e.target.value);
        //console.log(this.state.term);
  }*/

  const onSubmit = (e)=>{
      e.preventDefault();
      onFormSubmit(term);
  }
  return(
    <div className="ui segment">
        <form className="ui form" onSubmit={onSubmit}>
            <div className="field">
                Video Search
                <input 
                type="text" value={term} 
                onChange={(e)=>setTerm(e.target.value)}/>
            </div>
        </form>
    </div>
);

}/*
class SearchVideo extends React.Component{
    
    onChangetext =(e) => {
          this.setState({term:e.target.value});
          //console.log(this.state.term);
    }
  
    onFormSubmit = (e)=>{
        e.preventDefault();
        this.props.onFormSubmit(this.state.term);
    }

    render(){
    return(
        <div className="ui segment">
            <form className="ui form" onSubmit={this.onFormSubmit}>
                <div className="field">
                    Video Search
                    <input type="text" value={this.state.term} onChange={this.onChangetext}/>
                </div>
            </form>
        </div>
    );
    }
}*/

export default SearchVideo;