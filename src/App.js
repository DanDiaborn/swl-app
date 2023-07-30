import List from "./components/List";
import SelectFaction from "./components/SelectFaction";
import { useState } from "react";
import SelectItem from "./components/SelectItem";

function App() {

  const [faction, setfaction] = useState('Rebel');
  const [item, setItem] = useState('Units');


  return (
    <div className="container">



      <SelectFaction setfaction={setfaction} />
      <SelectItem setItem={setItem} />
      <List faction={faction} item={item} />
    </div>
  )
}

export default App;
