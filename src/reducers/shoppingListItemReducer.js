export default function shoppingListItemReducer(state = {
  items: [], 
  users: [ 'initial user' ]
}, action) {

  switch(action.type) {

    case 'GET_COUNT_OF_ITEMS':
      console.log(" counting items")
      return Object.assign({}, state, {
        items: state.items.concat(state.items.length + 1)
      });

    case 'GET_COUNT_OF_USERS':
        console.log(" counting Users")
      return Object.assign({}, state, {
        users: state.users.concat(state.users.length + 1)
      });

    default:
      return state;
  }
};
