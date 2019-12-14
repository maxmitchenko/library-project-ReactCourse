import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:8000/api',
})

export const getOwnerById = (id, payload) => api.get(`/owner/${id}`, payload)

export const insertBook = payload => api.post(`/book`, payload)
export const getAllBooks = () => api.get(`/books`)
export const updateBookById = (id, payload) => api.put(`/book/${id}`, payload)
export const deleteBookById = id => api.delete(`/book/${id}`)
export const getBookById = id => api.get(`/book/${id}`)

const apis = {
    getOwnerById,
    insertBook,
    getAllBooks,
    updateBookById,
    deleteBookById,
    getBookById,
}

export default apis