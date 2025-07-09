import CarregarMensagem from "./src/js/controller/CarregarMensagem.js";
import { BtnController } from "./src/js/controller/BtnController.js";
import { PaletaView } from "./src/js/view/paletaView.js";

const BtnControlle = new BtnController()
const GerarMensagens = new CarregarMensagem()
const paleta = new PaletaView()
const temaSalvo = localStorage.getItem("tema");
if (temaSalvo) {
  paleta.mudarCorTema(temaSalvo);
}

GerarMensagens.CarregarTodasAsMensagens()
BtnControlle.garregarPaletaCor()
BtnControlle.carregarForm()
BtnControlle.carregarSobre()
BtnControlle.carregarFormBanner()





