import React, {Component} from "react";
import {Link} from 'react-router'
import "!style-loader!css-loader!./../../style/showBooks.css";
import Header from "./Header";

export default class Books extends Component {

    componentWillMount() {
        this.props.showBooks();
    }

    turn(){
        window.location='#/books/addBook';
    }
    render() {
        return (
            <div>
                <Header/>
               <button className="upLoadBook" onClick={this.turn}>我要上传</button>
                <BookList bookList={this.props.bookList}/>
            </div>
        )
    }
}

class BookList extends Component {
    render() {
        const bookList = this.props.bookList.map((val, index) => {
            return <div key={index} className="bookList">
                <div className="bookPicture">
                    <Link to={`/books/book:${val._id}`}><img src={val.bookPicture}/></Link>
                </div>
                <div className="bookName">
                    {val.bookName}
                </div>
            </div>
        });

        return (<div id="books">
            {bookList}
        </div>)
    }
}
