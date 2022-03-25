import React from 'react';
import Search from "../Component/Search/Search";
import Card from "../Component/Card/Card";

const Home = () => {

    const cards = new Array(15)
        .fill('')
        .map((_, i) => i)
    return (
        <>
            <Search/>
            {cards.map( card => {
                return(
                    <div className={'row'} key={card}>
                        <div className="col-sm-4 mb-4">
                            <Card/>
                        </div>
                    </div>
                )
            })}
        </>
    );
};

export default Home;