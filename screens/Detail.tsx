import React, { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { Text, View } from '../components/Themed';
import { fetchPost } from '../services/apiMethods';
import { styleConfigs } from '../configs/styleConfigs';

export default function DetailScreen(props: any) {
  const [postData, setPostData]: any = useState(null);

  const postID = props.route?.params?.postId;

  // fetch the post data based on postID
  useEffect(() => {
    (async () => {
      const post = await fetchPost(postID);
      if (post?.status === 'ok' && post?.data) {
        setPostData(post.data);
      }
    })()
  }, [postID]);

  return (
    <View style={styles.container}>
      {postData ? (
        <View style={styles.postContainer}>
          <Text style={styles.postUserId}>User ID : {postData.userId}</Text>
          <Text style={styles.postId}>Post ID : {postData.id}</Text>
          <Text style={styles.postTitle}>{postData.title}</Text>
          <Text style={styles.postBody}>{postData.body}</Text>
        </View>
      ) : (
        <View>
          <Text>
            No Data
          </Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingHorizontal: 25,
  },
  postContainer: {
    // borderWidth: 1,
    // borderColor: 'red',
  },
  postTitle: {
    fontSize: 26,
    fontWeight: 'bold',
    marginVertical: 20,
    color: styleConfigs.primaryColor,
  },
  postBody: {
    fontSize: 24,
    marginVertical: 20,
    color: styleConfigs.lightGreyColor,
  },
  postUserId: {
    color: styleConfigs.lightGreyColor,
    paddingBottom: 5,
    fontWeight: 'bold',
    fontSize: 18
  },
  postId: {
    color: styleConfigs.lightGreyColor,
    paddingBottom: 5,
    fontWeight: 'bold',
    fontSize: 18
  },
  noData: {
    alignItems: 'center',
  }
});
