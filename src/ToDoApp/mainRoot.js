import React, { Component } from 'react';
import './toDo.scss';
import Header from '../components/Header';
import ToDoPicker from './pickTodo';
import ToDoOptions from './options';
import AddOptions from './addOption'


export default class ToDoSaver extends Component {
    constructor(props) {
        super(props);
        this.state = {
            options: [],
            selectedOption: undefined
        }
    }

    componentDidMount() {
        try {
            const json = localStorage.getItem("option")
            const options = JSON.parse(json);
            if (options) {
                this.setState(() => ({ options }))
            }
        } catch (e) {
        }
    };
    componentDidUpdate(prevState, preProps) {
        if (preProps.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem("option", json)
        }

    }
    componentWillMount() {

    }

    handlePick = () => {
        const option = Math.floor(Math.random() * this.state.options.length);
        const picked = this.state.options[option]
        this.setState(() => ({ selectedOption: picked }));
    }
    handleRemoveAll = () => {
        this.setState(() => ({ options: [] }))
    }
    handleAddoptions = (option) => {
        if (!option) {
            return "please add some thing to add"
        } else if (this.state.options.indexOf(option) > -1) {
            return "The to-do already exist"
        } else {
            this.setState((prevState) => ({ options: prevState.options.concat(option) }))
        }
    }
    handleRemoveOption = (values) => {
        this.setState((pre) => ({ options: pre.options.filter((val) => val !== values) }))
    }
    render() {
        return (
            <div>
                <Header />
                <div className="container">
                    <div className="row">
                        <div className="col-md-3"></div>
                        <div className="col-md-6">
                            <div className="card card-body mt-5">
                                <h4 className="text-center my-3 text-info">Hello add your To-DO here..!</h4>
                                <div className="text-center">
                                    <ToDoPicker entries={this.state.options.length} handlePick={this.handlePick} handleRemoveAll={this.handleRemoveAll} pick={this.state.selectedOption} />
                                    <ToDoOptions options={this.state.options} handleRemoveOption={this.handleRemoveOption} />
                                    <AddOptions handleAddoptions={this.handleAddoptions} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
