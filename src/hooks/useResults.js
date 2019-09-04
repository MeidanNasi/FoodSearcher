import { useState, useEffect} from 'react';
import yelp from '../api/yelp';
// useEffect is a hook that allows us to run some snippet of code
// just one time when out component is first rendered to the screen

export default ()=>{

    const [results, setResults] = useState([]);
    const [errorMessege, setErrorMessage] = useState('')

    const searchApi = async(searchTerm)=>{
        try{
            const response = await yelp.get('/search' , {
                params: {
                    limit: 50,
                    term: searchTerm,
                    location: 'san jose'
                }
            });
            setResults(response.data.businesses);
        } catch(err) { setErrorMessage('Somthing went wrong'); }
    };

    useEffect(()=>{ // will run it only one time! when the component first rendered.
        searchApi('pasta');
    }, []);

    return [searchApi, results, errorMessege];
};