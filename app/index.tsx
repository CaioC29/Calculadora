import { Text, TouchableOpacity, StyleSheet, View } from "react-native";


export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.display}>
        <Text style={{fontSize:60}}>12345</Text>
      </View>
      <View style={styles.teclado}>

        <View style={styles.linhabot}>
          <TouchableOpacity style={styles.botao} onPress={() => {}}>
            <Text style={{fontSize:32, color:"#ffffff"}}>0</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.botao} onPress={() => {}}>
            <Text style={{fontSize:32, color:"#ffffff"}}>0</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.botao} onPress={() => {}}>
            <Text style={{fontSize:32, color:"#ffffff"}}>0</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.botao} onPress={() => {}}>
            <Text style={{fontSize:32, color:"#ffffff"}}>0</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.linhabot}>
          <TouchableOpacity style={styles.botao} onPress={() => {}}>
            <Text style={{fontSize:32, color:"#ffffff"}}>0</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.botao} onPress={() => {}}>
            <Text style={{fontSize:32, color:"#ffffff"}}>0</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.botao} onPress={() => {}}>
            <Text style={{fontSize:32, color:"#ffffff"}}>0</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.botao} onPress={() => {}}>
            <Text style={{fontSize:32, color:"#ffffff"}}>0</Text>
          </TouchableOpacity>
        </View>
        


      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },


  display: {
    flex: 1,
    backgroundColor: "#dcdcdc",
    paddingVertical: 20,
    paddingHorizontal: 40,
    alignItems: "flex-end",
    justifyContent: "flex-end"
  },

  teclado: {
    flex: 2,
    backgroundColor: "#ffffff",
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center",
  },

  botao: {
    backgroundColor: "#2e2e2e",
    height: 64,
    width: 64,
    justifyContent:"center",
    alignContent: "center",
    alignItems: "center",
    borderRadius: 15,
    margin: 10
  },

  linhabot: {
    flex:1,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center"
  }

});

