import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import CardShow from './CardShow';


const CardInfo = () => {
    const [cardInfo, setCardInfo] = useState({})
    
    const getCardInfo = useLoaderData();
   
    const {id} = useParams()
    const integerId = parseInt(id)
   

    useEffect(()=>{
        const getCard = getCardInfo.find(item => item.id === integerId)
        setCardInfo(getCard)
        
    },[integerId, getCardInfo])

    return (
        <div>
            <CardShow cardInfo={cardInfo}></CardShow>
        </div>

    );
};

export default CardInfo;