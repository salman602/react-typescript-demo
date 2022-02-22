import React from 'react'


const List = ({ names, onClick }: {
    names: string[],
    onClick: (name: string) => void;
}) => {
    return (
        <div>
            {
                names.map((name, index) => (
                    <ol key={index} onClick={() => onClick(name)}>{name}</ol>
                ))
            }
        </div>
    )
}

export default List;