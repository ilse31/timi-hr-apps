import { StyleSheet, Text, View } from "react-native";
import React from "react";

type CardProps = {
  title: string;
  content: string;
};

const Card = ({ title, content }: CardProps) => {
  return (
    <View style={card.card}>
      <Text style={card.cardTitle}>{title}</Text>
      <Text style={card.cardContent}>{content}</Text>
    </View>
  );
};

const card = StyleSheet.create({
  card: {
    position: "relative",
    backgroundColor: "white",
    borderRadius: 10,
    padding: 15,
    margin: 10,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  cardContent: {
    fontSize: 14,
    marginTop: 5,
  },
});

export default Card;

const styles = StyleSheet.create({});
