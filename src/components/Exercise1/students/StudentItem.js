
export const StudentItem = ({student}) => {
  return (
    <div className="product">
      <p>
        <b>Name:</b> {student.name}
      </p>
      <p>
        <b>LastName:</b> {student.lastName}
      </p>
      <p>
        <b>Description:</b> {student.description}
      </p>
      <hr />
    </div>
  );
};
