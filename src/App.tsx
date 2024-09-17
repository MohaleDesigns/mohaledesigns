import "./App.css";
import "@mantine/core/styles.css";

import { MantineProvider, Text } from "@mantine/core";

function App() {
  return (
    <MantineProvider>
      <div className="flex justify-center items-center p-5">
        <Text size="50px" c="#0B5ED7" fw="bolder">
          Mohale Designs
        </Text>
      </div>
    </MantineProvider>
  );
}

export default App;
