import React from 'react';
import {Link} from 'react-router-dom'

const Card = () => {
    return (
        <div className={'card'}>
            <img src="" alt="" className={'card-img-top'}/>
            <div className={'card-Body'}>
                <h5 className={'card-title'}> React JS</h5>
                <Link className={'btn btn-primary'} to={'/profile/' + 'react'}> Open</Link>
            </div>
        </div>
    );
};

export default Card;