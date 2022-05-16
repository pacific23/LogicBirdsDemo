import React from "react";
import ReactDOM from "react-dom";
import { DragDropContainer, DropTarget } from "react-drag-drop-container";
import "./styles.css";

import bird0 from "./images/Bird0.png";
import bird1 from "./images/Bird1.png";
import bird2 from "./images/Bird2.png";
import bird3 from "./images/Bird3.png";
import bird4 from "./images/Bird4.png";
import bird5 from "./images/Bird5.png";
import birdX from "./images/BirdX.png";
import button from "./images/Button.png";
import buttonF from "./images/ButtonF.png";
import button0 from "./images/Button0.png";
import button1 from "./images/Button1.png";
import button2 from "./images/Button2.png";
import button3 from "./images/Button3.png";
import buttonH from "./images/ButtonH.png";
import help from "./images/Help.jpg";
import card1 from "./images/1.jpg";
import card2 from "./images/2.jpg";
import card3 from "./images/3.jpg";
import card4 from "./images/4.jpg";
import card5 from "./images/5.jpg";
import card6 from "./images/6.jpg";
import card7 from "./images/7.jpg";
import card8 from "./images/8.jpg";
import card9 from "./images/9.jpg";
import card10 from "./images/10.jpg";
import card11 from "./images/11.jpg";
import card12 from "./images/12.jpg";
import card13 from "./images/13.jpg";
import card14 from "./images/14.jpg";
import card15 from "./images/15.jpg";
import card16 from "./images/16.jpg";
import card17 from "./images/17.jpg";
import card18 from "./images/18.jpg";
import card19 from "./images/19.jpg";
import card20 from "./images/20.jpg";
import card21 from "./images/21.jpg";
import card22 from "./images/22.jpg";
import card23 from "./images/23.jpg";
import card24 from "./images/24.jpg";
import card25 from "./images/25.jpg";
import card26 from "./images/26.jpg";
import card27 from "./images/27.jpg";
import card28 from "./images/28.jpg";
import card29 from "./images/29.jpg";
import card30 from "./images/30.jpg";
import card31 from "./images/31.jpg";
import card32 from "./images/32.jpg";
import card33 from "./images/33.jpg";
import card34 from "./images/34.jpg";
import card35 from "./images/35.jpg";
import card36 from "./images/36.jpg";
import card37 from "./images/37.jpg";
import card38 from "./images/38.jpg";
import card39 from "./images/39.jpg";
import card40 from "./images/40.jpg";
import card41 from "./images/41.jpg";
import card42 from "./images/42.jpg";
import card43 from "./images/43.jpg";
import card44 from "./images/44.jpg";
import card45 from "./images/45.jpg";
import card46 from "./images/46.jpg";
import card47 from "./images/47.jpg";
import card48 from "./images/48.jpg";
import card49 from "./images/49.jpg";
import card50 from "./images/50.jpg";
import card51 from "./images/51.jpg";
import card52 from "./images/52.jpg";
import card53 from "./images/53.jpg";
import card54 from "./images/54.jpg";
import card55 from "./images/55.jpg";
import card56 from "./images/56.jpg";
import card57 from "./images/57.jpg";
import card58 from "./images/58.jpg";
import card59 from "./images/59.jpg";
import card60 from "./images/60.jpg";
import card62 from "./images/62.jpg";
import card63 from "./images/63.jpg";
import card64 from "./images/64.jpg";
import card65 from "./images/65.jpg";
import card66 from "./images/66.jpg";
import card67 from "./images/67.jpg";
import box from "./images/Box.png";
import helpLVL2 from "./images/HelpLVL2.jpg";
import helpLVL11 from "./images/HelpLVL11.jpg";
import helpLVL16 from "./images/HelpLVL16.jpg";

const url = window.location.host;
const queryParams = new URLSearchParams(window.location.search);
var verifyToken = queryParams.get("v");
var lvl = 1;
var time = 0;
var message = "Loading...";
var timeout;
var delay = 60000;

