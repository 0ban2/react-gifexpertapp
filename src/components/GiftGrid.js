import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GiftGridItem } from './GiftGridItem';

export const GiftGrid = ({ category }) => {

    const { data:images, loading } = useFetchGifs( category );

    return (
        <>
            <h3>
                {category}
            </h3>
            <p className="animate__animated animate__flash">{ loading && 'Cargando...' }</p>
            <div className="card-grid">
                {
                    images.map(image=>(
                        <GiftGridItem 
                            key={image?.id}
                            {...image}
                        />
                    ))
                }
            </div>
        </>
    )
}
