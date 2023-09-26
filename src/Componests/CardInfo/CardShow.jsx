

const CardShow = ({cardInfo}) => {
    const {id, picture, title, text_color, price, description} = cardInfo
    return (
        <div>
            <div className="relative">
                <img src={picture} className="h-[500px] w-[1200px]" alt="" />
                <div className="bg-black w-full absolute bottom-0 p-5 bg-opacity-60">
                    <button className="flex justify-start rounded-lg p-2 text-white" style={{backgroundColor:`${text_color}`}}>
                        Donate ${price}M
                    </button>
                </div>
            </div>
            <div className="space-y-3 my-12">
                <h1 className="font-bold text-2xl text-start">{title}</h1>
                <p className="text-base text-gray-700 text-start">{description}</p>
            </div>
        </div>
    );
};

export default CardShow;