class App extends React.Component {
  crypt = {
    RIQL: 1,
    CEPM: 2,
    OBIO: 3,
    EKXH: 4,
    HQUS: 5,
    CUZO: 6,
    NIEH: 7,
    ZHGZ: 8,
    NFOR: 9,
    VAZB: 10,
    FGXY: 11,
    EHDZ: 12,
    WGRA: 13,
    VKRH: 14,
    KMOU: 15,
    BLQF: 16,
    XIBP: 17,
    PYGA: 18,
    AMEY: 19,
    BXEQ: 20,
    JQVL: 21,
    XERB: 22,
    QPIB: 23,
    FDOQ: 24,
    ORWR: 25,
    KHNX: 26,
    FSCS: 27,
    MYUR: 28,
    WLZX: 29,
    EKVP: 30,
    RESM: 31,
    WMKC: 32,
    WYSO: 33,
    LEPB: 34,
    HHEI: 35,
    OWQU: 36,
    EXPL: 37,
    FHED: 38,
    DEKU: 39,
    AVDA: 40,
    KARK: 41,
    PPXO: 42,
    QEEC: 43,
    DHJN: 44,
    RHHP: 45,
    BFQN: 46,
    UEHB: 47,
    DYVO: 48,
    TZIT: 49,
    DJKJ: 50,
    FUYT: 51,
    MURA: 52,
    MYAI: 53,
    KPKY: 54,
    RHKG: 55,
    IJWB: 56,
    JVDI: 57,
    QABP: 58,
    TBNT: 59,
    AQPT: 60,
    ABCD: 62,
    AABB: 63,
    BIRD: 64,
    BIRE: 65,
    BIRF: 66,
    BIRG: 67
  };
  state = {
    actualButton: button,
    gameState: 0, // 0 : loading / 1 : game / 2 : endoflevel / -2 : endofgame / -1 : starting form / -3 : ask for mdp / -4 : Délai expiré
    gameInfo: 0,
    textInfo: [
      "Vous n'êtes pas obligés de faire tous les niveaux à la suite. Vous pouvez arrêter à tout moment, votre progression sera sauvegardée automatiquement grâce à votre code de connexion. Il vous suffira de cliquer sur le lien qui vous a été donné pour revenir dans le jeu.",
      "Trop Facile : Le niveau est plus simple que le niveau précédent. Correct : Le niveau est de la bonne difficulté. Trop Dur : Ce niveau est trop difficile par rapport au précédent.",
      "À la fin de chaque niveau il vous sera demandé si la progression en difficulté est correcte. On parle bien ici, de progression en difficulté. Les premiers niveaux vont vous sembler 'faciles', ce qui est normal. Gardez bien à l'esprit, que le jeu suit une montée en difficulté progressive et c'est cette montée qui nous intéresse dans ce test.",
      "Bonjour à tous et merci pour votre participation à l'équilibrage de la difficulté des niveaux de Logic Birds."
    ],
    helpState: 0,
    buttonValid: 0,
    buttonText: "VALIDER",
    nbMoves: 0,
    nbTry: 0,
    sizex: 0,
    adjust: 1,
    adjustBanner: 1,
    imageCard: [
      card1,
      card2,
      card3,
      card4,
      card5,
      card6,
      card7,
      card8,
      card9,
      card10,
      card11,
      card12,
      card13,
      card14,
      card15,
      card16,
      card17,
      card18,
      card19,
      card20,
      card21,
      card22,
      card23,
      card24,
      card25,
      card26,
      card27,
      card28,
      card29,
      card30,
      card31,
      card32,
      card33,
      card34,
      card35,
      card36,
      card37,
      card38,
      card39,
      card40,
      card41,
      card42,
      card43,
      card44,
      card45,
      card46,
      card47,
      card48,
      card49,
      card50,
      card51,
      card52,
      card53,
      card54,
      card55,
      card56,
      card57,
      card58,
      card59,
      card60,
      card60,
      card62,
      card63,
      card64,
      card65,
      card66,
      card67
    ],
    imageBird: [bird0, bird1, bird2, bird3, bird4, bird5, birdX],
    draggedBird: -1,
    targetLine: -1,
    line: [6, 6, 6, 6, 6, 6],
    birds: [1, 1, 1, 1, 1, 1],
    birdsDraggable: ["", "", "", "", "", ""],
    linesDraggable: ["True", "True", "True", "True", "True", "True"],
    solutions: [
      "",
      "102",
      "012",
      "210",
      "012",
      "021",
      "201",
      "021",
      "102",
      "012",
      "102",
      "210",
      "102",
      "210",
      "210",
      "012",
      "2013",
      "0123",
      "0132",
      "0231",
      "1320",
      "2130",
      "3120",
      "0132",
      "3102",
      "0321",
      "04132",
      "40312",
      "04123",
      "13024",
      "20413",
      "20143",
      "34210",
      "40213",
      "32104",
      "24013",
      "14230",
      "31204",
      "43120",
      "31042",
      "23410",
      "41032",
      "12304",
      "43201",
      "12304",
      "03214",
      "043251",
      "015324",
      "045123",
      "510243",
      "502413",
      "023154",
      "315402",
      "104352",
      "302145",
      "534012",
      "310524",
      "124053",
      "234051",
      "304152",
      "234015",
      "XXXXXX",
      "10423",
      "314205",
      "312504",
      "41320",
      "41032",
      "23410"
    ]
  };

