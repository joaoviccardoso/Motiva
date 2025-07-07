import CarregarMensagem from "./src/js/controller/CarregarMensagem.js";
import { BtnController } from "./src/js/controller/BtnController.js";

const BtnControlle = new BtnController()
const GerarMensagens = new CarregarMensagem()
GerarMensagens.CarregarTodasAsMensagens()
BtnControlle.garregarPaletaCor()
BtnControlle.carregarForm()
BtnControlle.carregarSobre()
BtnControlle.carregarFormBanner()





