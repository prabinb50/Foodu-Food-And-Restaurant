import React, { useState } from 'react';
import StarRatings from 'react-star-ratings';
import { Bounce, toast } from 'react-toastify';

export default function Review() {
    // State variables for form inputs
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");


    const reviews = [
        {
            imgSrc: "/chef1.jpg",
            rating: 4.5,
            date: "April 8, 2021",
            reviewer: "Aleesha Brown",
            comment: "Highly recommended. Will purchase more in future.",
        },
        {
            imgSrc: "/chef2.jpg",
            rating: 4.5,
            date: "April 8, 2021",
            reviewer: "Sarah Albert",
            comment: "Great product quality!",
        },
    ];

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Display a toast notification
        toast("Thank You for your review.", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
        });
        // Reset form fields
        setName("");
        setEmail("");
        setMessage("");
    };

    return (
        <div>
            {/* Section heading */}
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 sm:mb-3 md:mb-4">1 review for “Fresh Red Seedless”</h2>

            {/* Render reviews dynamically using map */}
            {reviews.map((review, index) => (
                <div key={index} className="flex flex-col sm:flex-row items-start sm:items-center mb-3 sm:mb-5 gap-3 sm:gap-5 border-b border-gray-200 pb-3 sm:pb-5">
                    {/* Reviewer image */}
                    <img
                        src={review.imgSrc}
                        alt="Reviewer"
                        className="w-25 h-25 rounded-full object-fill"
                    />
                    <div className="space-y-2 mt-2 sm:mt-0">
                        {/* Star ratings */}
                        <StarRatings
                            rating={review.rating}
                            starRatedColor="gold"
                            numberOfStars={5}
                            starDimension="15px"
                            starSpacing="2px"
                        />
                        {/* Review details */}
                        <p className="text-sm text-gray-500">{review.date}</p>
                        <h4 className="text-base sm:text-lg font-medium">{review.reviewer}</h4>
                        <p className="text-gray-700 text-sm sm:text-base">{review.comment}</p>
                    </div>
                </div>
            ))}

            {/* Add a review section */}
            <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 mt-6 sm:mt-8 md:mt-10">Add a review</h3>
            <StarRatings
                rating={0}
                numberOfStars={5}
                starDimension="20px"
                starSpacing="2px"
            />


            {/* Review form */}
            <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4 mt-4 sm:mt-6 md:mt-10">
                {/* Message input */}
                <textarea
                    required
                    value={message}
                    placeholder="Tell Us About Project *"
                    rows={10}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full p-2 sm:p-3 bg-gray-200 border border-gray-50 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                ></textarea>

                {/* Name and email inputs */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <input
                        required
                        value={name}
                        type="text"
                        placeholder="Name *"
                        onChange={(e) => setName(e.target.value)}
                        className="w-full p-2 sm:p-3 bg-gray-200 border border-gray-50 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                    />

                    <input
                        required
                        value={email}
                        type="email"
                        placeholder="Email *"
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full p-2 sm:p-3 bg-gray-200 border border-gray-50 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                    />
                </div>

                {/* Submit button */}
                <div>
                    <button
                        type="submit"
                        className="w-full sm:w-auto px-4 sm:px-6 bg-red-500 text-white py-2 sm:py-3 rounded-md hover:bg-black transition-colors cursor-pointer flex items-center justify-center gap-2 text-sm sm:text-base"
                    >
                        Post Review
                    </button>
                </div>
            </form>
        </div>
    );
}