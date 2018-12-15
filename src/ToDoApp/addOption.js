import React from 'react'
export default class AddOptions extends React.Component{
    state={
        error:undefined
    }
    
    handleAddoptions=(e)=>{
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        e.target.elements.option.value = '';
        const error =this.props.handleAddoptions(option)
        this.setState(()=>({error:error}))
    }
    render(){
        return(
            <div>
                <form onSubmit={this.handleAddoptions}>
                    <div className="row">
                    <div className="col-md-8"><input type="text" name="option" className="form-control form-control-lg" placeholder="Add your to do here"/></div>
                    <div className="col-md-3">
                    <button className="btn btn-primary btn-lg">ADD</button>
                    </div>
                    </div>
                </form>
                {this.state.error && <p className="text-danger mt-3">{this.state.error}</p>}
            </div>
        )
    }
}