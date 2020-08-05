import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ( {setCategories} ) => {
    const [inputValue, setInputValue] = useState('');

    const changeInput = ( e ) => {
        setInputValue( e.target.value );
    }

    const handlerSubmit = ( e ) => {
        e.preventDefault();
        if(inputValue.trim().length >= 2){
            setCategories( ( c )=> [inputValue,...c]);
            setInputValue('');
        }
    }

    return (
        <form onSubmit={ handlerSubmit }>
            <input 
                type="text"
                placeholder="Ingrese anime"
                value={ inputValue }
                onChange={ changeInput }
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories : PropTypes.func.isRequired,
}