  componentDidMount() {
    window.addEventListener("resize", this.resize.bind(this));
    this.resize();
    this.getData();
  }

  resize() {
    this.state.sizex = window.innerWidth;
    this.setState({
      adjustBanner: Math.max(this.state.sizex / 800, 1)
    });
    if (isNaN(lvl)) return;
    this.setState({
      adjust: Math.min(
        this.state.sizex / (130 * this.state.solutions[lvl].length + 60),
        1
      )
    });
  }

  clickHelp = () => {
    if (this.state.helpState == 0) {
      this.setState({ helpState: 1 });
    } else {
      this.setState({ helpState: 0 });
    }
    window.scrollTo(0, 0);
  };

  clickInfo = () => {
    this.setState({ gameInfo: this.state.gameInfo - 1 });
    window.scrollTo(0, 0);
  };

  getData() {
    // create a new XMLHttpRequest
    var xhr = new XMLHttpRequest();

    // get a callback when the server responds
    xhr.addEventListener("load", () => {
      // update the state of the component with the result here
      var data = xhr.responseText;
      var jsonResponse = JSON.parse(data);
      lvl = parseInt(jsonResponse["lvl"]);
      time = jsonResponse["time"];
      if (verifyToken == "force") {
        lvl = this.crypt[queryParams.get("lvl")];
        console.log(lvl);
        if (!Number.isInteger(lvl)) {
          lvl = 61;
        }
        jsonResponse["status"] = "ok";
      }
      if (jsonResponse["status"] == "ok") {
        if (lvl == 0) {
          this.setState({ gameState: -1 });
        } else {
          if (lvl != 61) {
            if (lvl == 1) {
              this.state.gameInfo = this.state.textInfo.length;
            } else {
              if (verifyToken != "force") {
                timeout = setTimeout(
                  function () {
                    this.setState({ gameState: -4 });
                  }.bind(this),
                  delay
                );
              }
            }
            this.setState({ gameState: 1 });
          } else {
            this.setState({ gameState: -2 });
          }
        }
        this.resize();
      } else {
        this.setState({ gameState: -3 });
      }
    });
    // open the request with the verb and the url
    xhr.open(
      "GET",
      "https://www.pcspace.com/logicbird/getPlayerData.php" +
        window.location.search
    );
    // send the request
    xhr.send();
  }

  drag = (event) => {
    // On vient de prendre un oiseau
    this.state.draggedBird = event.idBird;
  };

  dragLine = (event) => {
    // On vient de prendre un oiseau
    this.state.draggedBird = this.state.line[event.idLine];
  };

  hit = (event) => {
    // On va lâcher l'oiseau
  };

