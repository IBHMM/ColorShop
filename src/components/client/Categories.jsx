import { categories } from "../../constants/Client/Home";



export function Categories() {
    return (
        <div className="flex items-center justify-center w-full mt-[100px] mb-10">
            <div className="flex items-center justify-center w-[70%] min-w-[1000px] gap-4 max-[1000px]:min-w-[800px] max-[800px]:flex-col max-[800px]:min-w-[80%]">
                {categories.map((ctg, idx) => {
                    return (
                        <div
                            className="w-[33%] h-[300px]  flex items-center justify-center relative hover:opacity-70 transition-all duration-200 max-[1000px]:h-[200px] max-[1000px]:w-[33%] max-[800px]:w-full max-[800px]:h-[250px]"
                            key={idx}
                            style={{ backgroundImage: `url(${ctg.image})`, backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: "cover" }}
                        >
                            <button className="w-[200px] h-[50px] bg-white border-none text-[20px] font-semibold absolute max-[1000px]:w-[150px] max-[1000px]:h-[40px] max-[800px]:w-[200px] max-[800px]:h-[40px] max-[800px]:text-[20px]">
                                {ctg.title}
                            </button>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
