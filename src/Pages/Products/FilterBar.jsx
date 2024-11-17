import { useState } from "react";

const FilterBar = ({setBrandValue, setCategoryValue}) => {
    const [selectOpenBrand, setSelectOpenBrand] = useState(false);
    const [selectOpenCategory, setSelectOpenCategory] = useState(false);

    const selectOptions = ['Child Care', 'Day Care', 'Night Care'];
    return (
        <div>
            <div>
                <div onClick={() => setSelectOpenBrand(!selectOpenBrand)} className="mx-auto flex w-full items-center justify-between rounded-xl bg-white px-6 py-2 border">
                    <h1 className="font-medium text-gray-600">Brand</h1>
                    <svg className={`${selectOpenBrand ? '-rotate-180' : 'rotate-0'} duration-300`} width={25} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M7 10L12 15L17 10" stroke="#4B5563" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>{' '}</g></svg>
                </div>
                {/* dropdown - options  */}
                <div className={`${selectOpenBrand ? 'visible top-0 opacity-100' : 'hidden -top-4 opacity-0'} relative mx-auto my-4 w-full rounded-xl py-4 border duration-300`}>
                    {selectOptions?.map((option, idx) => (
                        <div key={idx} onClick={(e) => {setBrandValue(e.target.textContent); setSelectOpenBrand(false); }} className="px-6 py-2 text-gray-500 hover:bg-gray-100">
                            {option}
                        </div>
                    ))}
                </div>
            </div>
            <div>
                <div onClick={() => setSelectOpenCategory(!selectOpenCategory)} className="mx-auto flex w-full items-center justify-between rounded-xl bg-white px-6 py-2 border">
                    <h1 className="font-medium text-gray-600">Category</h1>
                    <svg className={`${selectOpenCategory ? '-rotate-180' : 'rotate-0'} duration-300`} width={25} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M7 10L12 15L17 10" stroke="#4B5563" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>{' '}</g></svg>
                </div>
                {/* dropdown - options  */}
                <div className={`${selectOpenCategory ? 'visible top-0 opacity-100' : 'hidden -top-4 opacity-0'} relative mx-auto my-4 w-full rounded-xl py-4 border duration-300`}>
                    {selectOptions?.map((option, idx) => (
                        <div key={idx} onClick={(e) => { setCategoryValue(e.target.textContent); setSelectOpenCategory(false); }} className="px-6 py-2 text-gray-500 hover:bg-gray-100">
                            {option}
                        </div>
                    ))}
                </div>
            </div>
        </div >
    );
};

export default FilterBar;