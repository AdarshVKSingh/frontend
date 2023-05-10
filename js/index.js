@import url(./style.css);

/* main{
  /* background: linear-gradient(to bottom, lightblue, white); */

/* } */

#title {
  font-family: "Fjalla One", sans-serif;
  text-align: center;
}
.gif1 {
  background: url(../img/event.mp4);
}

#droneImgGif {
  display: inline-block;
  position: relative;
  height: 90vh;
  width: 100vw;
  top: -10vh;
  background-image: url(../img/event.gif);
  background-repeat: no-repeat;
  background-size: cover;
}

#event {
  padding-top: 50px;
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  background-image: url("https://www.pixelstalk.net/wp-content/uploads/images6/Night-Sky-Wallpaper-Desktop.jpg");
  padding-bottom: 50px;
  /* background-color: rgb(56, 49, 49); */
}
/* .img-background{
  width: 100%;
  height: 30rem;
} */

h2,
h1 {
  text-align: center;
}

.overGif1 {
  position: relative;
  color: white;
  z-index: 2;
}

.overGif2 {
  position: relative;
  color: white;
  z-index: 2;
  top: 42vh;
}
.gifDrone {
  width: 100vw;
  height: 70vh;
  position: relative;
  top: -20vh;
}

.introContent {
  display: inline-block;
  width: 80vw;
  position: relative;
  left: 10vw;

  font-size: larger;
  position: relative;
  top: -10vh;
}

.info {
  height: 15vh;
  width: 80vw;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  border-radius: 10px;
  text-align: center;
  display: inline-flex;
  align-content: center;
  justify-content: center;
  align-items: center;
  position: relative;
  top: 7vh;
  font-size: larger;
}

.keyHighlight {
  position: relative;
  margin-top: 10vh;
  margin-bottom: 4vh;
  left: -3vw;
}

.card-group {
  margin-inline: auto;
  width: 80vw;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  /* margin-left: 5vw; */
}

.card {
  display: inline-block;
  width: 25vw;
  position: relative;
  height: 40vh;
}

.card :hover {
  transform: scale(1.05);
  position: relative;
  z-index: 5;
}

#first {
  padding: 20px;
  text-align: center;
  border: none;
}

.venue {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  text-align: center;
}

#col-1 {
  text-align: left;
}

#col-2 {
  text-align: center;
}

.schedule {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  text-align: center;
}

#sponsors {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.indias-biggest-drone {
  font-size: 3rem;
  color: white;
}
.indias-biggest-drone1 {
  font-size: 8rem;
  box-shadow: 0.5rem 0.5rem 1rem 0.5rem gray;
  border-radius: 4rem;
  font-family: "Kanit", sans-serif;
  color: white;
}
.content {
  margin-top: 5rem;
  color: white;
  padding-left: 7rem;
  padding-right: 7rem;
  font-size: 1.3rem;
}
.para12 {
  font-weight: 900;
}
.join1 {
  display: flex;
  justify-content: center;
  margin-top: 2rem;
  align-items: center;
}
.join-a {
  /* text-decoration: none; */
  color: red;
}

.tiles {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

.droneRacing {
  display: inline-flex;
  height: 40vh;
  width: 40vw;
  justify-content: center;
  align-items: center;
  border-radius: 5%;
  padding: 20px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
}

.placementDrive {
  display: inline-flex;
  height: 40vh;
  width: 40vw;
  justify-content: center;
  align-items: center;
  border-radius: 5%;
  position: relative;
  padding: 20px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
}
.venue1 {
  background-image: url(https://media.istockphoto.com/id/1412583447/vector/beautiful-starry-sky-background-illustration.jpg?s=612x612&w=0&k=20&c=1-FAYSZUNJLuxO2w45lvI3dk2qONdCWsGzklgNu2wiw=);
  color: white;
  width: 20vw;
}
#col-1 {
  color: white;
}
#col-2 {
  color: white;
}
.main123 {
  display: flex;
  justify-content: space-evenly;
}
.heading {
  display: flex;
  justify-content: center;
  align-items: center;
}
.heading-h2 {
  font-size: 3rem;
  font-family: "Kanit", sans-serif;
}
.venue3 {
  display: flex;
  justify-content: center;
  align-items: center;
}
.venue311 {
  width: 20rem;
}
.venue789 {
  font-size: 2.5rem;
}

