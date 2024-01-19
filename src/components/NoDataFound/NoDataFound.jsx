const NoDataFound = ({ message }) => {

    return (
        <div className="p-2">
            <div className="alert alert-warning">
                {message}
            </div>
        </div>
    )
}

export default NoDataFound