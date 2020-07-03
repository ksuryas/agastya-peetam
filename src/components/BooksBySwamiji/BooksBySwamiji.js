import React from 'react';

const BooksBySwamiji = (props) => {
    let books = [
        {
            bookPath: '/resources/Bharatiya Dharmam Book.pdf',
            imgPath: '/resources/book-covers/BharatiyaDharmamBookCover.jpg',
            bookName: 'Bharatiya Dharmam'
        }, 
        {
            // bookPath: '',
            imgPath: '/resources/book-covers/SatyaDarshanamBookCover.jpeg',
            bookName: 'Satya Darshanam (releasing soon)'
        }
    ];

    return (
        <div className={props.className}>
            <h4>&nbsp; Books Written By Swamiji</h4>

            {books.map((book, index) => (
            <div key={index}>
            <a href={book.bookPath} target="_blank" rel="noopener noreferrer">
            <img src={book.imgPath} alt={book.bookName} className={props.imgClassName}  />
                {book.bookName} 
            </a> 
            <br />   
            </div>
          ))}

            <h4> &nbsp; Books About Swamiji</h4>
            <a href="/resources/Mahatapasvi Telugu Book.pdf" target="_blank" rel="noopener noreferrer">
            <img src="/resources/book-covers/MahatapasviBookCover.jpg" alt="Mahatapasvi" className={props.imgClassName} />
            Mahatapasvi by Srinivas Sakkaram
            </a>
            
            <br />
            <br />
            <p>&nbsp; Note: Click on the Book Name to enjoy reading!</p>
        </div>
    );
};

export default BooksBySwamiji;