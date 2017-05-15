import React, {Component} from "react";

export default class Books extends Component {

    componentWillMount() {
        this.props.showBooks();
    }

    render() {
        return (
            <div>
                <BookList bookList={this.props.bookList}/>
            </div>
        )
    }
}

class BookList extends Component {
    render() {
        const bookList = this.props.bookList.map((val, index) => {
            return <div key={index}>
                <div>
                    {val.bookName}
                </div>
                <div>
                    <img src={val.bookPicture}/>
                </div>
            </div>
        });

        return (<div>
            {bookList}
        </div>)
    }
}
