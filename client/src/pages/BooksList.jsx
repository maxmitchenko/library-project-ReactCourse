import React, { Component } from 'react'
import ReactTable from 'react-table'
import api from '../api'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-table/react-table.css'

    class DeleteBook extends Component {
        deleteBook = event => {
            event.preventDefault()
    
            if (
                window.confirm(
                    `Do you want to delete the book ${this.props.title} permanently?`,
                )
            ) {
                api.deleteBookById(this.props.id)
                window.location.reload()
            }
        }
    
        render() {
            return <button className='btn btn-danger' onClick={this.deleteBook}>Delete</button>
        }
    }
    

class BooksList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            books: [],
            columns: [],
            isLoading: false,
        }
    }

    componentDidMount = async () => {
        this.setState({ isLoading: true })

        await api.getAllBooks().then(books => {
            this.setState({
                books: books.data.data,
                isLoading: false,
            })
        })
    }

    render() {
        const { books, isLoading } = this.state
        console.log('TCL: BooksList -> render -> books', books)

        const columns = [
            {
                Header: 'ID',
                accessor: '_id',
                filterable: true,
            },
            {
                Header: 'Title',
                accessor: 'title',
                filterable: true,
            },
            {
                Header: 'Author',
                accessor: 'author',
                filterable: true,
            },
            {
                Header: 'Student',
                accessor: '_student',
                filterable: true,
            },             
            {
                Header: '',
                accessor: '',
                Cell: function(props) {
                    return (
                        <span>
                            <DeleteBook id={props.original._id} />
                        </span>
                    )
                },
            },
        ]

        let showTable = true
        if (!books.length) {
            showTable = false
        }

        return (
            <div>
                {showTable && (
                    <ReactTable
                        data={books}
                        columns={columns}
                        loading={isLoading}
                        defaultPageSize={10}
                        showPageSizeOptions={true}
                        minRows={0}
                    />
                )}
            </div>
        )
    }
}

export default BooksList