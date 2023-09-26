import { useState } from "react";
import bannerbg from '../../assets/bannerbg.jpeg'
import CardSection from "../CardSection/CardSection";

const Banner = () => {
    const [searchCard, setSearchCard] = useState('')
    const [categorySelection, setCategorySelection] = useState('')
    const handelSearchCard = () => {
        setCategorySelection(searchCard)
    }

    return (
        <div>
            <div className="relative ">
                <img src={bannerbg} alt="" />
                <div className="hero h-full bg-white absolute left-0 top-0 bg-opacity-80">
                    <div className="hero-content text-center">
                        <div className="flex flex-col h-[50vh] justify-center">
                            <h1 className="text-2xl md:text-4xl font-extrabold">I Grow By Helping People In Need</h1>
                            <div className="mt-5 ">
                                <input type="text" placeholder="search here..." className="p-2 md:w-full md:max-w-xs rounded-s-md" value={searchCard} onChange={(e) => setSearchCard(e.target.value)} />
                                <button onClick={handelSearchCard} className="bg-[#FF444A] p-2 text-white rounded-e-md">Search</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <CardSection categorySelection={categorySelection}></CardSection>
        </div>
    );
};

export default Banner;