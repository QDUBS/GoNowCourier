import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderColor: '#666',
    borderWidth: 2,
    borderRadius: 12,
    marginVertical: 10,
  },
  image: {
    width: '25%',
    borderRadius: 10,
    margin: 5,
  },
  info: {
    flex: 1,
    paddingTop: 10,
    paddingBottom: 15,
  },
  name: {
    color: 'black',
    fontSize: 18,
    fontWeight: '500',
  },
  address: {
    color: 'grey',
  },
  delivery: {
    color: 'black',
    fontSize: 15,
    fontWeight: '500',
    marginTop: 10,
    marginBottom: 2,
  },
  name2: {
    color: 'black',
    marginBottom: 1,
  },
  price: {
    color: 'black',
    fontSize: 15,
    fontWeight: '400',
  },
});
