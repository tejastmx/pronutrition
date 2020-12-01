import "./App.css";
import FoodBox from "./components/FoodBox";
import FoodItems from "./components/FoodItems";
import SearchBar from "./components/SearchBar";
function App() {
  return (
    <div className="App">
   
      <FoodBox />
      <SearchBar searchInput={(e)=>this.searchInput(e)} searchIt={()=>this.state.search}/>
      <FoodItems />
    
    </div>
  );
}

export default App;
