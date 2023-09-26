import React from 'react';

const Card = ({ card }) => {
    const { id, picture, title, category, category_bg, card_bg, text_color } = card
    return (
        <div>
            <div className="relative h-80 flex max-w-[24rem] flex-col rounded-xl bg-white  shadow-md" style={{backgroundColor: `${card_bg}`}}>
                <div className="relative m-0 overflow-hidden rounded-none bg-transparent bg-clip-border text-gray-700 shadow-none">
                    <img
                        src={picture}
                        alt="ui/ux review check"
                        className='w-full'
                    />
                </div>
                <div className="p-6 text-start">
                    <button className='px-2 py-1 rounded-lg' style={{backgroundColor:`${category_bg}`, color:`${text_color}`}}>{category}</button>
                    <h4 className="text-xl font-bold" style={{color:`${text_color}`}}>
                        {title}
                    </h4>
                    
                </div>
                
            </div>
        </div>
    );
};

export default Card;