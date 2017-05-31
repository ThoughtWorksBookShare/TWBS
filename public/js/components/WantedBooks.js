import React, {Component} from 'react';

export default class WantedBooks extends Component {
    componentDidMount() {
        this.props.getWantedBooks();
    }

    turn() {
        window.location = "#/wantedBooks/addDesiredBook";
    }

    render() {
        const desiredBooks = this.props.desiredBooks.map((ele, index) => {
            return <div key={index}>
                <div><img src={ele.bookPicture}/></div>
                <div>{ele.desiredBookName}</div>
                <div>{ele.desiredBookAuthor}</div>
                <div>{ele.count}人想看</div>
                <button>+</button>
            </div>
        });
        return (
            <div>
                <button className="uploadDesiredBook" onClick={this.turn}>我还想看</button>
                {desiredBooks}
            </div>
        )
    }
}
