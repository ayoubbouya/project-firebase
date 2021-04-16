const list = document.querySelector('ul')
const form = document.querySelector('form')

form.addEventListener('submit', e =>{

  e.preventDefault();

  const now = new Date();
  const course = {
    title: form.course.value,
    created_at: firebase.firestore.Timestamp.fromDate(now)
  }
  db.collection("courses").add(course)
  .then( res => console.log(res, 'course added'))
  .catch(err => console.error(err))
})
 
addCourse = course => {
    const html = ` 
    <li class="list-group-item">
      <h3> ${course.title} </h3>
      <small>${course.created_at.toDate()} </small> 
    </li>
    `
    list.innerHTML += html;
} 


db.collection("courses").get()
.then(res => console.log(res.docs.forEach(course => {
    addCourse(course.data())
})) )
.catch(err => console.error(err) )