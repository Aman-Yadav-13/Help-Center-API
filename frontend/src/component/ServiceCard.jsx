const ServiceCard = (props) => {
    // Log the ID of the data item for debugging
    console.log(props.data._id);

    return (
        <div className="w-full sm:w-1/2 p-2 flex justify-center my-7">
            {/* Card container with styling */}
            <div className="card bg-slate-200 text-black w-[500px] shadow-xl">
                <div className="card-body">
                    <div className="card-actions justify-end">
                        {/* Placeholder for card actions (e.g., buttons) */}
                    </div>
                    {/* Title of the service */}
                    <p className="font-bold">{props.data.title}</p>
                    <hr className="border-t-2 border-gray-300" />
                    {/* Description of the service */}
                    <p>{props.data.description}</p>
                </div>
            </div>
        </div>
    )
}

export default ServiceCard;
