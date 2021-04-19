import React, { Fragment, useState, useEffect } from 'react';
import { StyleSheet, TextInput, FlatList } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import Icon from '../components/Icon';
import { Text, View } from '../components/Themed';
import { styleConfigs } from '../configs/styleConfigs';
import { fetchPosts } from '../services/apiMethods';

export default function HomeScreen() {
  const [posts, setPosts]: any = useState([]);
  const [loading, setLoading]: any = useState(false);

  const navigation = useNavigation();

  // fetch all posts 
  useEffect(() => {
    (async () => {
      setLoading(true);
      const posts = await fetchPosts();
      if (posts && posts.status === 'ok' && posts.data && posts.data.length > 0) {
        setPosts(posts.data);
      }
      setLoading(false);
    })()
  }, []);

  const renderItem = ({ item }: any) => {
    return (
      <Fragment>
        <TouchableOpacity onPress={() => {
          navigation.navigate("Detail", {
            postId: item.id
          });
        }}>
          <View style={styles.listItemContainer}>
            <View style={styles.listItemTextContainer}>
              <Text style={styles.userText}>User ID : {item.userId}</Text>
              <Text style={styles.listItemTitle} numberOfLines={2}>{item.title}</Text>
              {/* <Text>postID: {item.id}</Text> */}
            </View>
          </View>
        </TouchableOpacity>
      </Fragment>
    )
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Posts</Text>
      </View>
      <View style={styles.searchBox}>
        <Icon name="search-outline" color={styleConfigs.lightGreyColor} />
        <TextInput placeholder="search.." style={styles.searchInput} />
      </View>
      <View style={styles.flatlistContainer}>
        {(() => {
          let comp = null;
          if (loading) {
            comp = (
              <View style={styles.noData}>
                <Text>
                  Loading posts....
              </Text>
              </View>
            );
          } else if (posts && posts.length > 0) {
            comp = (
              <FlatList
                keyExtractor={(item: any) => `list-item-id-${item.id}`}
                data={posts}
                renderItem={renderItem}
              />
            )
          } else {
            comp = (
              <View style={styles.noData}>
                <Text>
                  No Data
              </Text>
              </View>
            )
          }
          return comp;
        })()}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingHorizontal: 25,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginVertical: 20,
    color: styleConfigs.lightGreyColor,
    paddingHorizontal: 5,
  },
  searchBox: {
    borderWidth: 1,
    flexDirection: 'row',
    padding: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    borderColor: styleConfigs.lightGreyColor
  },
  searchInput: {
    paddingLeft: 10,
    flex: 1,
    fontSize: 18,
    // borderWidth 1,
    // borderColor: 'red',
  },
  flatlistContainer: {
    height: '78%',
    marginVertical: 30,
  },
  listItemTextContainer: {
    backgroundColor: styleConfigs.lightestGreyColor,
    borderRadius: 15,
    padding: 20,
    paddingHorizontal: 20,
  },
  listItemContainer: {
    marginVertical: 10,
  },
  listItemTitle: {
    fontWeight: 'bold',
    fontSize: 18,
    color: styleConfigs.purple7,
  },
  userText: {
    color: styleConfigs.lightGreyColor,
    paddingBottom: 5,
    fontWeight: 'bold',
    fontSize: 14
  },
  noData: {
    alignItems: 'center',
  }
});
