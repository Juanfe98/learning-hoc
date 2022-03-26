import { StudentItem } from './StudentItem';
import { students } from '../../../assests/data/students';
import { withSearch } from '../hoc/withSearch';

const StudentsList = ({data: students, wordToSearch}) => {

  const filterBySearch = (wordToSearch) => {
    wordToSearch = wordToSearch.toUpperCase();
    return students.filter(student => {
      let str = `${student.name} ${student.lastName} ${student.sku}`.toUpperCase();
      return str.indexOf(wordToSearch) >= 0;
    })
  };

  let filteredStudents = filterBySearch(wordToSearch);

  return (
    <div>
      <div>
        <div>
          <h2>Students</h2>
        </div>
      </div>
      <div>
        {filteredStudents.map((student) => <StudentItem key={student.sku} student={student} />)}
      </div>
    </div>
  )
}

// Como necesitamos la data aca para pasarcela a withSearch, es posible que en un ambito real no la tengamos en este punto.
// En ese caso en el componente padre que seguramente si la tengamos podemos crear el componente de la misma forma, es decir:
// const StudentListSearchHOC = withSearch(StudentsList, data);
export default withSearch(StudentsList, students);