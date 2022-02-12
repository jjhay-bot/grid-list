import { Box } from "@chakra-ui/layout";
import Feed from './feed';

function App() {
  // 2. Use at the root of your app
  return (
    <Box width='100vw' height='100vh' bg='gray.100'>
      <Feed />
    </Box>
  )
}

export default App;
