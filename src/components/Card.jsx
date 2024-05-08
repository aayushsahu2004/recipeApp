import { Link } from "react-router-dom"

const Card = (props) => {
    const {id, recipeName, image, discription, ingredients, instructions} = props.recipe;
    return (
        <Link to={`/recipe/${id}`}>
            <div className="w-72 cursor-pointer h-96 flex flex-col gap-2 items-center bg-slate-50 rounded-md shadow-[10px_10px_15px_0px_rgba(0,0,0,0.1)] hover:scale-[1.02] duration-200 py-4 text-center px-4">
                <img className="w-32 h-32 object-cover" src={image} alt="" />
                <h1 className="text-xl font-semibold">{recipeName}</h1>
                <p className="text-base">{discription.slice(0, 100)}...</p>
                <div className="w-full flex justify-between text-zinc-400 mt-5 ">
                    <p className="text-center ">
                        <i className="ri-timer-line"></i>
                        <br />
                        <span className="text-sm">20min</span>
                    </p>
                    <p className="text-center">
                        <i className="ri-thumb-up-line"></i>
                        <br />
                        <span className="text-sm">Easy</span>
                    </p>
                    <p className="text-center">
                        <i className="ri-share-line"></i>
                        <br />
                        <span className="text-sm">Share</span>
                    </p>
                </div>
            </div>
        </Link>
    )
}

export default Card