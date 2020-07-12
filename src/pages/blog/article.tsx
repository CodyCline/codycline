import * as React from 'react';
import { useParams } from 'react-router-dom';

export const Article = ({match, location} :any) => {
    const { id } = useParams();
    return (
        <div>
            Blog Post Index {id}
        </div>
    )
}