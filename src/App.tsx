import "./App.css";
import "@mantine/core/styles.css";

import { MantineProvider, Text } from "@mantine/core";
import Header from "./components/Header";
import Footer from "./components/Footer";
import StackSlider from "./components/StackSlider";
import CallToAction from "./components/CallToAction";

function App() {
  return (
    <MantineProvider>
      <Header />
      <StackSlider />
      <CallToAction />
      <Footer />
    </MantineProvider>
  );
}

export default App;
