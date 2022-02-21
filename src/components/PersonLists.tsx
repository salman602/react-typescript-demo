interface IPersonLists {
    names: {
        first: string,
        middle: string,
        last: string
    }[]
}
const PersonLists = (props: IPersonLists) => {
    return (
        <div>
            {props.names.map(name => (
                <h6>{name.first} {name.middle} {name.last} </h6>
            ))}
        </div>
    )
}
export default PersonLists;