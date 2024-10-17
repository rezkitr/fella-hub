export const ENDPOINTS = {
  posts: 'https://jsonplaceholder.typicode.com/posts',
  users: 'https://jsonplaceholder.typicode.com/users',
  user: (id: number) => `https://jsonplaceholder.typicode.com/users/${id}`,
}
