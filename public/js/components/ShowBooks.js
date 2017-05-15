import React, {Component} from "react";
import "!style-loader!css-loader!./../../style/showBooks.css";
import Header from "./Header";

export default class Books extends Component {

    componentWillMount() {
        this.props.showBooks();
    }

    render() {
        return (
            <div>
                <Header/>
                <BookList bookList={this.props.bookList}/>
            </div>
        )
    }
}

class BookList extends Component {
    render() {
        const bookList = this.props.bookList.map((val, index) => {
            return <div key={index} className="bookList">
                <div className="bookName">
                    {val.bookName}
                </div>
                <div className="bookPicture">
                    <img src={val.bookPicture}/>
                </div>
            </div>
        });

        return (<div>
            {bookList}
        </div>)
    }
}
