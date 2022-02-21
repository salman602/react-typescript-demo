interface IGreet {
    name: string,
    messages: number
}

const Greet = (props: IGreet) => {
    return (
        <div>
            <h4>Hi {props.name}, You have {props.messages} unread messages.</h4>
        </div>
    )
}
export default Greet;