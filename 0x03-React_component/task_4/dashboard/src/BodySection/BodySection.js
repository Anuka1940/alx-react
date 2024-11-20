import React, { Children } from 'react';
import PropTypes from 'prop-types';

const BodySection = ({ title, Children }) => {
    return (
        <div className='bodySection'>
            <h2>{title}</h2>
            {Children}
        </div>
    );
};

BodySection.prototypes = {
    title: PropTypes.string,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]).isRequired,
}

export default BodySection;