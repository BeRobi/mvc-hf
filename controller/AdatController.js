import AdatModel from "../model/AdatModel.js";
import AdatView from "../view/AdatView.js";

class AdatController {
  constructor() {
    console.log("controller");

    //this.adatView = new AdatView("<div class='elem'><p></p></div>", $(".tartalom"));
    this.adatView = new AdatView("Kattints a négyzetbe!", $(".tartalom"));
    this.adatModel = new AdatModel("X");
    //this.adatView = new AdatView("<br>Kattints a gombra!", $(".tartalom"));
    //this.adatModel = new AdatModel(" Te!");

    // itt iratkozunk fel a View eseményeire

    $(window).on("adatKeres", (event) => {
      const miObjektumunk = event.detail;
      console.log(miObjektumunk);
      let szoveg = this.adatModel.beir();
      this.adatView.setPelem(szoveg);
    });
  }
}
export default AdatController;
