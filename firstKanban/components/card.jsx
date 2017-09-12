import React from 'react';

import CheckList from './check-list.jsx';
export default class Card extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            showDetails: false
        }
    }
    
    
    render() {
        // Assignment #1
        // Playing with multiple this and that, 
        // though I learnt that we can simply "bind" "this" to event itself
        let that = this;
        
        return(
            // Assignment #1
            // - Add something to show / hide card details
            // - default state is hidden
            // - change CSS dynamically to toggle arrow
            <div className="card">
                <div 
                    className="card_title"
                    // Assignment #1
                    // Though this is not a best practice to inline the styles
                    // since ask is to upload only card.jsx, I am inlining CSS.
                    // This can simply be written in index.css as:
                    // 
                    // .card_title:hover {
                    //   cursor: pointer;
                    // }
                    style={
                        { cursor: 'pointer' }
                    }
                    // Assignment #1
                    // Since ask is to toggle card hide/show on click of title
                    // I added to this div
                    onClick = {
                        (evt) => {
                            // only way to change state is through setState function
                            that.setState({ 
                                showDetails: !that.state.showDetails
                            });
                            // Just a way to test if toggle works
                            // console.log(that.state.showDetails);
                        }
                    }
                >
                    {this.props.title}
                </div>
                
                <div 
                    // Assignment #1
                    // as we can evaluate in jsx with {..} 
                    // I used ternary operator here
                    className={that.state.showDetails ? '' : 'hidden'}
                >
                    <div className="card_description">{this.props.description}</div>
                    <CheckList
                        tasks = {this.props.tasks}
                    />
                </div>
            </div>
            
        )
    }
}