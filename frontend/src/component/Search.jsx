import axios from "axios";

const Search = (props) => {
    // Function to handle input changes and fetch data from the server
    async function handleChange(event) {
        try {
            // Make a GET request to the server with the search query as a parameter
            const response = await axios.get(process.env.REACT_APP_URL + '/cards/title', { params: { content: event.target.value } });

            // Update the list state with the fetched data
            props.setlist(response.data.data);
            console.log(response.data.data); // Log the fetched data for debugging
        } catch (error) {
            // Handle any errors that occur during the request
            console.log(error);
            alert('Some error occurred while fetching services: ', error);
        }
    }

    return (
        <div className="bg-purple-200 h-[300px] flex items-center justify-center">
            {/* Container for search and title */}
            <div className="flex flex-col items-center">
                {/* Title for the search section */}
                <h1 className="text-7xl font-thin">How can we help?</h1>
                <div>
                    {/* Search input field */}
                    <input 
                        type="text" 
                        placeholder="Search" 
                        className="input input-bordered w-[600px] mt-9" 
                        onChange={(event) => handleChange(event)}
                    />
                </div>
            </div>
        </div>
    )
}

export default Search;