  drop = (event) => {
    if (verifyToken != "force") {
      clearTimeout(timeout);
      timeout = setTimeout(
        function () {
          this.setState({ gameState: -4 });
        }.bind(this),
        delay
      );
    }
    this.state.nbMoves++;
    // On vient de lâcher l'oiseau
    this.state.targetLine = event.dropData.idLine;
    if (this.state.targetLine === -1) {
      // On lâche l'oiseau sur la ligne du haut
      this.state.birds[this.state.draggedBird] = 1;
      document.getElementById(
        "bird" + this.state.draggedBird
      ).src = this.state.imageBird[this.state.draggedBird];
      this.state.birdsDraggable[this.state.draggedBird] = "";
      for (var i = 0; i < this.state.solutions[lvl].length; i++) {
        if (this.state.line[i] === this.state.draggedBird) {
          this.state.line[i] = 6;
          this.state.linesDraggable[i] = "True";
        }
      }
      this.setState({ draggedBird: 0 });
    } else {
      if (this.state.line[this.state.targetLine] === 6) {
        // Laché sur une case vide
        // On commence par retirer toute copie de cet oiseau
        for (var i = 0; i < this.state.solutions[lvl].length; i++) {
          if (this.state.line[i] === this.state.draggedBird) {
            this.state.line[i] = 6;
            this.state.linesDraggable[i] = "True";
          }
        }
        // On applique le déplacement
        this.state.birds[this.state.draggedBird] = 0.2;
        this.state.line[this.state.targetLine] = this.state.draggedBird;
        document.getElementById(
          "line" + this.state.targetLine
        ).src = this.state.imageBird[this.state.draggedBird];
        this.state.birdsDraggable[this.state.draggedBird] = "False";
        this.state.linesDraggable[this.state.targetLine] = "";
        this.setState({ draggedBird: 0 });
      } else {
        // On doit faire un swap
        for (var i = 0; i < this.state.solutions[lvl].length; i++) {
          if (this.state.line[i] === this.state.draggedBird) {
            this.state.line[i] = 6;
            this.state.linesDraggable[i] = "True";
          }
        }

        var swappedBird = this.state.line[this.state.targetLine];
        document.getElementById(
          "bird" + swappedBird
        ).src = this.state.imageBird[swappedBird];
        this.state.birdsDraggable[swappedBird] = "";
        this.state.birds[swappedBird] = 1;

        // On applique le déplacement
        this.state.birds[this.state.draggedBird] = 0.2;
        this.state.line[this.state.targetLine] = this.state.draggedBird;
        document.getElementById(
          "line" + this.state.targetLine
        ).src = this.state.imageBird[this.state.draggedBird];
        this.state.birdsDraggable[this.state.draggedBird] = "False";
        this.state.linesDraggable[this.state.targetLine] = "";
        this.setState({ draggedBird: 0 });
      }
    }
    // Vérification si tous les oiseaux ont été déplacés
    var nbBird = 0;
    for (var i = 0; i < this.state.solutions[lvl].length; i++) {
      if (this.state.line[i] != 6) {
        nbBird++;
      }
    }
    if (nbBird == this.state.solutions[lvl].length) {
      this.state.actualButton = button;
      this.setState({ buttonValid: 1 });
    } else {
      this.setState({ buttonValid: 0 });
    }
  };

  checkSol = () => {
    this.state.nbTry++;
    // Vérification si le niveau est terminé
    var nbokBird = 0;
    for (var i = 0; i < this.state.solutions[lvl].length; i++) {
      if (
        parseInt(this.state.solutions[lvl].substr(i, 1)) === this.state.line[i]
      ) {
        nbokBird++;
      }
    }
    if (nbokBird == this.state.solutions[lvl].length) {
      for (var i = 0; i < this.state.solutions[lvl].length; i++) {
        this.state.birdsDraggable[i] = "False";
        this.state.linesDraggable[i] = "False";
      }
      this.setState({ gameState: 2 });
    } else {
      this.state.actualButton = buttonF;
      this.setState({ buttonValid: 1 });
    }
  };

