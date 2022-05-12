import {Component} from "react";
import {Link} from "react-router-dom";

class SingleMenuItem extends Component {

    render() {

        let {singleMenuItem} = this.props;


        return (
            <li>
                <Link to="page-about.html">{singleMenuItem.name}</Link>
            </li>
        )
    }


}

export default SingleMenuItem;