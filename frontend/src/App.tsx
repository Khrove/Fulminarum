import React, { FunctionComponent } from 'react';

let numbers = [1, 2, 3, 4, 5];

interface Welcome {
  title: string
}

interface List {
  els: number[]
}

interface Element {
  value: number;
}

const Title: FunctionComponent<Welcome> = (props) => {
  return <h1>{props.title}</h1>
}

const ListItem: FunctionComponent<Element> = (props) => {
  return <li>{props.value}</li>
}

const NumberList: FunctionComponent<List> = (props) => {
  const numbers = props.els;
  const list = numbers.map((num) => 
    <ListItem key={num.toString()} value={num} />
  );
  return (
    <ul className='num-list'>{list}</ul>
  )
}

function App() {
  return (
    <div className="App">
      <Title title="Bingo" />
      <NumberList els={numbers} />
    </div>
  );
}

export default App;
