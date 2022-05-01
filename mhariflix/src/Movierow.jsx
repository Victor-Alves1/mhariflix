
import './Movierow.css'

const Row = ({title, items}) => {
    return (
        <div className="Container-row">
            <h2>{title}</h2>
            <div>
                {items.results.length > 0 && items.results.map((items, key)=>(
                    <img src={`https://image.tmdb.org/t/p/w300${items.poster_path}`} alt="Capa do filme" />
                ))}
            </div>
        </div>
    );
}
 
export default Row;