  render() {
    return (
      <div className="App">
        <div>
          <table class="top">
            <tr class="top" height={Math.trunc(100 * this.state.adjustBanner)}>
              <td></td>
              <td width="50%">
                <h1>
                  <b>BANKIIIZ EDITIONS</b>
                </h1>
                Cool and Fresh Games
              </td>
              <td></td>
            </tr>
          </table>{" "}
          {lvl > 0 ? (
            <h4>
              Déplacez les oiseaux en essayant de respecter TOUTES les
              indications de la carte.
            </h4>
          ) : (
            <h4>
              Bankiiiz Editions vous propose d'essayer en ligne son futur jeu
              Logic Birds.
              <br />
              <br />
              Sélectionnez un niveau :
            </h4>
          )}
          <h4>
            {lvl == 2 ? (
              "Niveau 2"
            ) : (
              <a href={"https://" + url + "/?v=force&lvl=CEPM"}>Niveau 2</a>
            )}{" "}
            {lvl == 11 ? (
              "Niveau 11"
            ) : (
              <a href={"https://" + url + "/?v=force&lvl=FGXY"}>Niveau 11</a>
            )}{" "}
            {lvl == 16 ? (
              "Niveau 16"
            ) : (
              <a href={"https://" + url + "/?v=force&lvl=BLQF"}>Niveau 16</a>
            )}{" "}
            {lvl == 26 ? (
              "Niveau 26"
            ) : (
              <a href={"https://" + url + "/?v=force&lvl=KHNX"}>Niveau 26</a>
            )}{" "}
            {lvl == 46 ? (
              "Niveau 46"
            ) : (
              <a href={"https://" + url + "/?v=force&lvl=BFQN"}>Niveau 46</a>
            )}
          </h4>
          {lvl > 0 ? null : (
            <iframe
              width="420"
              height="315"
              src="https://www.youtube.com/embed/ovFBdmWRQMI?autoplay=1&mute=1"
            ></iframe>
          )}
          {lvl == 2 ? <img src={helpLVL2} /> : null}
          {lvl == 11 ? <img src={helpLVL11} /> : null}
          {lvl == 16 ? <img src={helpLVL16} /> : null}
        </div>
        {this.state.gameState == -4 ? (
          <div>
            <form action={"https://" + url} method="get">
              <input id="v" name="v" type="hidden" value={verifyToken} />
              <h1>Niveau interrompu</h1>
              <br />
              <button type="submit" class="submit-btn">
                Recommencer le niveau
              </button>
            </form>
          </div>
        ) : null}
        {this.state.gameState == -2 ? (
          <div>
            <h2>
              Merci !<br />
              <img src={box} />
            </h2>
          </div>
        ) : null}
        {this.state.gameState == -1 ? (
          <div>
            <form action={"https://" + url} method="get">
              <input id="v" name="v" type="hidden" value={verifyToken} />
              <div>
                <h1>Renseignements du joueur</h1>
                <hr />
              </div>
              <div>
                <br />
                <label for="age">
                  <b>Ton âge</b>
                </label>
                <br />
                <br />
                <input type="number" name="a" id="a" class="form-control" />
              </div>
              <br />
              <hr />
              <br />
              <label for="age">
                <b>Je joue</b>
              </label>
              <br />
              <br />
              <label>
                <input type="radio" name="g" value="l" />
                Moins d'une fois par semaine
              </label>
              <br />
              <br />
              <label>
                <input type="radio" name="g" value="m" />
                Une fois par semaine
              </label>
              <br />
              <br />
              <label>
                <input type="radio" name="g" value="h" />
                Plusieurs fois par semaine
              </label>
              <br />
              <br />
              <hr />
              <br />
              <button type="submit" class="submit-btn">
                Commencer à jouer
              </button>
            </form>
          </div>
        ) : null}
        {this.state.gameState == 0 ? (
          <div>
            <h1>{message}</h1>
          </div>
        ) : null}
        {(this.state.gameState > 0) & (this.state.gameInfo > 0) ? (
          <div>
            <h1>{this.state.textInfo[this.state.gameInfo - 1]}</h1>
            <button class="submit-btn" onClick={this.clickInfo}>
              J'ai compris
            </button>
          </div>
        ) : null}
        {(this.state.gameState > 0) & (this.state.helpState == 1) ? (
          <div>
            <img src={help} onClick={this.clickHelp} />
          </div>
        ) : null}
        {(this.state.gameState > 0) & (this.state.gameInfo == 0) ? (
          <div>
            <div id="card">
              <img
                src={this.state.imageCard[lvl - 1]}
                id="card"
                alt="card"
                draggable="false"
                width="300"
                height="300"
              />
              {verifyToken != "force" ? "/60" : null}
            </div>
            {(this.state.gameState != 2) &
            (this.state.gameState != -4) &
            (this.state.buttonValid == 1) ? (
              <div>
                <input
                  type="image"
                  src={this.state.actualButton}
                  onClick={this.checkSol}
                />
              </div>
            ) : null}
            {this.state.gameState == 2 ? (
              <div>
                <img src={button3} />
              </div>
            ) : null}
            <div>
              <DropTarget
                targetKey="line"
                onHit={this.hit}
                dropData={{ idLine: -1 }}
              >
                <DragDropContainer
                  targetKey="line"
                  onDragStart={this.drag}
                  onDrop={this.drop}
                  dragData={{ idBird: 0 }}
                  noDragging={this.state.birdsDraggable[0]}
                >
                  <img
                    src={this.state.imageBird[0]}
                    id="bird0"
                    alt="bird0"
                    draggable="false"
                    width={Math.trunc(130 * this.state.adjust)}
                    height={Math.trunc(130 * this.state.adjust)}
                    style={{ opacity: this.state.birds[0] }}
                  />
                </DragDropContainer>
                <DragDropContainer
                  targetKey="line"
                  onDragStart={this.drag}
                  onDrop={this.drop}
                  dragData={{ idBird: 1 }}
                  noDragging={this.state.birdsDraggable[1]}
                >
                  <img
                    src={this.state.imageBird[1]}
                    id="bird1"
                    alt="bird1"
                    draggable="false"
                    width={Math.trunc(130 * this.state.adjust)}
                    height={Math.trunc(130 * this.state.adjust)}
                    style={{ opacity: this.state.birds[1] }}
                  />
                </DragDropContainer>
                <DragDropContainer
                  targetKey="line"
                  onDragStart={this.drag}
                  onDrop={this.drop}
                  dragData={{ idBird: 2 }}
                  noDragging={this.state.birdsDraggable[2]}
                >
                  <img
                    src={this.state.imageBird[2]}
                    id="bird2"
                    alt="bird2"
                    draggable="false"
                    width={Math.trunc(130 * this.state.adjust)}
                    height={Math.trunc(130 * this.state.adjust)}
                    style={{ opacity: this.state.birds[2] }}
                  />
                </DragDropContainer>
                {this.state.solutions[lvl].length > 3 ? (
                  <DragDropContainer
                    targetKey="line"
                    onDragStart={this.drag}
                    onDrop={this.drop}
                    dragData={{ idBird: 3 }}
                    noDragging={this.state.birdsDraggable[3]}
                  >
                    <img
                      src={this.state.imageBird[3]}
                      id="bird3"
                      alt="bird3"
                      draggable="false"
                      width={Math.trunc(130 * this.state.adjust)}
                      height={Math.trunc(130 * this.state.adjust)}
                      style={{ opacity: this.state.birds[3] }}
                    />
                  </DragDropContainer>
                ) : null}
                {this.state.solutions[lvl].length > 4 ? (
                  <DragDropContainer
                    targetKey="line"
                    onDragStart={this.drag}
                    onDrop={this.drop}
                    dragData={{ idBird: 4 }}
                    noDragging={this.state.birdsDraggable[4]}
                  >
                    <img
                      src={this.state.imageBird[4]}
                      id="bird4"
                      alt="bird4"
                      draggable="false"
                      width={Math.trunc(130 * this.state.adjust)}
                      height={Math.trunc(130 * this.state.adjust)}
                      style={{ opacity: this.state.birds[4] }}
                    />
                  </DragDropContainer>
                ) : null}
                {this.state.solutions[lvl].length > 5 ? (
                  <DragDropContainer
                    targetKey="line"
                    onDragStart={this.drag}
                    onDrop={this.drop}
                    dragData={{ idBird: 5 }}
                    noDragging={this.state.birdsDraggable[5]}
                  >
                    <img
                      src={this.state.imageBird[5]}
                      id="bird5"
                      alt="bird5"
                      draggable="false"
                      width={Math.trunc(130 * this.state.adjust)}
                      height={Math.trunc(130 * this.state.adjust)}
                      style={{ opacity: this.state.birds[5] }}
                    />
                  </DragDropContainer>
                ) : null}
              </DropTarget>
            </div>
            <div>
              <DragDropContainer
                targetKey="line"
                onDragStart={this.dragLine}
                onDrop={this.drop}
                dragData={{ idLine: 0 }}
                noDragging={this.state.linesDraggable[0]}
              >
                <DropTarget
                  targetKey="line"
                  onHit={this.hit}
                  dropData={{ idLine: 0 }}
                >
                  <img
                    src={this.state.imageBird[this.state.line[0]]}
                    id="line0"
                    alt="line0"
                    draggable="false"
                    width={Math.trunc(130 * this.state.adjust)}
                    height={Math.trunc(130 * this.state.adjust)}
                  />
                </DropTarget>
              </DragDropContainer>
              <DragDropContainer
                targetKey="line"
                onDragStart={this.dragLine}
                onDrop={this.drop}
                dragData={{ idLine: 1 }}
                noDragging={this.state.linesDraggable[1]}
              >
                <DropTarget
                  targetKey="line"
                  onHit={this.hit}
                  dropData={{ idLine: 1 }}
                >
                  <img
                    src={this.state.imageBird[this.state.line[1]]}
                    id="line1"
                    alt="line1"
                    draggable="false"
                    width={Math.trunc(130 * this.state.adjust)}
                    height={Math.trunc(130 * this.state.adjust)}
                  />
                </DropTarget>
              </DragDropContainer>
              <DragDropContainer
                targetKey="line"
                onDragStart={this.dragLine}
                onDrop={this.drop}
                dragData={{ idLine: 2 }}
                noDragging={this.state.linesDraggable[2]}
              >
                <DropTarget
                  targetKey="line"
                  onHit={this.hit}
                  dropData={{ idLine: 2 }}
                >
                  <img
                    src={this.state.imageBird[this.state.line[2]]}
                    id="line2"
                    alt="line2"
                    draggable="false"
                    width={Math.trunc(130 * this.state.adjust)}
                    height={Math.trunc(130 * this.state.adjust)}
                  />
                </DropTarget>
              </DragDropContainer>
              {this.state.solutions[lvl].length > 3 ? (
                <DragDropContainer
                  targetKey="line"
                  onDragStart={this.dragLine}
                  onDrop={this.drop}
                  dragData={{ idLine: 3 }}
                  noDragging={this.state.linesDraggable[3]}
                >
                  <DropTarget
                    targetKey="line"
                    onHit={this.hit}
                    dropData={{ idLine: 3 }}
                  >
                    <img
                      src={this.state.imageBird[this.state.line[3]]}
                      id="line3"
                      alt="line3"
                      draggable="false"
                      width={Math.trunc(130 * this.state.adjust)}
                      height={Math.trunc(130 * this.state.adjust)}
                    />
                  </DropTarget>
                </DragDropContainer>
              ) : null}
              {this.state.solutions[lvl].length > 4 ? (
                <DragDropContainer
                  targetKey="line"
                  onDragStart={this.dragLine}
                  onDrop={this.drop}
                  dragData={{ idLine: 4 }}
                  noDragging={this.state.linesDraggable[4]}
                >
                  <DropTarget
                    targetKey="line"
                    onHit={this.hit}
                    dropData={{ idLine: 4 }}
                  >
                    <img
                      src={this.state.imageBird[this.state.line[4]]}
                      id="line4"
                      alt="line4"
                      draggable="false"
                      width={Math.trunc(130 * this.state.adjust)}
                      height={Math.trunc(130 * this.state.adjust)}
                    />
                  </DropTarget>
                </DragDropContainer>
              ) : null}
              {this.state.solutions[lvl].length > 5 ? (
                <DragDropContainer
                  targetKey="line"
                  onDragStart={this.dragLine}
                  onDrop={this.drop}
                  dragData={{ idLine: 5 }}
                  noDragging={this.state.linesDraggable[5]}
                >
                  <DropTarget
                    targetKey="line"
                    onHit={this.hit}
                    dropData={{ idLine: 5 }}
                  >
                    <img
                      src={this.state.imageBird[this.state.line[5]]}
                      id="line5"
                      alt="line5"
                      draggable="false"
                      width={Math.trunc(130 * this.state.adjust)}
                      height={Math.trunc(130 * this.state.adjust)}
                    />
                  </DropTarget>
                </DragDropContainer>
              ) : null}
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
