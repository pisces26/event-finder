
import Navbar from "./Navbar";
import SearchBar from "./SearchBar";
import CategorySection from "./CategorySection";
import eventsData from "../data/eventsData"; // Your events JSON data
import '../App.css';
import EventCarousel from "./EventCarousel";

export default function IndexPage() {
  return (
    <div>
      
      <Navbar />
      <SearchBar />
      <EventCarousel/>
      <div className="content">
        {eventsData.map((category) => (
          <CategorySection
            key={category.title}
            title={category.title}
            events={category.events}
          />
        ))}
      </div>
      
    </div>
  );
}
