/* eslint-disable import/no-cycle */
import React from 'react';
import BookComp from '../components/BookComp';
import Form from '../components/Form';

const ListOfBooks = [
  {
    id: 1,
    title: 'The Hunger Games',
    author: 'Suzanne Collins',
    category: 'Action',
  },
  {
    id: 2,
    title: 'Dune',
    author: 'Frank Herbert',
    category: 'Science Fiction',
  },
  {
    id: 3,
    title: 'Capital in the Twenty-First Century',
    author: 'Suzanne Collins',
    category: 'Economy',
  },
];

function Books() {
  return (
    <>
      {ListOfBooks.map((book) => (
        <BookComp key={book.id} book={book} />
      ))}
      <Form />
    </>
  );
}

export default Books;
