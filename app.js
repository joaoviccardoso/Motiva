import CarregarMensagem from "./src/js/controller/CarregarMensagem.js";
import { NavController } from "./src/js/controller/NavController.js";

const NavControlle = new NavController()
const GerarMensagens = new CarregarMensagem()

NavControlle.garregarPaletaCor()
NavControlle.carregarForm()
NavControlle.carregarSobre()
NavControlle.carregarFormBanner()
GerarMensagens.CarregarTodasAsMensagens()



