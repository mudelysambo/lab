import "./styles.css";
import Search from "./components/Search";
import SearchResults from "./components/SearchResults";
import TouristInfoCard from "./components/TouristInfoCard";

export default function App() {
  return (
    <div className="App">
      <Search />
      <SearchResults />

      <TouristInfoCard

Title='mrs'
Surname='person1'
Email='person1@else.com'
RoomId='1'
CheckInDate='2017-11-27'
CheckUotDate='2017-11-28'
    
    />
    </div>
  );
}
