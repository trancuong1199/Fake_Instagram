import React from 'react';
import { 
    View, 
    Text, 
    StyleSheet, 
    Image,
    FlatList,
    SafeAreaView,
    RefreshControl
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
function Main() {

    // Data
    const accounts = [
        {
            name: 'Black',
            image: 'https://khoinguonsangtao.vn/wp-content/uploads/2022/09/hinh-nen-hoat-hinh-anh-hoat-hinh-1.jpg',
            blog: 'https://i.pinimg.com/originals/91/cb/54/91cb545176720cc851687a7263984600.jpg'
        },
        {
            name: 'White',
            image: 'https://antimatter.vn/wp-content/uploads/2022/07/hinh-anh-hoat-hinh-3d-de-thuong.jpg',
            blog: 'https://nhadepso.com/wp-content/uploads/2023/01/tong-hop-50-hinh-anh-thien-nhien-dep-hung-vi-tho-mong_1.jpg'
        },
        {
            name: 'Red',
            image: 'https://thuthuatnhanh.com/wp-content/uploads/2020/09/hinh-nen-hoat-hinh-de-thuong-chu-cho-nam-the-luoi-ngo-nghinh.jpg',
            blog: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5COedudvSvhZ2ChP4oHJy3fi7AP_FrAyTBw&usqp=CAU'
        },
        {
            name: 'Green',
            image: 'https://inkythuatso.com/uploads/thumbnails/800/2022/06/hinh-nen-hoat-hinh-3d-cho-dien-thoai-1-inkythuatso-02-13-02-07.jpg',
            blog: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUqUnRPDv5N7vvN8JFvwnf8Xvy3L8_HEAihQ&usqp=CAU'
        },
        {
            name: 'Yellow',
            image: 'https://img.lovepik.com/free-png/20210926/lovepik-cute-cartoon-dog-png-image_401406163_wh1200.png',
            blog: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9t1Y9_5BEXf8wJ5MZXjlDTu1jQKntdgPc8g&usqp=CAU'
        },
        {
            name: 'Pink',
            image: 'https://toigingiuvedep.vn/wp-content/uploads/2021/06/anh-nen-hoat-hinh-de-thuong-cute.jpg',
            blog: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFaCbke0I3vua_k_l5Dr1-_s6jvIcpdlOocQ&usqp=CAU'
        },
        {
            name: 'Gray',
            image: 'https://haycafe.vn/wp-content/uploads/2022/01/Tai-anh-hoat-hinh-nam-ngau-de-thuong.png',
            blog: 'https://i.pinimg.com/originals/00/6e/3b/006e3b7562cec2b15a448fe514048420.jpg'
        },
        {
            name: 'Tree',
            image: 'https://i.pinimg.com/originals/f0/21/2b/f0212bac3c7446931b1fbf2fbbe49936.png',
            blog: 'https://vcdn1-dulich.vnecdn.net/2020/11/21/1-1605972569.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=Gs5VBQ9eOvNSi6tNWUhkRQ'
        },
        {
            name: 'Meme',
            image: 'https://inkythuatso.com/uploads/thumbnails/800/2023/03/1-gau-trang-hoat-hinh-buon-khoc-inkythuatso-03-10-13-12.jpg',
            blog: 'https://thuelens.com/wp-content/uploads/2020/08/iStock-517188688.jpg'
        },
        
    ]

    // Refresh data When the ScrollView is at scrollY: 0
    const [refreshing, setRefreshing] = React.useState(false);

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        setTimeout(() => {
        setRefreshing(false);
        }, 2000);
    }, []);

    // Return image and name for ListNews 
    const ListNews = (props) => (
        <View style={styles.accountPost}>
            <Image style={styles.story} source={{ uri: props.image }} />
            <Text style={styles.nameAccount}>{props.name}</Text>
        </View>
    )
    
    // Return name, image, blog for ListBlogs 
    const ListBlogs = (props) => (
        <View style={styles.newsMain}>
            <View style={styles.newsMainTop}>
                <View style={styles.newsMainTopRight}>
                    <Image style={styles.avatar} source={{ uri: props.image }} />
                    <Text style={styles.newsMainName}>{props.name}</Text>
                </View>
                <Text style={styles.more}>...</Text>
            </View>
            <Image style={styles.newsMainPost} source={{uri: props.blog}} />
            <View style={styles.newsMainIcons}>
                <View style={styles.icons}>
                    <Ionicons name="heart" size={20} marginRight={5} color='red'/>
                    <Ionicons name="search-outline" size={20} marginRight={5}/>
                    <Ionicons name="paper-plane-outline" size={18} marginRight={5}/>
                </View>
                <Ionicons name="bookmark-outline" size={18} marginRight={5}/>
            </View>
            <Text style={styles.newsMainTitle}>Like by <Text style={styles.likesDetail}>Tran Cuong</Text> and <Text style={styles.likesDetail}>B.A.P company</Text></Text>
        </View>
    );
    
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.layout}>
                <View style={styles.header}>
                    <Text style={styles.nameApp}>Instagram</Text>
                    <View style={styles.icons}>
                        <Ionicons name="heart-outline" size={20} marginLeft={5}/>
                        <Ionicons name="search-outline" size={20} marginLeft={5}/>
                        <Ionicons name="chatbubble-ellipses-outline" size={18} marginLeft={5}/>
                    </View>
                </View>
                <View style={styles.newPost}>
                    <FlatList
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        removeClippedSubviews
                        data={accounts}
                        renderItem={({item}) => <ListNews name={item.name} image={item.image}/>}
                        keyExtractor={item => item.name}
                    />
                </View>
                <Text style={styles.line}></Text>
            </View>
            <FlatList
                style={styles.flatlist}
                refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                }
                data={accounts}
                renderItem={({item}) => <ListBlogs name={item.name} image={item.image} blog={item.blog} />}
                keyExtractor={item => item.name}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    flatlist: {
        paddingLeft: 10,
        paddingRight: 10,
    },  
    layout: {
        padding: 10,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    icons: {
        flexDirection: 'row',
    },
    nameApp: {
        fontSize: 25,
        fontWeight: '700',
    },
    story: {
        width: 60,
        height: 60,
        borderRadius: 50,
        borderWidth: 3,
        borderColor: '#FF8501'
    },
    newPost: {
        flexDirection: 'row',
        marginTop: 20,
    },
    nameAccount: {
        fontSize: 17,
        fontWeight: '500',
    },
    accountPost: {
        alignItems: 'center',
        marginRight: 10,
    },
    line: {
        height: 1,
        width: '100%',
        backgroundColor: 'gray',
        marginTop: 10,
        marginBottom: 10,
    },
    newsMain: {
        marginBottom: 20
    },
    newsMainIcons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },  
    newsMainName: {
        fontSize: 14,
        fontWeight: '500',
    },
    newsMainTop: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    newsMainTopRight: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10
    },
    avatar: {
        width: 30,
        height: 30,
        borderRadius: 50,
        marginRight: 10
    },
    more: {
        fontSize: 20,
        fontWeight: '800',
    },
    newsMainPost: {
        width: '100%',
        height: 300,
        marginBottom: 8
    },
    newsMainTitle: {
        fontSize: 13,
        fontWeight: 600,
        marginTop: 10
    },
    likesDetail: {
        fontWeight: 700
    },
})

export default Main;

