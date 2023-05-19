import { View, 
    Text, 
    Image
} from 'react-native';
import styles from './stylesListNews';

export const ListNews = (props) => (
    <View style={styles.accountPost}>
        <Image style={styles.story} source={{ uri: props.image }} />
        <Text style={styles.nameAccount}>{props.name}</Text>
    </View>
)