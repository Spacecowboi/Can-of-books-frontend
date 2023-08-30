import React from 'react';
import axios from 'axios'; 
import Carousel from 'react-bootstrap/Carousel';
import BackgroundImage from './images/bookshelf_image.jpeg'
import Button from 'react-bootstrap/Button';
import BookFormModal from './BookFormModal';


const PORT = import.meta.env.VITE_server_url;


class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      showNewBookForm: false,
    }
  }

  /* TODO: Make a GET request to your API to fetch all the books from the database  */
  fetchEveryBook = () => {
    // axios.get(`${import.meta.env.VITE_server_url}/books`)
    axios.get(`${PORT}/books`)
      .then(response => {
        this.setState({ books: response.data });
        console.log(response.data)
      });
  }
    componentDidMount() {
      this.fetchEveryBook();
    }
    handleModalShow = ()  => {
      this.setState({
        showNewBookForm: true,
      });
    }

    handleModalClose = () => {
      this.setState({
        showNewBookForm: false,
      });
    }

  // async componentDidMount() {
  //   try {
  //     const response = await axios.get(`${PORT}/books`);
  //     console.log('Got the data from the backend!:', response.data);
  //     this.setState({ books: response.data });
  //   } catch (error) {
  //     console.error('Oops! Looks like we tore a page:', error);
  //   }
  // }

  render() {

    /* TODO: render all the books in a Carousel */
    return (
      <>
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>

        {this.state.books.length ? (
              <Carousel>
                    {this.state.books.map((books, idx) =>
                    <Carousel.Item key={idx}>
                            <img
                              className="d-block w-100"
                              src={BackgroundImage}
                              alt="First slide"
                            />
                      <Carousel.Caption>
                        <h3>
                          {books.title}
                        </h3>
                        <p>
                          {books.description}
                        </p>
                        <p>
                           {books.status}
                        </p>
                      </Carousel.Caption>
                    </Carousel.Item>)
                    }
              </Carousel>

        ) : (
          <h3>No Books Found :</h3>
        )}
        <Button onClick={this.handleModalShow} variant="dark">Add Book</Button>
        <BookFormModal showNewBookForm={this.state.showNewBookForm} onModalClose={this.handleModalClose}/>

      </>
    )
  }
}
      

export default BestBooks;
