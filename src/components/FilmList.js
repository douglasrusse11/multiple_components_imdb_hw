import Film from './Film';

const FilmList = ({films}) => {
    const filmNodes = films.map((film) => {
        return <Film title={film.name} url={film.url} key={film.id} />;
    });
    console.log(filmNodes)
    return <ul>{filmNodes}</ul>;
}

export default FilmList;