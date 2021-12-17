import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import GifGrid from './components/GifGrid';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Full metal ALchimist']);
    // const handleAdd = () => {
    //     setCategories( [...categories ,'HunterXHunter']); //Normal
    //     //setCategories(cats=> [...cats, 'HunterXHunter']); callback
    // }

    return (
        <React.Fragment>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories} />
            <hr />
            <ol>
                {
                    categories.map( category => (
                        <GifGrid 
                            category={category} 
                            key={category}
                        />
                    ))
                }
            </ol>

        </React.Fragment>
    )
}
