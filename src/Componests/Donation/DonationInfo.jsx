import React from 'react';
import { Link } from 'react-router-dom';

const DonationInfo = ({ give }) => {
    const { id, price, text_color, card_bg, category, title, picture, category_bg } = give
    return (
        <div>
            <div style={{ backgroundColo: `${card_bg}` }} className="flex md:h-80 max-w-[36rem] flex-row rounded-xl bg-clip-border text-gray-700 shadow-md">
                <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
                    <img
                        src={picture}
                        className="h-full"
                    />
                </div>
                <div className="p-6">
                    <button style={{ backgroundColor: `${category_bg}`, color: `${text_color}` }} className='px-3 py-1 flex justify-start mb-3 rounded-lg'>{category}</button>

                    <h4 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-start text-blue-gray-900 antialiased">
                        {title}
                    </h4>
                    <p style={{ color: `${text_color}` }} className="mb-8 block font-sans text-base leading-relaxed text-gray-700 antialiased font-medium text-start">
                        ${price}.00M
                    </p>
                    <Link className="inline-block" to={`/cardInfo/${id}`}>
                        <button style={{ backgroundColor: `${text_color}` }} className="text-white p-2 rounded-sm md:mr-44">View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default DonationInfo;