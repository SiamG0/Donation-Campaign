import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import Card from './Card';

const CardSection = ({ categorySelection }) => {

    const [cardItems, setCardItems] = useState([])
    useEffect(() => {
        fetch('/data.json')
            .then(res => res.json())
            .then(data => setCardItems(data))
    }, [])

    const searchCards = categorySelection ? cardItems.filter(card => card.category === categorySelection) : cardItems;
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-16'>
            {searchCards.map((card) => (
                <Card key={card.id} card={card}></Card>
            ))}

        </div>
    );
};

CardSection.propTypes = {
    categorySelection: PropTypes.string
}

export default CardSection;