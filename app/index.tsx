import { Text, TouchableOpacity, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.display}>
        <Text style={{fontSize:60}}>0</Text>
      </View>
      <View style={styles.teclado}>

        <View style={styles.linhabot}>
          <TouchableOpacity style={styles.botao} onPress={() => {}}>
            <Text style={{fontSize:32, color:"#ffffff"}}>7</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.botao} onPress={() => {}}>
            <Text style={{fontSize:32, color:"#ffffff"}}>8</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.botao} onPress={() => {}}>
            <Text style={{fontSize:32, color:"#ffffff"}}>9</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.botaoacao} onPress={() => {}}>
            <Text style={{fontSize:32, color:"#ffffff"}}>÷</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.linhabot}>
          <TouchableOpacity style={styles.botao} onPress={() => {}}>
            <Text style={{fontSize:32, color:"#ffffff"}}>4</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.botao} onPress={() => {}}>
            <Text style={{fontSize:32, color:"#ffffff"}}>5</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.botao} onPress={() => {}}>
            <Text style={{fontSize:32, color:"#ffffff"}}>6</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.botaoacao} onPress={() => {}}>
            <Text style={{fontSize:32, color:"#ffffff"}}>x</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.linhabot}>
          <TouchableOpacity style={styles.botao} onPress={() => {}}>
            <Text style={{fontSize:32, color:"#ffffff"}}>1</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.botao} onPress={() => {}}>
            <Text style={{fontSize:32, color:"#ffffff"}}>2</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.botao} onPress={() => {}}>
            <Text style={{fontSize:32, color:"#ffffff"}}>3</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.botaoacao} onPress={() => {}}>
            <Text style={{fontSize:32, color:"#ffffff"}}>-</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.linhabot}>
          <TouchableOpacity style={styles.botao} onPress={() => {}}>
            <Text style={{fontSize:32, color:"#ffffff"}}>0</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.botao} onPress={() => {}}>
            <Text style={{fontSize:32, color:"#ffffff"}}>.</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.botaoacao} onPress={() => {}}>
            <Text style={{fontSize:32, color:"#ffffff"}}>=</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.botaoacao} onPress={() => {}}>
            <Text style={{fontSize:32, color:"#ffffff"}}>+</Text>
          </TouchableOpacity>
        </View>
        


      </View>
    </SafeAreaView>
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
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center"
  },

  botaoacao: {
    backgroundColor: "#898989",
    height: 64,
    width: 64,
    justifyContent:"center",
    alignContent: "center",
    alignItems: "center",
    borderRadius: 15,
    margin: 10
  }

});