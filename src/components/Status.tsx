interface IStatus {
    status: "loading" | "success" | "error";
}
const Status = (props: IStatus) => {
    let message;
    if (props.status === "loading") {
        message = "Loading ..."
    } else if (props.status === "success") {
        message = "Status is loaded successfully"
    } else if (props.status === "error") {
        message = "Status error"
    }
    return (
        <div>
            <h2>Status - {message}</h2>
        </div>
    )
}
export default Status;