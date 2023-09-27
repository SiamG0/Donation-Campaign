import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CardShow = ({ cardInfo }) => {
    const { id, picture, title, text_color, price, description } = cardInfo;

    const handleDonate = () => {
        const addedDonate = [];

        const donateItems = JSON.parse(localStorage.getItem("donation"));

        if (!donateItems) {
            addedDonate.push(cardInfo);
            localStorage.setItem("donation", JSON.stringify(addedDonate));

            toast.success("Thank you for donating for the people in need");
        } else {
            const isExist = donateItems.find(donate => donate.id === id);

            if (!isExist) {
                addedDonate.push(...donateItems, cardInfo);
                localStorage.setItem("donation", JSON.stringify(addedDonate));
                toast.success("Thank you for donating for the people in need");
            } else {
                toast.error("Thanks for trying to help us again but we cannot accept the donetion for a second time from the same person because our website is poorly made.");
            }
        }
    };
    return (
        <div>
            <div className="relative">
                <img src={picture} className="h-[500px] w-[1200px]" alt="" />
                <div className="bg-black w-full absolute bottom-0 p-5 bg-opacity-60">
                    <button onClick={handleDonate} className="flex justify-start rounded-lg p-2 text-white" style={{ backgroundColor: `${text_color}` }}>
                        Donate ${price}M
                    </button>
                </div>
            </div>
            <div className="space-y-3 my-12">
                <h1 className="font-bold text-2xl text-start">{title}</h1>
                <p className="text-base text-gray-700 text-start">{description}</p>
            </div>
            <ToastContainer></ToastContainer>
        </div>

    );
};

export default CardShow;