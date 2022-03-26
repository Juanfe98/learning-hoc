import { useState } from "react";

export const ListSearcher = (WrappedComponent, data) => {
  
  return function WithSearch(props) {
    const [wordToSearch, setWordToSearch] = useState('');
    
    const searchInputHandler = (ev) => {
      setWordToSearch(ev.target.value);
    }
    
    return (
      <div>
      <input onChange={ev => searchInputHandler(ev)} value={wordToSearch} type="text" placeholder="Search" />
      <WrappedComponent data={data} wordToSearch={wordToSearch} />
    </div>
    )
  }
};