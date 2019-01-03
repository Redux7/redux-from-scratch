# Set up Redux from scretch

project is going to show steps to set up redux from scratch 

create a project with npx

```
npx create-react-add redux-from-scratch
```

then we have to install redux and react-redux packages <br/>
redux is just a package that can work with other frameworks <br/>
in order to make it work with react we will need react-redux

```
npm install --save redux
npm install --save react-redux
```

## After dependecies(packages) are installed we have to design a structure

we are going to make three folders inside of src folder and <br />
and another important file index.js is going to be outsite

``` bash
|--  src
|    |-- index.js
|    |-- actions
|        |-- index.js
|    |-- components
|        |-- Counter.js
|    |-- reducers
|        |-- index.js
```
## Initialize and pass central Redux store

in order to initialize central store we have to export createStore function<br/>
from redux and import our reducer to pass it as the argument inside createStore

```
import { createStore } from 'redux'
import counter from './reducers'

const store = createStore(counter);
```

As counter is our reducer we have to create index.js inside of reducers folder
And create reducer function that returns state

### Right way to do it

```
const initialState = {
  count: 0
}

export default (state = initialState) => {
  return state;
}
```

### Wrong way

this is not going to work state is goint to be undefined

```
const initialState = {
  count: 0
}

export default (initialState) => {
  return initialState;
}
```
## Wrap component(s) into Provider

Next step would be wraping Provider component around parent component<br/>

```
ReactDOM.render(
  <Provider >
    <Counter />
  </Provider>,
  document.getElementById('root')
);
```

Provider is where state of whole app lives <br/>

to use it we have to import Provider from react-redux library

```
import { Provider } from 'react-redux';
```


then we just pass it as props to Provider to make it accessible everywhere

```
  <Provider store={store}>
```

## Pass state as prop

in order to access state as a prop inside the component(Counter.js) we will have to<br/>
create mapStateToProp function inside of the component that needs this props,<br/>
this function passes to the props just relevant parts of the state instead of whole state

```
const mapStateToProps = (state) => {
  return {
    count: state.count
  };
};
```

then connect function connects this component to other parts of Redux architecture

```
import { connect } from 'react-redux';
```

at the bottom of the component(Counter.js)

```
export default connect(mapStateToProps)(Counter);
```

now props are acceseble inside of the component

```
 <p>{this.props.count}</p>
```

___

# Actions

Afrer we could reach our state, we can add actions

in actions folder creage index.js <br />
action is just an object that returns some information for reducer <br/>
this is what our action is look like

```
export const increment = () => {
  return {
    type: 'INCREMENT',
    payload: 1
  }
}
```

action creator is a function that returns action(object)

afrer that we will have to import action to the component

```
import { increment } from '../actions'
```

and call it somewhere. In our case we call it onClick

```
 <button onClick={() => this.props.increment()}>Increment</button>
 ```

 and connect anction(increment) to the redux eco system

 ```

export default connect(mapStateToProps, { increment })(Counter);
```

#### Finaly add switch statement to the reducer

```

export default (state = initialState, action) => {
  switch(action.type) {
    case 'INCREMENT':
      return { ...state, count: state.count + action.payload}
    default:
      return state
  }
}
```
