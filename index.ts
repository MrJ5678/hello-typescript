interface Todo {
  userId: number
  id: number
  title: string
  completed: boolean
}

class AnotherTodo {
  userId: number
  id: number
  title: string
  completed: boolean
}

let anotherTodo: AnotherTodo[] = [
  {
    "userId": 1,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
  },
  {
    "userId": 1,
    "id": 2,
    "title": "aut delectus autem",
    "completed": true
  },
  {
    "userId": 1,
    "id": 3,
    "title": "autem delectus aut",
    "completed": false
  },
]


let todos: Todo[] = [
  {
    "userId": 1,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
  },
  {
    "userId": 1,
    "id": 2,
    "title": "aut delectus autem",
    "completed": true
  },
  {
    "userId": 1,
    "id": 3,
    "title": "autem delectus aut",
    "completed": false
  },
]