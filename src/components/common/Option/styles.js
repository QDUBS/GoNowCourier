import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderBottomColor: 'lightgrey',
    borderBottomWidth: 0.5,
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  name: {
    fontSize: 17,
    fontWeight: '400',
    color: 'black',
  },
  description: {
    color: 'gray',
    fontSize: 14,
    fontWeight: '400',
    marginVertical: 5,
  },
  price: {
    fontSize: 14,
    fontWeight: '500',
    color: 'black',
  },
  image: {
    width: 100,
    height: 100,
  },
});
