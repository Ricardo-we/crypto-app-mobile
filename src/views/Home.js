import {  ScrollView, StatusBar } from 'react-native';
import { useState, useEffect } from 'react';
import getCoins from '../api-requests/coins-requests';
import CoinCard from '../components/CoinCard';
import Header from '../components/Header';

function Home({ navigate }) {
    const [coins, setCoins] = useState([{id:0, name:'bitcoin', symbol:'btc', atl_change_percentage: '', current_price: '',}]);
    const [searchQuery, setSearchQuery] = useState('');

    const getCoinsHandler = async () => {
        const response = await getCoins();
        setCoins(response);
    }

    useEffect(() => {
        getCoinsHandler()
    }, [])  

    return ( 
        <ScrollView style={{backgroundColor: '#000'}}>
            <StatusBar/>
            <Header onChangeText={text => {setSearchQuery(text.toLowerCase())}}/>
            {coins.filter(coin => 
                coin.name.toLowerCase().includes(searchQuery) || 
                coin.symbol.toLowerCase().includes(searchQuery)
            ).map(coin => <CoinCard key={coin.id} coin={coin}/>)
            }
        </ScrollView>
    );
}

export default Home;