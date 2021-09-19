import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export default function ResultsScreen({ route, navigation }) {
  const { barcode } = route.params;
  const [response, setResponse] = useState(null);
  const [ingredient, setIngredient] = useState(null);
  const [brand, setBrand] = useState(null);
  const [name, setName] = useState(null);
  const [category, setCategory] = useState(null);

  const axios = require("axios");

  useEffect(() => {
    async function fetchData(code) {
      console.log("Fetching Data from API...");
      const res = await axios.get(
        `https://world.openfoodfacts.org/api/v0/product/${encodeURIComponent(
          JSON.stringify(barcode)
        )}`
      );
      console.log(res.request);
      console.log(res.status);
      if ((res.data.status = 1)) {
        console.log(res.data.code);
        setResponse(res);
        if ("product" in res.data) {
          if ("ingredients_text" in res.data.product) {
            setIngredient(" " + res.data.product.ingredients_text);
          }
          if ("brands" in res.data.product) {
            setBrand(" " + res.data.product.brands);
          }
          if ("product_name" in res.data.product) {
            setName(res.data.product.product_name);
          }
          if ("categories" in res.data.product) {
            setCategory(res.data.product.categories);
          }
        }
      }
    }
    fetchData(barcode);
  }, []);

  return (
    <View style={styles.container}>
      <Text>{barcode}</Text>
      {response && (
        <Text>
          {brand} {name}
        </Text>
      )}
      {/* {category && <Text>{category}</Text>}
      {ingredient && <Text> {ingredient}</Text>} */}
      <Image
        source={{
          uri: "https://static.wikia.nocookie.net/silicon-valley/images/4/49/Jian_Yang.jpg/revision/latest?cb=20210105194213",
        }}
        style={{ width: 400, height: 400 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  camera: {
    width: "100%",
    height: "100%",
  },
  buttonContainer: {
    marginTop: 40,
  },
  button: {},
  text: {},
});
