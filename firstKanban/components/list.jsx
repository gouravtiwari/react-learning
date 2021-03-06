import React from 'react';

import Card from './card.jsx';

export default class List extends React.Component {
    render() {
        const cards = this.props.cards.map(
            (card) => 
                <Card
                    key = {card.id}
                    title = {card.title}
                    description = {card.description}
                    tasks = {card.tasks}
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
