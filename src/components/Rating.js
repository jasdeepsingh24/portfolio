import React from 'react';

const Rating=(props)=>{
    const n=props.stars;
    let i=0;
    const arr = [];

    for (;i<n;i++) {
        arr.push(<span class="fa fa-star checked"></span>)
    } 
    for(;i<5;i++)
    {
        arr.push(<span class="fa fa-star"></span>)
    }
    return (
        <div>
            {arr}
        </div>
    );
}

export default Rating;