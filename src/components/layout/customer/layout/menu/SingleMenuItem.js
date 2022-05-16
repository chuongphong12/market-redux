import {Link} from "react-router-dom";

function SingleMenuItem(props) {
    let {singleMenuItem} = props;

    return (
        <li>
            <Link to="page-about.html">{singleMenuItem.name}</Link>
        </li>
    )
}

export default SingleMenuItem;