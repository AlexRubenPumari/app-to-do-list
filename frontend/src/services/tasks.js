export function getAllTasks () {
  return fetch('http://localhost:3000/api/tasks')
    .then(res => {
      if (!res.ok) throw new Error(res.status)
      
      return res.json()
    })
    .then(json => json.data)
}