const connection = require('./connection');

const getAll = async () => {
  const [books] = await connection.execute('SELECT id, title, author_id FROM books')

  return books.map(({ id, title, author_id }) => ({
    id,
    title,
    author: author_id,
  }));
};

const getByAuthorId = async (authorId) => {
  const query = 'SELECT title FROM model_example.books WHERE author_id = ?;'
  const [books] = await connection.execute(query, [authorId]);

  return books.map(({ id, title, author_id }) => ({
    id,
    title,
    authorId: author_id,
  }));
}

const getById = async (id) => {
  const query = 'SELECT id, title, author_id FROM model_example.books WHERE id=?;';

  const [books] = await connection.execute(query, [id]);

  if(books.length === 0) return null;

  const result = books.map(({ id, title, author_id }) => ({
    id,
    title,
    authorId: author_id
  }));
  return result[0]
}

module.exports = {
  getAll,
  getByAuthorId,
  getById
}