// Import React
import React from "react";
import App from './App';

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
};

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
                    <Quote textColor="secondary">DevPoint Labs</Quote>
                    <Cite>Lead Full-Time Instructor</Cite>
                  </BlockQuote>
                </Appear>
                <Appear>
                  <BlockQuote>
                    <Quote textColor="secondary">Useable</Quote>
                    <Cite>Sr. Software Engineer / Equity Partner</Cite>
                  </BlockQuote>
                </Appear>
                <Appear>
                  <BlockQuote>
                    <Quote textColor="secondary">Cottonwood Coding</Quote>
                    <Cite>Co-Founder</Cite>
                  </BlockQuote>
                </Appear>
              </Fill>
            </Layout>
          </Slide>
          <Slide transition={["slide"]} bgColor="black">
            <Heading textColor="white">Writing Code Since #2011</Heading>
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
            <Appear>
              <Fill>
                <Image height="300" width="300" src={images.nerds.replace("/", "")} />
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
                <ListItem>1. Practice Makes Improvement</ListItem>
              </List>
            </Appear>
            <Appear>
              <List textAlign='center'>
                <ListItem>2. Fall in Love With Practice</ListItem>
              </List>
            </Appear>
            <Appear>
              <List textAlign='center'>
                <ListItem>3. Never Give Up</ListItem>
              </List>
            </Appear>
          </Slide>
          <Slide transition={["slide"]} bgColor="black" align='center center'>
            <Heading>Practice Makes Improvement</Heading>
            <hr />
            <List textAlign='center' textColor='white'>
              <ListItem>Practice Your ABC's</ListItem>
            </List>
            <Appear>
              <List textAlign='center'>
                <ListItem>Always</ListItem>
              </List>
            </Appear>
            <Appear>
              <List textAlign='center'>
                <ListItem>Be</ListItem>
              </List>
            </Appear>
            <Appear>
              <List textAlign='center'>
                <ListItem>Coding</ListItem>
              </List>
            </Appear>
          </Slide>
          <Slide transition={["slide"]} bgColor="black" align='center center'>
            <Heading>Fall In Love With Practice</Heading>
            <Image height="300" width="450" src={images.typing.replace("/", "")} />
            <hr />
            <Text textColor='white' textAlign='center'>
              The elite software developer is the programmer who spends all day writing code at work, 
              and after leaving work they write open source software / work on side projects on their own time.
            </Text>
          </Slide>
          <Slide transition={["slide"]} bgColor="black" align='center center'>
            <Heading>Never Give Up</Heading>
            <Image height="300" width="450" src={images.neverGiveUp.replace("/", "")} />
            <Appear>
              <hr />
            </Appear>
            <Appear>
              <BlockQuote>
                <Quote textColor="secondary">It's hard to beat a person that never gives up.</Quote>
                <Cite>Babe Ruth</Cite>
              </BlockQuote>
            </Appear>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
