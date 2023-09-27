import { Link } from "react-router-dom";


const ErroPage = () => {
    return (
        <div>
            <div className="flex flex-col gap-8 justify-center items-center h-[500px]">
                <div>
                    <p className="text-4xl">Page Not Found!!!!!!</p>
                    <Link className="btn btn-ghost mt-5" to={"/"}>go to home</Link>
                </div>
            </div>
        </div>
    );
};

export default ErroPage;