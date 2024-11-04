//propTypes = a mechanism that ensures that the passed value is of the correct datatype
// age:protoTypes.number
// defaultProps - are default values for props in case they are not passed from the parent Component
// name: "guest"
import PropTypes from 'prop-types'
import { Component } from 'react'

function Student(props){
return(
    <div className ="student">
        <p>Name:{props.name}</p>
        <p>Age:{props.age}</p>
    <p>Student: {props.isStudent ? "yes":"No"}</p>
    </div>
)
}
Student.propTypes = {
name: PropTypes.string,
age: PropTypes.number,
isStudent: PropTypes.bool,
}
Student.defaultProps = {
    name:"Guest",
    age: 0,
    isStudent:false,
}
export default Student