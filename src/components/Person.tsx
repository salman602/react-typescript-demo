interface IPerson {
    name: {
        first: string,
        last: string
    }
}
const Person = (props: IPerson) => {
    return (
        <div>
            <h5>{props.name.first} {props.name.last}</h5>
        </div>
    )
}
export default Person;