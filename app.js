import CarregarMensagem from "./src/js/controller/CarregarMensagem.js";
import { BtnController } from "./src/js/controller/BtnController.js";
import { PaletaView } from "./src/js/view/paletaView.js";
import Filtros from "./src/js/controller/filtroController.js";

const BtnControlle = new BtnController()
const GerarMensagens = new CarregarMensagem()
const paleta = new PaletaView()
const filtro = new Filtros()

const temaSalvo = localStorage.getItem("tema");
if (temaSalvo) {
  paleta.mudarCorTema(temaSalvo);
}

GerarMensagens.pegarTodasAsMensagens()
BtnControlle.garregarPaletaCor()
BtnControlle.carregarForm()
BtnControlle.carregarSobre()
BtnControlle.carregarFormBanner()
filtro.filtrarPorBarraDePesquisa()
filtro.filtrarPelosBtn()





