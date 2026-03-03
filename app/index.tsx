import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  const [tela, setTela] = useState("0");
  const calcularTela = () => Number(eval(tela.replaceAll("x", "*")));

  const escrever = (valor: string) => {
    setTela((atual) => (atual === "0" || atual === "Erro" ? valor : atual + valor));
  };

  const teclaNumero = (num: string) => {
    escrever(num);
  };

  const teclaIgual = (_op: string) => {
    const resultado = calcularTela();
    setTela(Number.isFinite(resultado) ? String(resultado) : "Erro");
  };

  const teclaOp = (operacao: string) => {
    escrever(operacao);
  };

  const limparDisplay = () => {
    setTela("0");
  };

  const teclaRaiz = () => {
    const valor = calcularTela();
    if (!Number.isFinite(valor) || valor < 0) return setTela("Erro");
    setTela(String(Math.sqrt(valor)));
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.display}>
        <Text style={{fontSize:60}}>{tela}</Text>
      </View>
      <View style={styles.teclado}>

        <View style={styles.linhabot}>
          <TouchableOpacity style={styles.botao} onPress={() => teclaNumero("7")}>
            <Text style={{fontSize:32, color:"#ffffff"}}>7</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.botao} onPress={() => teclaNumero("8")}>
            <Text style={{fontSize:32, color:"#ffffff"}}>8</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.botao} onPress={() => teclaNumero("9")}>
            <Text style={{fontSize:32, color:"#ffffff"}}>9</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.botaoacao} onPress={() => teclaOp("/")}>
            <Text style={{fontSize:32, color:"#ffffff"}}>÷</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.linhabot}>
          <TouchableOpacity style={styles.botao} onPress={() => teclaNumero("4")}>
            <Text style={{fontSize:32, color:"#ffffff"}}>4</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.botao} onPress={() => teclaNumero("5")}>
            <Text style={{fontSize:32, color:"#ffffff"}}>5</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.botao} onPress={() => teclaNumero("6")}>
            <Text style={{fontSize:32, color:"#ffffff"}}>6</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.botaoacao} onPress={() => teclaOp("x")}>
            <Text style={{fontSize:32, color:"#ffffff"}}>x</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.linhabot}>
          <TouchableOpacity style={styles.botao} onPress={() => teclaNumero("1")}>
            <Text style={{fontSize:32, color:"#ffffff"}}>1</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.botao} onPress={() => teclaNumero("2")}>
            <Text style={{fontSize:32, color:"#ffffff"}}>2</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.botao} onPress={() => teclaNumero("3")}>
            <Text style={{fontSize:32, color:"#ffffff"}}>3</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.botaoacao} onPress={() => teclaOp("-")}>
            <Text style={{fontSize:32, color:"#ffffff"}}>-</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.linhabot}>
          <TouchableOpacity style={styles.botao} onPress={() => teclaNumero("0")}>
            <Text style={{fontSize:32, color:"#ffffff"}}>0</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.botao} onPress={() => teclaNumero(".")}>
            <Text style={{fontSize:32, color:"#ffffff"}}>.</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.botaoacao} onPress={() => limparDisplay()}>
            <Text style={{fontSize:32, color:"#ffffff"}}>C</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.botaoacao} onPress={() => teclaOp("+")}>
            <Text style={{fontSize:32, color:"#ffffff"}}>+</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.linhabot}>
          <TouchableOpacity style={styles.botaoC} onPress={() => teclaIgual("=")}>
            <Text style={{fontSize:32, color:"#ffffff"}}>=</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.botaoacao} onPress={() => teclaRaiz()}>
            <Text style={{fontSize:32, color:"#ffffff"}}>√</Text>
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
    height: 70,
    width: 70,
    justifyContent:"center",
    alignContent: "center",
    alignItems: "center",
    borderRadius: 10,
    margin: 5,
  },

  linhabot: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center"
  },

  botaoacao: {
    backgroundColor: "#898989",
    height: 70,
    width: 70,
    justifyContent:"center",
    alignContent: "center",
    alignItems: "center",
    borderRadius: 10,
    margin: 5
  },

  botaoC: {
    backgroundColor: "#6a795c",
    height: 70,
    width: 230,
    justifyContent:"center",
    alignContent: "center",
    alignItems: "center",
    borderRadius: 10,
    margin: 5
  },

});