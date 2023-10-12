import propTypes from "prop-types"


const Result = ({value}) => {

    return(
        <div className="result">
            <span>{value}</span>
        </div>
    )
}

Result.propTypes = {
    value: propTypes.string.isRequired
}

Result.defaultProps = {
    value : "0"
}

export default Result;