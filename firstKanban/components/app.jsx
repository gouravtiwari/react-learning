import React from 'react';

import KanbanBoard from './kanban-board.jsx';
import * as Foo from '../helpers/foo.js';

const kanbanState = {
    cards: [
        {
            id: 'card1',
            title: 'Read react book',
            description: 'I should read this book before class',
            status: 'in-progress',
            tasks: []
        },
        {
            id: 'card2',
            title: 'Write some code',
            description: 'Practise my coding skill',
            status: 'todo',
            tasks: [
                {
                    id: 'card2task1',
                    name: 'Hello world example',
                    done: true
                },
                {
                    id: 'card2task2',
                    name: 'Kanban example',
                    done: false
                },
                {
                    id: 'card2task3',
                    name: 'Assignment code',
                    done: true
                }                
            ]
        }        
    ]
};

export default class App extends React.Component {
    render() {
        Foo.greet();
        return(
            <div>
                <h1>Kanban Board</h1>
                <KanbanBoard
                    cards = {kanbanState.cards}
                />
            </div>
        )
    }
}