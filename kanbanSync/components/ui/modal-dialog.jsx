import React from 'react';

export default class ModalDialog extends React.Component {
    handleClick() {
        const id = this.props.draft.get('id');
        const title = this.props.draft.get('title');
        const description = this.props.draft.get('description');
        const status = this.props.draft.get('status');
        
        if (id === '') {
            this.props.addCard({
                title: title,
                description: description,
                status: status
            });
        } else {
            this.props.updateCard({
                id: id,
                title: title,
                description: description,
                status: status
            });            
        }
        
        this.props.closeDraft();
    }
    
    render() {
        return (
            <div>
                <div className = "modal-card">
                    <input 
                        type="text"
                        placeholder="Title"
                        value = {this.props.draft.get('title')}
                        onChange = {
                            (evt) => this.props.updateDraft('title', evt.target.value)
                        }
                    />
                    <textarea
                        placeholder="description"
                        value = {this.props.draft.get('description')}
                        onChange = {
                            (evt) => this.props.updateDraft('description', evt.target.value)
                        }
                    />
                    <div>
                        <label>Status</label>
                        <select
                            value = {this.props.draft.get('status')}
                            onChange = {
                            // Assignment#3: part#3
                            // Since select is the DOM element which holds value,
                            // this should also handle onclick event too for status
                            
                                (evt) => this.props.updateDraft('status', evt.target.value)
                            }
                            >
                            <option value="todo">To Do</option>
                            <option value="in-progress">In Progress</option>
                            <option value="done">Done</option>
                        </select>
                    </div>
                    <div className = "actions">
                        <button
                            onClick = {this.handleClick.bind(this)}
                        >Save</button>
                    </div>
                </div>
                <div 
                    className = "overlay"
                    onClick = {
                        (evt) => this.props.closeDraft()
                    }
                />                
            </div>
        );
    }
}