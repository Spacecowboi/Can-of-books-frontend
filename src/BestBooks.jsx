import React from 'react';
import axios from 'axios'; 
import Carousel from 'react-bootstrap/Carousel';


class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    }
  }

  /* TODO: Make a GET request to your API to fetch all the books from the database  */

  async componentDidMount() {
    try {
      const response = await axios.get('/books');
      this.setState({ books: response.data });
    } catch (error) {
      console.error('Oops! Looks like we tore a page:', error);
    }
  }

  render() {

    /* TODO: render all the books in a Carousel */
    const {books} = this.state;

    return (
      <>
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>

        {books.length > 0 ? (
          <div id="bookCarousel" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
              {books.map((book, index) => (
                <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                  <img src={book.imageUrl} className="d-block w-100" alt={`Book ${index}`} />
                </div>
              ))}
            </div>
            <a className="carousel-control-prev" href="#bookCarousel" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#bookCarousel" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
        ) : (
          <h3>No Books Found :(</h3>
        )}
      </>
    );
  }
}
//lines 33-57 built with ChatGPT assistance//

export default BestBooks;
