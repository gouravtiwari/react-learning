import React from 'react';

import List from './list.jsx';

export default class KanbanBoard extends React.Component {
    render() {
        return(
            <div>
                <div 
                    className = "float-button"
                    onClick = {
                        (evt) => this.props.openDraft()
                    }
                >+</div>
                <List
                    title = "To Do"
                    cards = {
                        this.props.cards.filter(
                            (card) => card.status === 'todo'
                        )
                    }
                    addTask    = {this.props.addTask}
                    toggleTask = {this.props.toggleTask}
                    removeTask = {this.props.removeTask}
                    // Assignment#3: part#1
                    openDraft  = {this.props.openDraft} // this prop is needed for all cards so that these can be opened for editing
                    // Assignment#3: part#2
                    removeCard = {this.props.removeCard}
                />
                <List
                    title = "In Progress"
                    cards = {
                        this.props.cards.filter(
                            (card) => card.status === 'in-progress'
                        )
                    }
                    addTask    = {this.props.addTask}
                    toggleTask = {this.props.toggleTask}
                    removeTask = {this.props.removeTask}
                    // Assignment#3: part#1
                    openDraft  = {this.props.openDraft} // this prop is needed for all cards so that these can be opened for editing
                    // Assignment#3: part#2
                    removeCard = {this.props.removeCard}
                />
                <List
                    title = "Done"
                    cards = {
                        this.props.cards.filter(
                            (card) => card.status === 'done'
                        )
                    }
                    addTask    = {this.props.addTask}
                    toggleTask = {this.props.toggleTask}
                    removeTask = {this.props.removeTask}
                    // Assignment#3: part#1
                    openDraft  = {this.props.openDraft} // this prop is needed for all cards so that these can be opened for editing
                    // Assignment#3: part#2
                    removeCard = {this.props.removeCard}
                />
            </div>
        )
    }
}