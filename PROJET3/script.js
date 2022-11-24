const db = firebase.firestore()

const taskForm = document.getElementById('task-form')

const taskContainer = document.getElementById("tasks-container")
    
const horaDate = new(Date)
const hora = `${horaDate.getUTCDate()}/${horaDate.getUTCMonth()}/${horaDate.getUTCFullYear()}  ${horaDate.getHours()}:${horaDate.getMinutes()}:${horaDate.getSeconds()}`

const saveTask = (title, description) =>

db.collection('tasks').doc().set({

    title, description, hora
})


const getTaskedit = (id) => db.collection('tasks').doc(id).get()

let ediStatus = false

const getTask = () => db.collection('tasks').get()

const onGetTasks = (callback) => db.collection('tasks').onSnapshot(callback)

const deleteTask = id => db.collection('tasks').doc(id).delete()

window.addEventListener('DOMContentLoaded', async (e) =>{
   onGetTasks((querySnapshot) => {
    taskContainer.innerHTML = ''
    querySnapshot.forEach((doc) => {
        const task = doc.data()
        task.id = doc.id

        taskContainer.innerHTML += `<div class="card card-body mt-2 border-primary">
    
        <h5>${doc.data().title}</h5>
        <p>${doc.data().description} <br><br> ${doc.data().hora}</p>
        <div>
        <button class="btn btn-primary btn-delete" data-id="${task.id}">Delete</button>

        <button class="btn btn-secondary btn-edit" data-id="${task.id}">Edit</button>
        </div>
        </div>`

        const btnsdelete = document.querySelectorAll('.btn-delete')
        btnsdelete.forEach(btn =>{
            btn.addEventListener('click', async (e) => {
                await deleteTask(e.target.dataset.id)
            })
        })

        const btnsedit = document.querySelectorAll('.btn-edit')

        btnsedit.forEach(btn =>{
            btn.addEventListener('click', async (e) =>{
                const task = await getTaskedit(e.target.dataset.id)
                const valor = task.data()

                taskForm['task-title'].value = valor.title
                taskForm['task-description'].value = valor.description

                
                
                console.log(task.data())
            })
        })
       })

   })

   
})
taskForm.addEventListener('submit', async(datas) => {
    datas.preventDefault()

    const title = taskForm['task-title']
    const description = taskForm['task-description']
    

    await saveTask(title.value, description.value)
    taskForm.reset()
    title.focus()
    


})

