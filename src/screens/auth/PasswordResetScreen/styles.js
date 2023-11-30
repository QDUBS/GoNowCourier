import { StyleSheet } from "react-native";

export default StyleSheet.create({
  content: {
    backgroundColor: "#f3f3f3",
    padding: 10,
  },
  options__container: {
    backgroundColor: "#fff",
    paddingLeft: 15,
    marginBottom: 15,
    borderRadius: 8,
  },
  form__input__container: {
    marginBottom: 15,
  },
  form__label: {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 12,
    color: "#818181",
  },
  inputContainer: {
    height: 46,
    borderWidth: 1,
    borderColor: "#229843",
    borderStyle: "solid",
    background: "#FBFBFB",
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    paddingLeft: 15,
  },
  passwordInputContainer: {
    height: 46,
    borderWidth: 1,
    borderColor: "#229843",
    borderStyle: "solid",
    background: "#FBFBFB",
    borderRadius: 5,
    flexDirection: "row-reverse",
    alignItems: "center",
    marginTop: 10,
    paddingLeft: 15,
  },
  iconContainer: {
    paddingHorizontal: 5,
  },
  textInput: {
    flex: 1,
    color: "#ccc",
    width: "100%",
  },
  error: {
    color: "red",
    paddingTop: 4,
    fontSize: 12,
  },
  logout__button: {
    height: 40,
    backgroundColor: "#d7d7d7",
    borderRadius: 10,
  },
  logout__button__text: {
    fontSize: 15,
    color: "#333",
    fontWeight: "600",
  },
});
