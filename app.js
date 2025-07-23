import CarregarMensagem from "./src/js/controller/CarregarMensagem.js";
import { BtnController } from "./src/js/controller/BtnController.js";
import { PaletaView } from "./src/js/view/paletaView.js";
import Filtros from "./src/js/controller/filtroController.js";
import { modal } from "./src/js/view/modal.js";

async function wakeUpAPI() {
  try {
    await fetch("https://todo-listback.onrender.com/mensagem");
    console.log("API acordada com sucesso!");
  } catch (err) {
    console.warn("Erro ao acordar API:", err);
  }
}


await wakeUpAPI()
const BtnControlle = new BtnController()
const GerarMensagens = new CarregarMensagem()
const paleta = new PaletaView()
const filtro = new Filtros()

const tutorial = localStorage.getItem("tutorial") || "";
const temaSalvo = localStorage.getItem("tema");

if (temaSalvo) {
  paleta.mudarCorTema(temaSalvo);
}

console.log(tutorial, temaSalvo)
if (tutorial === "") {
  modal.mostrarDialogTutorial()
} 

GerarMensagens.pegarTodasAsMensagens()
BtnControlle.garregarPaletaCor()
BtnControlle.carregarForm()
BtnControlle.carregarSobre()
BtnControlle.carregarFormBanner()
filtro.filtrarPorBarraDePesquisa()
filtro.filtrarPelosBtn()





