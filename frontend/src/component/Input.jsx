import { useState } from "react";
import axios from 'axios';
import Loading from "./Loading";

const Input = (props) => {
    // State to manage loading indicator
    const [loading, setloading] = useState(false);

    // State to manage input values for title and description
    const [title, settitle] = useState("");
    const [description, setdescription] = useState("");

    // Function to handle form submission
    async function handleSubmit() {
        setloading(true); // Show loading indicator
        console.log(title, description); // Log current input values

        try {
            // Send POST request to the server with title and description
            const response = await axios.post(process.env.REACT_APP_URL + '/cards', { title, description });

            // Notify user of successful submission
            alert("Response submitted successfully...");
        } catch (err) {
            // Notify user if there was an error during submission
            alert("Response not submitted... Please try again!!!");
        }

        setloading(false); // Hide loading indicator
        props.setinfo(false); // Hide the input form
        props.setreload(!props.reload); // Trigger a reload by toggling the reload state
    }

    return (
        <div>
            <div className="artboard artboard-horizontal bg-gray-400 phone-1 p-11">
                {loading ? <Loading /> : // Display loading component if loading is true
                    <>
                        {/* Input field for title */}
                        <input 
                            type="text" 
                            placeholder="Title" 
                            className="input w-full mb-6" 
                            onChange={(event) => settitle(event.target.value)} 
                        />
                        
                        {/* Input field for description */}
                        <input 
                            type="text" 
                            placeholder="Description" 
                            className="input w-full h-12" 
                            onChange={(event) => setdescription(event.target.value)} 
                        />

                        {/* Container for action buttons */}
                        <div className="flex justify-center items-center h-[150px]">
                            {/* Button to cancel the input form */}
                            <button 
                                className="btn btn-outline mr-14 bg-slate-200" 
                                onClick={() => props.setinfo(false)}
                            >
                                Cancel
                            </button>
                            
                            {/* Button to submit the form */}
                            <button 
                                className="btn btn-outline ml-14 bg-slate-200" 
                                onClick={handleSubmit}
                            >
                                Submit
                            </button>
                        </div>
                    </>
                }
            </div>
        </div>
    )
}

export default Input;
