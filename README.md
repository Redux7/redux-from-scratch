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
