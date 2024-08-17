import { useState } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Search from "./Search";
import Services from "./Services";

const App = () => {
    // State to store the list of items
    const [list, setlist] = useState([]);

    // State to control reloading of components
    const [reload, setreload] = useState(true);

    return (
        <div>
            {/* Navbar component with list, reload state, and setreload function passed as props */}
            <Navbar list={list} setreload={setreload} reload={reload} />
            
            {/* Search component with setlist function, reload state, and setreload function passed as props */}
            <Search setlist={setlist} setreload={setreload} reload={reload} />
            
            {/* Services component with list, setlist function, and reload state passed as props */}
            <Services list={list} setlist={setlist} reload={reload} />
            
            {/* Footer component */}
            <Footer />
        </div>
    )
}

export default App;
