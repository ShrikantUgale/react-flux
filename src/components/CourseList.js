import React from "react";
import PropTypes from "prop-types";

const CourseList = (props) => (
  <table className="table">
    <thead>
      <tr>
        <th>Title</th>
        <th>Author ID</th>
        <th>Category</th>
      </tr>
    </thead>
    <tbody>{props.courses.map(renderRow)}</tbody>
  </table>
);

const renderRow = (course) => (
  <tr key={course.id}>
    <td>{course.title}</td>
    <td>{course.authorId}</td>
    <td>{course.category}</td>
  </tr>
);

CourseList.propTypes = {
  //   courses: PropTypes.array.isRequired,
  courses: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      authorId: PropTypes.number.isRequired,
      category: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default CourseList;
