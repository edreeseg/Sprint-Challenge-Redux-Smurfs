1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

.map, .filter, .concat

Object.assign

2.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

An action is an object that has up to two properties - a type property (which is mandatory), and an optional payload property.  This action is sent to the reducers.

A reducer is a function that takes two arguments - the current state in the store, and the action that is sent to it.  These reducers make decisions on what the new state should be based on the action's type property.  Often times this is in the form of a switch statement.  A reducer never updates state directly - it always returns an entirely new state that is representative of the changes that should occur based on the action.

The store is essentially a Javascript object that contains state for the entire application.  In the Redux model, the store is known as the "single source of truth" because all applications should be assuming the store will always have the most recent, updated, and accurate information on the state of the store.  This helps to avoid complex and convoluted management of state on the component level, though state can still be managed on the component.

3.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is state that is available to all components in the application through the Redux store.  Component state is state that is managed on a particular React component, but can still be passed to other components as props if necessary.  Most often, it is best to use application state when the state will be useful to multiple components, or it would add unnecessary complexity to handle the state on the components themselves.  Component state is useful for when only a single component must be aware of or respond to changes in that state.

4.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Redux thunk is middleware that allows us to perform asyncronous actions within the Redux model, as Redux itself operates on a strictly synchronous model.  It changes our action creators by giving us access to dispatch - letting us decide when new actions are dispatched to the reducers.