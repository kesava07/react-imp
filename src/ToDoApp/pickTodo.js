import React from 'react'
const ToDoPicker=(props)=>{
    return(
        <div>
            <div className="row">
            <div className="col-md-12">
            <button className="btn btn-primary btn-lg float-left" data-toggle="modal" data-target="#myModal" disabled={props.entries === 0} onClick={props.handlePick}>What should I do ?</button>
            <button className="btn btn-danger btn-lg float-right" disabled={props.entries === 0} onClick={props.handleRemoveAll}>Remove All</button>
            </div>
            <div className="col-md-12">
            <p className="mt-4">You Have Added <span className="text-success">{props.entries} </span>to-do's</p>
            </div>
            </div>
           <div className="modal fade" id="myModal">
               <div className="modal-dialog modal-dialog-centered">
                  <div className="modal-content">
                     <div className="modal-header">
                         <h4 className="modal-title">You Have picked</h4>
                             <button type="button" className="close" data-dismiss="modal">&times;</button>
                    </div>
                    <div className="modal-body">
                     <h1 className="text-warning">{props.pick}</h1>
                    </div>
                         <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Okay</button>
                         </div>
                   </div>
             </div>
         </div>
        </div>
    )
};
export default ToDoPicker;