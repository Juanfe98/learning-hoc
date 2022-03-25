import { StudentItem } from './StudentItem';

const StudentsList = ({students}) => {
  return (
    <div>
      <div>
        <div>
          <h2>Students</h2>
        </div>
      </div>
      <div>
        {students.map((student) => <StudentItem key={student.sku} student={student} />)}
      </div>
    </div>
  )
}

export default StudentsList;