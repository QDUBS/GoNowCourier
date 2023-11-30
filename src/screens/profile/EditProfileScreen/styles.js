import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
  header: {
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 15,
    paddingBottom: 25,
  },
  headerFlex: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 16,
    fontWeight: '500',
    color: 'black',
    marginLeft: 20,
  },
  headerButton: {
    fontSize: 14,
    fontWeight: '400',
    color: '#a1705a',
  },
  itemContainer: {
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 15,
    paddingBottom: 25,
    borderBottomColor: '#ccc',
    borderBottomWidth: 0.4,
  },
  itemContainer2: {
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 15,
    paddingBottom: 25,
    borderBottomColor: '#ccc',
    borderBottomWidth: 0.4,
  },
  itemContainerFlex: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemContainerText: {
    fontSize: 14,
    fontWeight: '400',
    color: 'black',
    marginLeft: 10,
  },
  itemContainerButton: {
    fontSize: 14,
    fontWeight: '400',
    color: '#a1705a',
  },
});
