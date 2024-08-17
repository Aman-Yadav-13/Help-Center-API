import ServiceCard from "./ServiceCard";
import { useState, useEffect } from "react";
import axios from "axios";
import ShimmerCard from "./ShimmerCard";

const Services = (props) => {
    // Fetch the list of services when the component mounts or when `props.reload` changes
    useEffect(() => {
        async function fetchList() {
            try {
                // Make a GET request to fetch service data
                const response = await axios.get(process.env.REACT_APP_URL + '/cards');
                
                // Update the list state with the fetched data
                props.setlist(response.data.data);
            } catch (error) {
                // Handle any errors that occur during the request
                console.log(error);
                alert('Error occurred while fetching services: ', error);
            }
        }
        
        fetchList();
    }, [props.reload]); // Dependency array includes `props.reload` to refetch data when it changes

    return (
        <div className="flex flex-wrap justify-center my-9">
            {/* Render ServiceCard components if there is data in the list */}
            {props.list.length ? props.list.map((data) => {
                return (
                    data && <ServiceCard data={data} key={data._id} />
                );
            }) 
            : 
            // Render ShimmerCard components if the list is empty (loading state)
            <>
                <div className="w-full sm:w-1/2 p-2 flex justify-center my-7">
                    <ShimmerCard key={1} />
                </div>
                <div className="w-full sm:w-1/2 p-2 flex justify-center my-7">
                    <ShimmerCard key={2} />
                </div>
                <div className="w-full sm:w-1/2 p-2 flex justify-center my-7">
                    <ShimmerCard key={3} />
                </div>
                <div className="w-full sm:w-1/2 p-2 flex justify-center my-7">
                    <ShimmerCard key={4} />
                </div>
            </>
            }
        </div>
    );
}

export default Services;
