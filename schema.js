const typeDefs = `
  type Book {
    id:ID
    title: String
    author: String
  }
  type Query {
    books: [Book]
    book : Book
  }
`;

module.exports = typeDefs