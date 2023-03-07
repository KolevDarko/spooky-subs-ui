import { Box, Button, Card, FormLabel, Heading } from '@chakra-ui/react';

export default function Dashboard() {
  const onButtonClick = () => {
    console.log("btn clicked");
  }
  return (
        <Card margin={"auto"} maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
          <Box p="6">
            <Box mb="3" alignItems="baseline">
              <Heading size="md" fontWeight="semibold" color="gray.700">
                Subscribe to Vendor: chainlink.eth
              </Heading>
            </Box>
            <Box>
              Vendor: 0x123346zdvsdsvetaxeuvlskcniw
            </Box>
            <Box>
              Subscription fee: 0.01 ETH
            </Box>
            <Box>
              Recurrence period: 30 days
            </Box>
            <Box mt="5" textAlign="center">
              <Button onClick={onButtonClick} colorScheme="blue" size="md">
                Subscriiiibe
              </Button>
            </Box>
          </Box>
        </Card>
      );
    }
    
export const tasksLoader = async () => {
  const res = await fetch('http://localhost:3000/tasks')

  return res.json()
}