# Set up Redux form scretch

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
and another inportend file index.js is going to be outsite

``` bash
|-- index.js
|--  src
|    |-- actions
|        |-- index.js
|    |-- components
|        |-- Counter.js
|    |-- reducers
|        |-- index.js
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

## Initialize and pass central Redux store

in order to initialize central store we have to export createStore function
form redux and import our reducer to pass it as the argument inside createStore

```
import { createStore } from 'redux'
import counter from './reducers'

const store = createStore(counter);
```

As counter is our reducer we have to create indes.js inside of reducers folder
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

then we just pass it as props to Provider to make it accessible everywhere

```
  <Provider store={store}>
```

## Pass state as prop

in order to access state as a prop inside the component(Counter.js) we will have to
create mapStateToProp function, this function passes to the props just
relevant parts of the state instead of whole state

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

at the bottom of the component(Count.js)

```
export default connect(mapStateToProps)(Counter);
```

now props are acceseble inside of the compoent 

```
 <p>{this.props.count}</p>
```

