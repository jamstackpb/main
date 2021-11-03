import React from 'react';

const Icon: React.FC<{ imagIcon: any }> = ({ imagIcon }) => (
    <img
        src={imagIcon}
        className="w-10 h-auto flex shadow-sm hover:shadow-lg"></img>
);
export const InvertedButton: React.FC<{ahref:any; imagIcon:any}> =({ahref,imagIcon})=>(
    <a href={ahref} className={"h-10 w-10"}><Icon imagIcon={imagIcon}/></a>
)



