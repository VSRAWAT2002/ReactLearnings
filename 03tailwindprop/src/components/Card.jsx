import React from "react";
function Card(props) {
    // console.log("props:",props)
    console.log("props:", props.data)

    var userName = props.userName;
    var btnText = props.btnText;
    // If props.data is undefined, we default it to an empty object {} 
    // then we give each property a default value.
    const {
        product = "Unknown Product",
        price = 0,
        description = "No description provided."
    } = props.data || {};

    return (
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
            <a href="#">
                <img className="rounded-t-lg w-full h-64 object-cover" src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1000&auto=format&fit=crop" alt="Product Image" />
            </a>

            <div className="p-5">
                <div className="flex justify-between items-center mb-2">
                    <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">Electronics</span>
                    <span className="text-sm font-bold text-gray-900">{price}</span>
                </div>

                <a href="#">
                    <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 hover:text-blue-600 transition-colors">{product}</h5>
                </a>

                <p className="mb-4 text-sm font-normal text-gray-600 line-clamp-2">
                    {/* Experience the future on your wrist. This waterproof smartwatch features heart rate monitoring, GPS, and a 7-day battery life. */}
                    {description}
                </p>

                <button className="w-full inline-flex justify-center items-center px-4 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
                    {btnText}
                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg>
                </button>
            </div>
        </div>

    );
}
export default Card