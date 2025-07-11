const LOCAL_HOST_URL = import.meta.env.VITE_API_URL
export function getAllTasks () {
  return fetch(LOCAL_HOST_URL)
    .then(res => {
      if (!res.ok) throw new Error(res.status)
      
      return res.json()
    })
    .then(json => json.data)
}
export function getTask (Task) {
  return fetch(`${LOCAL_HOST_URL}/${Task.id}`)
    .then(res => {
      if (!res.ok) throw new Error(res.status)
      
      return res.json()
    })
    .then(json => json.data)
}

export function addTask (Task) {
  return fetch(LOCAL_HOST_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(Task)
  })
    .then(res => {
      if (!res.ok) throw new Error(res.status)

      return res.json()
    })
    .then(json => json.data)
}

export function deleteTask (Task) {
  return fetch(`${LOCAL_HOST_URL}/${Task.id}`, { method: 'DELETE' })
    .then(res => {
      if (!res.ok) throw new Error(res.status)

      return res.json()
    })
    .then(json => json.data)
}

export function editTask (Task) {
  return fetch(`${LOCAL_HOST_URL}/${Task.id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(Task)
  })
    .then(res => {
      if (!res.ok) throw new Error(res.status)

      return res.json()
    })
    .then(json => json.data)
}