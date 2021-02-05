import React, {useState} from 'react'
import axios from 'axios'
import './style.css'
// import book1 from './img/book1.jpg'

function FetchImgText() {
    const [books, setBooks] = useState([])
    const [img, setImg] = useState([])

    const fetchData = async () => {
        const response = await axios.get('https://www.anapioficeandfire.com/api/books?pageSize=30')

        setBooks(response.data)

        // const imgResponse = await axios.get('https://source.unsplash.com/1600x900/?nature,water')

        // setImg(imgResponse)
    }

    return (
        <div className="App">  
            <h1>Books</h1>
            <h2>Fetch image + text and display it</h2>

            <div>
                <button className="fetch-button" onClick={fetchData}>Access Data</button>
            </div>

            <div className="books">
                {
                    books && books.map((book, index) => {
                        const authors = book.authors
                        return (
                            <div className="book" key={index}>
                                <h3>Book {index + 1}</h3>
                                
                                <img src="/images/book1.jpg" alt="" width="60" height="60"/>
                                <h2>{book.name}</h2>
                                <div className="details">
                                    <p>{authors}</p>
                                    <p>{book.numberOfPages} pages</p>
                                    <p> {book.country} </p>
                                </div>

                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default FetchImgText
