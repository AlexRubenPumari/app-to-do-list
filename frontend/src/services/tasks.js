const LOCAL_HOST_URL = 'http://localhost:4000/api/tasks' 
export function getAllTasks () {
  return fetch(LOCAL_HOST_URL)
    .then(res => {
      if (!res.ok) throw new Error(res.status)
      
      return res.json()
    })
    .then(json => json.data)
}

export function addTask (bodyReq) {
  return fetch(LOCAL_HOST_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(bodyReq)
  })
    .then(res => {
      if (!res.ok) throw new Error(res.status)

      return res.json()
    })
    .then(json => json.data)
}