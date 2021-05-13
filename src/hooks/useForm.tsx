import { useState } from 'react';

/*
* Para establecer un objeto generico se usa <T extends Object>
* se puede recibir un parametro de tipo T en el custom hook.
*/
export const useForm = <T extends Object>( form: T ) => {

    const [state, setState] = useState( form );

    /* 
    * definir el parametro como keyof T para que sea del tipo
    * de objeto recibido por el generico.
    */
    const onChange = <K extends Object>( value: K, campo: keyof T ) => {
        setState({
            ...state,
            [campo]: value,
        });
    }

    return {
        ...state,
        form: state,
        onChange
    }

}
