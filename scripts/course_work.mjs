import { displayCourseDetails } from "./display_course_modal.mjs";

const courses = [
   {
       subject: 'CSE',
       number: 110,
       title: 'Introduction to Programming',
       credits: 2,
       certificate: 'Web and Computer Programming',
       description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
       technology: [
           'Python'
       ],
       completed: true
   },
   {
       subject: 'WDD',
       number: 130,
       title: 'Web Fundamentals',
       credits: 2,
       certificate: 'Web and Computer Programming',
       description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
       technology: [
           'HTML',
           'CSS'
       ],
       completed: true
   },
   {
       subject: 'CSE',
       number: 111,
       title: 'Programming with Functions',
       credits: 2,
       certificate: 'Web and Computer Programming',
       description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
       technology: [
           'Python'
       ],
       completed: true
   },
   {
       subject: 'CSE',
       number: 210,
       title: 'Programming with Classes',
       credits: 2,
       certificate: 'Web and Computer Programming',
       description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
       technology: [
           'C#'
       ],
       completed: true
   },
   {
       subject: 'WDD',
       number: 131,
       title: 'Dynamic Web Fundamentals',
       credits: 2,
       certificate: 'Web and Computer Programming',
       description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
       technology: [
           'HTML',
           'CSS',
           'JavaScript'
       ],
       completed: true
   },
   {
       subject: 'WDD',
       number: 231,
       title: 'Frontend Web Development I',
       credits: 2,
       certificate: 'Web and Computer Programming',
       description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
       technology: [
           'HTML',
           'CSS',
           'JavaScript'
       ],
       completed: false
   }
]
const course_list = document.getElementById("course-list");
const course_subject = document.getElementById("course-subject");
const list_courses_btn = document.getElementById("list_courses()")
const wdd_courses_btn = document.getElementById("wdd_courses()")
const cse_courses_btn = document.getElementById("cse_courses()")

list_courses_btn.addEventListener('click', () => {
    list_courses(courses);
});
wdd_courses_btn.addEventListener('click', () => {
    wdd_courses();
});
cse_courses_btn.addEventListener('click', () => {
    cse_courses();
});

courses.map((course) => {
    course_list.innerHTML += `<li>${course.title}</li>`
})

function list_courses(array) {
    course_subject.innerHTML = ""
    const h4 = document.createElement("h4");
    let sum = 0;

    array.map((course)=>{
        const p = document.createElement("p");
        
        sum += course.credits;

        p.textContent = `${course.subject} ${course.number}`;

        if (course.completed) {
            p.style.backgroundColor = "#662F1F";
            p.style.color = "white"
        }
        p.addEventListener('click', () => {
            displayCourseDetails(course);
        });
        course_subject.appendChild(p);
    })

    h4.textContent = `The total number of credits listed above is ${sum}`
    course_subject.appendChild(h4);
}

function wdd_courses() {
    let wwd_courses = courses.filter((course)=> {
        if (course.subject == "WDD") {
            return course
        }
    })
    list_courses(wwd_courses)
}

function cse_courses() {
    let wwd_courses = courses.filter((course)=> {
        if (course.subject == "CSE") {
            return course
        }
    })
    list_courses(wwd_courses)
}

list_courses(courses)