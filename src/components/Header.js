import { useState } from 'react'
import { StyleSheet, View, TextInput, Text} from 'react-native';
function Header({ onChangeText }) {
    const [searchQuery, setSearchQuery] = useState('');

    return ( 
        <View style={styles.formContainer}>
            <Text style={{fontSize: 25, color: '#fff'}}>Crypto app</Text>
            <TextInput 
                placeholder='Search'
                style={styles.searchInput}
                onChangeText={onChangeText}
            />
            {/* <TouchableOpacity style={styles.searchButton}>
                <Image source='https://img.icons8.com/ios-glyphs/30/000000/search--v1.png' style={{width: '20px', height: '20px'}}/>
            </TouchableOpacity> */}
        </View>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 25,
        color: '#fff',
    },

    searchInput: {
        width: 90,
        borderBottomWidth: 1,
        borderColor: '#fff',
        height: 37
    },
    
    formContainer: {
        width: '100%',
        flex: 1,
        backgroundColor: '#555555',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
})

export default Header;