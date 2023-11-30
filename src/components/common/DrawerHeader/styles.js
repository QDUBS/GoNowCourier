import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  body: {
    backgroundColor: '#f3f3f3',
    flexDirection: 'column',
  },
  header: {
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    paddingBottom: 20,
  },
  imageContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  profile__image: {
    width: 70,
    height: 70,
    borderRadius: 100,
    marginRight: 10,
  },
  name: {
    color: '#000',
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 7,
  },
  view: {
    color: '#a00',
    fontSize: 13,
    fontWeight: '400',
    marginLeft: 1,
  },
  profile__button: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 5,
  },
  container: {
    backgroundColor: '#fff',
    marginTop: 5,
    paddingVertical: 15,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rating: {
    color: '#000',
    fontSize: 13,
    fontWeight: '500',
    marginLeft: 5,
  },
  ratingText: {
    color: '#666',
    fontSize: 13,
    fontWeight: '400',
    marginLeft: 5,
  },
  bottomContainer: {
    height: 250,
    backgroundColor: 'white',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    paddingHorizontal: 10,
    marginTop: 5,
    paddingBottom: 20,
    position: 'relative',
  },
  bottomContainerButton: {
    width: '100%',
    backgroundColor: '#d8ebd3',
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 12,
    alignSelf: 'flex-end',
  },
  become: {
    color: '#000',
    fontSize: 14,
    fontWeight: '500',
    marginLeft: 5,
  },
  earn: {
    color: '#666',
    fontSize: 12,
    fontWeight: '400',
    marginLeft: 5,
  },
});
