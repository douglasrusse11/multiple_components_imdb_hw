import './Film.css';

const Film = ({title, url}) => {
    return (
        <li>
            <a href={url} className="Film">{title}</a>
        </li>
    );
}

export default Film;