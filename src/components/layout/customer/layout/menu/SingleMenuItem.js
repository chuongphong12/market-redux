import { Link } from 'react-router-dom';

function SingleMenuItem(props) {
	let { category } = props;

	return (
		<li>
			<Link to={'/product/' + category?.id}>{category?.name}</Link>
		</li>
	);
}

export default SingleMenuItem;
