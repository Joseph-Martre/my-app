import React from 'react';
import Wrapper from './Wrapper';

const Cars = ({children, color}) => {
    const colorInfo = color ? <span>Couleur: { color }</span> : <span>Couleur: néant</span>;

    return children && (
        <Wrapper>
            <p>Marque: {children}</p>
            <p>Couleur: {colorInfo}</p>
        </Wrapper>
    )
}

export default Cars;