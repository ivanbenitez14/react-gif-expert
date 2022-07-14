import { useState } from "react"


export const AddCategory = ({ onNewCategory }) => {
  
    const [ inputValue, setInputValue ] = useState('');
    
    const onInputChange = (event) => {                         //en el event puedo reemplazarlo por target y borrar el event del ()
        //console.log( event.target.value );
        setInputValue( event.target.value );
    }

    const onSubmit = ( event ) => {
        event.preventDefault();
        //console.log(inputValue);
        if( inputValue.trim().length <= 1) return;
        //setCategories( categories => [ inputValue, ...categories]);
        onNewCategory( inputValue.trim() );             
        setInputValue( '' );
    }

    return (
        <form onSubmit={ (event) => onSubmit(event) }>
            <input
                type="text"
                placeholder="Buscar gifs"
                value={ inputValue }
                onChange={ (event) => onInputChange(event)}            //puedo eliminar toda la funcion y dejar solo el onInputChange
            />
        </form>
    )
}
