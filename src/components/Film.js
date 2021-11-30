import './Film.css';

const Film = ({title, url}) => {
    return (
        <li>
            <a href={url} class="Film">{title}</a>
        </li>
    );
}

export default Film;