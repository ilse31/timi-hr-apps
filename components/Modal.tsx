import { Dimensions, Modal, StyleSheet, Text, View } from "react-native";
import React from "react";

type ModalsProps = {
  overLay: boolean;
  setOverLay: React.Dispatch<React.SetStateAction<boolean>>;
  children?: React.ReactNode;
};

const Modals = (props: ModalsProps) => {
  return (
    <Modal
      animationType='slide'
      transparent={true}
      visible={props.overLay}
      onRequestClose={() => {
        props.setOverLay(!props.overLay);
      }}
    >
      <View
        style={{
          flex: 1,
          width: Dimensions.get("window").width,
          justifyContent: "flex-end",
          // alignItems: "flex-end",
          backgroundColor: "rgba(0,0,0,0.5)",
        }}
      >
        <View
          style={{
            height: "50%",
            width: "100%",
          }}
        >
          {props.children}
        </View>
      </View>
    </Modal>
  );
};

export default Modals;

const styles = StyleSheet.create({});
