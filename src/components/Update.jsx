import React, { useContext, useState } from 'react'
import { Recipecontext } from '../context/RecipeContext';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const Update = () => {

    const navigate = useNavigate();
    const { id } = useParams();
    const [recipe, setrecipe] = useContext(Recipecontext);

    const recipeDets = recipe && recipe.find(r => r.id == id)

    const [image, setimage] = useState(recipeDets.image);
    const [recipeName, setrecipeName] = useState(recipeDets.recipeName);
    const [discription, setdiscription] = useState(recipeDets.discription);
    const [ingredients, setingredients] = useState(recipeDets.ingredients);
    const [instructions, setinstructions] = useState(recipeDets.instructions);

    const UpdateHandler = (e) => {
        e.preventDefault();
        const updatedRecipe = {
            id: recipeDets.id,
            recipeName,
            image,
            discription,
            ingredients,
            instructions,
        };
        const copyRecipe = [...recipe];
        const recipeIndex = recipe.findIndex((r) => r.id == id);
        copyRecipe[recipeIndex] = updatedRecipe;
        setrecipe(updatedRecipe);

        localStorage.setItem("recipe", JSON.stringify(copyRecipe));
        toast.success("Recipe Updated Successfully!");
        navigate("/recipe");
    };

    return recipeDets ? (
        <div className='w-full h-[120vh] px-20 flex items-center justify-center'>
            <div className='w-2/3 h-full bg-red'>
                <h1 className='mt-10 mb-10 text-6xl font-extrabold'>Update <br />Your <span className='text-[#FC815F]'>Recipe</span></h1>
                <form onSubmit={UpdateHandler}>
                    <input onChange={(e) => setimage(e.target.value)} value={image} className='w-full py-3 px-6 border border-zinc-400 rounded-md mb-6' type="url" placeholder='Recipe Image URL' />
                    <input onChange={(e) => setrecipeName(e.target.value)} value={recipeName} className='w-full py-3 px-6 border border-zinc-400 rounded-md mb-6' type="text" placeholder='Recipe Name' />
                    <textarea onChange={(e) => setdiscription(e.target.value)} value={discription} className='w-full py-3 px-6 border border-zinc-400 rounded-md mb-6 resize-none' placeholder='Recipe Description'></textarea>
                    <textarea onChange={(e) => setingredients(e.target.value)} value={ingredients} className='w-full py-3 px-6 border border-zinc-400 rounded-md mb-6 resize-none' placeholder="Recipe Ingredients -> 'use comma to seperate ingredients'..."></textarea>
                    <textarea onChange={(e) => setinstructions(e.target.value)} value={instructions} className='w-full py-3 px-6 border border-zinc-400 rounded-md mb-6 resize-none' placeholder="Recipe Instructions -> 'use comma to seperate instructions'..."></textarea>
                    <div className='w-full text-right'>
                        <button className='px-6 py-2 bg-[#FC815F] text-zinc-100 font-medium rounded-md'>Re-Publish Recipe</button>
                    </div>
                </form>
            </div>
        </div>
    ) : <h1 className="text-2xl font-semibold text-center mt-56">Loading Recipe....</h1>
}

export default Update