import "./App.css";
import { Component } from "react/cjs/react.production.min";
import {CardList} from './components/card-list/card-list.component';
import {SearchBox} from './components/search-box/search-box.component';

class App extends Component {
  constructor(){
   
    super();
    this.state={
      monsters:[],
      searchfield:""
    };

    //this.handlechange=this.handlechange.bind(this);
  }

handlechange=(e)=>{
  
  this.setState({searchfield:e.target.value});
}  

componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
  .then(response=>response.json())
  .then(users=>this.setState({monsters:users}));
}
  render(){
    const {searchfield,monsters}=this.state;
    const filtermonster=monsters.filter(monster=>monster.name.toLowerCase().includes(searchfield.toLowerCase()));
    return(
     
      <div className="App">
        <h1>Monsters Rolodex</h1>
         <SearchBox placeholder='Search Monster'
         handlechange={this.handlechange}
         />
         <CardList monsters={filtermonster}>
     
       </CardList>
       
      </div>
    );

  }
}

export default App;
