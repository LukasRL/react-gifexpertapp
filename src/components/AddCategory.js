import React, {useState} from 'react';
import PropTypes from 'prop-types';
export const AddCategory = ({setCategories}) => {
const [inputValue, setInputValue] = useState('');

const handleInputChange = (e) => {
    setInputValue(e.target.value)
}

    const handleSubtmit = (e) => {
        e.preventDefault();//previene que la pag se regargue al enviar el formulario
        if(inputValue.trim().length > 2){
            setCategories(beforeState =>[inputValue, ...beforeState]);
            setInputValue('');
        } 
}
    return (
        
        <form onSubmit={handleSubtmit}>
            <input 
                type='text'
                value={inputValue}
                onChange={handleInputChange}
            />
        </form>
            
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
