# Questions

## 1. What is the difference between Component and PureComponent? give an example where it might break my app.

Main difference between Component and PureComponent is an implementation of shouldComponentUpdate. PureComponent implement it by default but in Component developer should use it by his own.

## 2. Context + ShouldComponentUpdate might be dangerous. Can think of why is that?

React context needed to share date between components on different levels of the Virtual DOM wrapped in it. At the same time it might not work in some component due to using the shouldComponentUpdate method which update component state only if this state is update. So it will just ignore updates that came from context. 

## 3. Describe 3 ways to pass information from a component to its PARENT.

1. Pass the prop to the child which will update the state of parent component.
2. Use React Context
3. Use Redux

## 4. Give 2 ways to prevent components from re-rendering.

First way to prevent re-rendering is using lifecycle method shouldComponentUpdate or using PureComponent which implements shouldComponentUpdate by default. For functional components need to use React.memo().

## 5. What is a fragment and why do we need it? Give an example where it might break my app.

In React we can return just one element so in cases where we need to return a several components we can just wrap them in a fragment. When fragments rendering in a cycle they should have a key prop without that it might be cause of glitches same to rendering other elements and component without the key.

## 6. Give 3 examples of the HOC pattern.

1. React.memo
2. React.lazy
3. React.forwardRef

## 7. what's the difference in handling exceptions in promises, callbacks and async...await.

Promise has a reject method which can throw error and to catch it need to use try…catch to handle the exceptions. async…away exceptions also can be handled by this way but they have one more option - use catch method in a chain of awaiting method.

## 8. How many arguments does setState take and why is it async.

Two arguments. First one is a new state value and second one is callback which has one argument - previous state. But here is an important note second argument has deprecation warning and will be removed later

## 9. List the steps needed to migrate a Class to Function Component.

1. Update component with the function instead of class
2. Remove constructor and move all constants before component’s methods
3. Update state with useState hook and replace it through out the component, pass initial state as parameter to the hook. Better to decompose component’s state
4. Move component methods to useCallback instances and don’t forget about dependencies.
5. Replace life-cycle methods like componentDidMount and componentDidUpdate with useEffect
6. Remove this key word
7. Replace render method with component return. If component has some kind of logic inside of render it should be moved to the memorized variables. 

## 10. List a few ways styles can be used with components.

Components can be styled by styled-components, css modules or by style prop passed to React DOM element.

## 11. How to render an HTML string coming from the server.

There is only one option to render HTML string in React - dangerouslySetInnerHTML, but first of all it’s dangerously)
