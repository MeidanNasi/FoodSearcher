import React, {useState} from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

import SearchBar from '../components/SerachBar';
import yelp from '../api/yelp';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';


const SearchScreen = () => {

    const [term, setTerm] = useState('');
    const [searchApi, results, errorMessege] = useResults();

    const filterResultsByPrice = (price) =>{
        return results.filter(result => { return result.price === price; });
    };

    return(
        
        //flex 1 will say react to fill up all the visiable space that available
        <View style = {{ flex:1 }}> 
        <SearchBar 
            term={term}
            onTermChange={setTerm} //call back from parent to child
            onTermSubmit={()=>searchApi(term)} //call back from parent to child
        />
        { errorMessege ? <Text color='red '>{errorMessege}</Text> : null }
       

        <ScrollView>
        <ResultsList title="Cost Effective" result={filterResultsByPrice('$')} />
        <ResultsList title="Bit Pricier"  result={filterResultsByPrice('$$')}  />
        <ResultsList title="Big Spender"  result={filterResultsByPrice('$$$')} />
        </ScrollView>
        </View>

    );

};

const styles = StyleSheet.create({});
export default SearchScreen;