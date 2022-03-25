import React, {useContext, useState} from 'react';
import {AlertContext} from "../../Contex/Alert/alertContex";

const Search = () => {
    const [value, setValue] = useState('')
    const {show} = useContext(AlertContext)
    const onSubmit = (event) => {
        if (event.key !== 'Enter') {
            return
        }
        if (value.trim()) {
            console.log('some', value)
        } else {
            show('Ведите данные пользователя')
        }

    }


    return (<div className={'form-group'}>
        <input
            type="text"
            className={'form-control'}
            placeholder={'Take some text'}
            onKeyPress={onSubmit}
            value={value}
            onChange={event => setValue(event.target.value)}
        />
    </div>);
};

export default Search;