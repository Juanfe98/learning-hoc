import { useState } from "react";

export const withSearch = (WrappedComponent, data) => {
  
  return function() {
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