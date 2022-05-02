import React, {useEffect, useState} from 'react';
import Tmdb from './Tmdb'
import Row from './Movierow';

const Heroes = () => {

    const [movieList, setmovieList] = useState([]);

    useEffect(()=>{
        const loadAll = async () => {
            //Pegando a lista TOTAL
            let list = await Tmdb.getHomeList();
            setmovieList(list)
        }
        loadAll();
    }, [])
    const HeroesFilter = movieList.filter(obj=>(obj.title == 'Super hero'))
    return (
        <div>
            <div className='main-movie'>

            </div>
            <div className='container-movies'>
                {HeroesFilter.map((item, key) => (
                    <Row key={key} title={item.title} items={item.items}/>
                ))}
            </div>
        </div>
        

    );
}
 
export default Heroes;