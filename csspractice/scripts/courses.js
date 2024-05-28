// courses.js
const aCourse = {
  code: "CSE121b",
  name: "Javascript Language",
  sections: [
    {
    sectionNum: 1,
    roomNum: 'STC 353',
    enrolled: 26,
    days: 'TTh',
    instructor: 'Bro T',
    },
    {
    sectionNum: 2,
    roomNum: 'STC 347',
    enrolled: 25,
    days: 'TTh',
    instructor: 'Sis A',
    },
  ],

};




function setCourseInfo(course) {
  const courseName = document.getElementById('courseName');
  const courseCode = document.getElementById('courseCode');
  courseName.textContent = course.name;
  courseCode.textContent = course.code;

}



function setCourseSections(sections) {
  const html = sections.map(
    (section) => `<tr>
    <td>${section.sectionNum}</td>
    <td>${section.roomNum}</td>
    <td>${section.enrolled}</td>
    <td>${section.days}</td>
    <td>${section.instructor}</td></tr>`
  );

  document.getElementById('sections').innerHTML = html.join('');
}


setCourseInfo(aCourse);
setCourseSections(aCourse.sections);




