import propTypes from "prop-types"


const Result = ({value}) => {
    
    console.log("Renderizacion de result", value)

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