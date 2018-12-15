import React from 'react'
const ToDoOptions = (props) => {
    return (
        <div className="options">
            {
                props.options.length === 0 && (
                    <div className="my-5">
                        <div className="card card-body shadow-sm">
                            <p className="text-danger">please add some thing to get started</p>
                        </div>
                    </div>
                )
            }
            {
                props.options.map((values) => {
                    return (
                        <ul key={values}>
                            <li className="row">
                                <div className="col-md-8">{values.toUpperCase()} </div>
                                <div className="col-md-4"><button className="btn btn-link" onClick={(e) => { props.handleRemoveOption(values) }}>Remove</button></div>
                            </li>
                        </ul>
                    )
                })
            }
        </div>
    )
};
export default ToDoOptions;