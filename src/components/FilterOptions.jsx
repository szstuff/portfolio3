import React, {useState} from 'react'

const FilterOptions = ({filters, setFilters}) => {

    const toggleFilterItem = (filterName) => {
        //TODO: Add logic for toggling between Design/Software (no need to have both true or false at the same time)
        if (filters.includes(filterName)) {
          setFilters(filters.filter((filter) => filter !== filterName))
        } else {
          setFilters([...filters, filterName])    
        }
      };
    
    return (
    <div className={`border-black border-2 rounded-lg
        bg-slate-100 shadow-xl px-8 pb-2 pt-2 w-[96vw] mx-[2vw] md:w-[84vw] md:mx-[8vw] lg:w-[80vw] lg:mx-[10vw]
        mt-5 grid grid-cols-3 sm:grid-cols-4 xl:grid-cols-8 gap-4
        card
        `}>
        <div className='col-span-3 sm:col-span-2 mb-2 text-center xl:text-left'>
            <h3 className='text-4xl'> Filter projects </h3>
        </div>
        <div className='col-span-1'>
            <button 
            className={`
                filterButton
                ${filters.includes("Design") && 'filterButtonToggled'}
            `}
            onClick={() => toggleFilterItem("Design")}>
                Design
            </button>
        </div>
        <div className='col-span-1'>
            <button 
            className={`
                filterButton
                ${filters.includes("Software") && 'filterButtonToggled'}
            `}
            onClick={() => toggleFilterItem("Software")}>
                Software
            </button>
        </div>
        <div className='col-span-1'>
            <button 
            className={`
                filterButton
                ${filters.includes("Favorites") && 'filterButtonToggled'}
            `}
            onClick={() => toggleFilterItem("Favorites")}>
                My Favorites
            </button>
        </div>
        <div className='col-span-1'>
            <button 
            className={`
                filterButton
                ${filters.includes("Published") && 'filterButtonToggled'}
            `}
            onClick={() => toggleFilterItem("Published")}>
                Published
            </button>
        </div>
        <div className='col-span-1'>
            <button 
            className={`
                filterButton
                ${filters.includes(".NET") && 'filterButtonToggled'}
            `}
            onClick={() => toggleFilterItem(".NET")}>
                .NET
            </button>
        </div>
        <div className='col-span-1'>
            <button 
            className={`
                filterButton
                ${filters.includes("React") && 'filterButtonToggled'}
            `}
            onClick={() => toggleFilterItem("React")}>
                React
            </button>
        </div>
    </div>
  )
}

export default FilterOptions
