import React, {useEffect, useState} from 'react';
import Tmdb from './Tmdb'
import Row from './Movierow';

const Action = () => {

    const [movieList, setmovieList] = useState([]);

    useEffect(()=>{
        const loadAll = async () => {
            //Pegando a lista TOTAL
            let list = await Tmdb.getHomeList();
            setmovieList(list)
        }
        loadAll();
    }, [])
    const ActionFilter = movieList.filter(obj=>(obj.title == 'Action'))
    return (
        <div>
            <div className='Main-movie'>

            </div>
            <div className='container-movies'>
                {ActionFilter.map((item, key) => (
                    <Row key={key} title={item.title} items={item.items}/>
                ))}
            </div>
        </div>
        

    );
}
 
export default Action;