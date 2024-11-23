import { useState } from "react";

const SortBar = ({ setSortValue }) => {
    const [sortOpen, setSortOpen] = useState(false);
    const [value, setValue] = useState('sort');
    // array of options 
    const sortOptions = ['Assending', 'Dessending'];
    return (
        <div>
            <div onClick={() => setSortOpen(!sortOpen)} className="mx-auto flex w-72 items-center justify-between rounded-xl bg-white px-6 py-2 border">
                <h1 className="font-medium text-gray-600" defaultValue={'sort'}>{value}</h1>
                <svg className={`${sortOpen ? '-rotate-180' : 'rotate-0'} duration-300`} width={25} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M7 10L12 15L17 10" stroke="#4B5563" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>{' '}</g></svg>
            </div>
            {/* dropdown - options  */}
            <div className={`${sortOpen ? 'visible top-0 opacity-100' : 'hidden -top-4 opacity-0'} relative mx-auto my-4 w-72 rounded-xl py-4 border duration-300`}>
                {sortOptions?.map((option, idx) => (
                    <div key={idx} onClick={(e) => { setSortValue(e.target.textContent); setSortOpen(false); setValue(e.target.textContent) }} className=" px-6 py-2 text-gray-500 hover:bg-gray-100">
                        {option}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SortBar;