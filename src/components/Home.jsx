const Home = () => {
    return (
        <div className="w-full h-[86vh] px-5 mt-10 md:px-20 flex-col-reverse md:flex-row flex items-center justify-between">
            <div className="w-full md:w-1/2 h-96">
                <h1 className="text-6xl md:text-8xl font-bold mb-2">Testy Food</h1>
                <h1 className="text-6xl md:text-8xl font-bold text-[#FC815F] mb-6">Collections</h1>
                <p>To provide nutritional support for an organism. <br /> Food is usually pf plant, animal or fungal origin...</p>
                <button className='px-6 rounded-full py-2 bg-[#FC815F] mt-6 font-medium text-zinc-100'>Order Now</button>
            </div>
            <div className="w-full md:w-1/2 h-full flex items-center justify-center relative">
                <img className="object-cover" src="https://imgs.search.brave.com/Qa9NIY9s01v0PWtXLY4gOuTdQolJ0GgWWU8RfQtKae0/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5nYWxsLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMjAxNi8w/NS9QaXp6YS1QTkct/SEQucG5n" alt="" />
                <div className="w-44 h-44 rounded-full absolute top-0 -right-5 overflow-hidden px-2 flex items-center justify-between">
                    <img src="https://imgs.search.brave.com/wc-AAZXxSYWQG_iWnwTxu-aUSHHHkHKAPrMOqzENVgw/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5nYWxsLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMjAxNi8w/NS9QaXp6YS1Eb3du/bG9hZC1QTkcucG5n" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Home