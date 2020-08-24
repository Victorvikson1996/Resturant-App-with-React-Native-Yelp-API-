import React, {useEffect, useState} from 'react';
import yelp from '../api/yelp';


export default () => {
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessege] = useState('');

    const searchApi = async (searchTerm) => {
        try {
            const response = await yelp.get('/search',  {
                params: {
                    limits: 50,
                    term: searchTerm,
                    location: 'san jose'
                }
            });
            setResults(response.data.businesses);
        } catch (err) {  
            setErrorMessege('Something Went Wrong');

        }
    };

    //call searchApi when Component 
    //is first Rendered. Bad Code

    useEffect(() => {
        searchApi('pasta');
    }, []);
return [searchApi, results, errorMessage]
};