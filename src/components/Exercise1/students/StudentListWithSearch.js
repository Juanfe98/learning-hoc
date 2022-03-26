import {useState} from 'react';
import { students } from '../../../assests/data/students';
import StudentsList from './StudentList';

const StudentListWithSearch = () => {
  const [wordToSearch, setWordToSearch] = useState('');

  const inputHandler = (ev) => {
    setWordToSearch(ev.target.value);
  }

  const filterBySearch = (wordToSearch) => {
    console.log(wordToSearch,'sadas');
    wordToSearch = wordToSearch.toUpperCase()
    return students.filter(student => {
      let str = `${student.name} ${student.lastName} ${student.sku}`.toUpperCase();
      return str.indexOf(wordToSearch) >= 0;
    })
  };

  let filteredStudents = filterBySearch(wordToSearch);
  return(
    <div>
      <input onChange={ev => inputHandler(ev)} value={wordToSearch} type="text" placeholder="Search" />
      <StudentsList students={filteredStudents} />
    </div>
  )

}

export default StudentListWithSearch;
