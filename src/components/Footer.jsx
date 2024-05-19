import React from "react";

const Footer = () => {
    return (
        <div className="w-full px-5 md:px-20 pb-5 md:pb-20">
            <h1 className="text-2xl font-bold text-center text-[#FC815F]">
                OUR AWESOME SERVICES
            </h1>

            <div className="features flex flex-wrap gap-10 md:gap-0 justify-between mt-10 md:mt-20">
                <div className="w-full md:w-[40%] flex items-center">
                    <i className="text-[10vh] ri-restaurant-line mr-5 text-[#FC815F]"></i>
                    <div className="">
                        <h1 className="text-xl">Quality Food</h1>
                        <p className="text-sm text-zinc-400">
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Deleniti nesciunt sit in? Consectetur, illum
                            ipsum!
                        </p>
                    </div>
                </div>

                <div className="w-full md:w-[40%] flex items-center">
                    <i className="text-[10vh] ri-graduation-cap-line mr-5 text-[#FC815F]"></i>
                    <div className="">
                        <h1 className="text-xl">Cook like a Chef</h1>
                        <p className="text-sm text-zinc-400">
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Deleniti nesciunt sit in? Consectetur, illum
                            ipsum!
                        </p>
                    </div>
                </div>
                <div className="w-full md:w-[40%] flex items-center">
                    <i className="text-[10vh] ri-bread-line mr-5 text-[#FC815F]"></i>
                    <div className="">
                        <h1 className="text-xl">Ingredients</h1>

                        <p className="text-sm text-zinc-400">
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Deleniti nesciunt sit in? Consectetur, illum
                            ipsum!
                        </p>
                    </div>
                </div>
                <div className="w-full md:w-[40%] flex items-center">
                    <i className="text-[10vh] ri-presentation-line mr-5 text-[#FC815F]"></i>
                    <div className="">
                        <h1 className="text-xl">Easy Recipe</h1>
                        <p className="text-sm text-zinc-400">
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Deleniti nesciunt sit in? Consectetur, illum
                            ipsum!
                        </p>
                    </div>
                </div>
                <div className="w-full md:w-[40%] flex items-center">
                    <i className="text-[10vh] ri-temp-hot-line mr-5 text-[#FC815F]"></i>
                    <div className="">
                        <h1 className="text-xl">Serve Hot</h1>
                        <p className="text-sm text-zinc-400">
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Deleniti nesciunt sit in? Consectetur, illum
                            ipsum!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
