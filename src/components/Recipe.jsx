import { Link, useLocation } from "react-router-dom"
import Card from "./Card"
import { useContext, useEffect } from "react";
import { Recipecontext } from "../context/RecipeContext";


const Recipe = () => {
    const [recipe, setrecipe] = useContext(Recipecontext);
    const { pathname } = useLocation();

    useEffect(() => {
        setrecipe(JSON.parse(localStorage.getItem("recipe")) || []);
    }, []);

    return (
        <div className="w-full px-5 md:px-20 pb-0 md:pb-20 mt-24 mb-10 md:mb-0">
            {pathname === "/recipe" && (
                <Link to="/create-recipe">
                    <button className="m-auto mb-5 md:mx-0 md:mb-0 px-4 py-2 flex items-center justify-center md:mt-5 cursor-pointer rounded-md bg-[#FC815F] text-zinc-100"><i className="ri-add-box-line text-xl mr-2"></i>Create Recipe</button>
                </Link>
            )}
            <h1 className="text-center text-2xl font-bold text-[#FC815F]">OUR RECIPE</h1>
            <div className="w-full mt-10 md:mt-20 flex flex-wrap items-center gap-10 md:gap-20 md:px-10 justify-center">
                {recipe.length > 0 ? (
                    recipe.map(r => <Card key={r.id} recipe={r} />)
                ) : (
                    <h1 className="text-3xl font-bold">No Recipe Found!</h1>
                )}
            </div>
        </div>
    )
}

export default Recipe