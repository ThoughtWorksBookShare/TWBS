import React, {Component} from 'react';

export default class WantedBooks extends Component {
    componentDidMount() {
        this.props.getWantedBooks();
    }

    turn() {
        window.location = "#/wantedBooks/addDesiredBook";
    }

    getCookieUser() {
        let user;
        let allCookies = document.cookie.split("; ");
        allCookies.forEach((val) => {
            let cookie = val.split("=");
            let cookieName = cookie[0];
            let cookieValue = cookie[1];
            if (cookieName === "user") {
                user = cookieValue;
            }
        });
        return user;
    }

    increaseCount(_id) {
        let user = this.getCookieUser();
        this.props.changeCount(_id,user);
    }

    render() {
        const desiredBooks = this.props.desiredBooks.map((ele, index) => {
            return <div key={index}>
                <div><img src={ele.bookPicture}/></div>
                <div>{ele.desiredBookName}</div>
                <div>{ele.desiredBookAuthor}</div>
                <div>{ele.count}人想看</div>
                <button onClick={this.increaseCount.bind(this,ele._id)}>+</button>
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
