# Explore React Hooks

## useReducer

In this chapter we're going to know more and learn about `useState` hook.

We will understand how to use it, what problem it solves and why would you use it in a real application.

## Technical

The hook has the following signature: `[value, setter] = useState(initialValue | initFunction)`

`value` is the current value for the state property. It does mutate.
`setter` is the function you use to set a new value for the state property. It does not mutate.
`initialValue`; initial value for the state property.
`initFunction`: deferred function that returns the initial value. Its signature: `() => initialValue`
