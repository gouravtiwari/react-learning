import React from 'react';

import CheckList from './check-list.jsx';

export default class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showDetails: false
        }
    }
    
    handleAddTask(taskName) {
        this.props.addTask(this.props.id, taskName);
    }
    
    handleRemoveTask(taskId) {
        this.props.removeTask(this.props.id, taskId);
    }
    
    handleToggleTask(taskId) {
        this.props.toggleTask(this.props.id, taskId);
    }

    handleClick() {
        this.setState({
            showDetails: !this.state.showDetails
        });
    }
    
    render() {
        let className = 'hidden';
        if (this.state.showDetails) {
            className = '';
        }
        return (
            <div className="card">
                <div className = "card_edit">
                    <span 
                        className = "fa fa-pencil edit-icon"
                        // Assignment#4: Reused from assignment#3 code
                        // Since this is edit draft we need to pass in cardObj
                        // Note:
                        // - this.props did not have status, 
                        //  so it has to come from parent component, i.e. list
                        // - this.props did not have openDraft, 
                        //  so it has to come from parent component, i.e. list
                        //  and list gets from kanbanBoard
                        onClick = {
                            (evt) => this.props.openDraft({
                                id:          this.props.id,
                                title:       this.props.title,
                                description: this.props.description,
                                status:      this.props.status,
                                show:        true
                            })
                        }
                    />
                    <span 
                        className = "fa fa-times remove-icon"
                        onClick = {
                            (evt) => this.props.removeCard(this.props.id)
                        }
                    />
                </div>
                <div 
                    className = { this.state.showDetails ? "card_title_is_open" : "card_title" }
                    onClick = { this.handleClick.bind(this) }
                >{this.props.title}</div>
                <div 
                    className= {className}
                >
                    <div>{this.props.description}</div>
                    <CheckList
                        tasks = {this.props.tasks}

                        addTask = {this.handleAddTask.bind(this)}
                        toggleTask = {this.handleToggleTask.bind(this)}
                        removeTask = {this.handleRemoveTask.bind(this)}                    
                    />
                </div>
            </div>
        )
    }
}