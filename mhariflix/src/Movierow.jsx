
import './Movierow.css'

const Row = ({title, items}) => {
    return (
        <div className="container-row">
            <h2>{title}</h2>
            <div className='row-movies'>
                {items.results.length > 0 && items.results.map((items, key)=>(
                    <img src={`https://image.tmdb.org/t/p/w300${items.poster_path}`} alt="film banner" />
                ))}
            </div>
        </div>
    );
}
 
export default Row;