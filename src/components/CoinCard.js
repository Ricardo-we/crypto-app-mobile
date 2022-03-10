import { useState, useRef } from "react";
import { StyleSheet, TouchableOpacity, Image, Animated, Text, View } from "react-native";

function CoinCard({ coin }) {
    const [detailsVisible, setDetailsVisible] = useState(false);
    const openAnimation = useRef(new Animated.Value(0)).current;
    const animationHandler = Animated.timing(openAnimation, {
        toValue: 100,
        duration: 1000
    })
    
    return ( 
        <TouchableOpacity 
            style={styles.coinCardWraper} 
            onPress={() => {
                    if(detailsVisible){
                        setDetailsVisible(false)
                        animationHandler.start()
                    }
                    else {
                        setDetailsVisible(true)
                        openAnimation.setValue(0)
                    }
                }
            }
        >   
            <View style={styles.coinHeaderContainer}>  
                <View style={styles.containerRow}>
                    <Image style={styles.coinImage} source={{uri: coin.image}} />
                    <Text style={styles.coinHeaderName}>{coin.name}</Text>
                </View>

                <View style={styles.containerCol}>
                    <Text style={{textAlign: 'right', color: '#EDEDED'}}>${coin.current_price}</Text>
                    <Text style={
                        coin.price_change_percentage_24h > 0 ? styles.positivePrice
                        : styles.negativePrice
                    }
                    >
                        {coin.price_change_percentage_24h}
                    </Text>
                </View>
            </View>

            <Animated.View style={{...styles.coinCardContentsContainer, height: openAnimation}}>
                    <Text style={styles.coinCardContent}>
                        Atl change porcent: {coin.current_price}
                    </Text>
                    <Text style={styles.coinCardContent}>
                        Last update {coin.last_updated? coin.last_updated.split("T")[0]: "loading"}
                    </Text>
                    <Text style={styles.coinCardContent}>
                        Market cap: {coin.market_cap}
                    </Text>
            </Animated.View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    coinHeaderContainer:{
        // width: '100%',
        flex: 1,
        flexDirection: 'row',
        alignItems: 'baseline',
        // flexWrap: 'wrap',
        justifyContent: 'space-between',
    },

    coinImage: {
        width: 40,
        height: 40,
        marginRight: 10
    }, 

    coinHeaderName: {
        color: '#fff',
        textAlign: 'left',
        width: 80
    },

    containerCol: {
        flex: 1, 
        flexDirection: 'column', 
        alignItems: 'flex-end', 
        justifyContent: 'space-evenly',
        textAlign: 'left',
        alignSelf: 'flex-end'
    },

    containerRow: {
        alignSelf: 'flex-start',
        flex: 1, 
        flexDirection: 'row', 
        flexWrap: 'wrap',
        alignItems: 'flex-start', 
        justifyContent: 'space-around'
    },

    positivePrice: {
        color: '#74ED23',
        textAlign: 'right'
    },

    negativePrice: {
        color: '#EA1818', 
        textAlign: 'right'
    },

    coinCardContentsContainer: {
        width: '100%',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'column',
        backgroundColor: '#fff',
        overflow: 'hidden',
        height: 0
    },

    coinCardContent:{
        width: '100%',
        color: '#fff',
        backgroundColor: '#000',
        padding: 5
    },

    coinCardWraper: {
        backgroundColor: '#000',
        overflow: 'hidden'
    }
})

export default CoinCard;