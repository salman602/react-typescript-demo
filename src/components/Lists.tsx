import React from 'react'
import List from './List';

const Lists = () => {
    const names: string[] = ["Salman Rahman", "Fatema Rahman", "Abdullah Bin Salman", "Abdur Rahman Bin Salman"];
    const greetMe = (name: string): void => alert(`Hi ${name}. Welcome to React TypeScript.`)
    return (
        <div>
            <List names={names} onClick={greetMe} />

        </div>
    )
}

export default Lists