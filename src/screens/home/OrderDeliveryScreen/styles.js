import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    height: '100%',
  },
  bottomSheet: {
    // paddingHorizontal: 5,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    paddingTop: 10,
    paddingBottom: 25,
    borderBottomWidth: 3,
    borderColor: 'lightgrey',
  },
  text: {
    color: 'black',
    fontSize: 25,
    letterSpacing: 1,
  },
  name: {
    color: 'black',
    fontSize: 22,
    letterSpacing: 1,
    paddingBottom: 20,
    paddingHorizontal: 12,
  },
  secondRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 20,
    paddingHorizontal: 15,
  },
  secondRowText: {
    fontSize: 18,
    fontWeight: '400',
    color: 'grey',
    marginLeft: 10,
  },
  thirdRow: {
    marginTop: 10,
    paddingTop: 15,
    borderTopWidth: 2,
    borderColor: 'lightgrey',
    paddingHorizontal: 15,
  },
  orderItemsHeading: {
    color: 'black',
    fontSize: 18,
    fontWeight: '500',
    letterSpacing: 1,
    paddingBottom: 10,
  },
  orderItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  orderItemText: {
    fontSize: 16,
    color: 'grey',
    fontWeight: '400',
    letterSpacing: 0.5,
    marginBottom: 5,
  },
  buttonContainer: {
    width: '100%',
    paddingHorizontal: 7,
    position: 'absolute',
    bottom: 30,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
    paddingVertical: 12,
  },
});
