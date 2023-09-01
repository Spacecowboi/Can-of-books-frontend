import React from 'react';
import axios from 'axios'; 
import Carousel from 'react-bootstrap/Carousel';
import BackgroundImage from './images/bookshelf_image.jpeg'
import Button from 'react-bootstrap/Button';
import BookFormModal from './BookFormModal';
import { withAuth0 } from '@auth0/auth0-react';


const PORT = import.meta.env.VITE_server_url;


class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      showNewBookForm: false,
      token: null,
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
    async componentDidMount() {
      this.fetchEveryBook();
      let res = await this.props.auth0.getIdTokenClaims();
      const token = res.__raw
      console.log('OUR WEB TOKEN!!!', token);
      this.setState({ token });

      const config = {
        headers: {
          'Authorization': `Bearer ${token}`
        },
        method: 'GET',
        baseURL: 'http://localhost:3001',
        url: '/pokemon'
      }
      const bookResponse = await axios(config);
      console.log(bookResponse);
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

    handleDeleteBook = (id) => {
      console.log("id:", id);
      axios.delete(`${PORT}/books/${id}`)
      .then(response => {
        console.log('Booked Deleted.', response);
        this.fetchEveryBook();
      })
    }
    // Save book axios call

    saveBook = (title, desciption, status) => {
      axios.post(`${PORT}/books`, {
        title: title,
        description: desciption,
        status: status,
      }).then(res => {
        console.log("New book created", res)
        this.fetchEveryBook();
      });
      

    };

  render() {

    console.log('BestBook PROPS!', this.props);
    console.log('AUTH0 User:', this.props.auth0.user);

    /* TODO: render all the books in a Carousel */
    return (
      <>
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>

        {this.state.books.length ? (
              <Carousel>
                    {this.state.books.map((book, idx) =>
                    <Carousel.Item key={idx}>
                            <img
                              className="d-block w-100"
                              src={BackgroundImage}
                              alt="First slide"
                            />
                      <Carousel.Caption>
                        <h3>
                          {book.title}
                        </h3>
                        <p>
                          {book.description}
                        </p>
                        <p>
                           {book.status}
                        </p>
                        <Button onClick={() => this.handleDeleteBook(book._id)}> Delete Book</Button>
                      </Carousel.Caption>
                    </Carousel.Item>)
                    }
              </Carousel>

        ) : (
          <h3>No Books Found :</h3>
        )}
        <Button onClick={this.handleModalShow} variant="dark">Add Book</Button>
        <BookFormModal 
          showNewBookForm={this.state.showNewBookForm} 
          onModalClose={this.handleModalClose}
          onModalSave={this.saveBook}   />

      </>
    )
  }
}

const AuthBestBook = withAuth0(BestBooks);

export default AuthBestBook;
