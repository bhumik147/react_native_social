import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import Autolink from 'react-native-autolink';

const Screen = Dimensions.get('window');

const AVATAR_SIZE = Screen.width * 0.15;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    padding: 10,
    flexWrap: 'wrap',
  },
  rowIndented: {
    marginLeft: 30,
  },
  avatar: {
    width: AVATAR_SIZE,
    height: AVATAR_SIZE,
    borderRadius: AVATAR_SIZE / 2,
    marginRight: 10,
  },
  right: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  textName: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#222222',
  },
  textUsername: {
    fontSize: 15,
    marginLeft: 5,
    color: '#4f5153',
  },
  textStatus: {
    fontSize: 15,
    color: '#4f5153',
  },
  actions: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  heart: {
    width: 20,
    height: 20,
    tintColor: '#6e7f8d',
  },
  heartFilled: {
    tintColor: '#df245e',
  },
  dislike: {
    width: 20,
    height: 20,
  },
  dislikebutton: {
    marginLeft: 20
  },
  textDate: {
    color: '#6e7f8d',
    fontSize: 14,
    marginLeft:'auto'
  },
});

export const Status = ({
  user,
  status,
  isLiked,
  isdisLiked,
  onRowPress,
  onHeartPress,
  onDislikePress,
  publishedAt,
  indent,
}) => (
  <TouchableOpacity onPress={onRowPress}>
    <View style={[styles.row, indent && styles.rowIndented]}>
      <View>
        <Image source={{ uri: user.avatarUri }} style={styles.avatar} />
      </View>
      <View style={styles.right}>
        <View style={styles.header}>
          <Text style={styles.textName}>{user.name}</Text>
          <Text style={styles.textUsername}>{user.username}</Text>
        </View>
        <Autolink text={status} style={styles.textStatus}>{status}</Autolink>

        <View style={styles.actions}>
          <TouchableOpacity onPress={onHeartPress}>
            {isLiked ? (
              <Image
                style={[styles.heart, styles.heartFilled]}
                source={require('../assets/icons/heart.png')}
              />
            ) : (
              <Image
                style={styles.heart}
                source={require('../assets/icons/heart-border.png')}
              />
            )}
          </TouchableOpacity>
          <TouchableOpacity style = {styles.dislikebutton} onPress={onDislikePress}>
            {isdisLiked ? (
              <Image
                style={styles.dislike}
                source={require('../assets/icons/dislike.png')}
              />
            ) : (
              <Image
                style={styles.dislike}
                source={require('../assets/icons/dislike-border.png')}
              />
            )}
          </TouchableOpacity>
          <Text style={styles.textDate}>
            {formatDistanceToNow(new Date(publishedAt), { addSuffix: true })}
          </Text>
        </View>
      </View>
    </View>
  </TouchableOpacity>
);

export const Separator = () => (
  <View style={{ height: 1, flex: 1, backgroundColor: '#e6ecf0' }} />
);
