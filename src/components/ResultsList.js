import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import ResultsDetial from './ResultDetial';

const ResultsList = ( { title, result, navigation } ) => {

    if(!result.length) {return null;}


return (
    <View style={styles.container}>
        <Text style={styles.title}> {title} </Text>
        <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={result}
            keyExtractor={ (result)=> result.id }
            renderItem={ ({ item }) => { 
                return (
                <TouchableOpacity onPress={ () => navigation.navigate('Results', {id: item.id})} >  
                <ResultsDetial result ={item} />
                </TouchableOpacity> 
                );
                    } }
        />
    </View>
);};

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft:15,
        marginBottom: 5
    },
    container:{
        marginBottom: 10
    } 




});
export default withNavigation(ResultsList);
