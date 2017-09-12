import React from 'react';

export default class CheckList extends React.Component {
    render() {
        const tasks = this.props.tasks.map(
            (task) => 
                <li
                    key = {task.id}
                    className = "checklist_task"
                >
                    {task.name}
                </li>
        );
        return(
            <ul>
                {tasks}
            </ul>
        )
    }
}