import * as Immutable from 'immutable';

const contacts = [
                'Cassio Zen - cassiozen@gmail.com',
                'Dan Abramov - gaearon@somewhere.com',
                'Pete Hunt - floydophone@somewhere.com',
                'Paul O\'Shannessy - zpao@somewhere.com',
                'Ryan Florence - rpflorence@somewhere.com',
                'Sebastian Markbage - sebmarkbage@here.com'
            ];

// Assignment#2:
// Initial state would contain all contacts we have and will be a List
function createInitialState() {
    return new Immutable.List(contacts);
}


export function reduce(state = createInitialState(), action) {
    // For this reducer nothing else is needed, as we just need our initial list
    return state;
}
