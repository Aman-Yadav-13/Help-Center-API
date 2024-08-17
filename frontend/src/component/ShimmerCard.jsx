const ShimmerCard = () => {
    return (
        <div className="card bg-slate-200 text-black w-[500px] shadow-xl animate-pulse">
            {/* Card container with pulse animation to indicate loading */}
            <div className="card-body">
                <div className="card-actions justify-end">
                    {/* Placeholder for potential card actions (e.g., buttons) */}
                </div>
                {/* Placeholder for title with shimmer effect */}
                <div className="w-full h-6 rounded dark:bg-gray-300"></div>
                <hr className="border-t-2 border-gray-300" />
                {/* Placeholder for description with shimmer effect */}
                <div className="w-full h-6 rounded dark:bg-gray-300"></div>
            </div>
        </div>
    )
}

export default ShimmerCard;
