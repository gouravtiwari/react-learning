import React from 'react';

import Card from './card.jsx';

export default class List extends React.Component {
    render() {
        const cards = this.props.cards.map(
            (card) => 
                <Card
                    key = {card.get('id')}
                    id = {card.get('id')}
                    title = {card.get('title')}
                    description = {card.get('description')}
                    // Assignment#4
                    status = {card.get('status')}
                    tasks = {card.get('tasks')}
                    
                    addTask = {this.props.addTask}
                    toggleTask = {this.props.toggleTask}
                    removeTask = {this.props.removeTask}
                    removeCard = {this.props.removeCard}
                    // Assignment#4
                    openDraft  = {this.props.openDraft} 
                />
        );
        return(
            <div className='list'> 
                <h3>{this.props.title}</h3>
                {
                   cards 
                }
            </div>
        )
    }
}
