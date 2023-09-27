import { useEffect, useState } from "react";
import DonationInfo from "./DonationInfo";


const Donation = () => {
    const [give, setGive] = useState([])
    const [viewBtn, setViewBtn] = useState(4)
    const [dataNotFound, setDataNotFound] = useState(false)

    useEffect(()=> {
        const dan = JSON.parse(localStorage.getItem('donation'))
        if(dan){
            setGive(dan)
        }
        else{
            setDataNotFound("the is no data to be found.")
        }
    }, [])
    return (
        <div>
            {
                dataNotFound ? (<p className="h-[80vh] flex justify-center items-center text-bold text-3xl">{dataNotFound}</p>)
                    : (
                        <div>
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                                {
                                    give.slice(0, viewBtn).map(give => <DonationInfo key={give.id} give={give}></DonationInfo>)
                                }
                            </div>
                            <div className={viewBtn < give.length ? 'block' : 'hidden'}>
                                <div className="text-center mt-5">
                                    <button onClick={() => setViewBtn(give.length)}
                                        className="bg-[#009444] text-white px-5 py-2 mb-3 rounded-sm">
                                        view all
                                    </button>
                                </div>
                            </div>
                        </div>
                    )
            }
        </div>
    );
};

export default Donation;