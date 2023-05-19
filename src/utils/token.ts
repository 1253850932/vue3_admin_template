export const setToken = (id: string, token: string) =>
  localStorage.setItem(id, token)
export const getToken = (id: string) => localStorage.getItem(id)
export const clearToken = () => localStorage.clear()
