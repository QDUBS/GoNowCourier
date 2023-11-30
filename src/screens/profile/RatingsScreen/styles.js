import { StyleSheet } from "react-native";

export default StyleSheet.create({
  body: {},
  header: {
    height: 190,
    borderBottomRightRadius: 50,
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  header__section__one: {
    flex: 1,
    justifyContent: "space-between",
    flexDirection: "row",
    paddingVertical: 5,
  },
  header__section__two: {
    justifyContent: "center",
    alignItems: "center",
  },
  profile__pic: {
    width: 70,
    height: 70,
    borderRadius: 100,
    marginTop: 10,
  },
  profile__name__caption: {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: 12,
    color: "#E8E8E8",
    marginTop: 10,
  },
  profile__name: {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 18,
    color: "#FFFFFF",
    marginTop: 5,
  },

  // Form
  form: {
    paddingVertical: 20,
    paddingHorizontal: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  form__header: {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: 18,
    color: "#818181",
    marginBottom: 30,
  },
  form__input__container: {
    height: 42,
    backgroundColor: "#ECECEC",
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  form__change__container: {
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 5,
  },
  form__change__text: {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: 12,
    color: "#44A08D",
  },
  form__input: {
    flex: 1,
    color: "#44A08D",
    width: "100%",
    paddingLeft: 10,
  },
  logout__button: {
    backgroundColor: "transparent",
  },
  logout__button__text: {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "800",
    fontSize: 14,
    color: "#FF3C3C",
  },
});
