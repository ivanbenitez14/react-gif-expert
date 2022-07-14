import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {
  
    const [ categories, setCategories ] = useState([ 'Totoro' ]);

    const onAddCategory = ( newCategory) => {
        if ( categories.includes(newCategory) ) return;
        //setCategories([...categories, 'la puta madre asi era'])           opcion 1
        setCategories([ newCategory, ...categories]);
        //console.log(newCategory); lo uso solo para ver en la consola de que este funcionando
    }
     
    return (
    <>
        {/* Titulo */}
        <h1>GifExpertApp</h1>
        
        {/* Input */}
        <AddCategory 
            //setCategories={ setCategories } 
            onNewCategory={ (event) => onAddCategory(event) }
        />

        {/* Listado de Gif */}
        
        <ol>
            {
                categories.map( ( category ) => (
                        <GifGrid
                        key={ category }
                        category={category}
                        />
                    )
                )
            }
        </ol>
    </>
  )
}
