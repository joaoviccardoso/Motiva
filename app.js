import { FormController } from "./src/js/controller/formController.js";
import { PaletaController } from "./src/js/controller/paletaController.js";

const Form = new FormController();
Form.carregarForm();

const PaletaCor = new PaletaController();
PaletaCor.garregarPaletaCor();