.cards {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.img {
  width: 20rem;
  height: 10rem;
  margin-bottom: 2rem;
  border-radius: 10px;
}

@media screen and (max-width: 1000px) {
  .tiles {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .droneRacing {
    /* display: inline-flex; */
    height: 50vh;
    width: 80vw;
    margin-bottom: 8vw;
    justify-content: center;
    align-items: center;
    border-radius: 5%;
    padding: 15px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
      rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
      rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  }

  .placementDrive {
    /* display: inline-flex; */
    height: 50vh;
    width: 80vw;
    /* margin-left: 2vw; */
    justify-content: center;
    align-items: center;
    border-radius: 5%;
    position: relative;
    padding: 15px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
      rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
      rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  }

  .img{
    width: 12rem;
    height: 7rem;
  }
}

@media screen and (max-width: 600px) {
  body {
    align-items: center;
    width: 100vw;
    /* overflow-x: hidden !important; */
  }

  header {
    width: 100vw;
  }

  h2.overGif1 {
    margin-top: 0 !important;
    overflow-x: hidden;
    text-align: center;
    justify-content: center;
    font-size: 25px;
    width: 100%;
  }

  .DronaGIF {
    display: flex;
    
    justify-content: center;
    align-items: center;
  }

  img#GIF-Drone {
    border-radius: 20px;
    overflow-x: hidden;
    text-align: center;
    justify-content: center;
    width: 50%;
    text-align: center;
    justify-content: center;
    align-items: centerss;
  }

  h1.overGIFTextd {
    text-align: center;
  }

  h2#droneBottomText {
    margin-bottom: 20px;
  }
  p.para-text-era {
    text-align: center;
    font-size: larger;
    padding: 20px;
  }
  .onResponseTextCentre,
  .keyHighlight {
    text-align: center;
  }
  .card {
    display: inline-block;
    width: 90%;
    font-size: larger;
  }
  div.main123 {
    display: inline-block;
  }
  div.venue3 {
    /* margin:auto; */
    position: relative;
    left: -16vw;
  }

  .card-group {
    display: inline-flex;
    flex-direction: column;
    justify-content: center;
  }

  .venue1 {
    position: relative;
    left: 10vw;
  }

  .card-group .card2 {
    width: 80vw;
    position: relative;
    left: 5vw;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
      rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
      rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;

    border-radius: 5%;
    
  }
  .card-group .card1 {
    width: 80vw;
    position: relative;
    left: 5vw;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
      rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
      rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;

      border-radius: 5%;
    
  }
  .droneRacing {
    height: 40vh;
  }
  .placementDrive {
    height: 40vh;
    position: relative;
    top: 4vh;
  }
  #droneImgGif {
    background-image: url("./../img/mobileevent.gif");
    background-size: contain;
    background-repeat: no-repeat;
  }

  .introContent {
    position: relative;
    height: 40vh;
    top: -20vh;
  }

  .introContent h6 {
    position: relative;
    top: 10vh;
  }
  .info {
    height: 30vw;
    width: 80vw;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
      rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
      rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
    border-radius: 10%;
    position: relative;
    top: 7vh;
  }
  .info .text-center {
    display: inline-block;
    position: relative;
    top: 2vh;
  }
  .droneRacing {
    /* display: inline-flex; */
    height: 50vh;
    width: 80vw;
    margin-bottom: 8vw;
    justify-content: center;
    align-items: center;
    border-radius: 5%;
    padding: 15px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
      rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
      rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  }

  .placementDrive {
    /* display: inline-flex; */
    height: 50vh;
    width: 80vw;
    /* margin-left: 2vw; */
    justify-content: center;
    align-items: center;
    border-radius: 5%;
    position: relative;
    padding: 15px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
      rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
      rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  }
}
