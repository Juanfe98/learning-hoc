import { StudentItem } from './StudentItem';

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

export default StudentsList;