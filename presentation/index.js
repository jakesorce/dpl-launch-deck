// Import React
import React from "react";
import App from './App';
import dpl from '../assets/dpl2017.png';

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Fill,
  Fit,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  Quote,
  Slide,
  Spectacle,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Import custom component
import Interactive from "../assets/interactive";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");

const images = {
  rails: require("../assets/rails.png"),
  react: require("../assets/react.png"),
  ruby: require("../assets/ruby.png"),
  redux: require("../assets/redux.png"),
  js: require("../assets/js.png"),
  nerds: require("../assets/nerds.jpg"),
  neumont: require("../assets/neumont.jpg"),
  typing: require("../assets/typing.gif"),
  neverGiveUp: require("../assets/never-give-up.jpg"),
  sheldon: require("../assets/sheldon.gif"),
  dpllogo: require("../assets/logo.png"),
  confidence: require('../assets/tenor.gif'),
  jakedave: require('../assets/jakedave.jpg'),
  jakemal: require('../assets/jakemal.jpg'),
  ulogo: require('../assets/ulogo.jpg'),
};

const videos = {
  coding: require("../assets/coding-students.mp4"),
}

preloader(images);

const theme = createTheme({
  primary: "#000",
  secondary: "#61dafb"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["zoom", "slide"]} transitionDuration={500}>
          <Slide transition={["zoom"]} bgColor="white">
            <Layout>
              <Fill>
                <Heading caps center textColor="black">
                  <Fill>
                    <Image src={images.dpllogo.replace("/", "")} />
                  </Fill>
                  First Things First.
                </Heading>
              </Fill>
            </Layout>
          </Slide>
          <Slide transition={["zoom"]} bgColor="primary">
            <Layout>
              <Fill>
                <Heading caps center textColor="white">
                  CONGRATS STUDENTS!!!
                </Heading>
              </Fill>
              </Layout>
              <Fill>
                <Image center src={images.sheldon.replace("/", "")} />
              </Fill>
          </Slide>
          <Slide transition={["zoom"]} bgColor="primary">
            <Layout>
              <Fill>
                <Heading caps textColor="white">
                  Jake Sorce
                </Heading>
                <Fill>
                  <Image height="300" width="300" src={images.nerds.replace("/", "")} />
                </Fill>
              </Fill>
              <Fill>
                <Appear>
                  <BlockQuote>
                    <Quote textColor="#8168B1">DevPoint Studios</Quote>
                    <Cite>CTO</Cite>
                  </BlockQuote>
                </Appear>
                <Appear>
                  <BlockQuote>
                    <Quote textColor="#8168B1">DevPoint Labs</Quote>
                    <Cite>Lead Instructor</Cite>
                  </BlockQuote>
                </Appear>
              </Fill>
            </Layout>
          </Slide>
          <Slide transition={["slide"]} bgColor="black">
            <Heading textColor="white">Professionally Writing Code Since #2011</Heading>
            <br />
            <Appear>
               <Fill>
                <Image height="100" width="100" src={images.rails.replace("/", "")} />
                <Image height="100" width="100" src={images.react.replace("/", "")} />
                <Image height="100" width="100" src={images.neumont.replace("/", "")} />
                <Image style={{ marginRight: '5px' }} height="100" width="100" src={images.redux.replace("/", "")} />
                <Image height="100" width="100" src={images.js.replace("/", "")} />
              </Fill>
            </Appear>
          </Slide>
          <Slide transition={["slide"]} bgColor="black" align='center center'>
             <Heading size={1} caps fit>
              10,000 Hours
            </Heading>
            <Fill>
              <App />
            </Fill>
          </Slide>
          <Slide transition={["slide"]} bgColor="black" align='center center'>
            <Heading>Lessons I've Learned</Heading>
            <Appear>
              <List textAlign='center'>
                <ListItem textColor='#8168B1'>1. Confidence Is Key.</ListItem>
              </List>
            </Appear>
            <Appear>
              <List textAlign='center'>
                <ListItem textColor='#8168B1'>2. Find The Right Partnerships.</ListItem>
              </List>
            </Appear>
            <Appear>
              <List textAlign='center'>
                <ListItem textColor='#8168B1'>3. Practice Your A.B.C.s!</ListItem>
              </List>
            </Appear>
            <Appear>
              <List textAlign='center' color='#8168B1'>
                <ListItem textColor='#8168B1'>4. Give Back && Teach</ListItem>
              </List>
            </Appear>
          </Slide>
          <Slide transition={["slide"]} bgColor="black" align='center center'>
            <Heading>Confidence Is Key.</Heading>
            <Appear>
              <Fill>
                <Image src={images.confidence.replace("/", "")} />
              </Fill>
            </Appear>
          </Slide>
          <Slide transition={["slide"]} bgColor="white" align='center center'>
            <Heading textColor='black'>Find The Right Partnerships.</Heading>
            <br />
            <Appear>
              <Fill>
                <Image height='200px' src={images.jakemal.replace("/", "")} />
                <Image height='200px' src={images.jakedave.replace("/", "")} />
                <Image height='200px' src={images.dpllogo.replace("/", "")} />
                <Image height='200px' src={images.ulogo.replace("/", "")} />
              </Fill>
            </Appear>
          </Slide>
          <Slide transition={["slide"]} bgColor="black" align='center center'>
            <Heading textColor='white'>Always. Be. Coding.</Heading>
            <br />
            <Fill>
              <video preLoad="true" autoPlay="true" loop="true" width="100%">
                <source src={videos.coding.replace("/", "")} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </Fill>
          </Slide>
          <Slide transition={["slide"]} bgColor="black" align='center center'>
            <Heading>Give Back && Teach.</Heading>
            <br />
            <Appear>
              <BlockQuote>
                <Quote textColor="#8168B1">We make a living by what we get, but we make a life by what we give.</Quote>
                <Cite>Winston Churchill</Cite>
              </BlockQuote>
            </Appear>
          </Slide>
          <Slide bgImage={dpl}>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
