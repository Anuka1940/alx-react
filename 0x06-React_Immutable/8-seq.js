import { Seq } from 'immutable';

/**
 * Filters students with a score >= 70 and prints their details with names capitalized.
 * @param {Object} grades - The object containing student information.
 */
export function printBestStudents(grades) {
  const seq = Seq(grades);
  const filtered = seq
    .filter((student) => student.score >= 70)
    .map((student) => ({
      ...student,
      firstName: student.firstName.charAt(0).toUpperCase() + student.firstName.slice(1),
      lastName: student.lastName.charAt(0).toUpperCase() + student.lastName.slice(1),
    }));

  console.log(filtered.toJS());
}

