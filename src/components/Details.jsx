import { useContext } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Recipecontext } from "../context/RecipeContext";
import { toast } from "react-toastify";

const Details = () => {
    const navigator = useNavigate();
    const { id } = useParams();
    const [recipe, setrecipe] = useContext(Recipecontext);

    const recipeDets = recipe.find(Dets => Dets.id == id);

    const DeleteHandler = () => {
        setrecipe(recipe.filter(r => r.id != id))
        localStorage.setItem("recipe", JSON.stringify(recipe.filter(r => r.id != id)));
        toast.success("Recipe Deleted Successfully!");
        navigator(-1);
    }

    return recipeDets ? (
        <div className="w-full mt-16 md:h-[89.2vh] md:px-20 md:overflow-hidden">
            <div className="details w-full h-full flex flex-col md:flex-row">
                <div className="desc w-full md:w-1/2 py-5 px-10 flex flex-col items-center">
                    <img className="w-64" src={recipeDets.image} alt="" />
                    <h1 className="text-xl mb-5 mt-5 text-center font-medium">{recipeDets.recipeName}</h1>
                    <p className="text-center">{recipeDets.discription}</p>
                    <div className="w-full flex justify-between py-10 px-5 items-center">
                        <Link to={`/update-recipe/${id}`}>
                            <button className="py-2 px-6 border border-[#FC815F] text-[#FC815F] font-medium rounded">Update</button>
                        </Link>
                        <Link>
                            <button onClick={DeleteHandler} className="py-2 px-6 bg-[#FC815F] text-zinc-100 font-medium rounded">Delete</button>
                        </Link>
                    </div>
                </div>
                <div className="desc w-full md:w-1/2 px-10 py-5 md:overflow-auto">
                    <h1 className="text-3xl border-b-2 border-[#FC815F] text-[#FC815F] font-medium">Ingredients</h1>
                    <ul className="text-zinc-800 list-disc p-3 ">
                        {recipeDets.ingredients.split(",").map((d, i) => (
                            <li className="list-item text-sm  mb-2" key={i}>
                                {d},
                            </li>
                        ))}
                    </ul>
                    <h1 className="text-3xl border-b-2 border-[#FC815F] text-[#FC815F] font-medium">Instructions</h1>
                    <ul className="text-zinc-800 list-decimal  p-3 ">
                        {recipeDets.instructions.split(".").map((d, i) => (
                            <li className="list-item text-sm  mb-2" key={i}>
                                {d}.
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    ) : <h1 className="text-2xl font-semibold text-center mt-56">Loading Recipe....</h1>
};

export default Details;