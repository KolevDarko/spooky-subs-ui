import React, { ChangeEvent } from 'react';
import { Alert, AlertIcon, Box, Button, Card, Heading, Input, Spinner } from '@chakra-ui/react';
import { useContractWrite, usePrepareSendTransaction, useSendTransaction } from 'wagmi';
import SubscriptionManagerInfo from "../contracts/SubscriptionManager.json";
import { CONTRACT_ADDRESSES } from '../contracts/addresses';
import { ethers } from 'ethers';


const readData = async (provider: ethers.providers.Provider, subscriptionId: number) => {
 const contract = new ethers.Contract(CONTRACT_ADDRESSES.goerli, SubscriptionManagerInfo.abi, provider);
 try{
  const result = await contract.subscriptions(subscriptionId); 
  console.log(`Result is ${JSON.stringify(result)}`);
 }catch(err){
  console.log(JSON.stringify(err));
 }
}

export default function Dashboard() {
  const [ethFee, setEthFee] = React.useState("0");
  const [days, setDays] = React.useState(0);
  const [vendorAddress, setVendorAddress] = React.useState("");

  const {write, isLoading, isSuccess, isError} = useContractWrite({
    mode: 'recklesslyUnprepared',
    address: `0x${CONTRACT_ADDRESSES.goerli}`,
    abi: SubscriptionManagerInfo.abi,
    functionName: 'createSubscription',
    args: ['0x5000EE9FB9c96A2A09D8efB695aC21D6C429fF11', ethers.utils.parseUnits('2', 6), 300, '0xBA62BCfcAaFc6622853cca2BE6Ac7d845BC0f2Dc'],
  })
  // const { isLoading, isSuccess, isError, sendTransaction } = useSendTransaction(config)
  const onButtonClick = async() => {
    console.log("button clickd");
    write?.();
  }
  const onAddressChange = (e: ChangeEvent<HTMLInputElement>) => {
    setVendorAddress(e.target.value);
  }
  const onFeeChange = (e: ChangeEvent<HTMLInputElement>) => {
    try{
      const ethNumber = Number.parseFloat(e.target.value);
      setEthFee(ethNumber.toString());
    }catch(e){
      console.log('error setting fee');
    }
  }
  const onDaysChange = (e: ChangeEvent<HTMLInputElement>) => {
    try{
      setDays(Number.parseInt(e.target.value));
    }catch(e){
      console.log("invalid days");
    }
  }
  
  return (
        <Card margin={"auto"} maxW="md" borderWidth="1px" borderRadius="lg" overflow="hidden">
          <Box p="6">
            {isSuccess && 
              <Alert status='success'>
                <AlertIcon />
                Subscription created. You can manage it in your Subscriptions page.
              </Alert>
            }
            {isError && 
            <Alert status='error'>
              <AlertIcon />
              There was an error creating your subscription!
            </Alert>
            }
            {isLoading && 
              <Alert status='info'>
                <AlertIcon />
                Processing transaction <Spinner color='blue.500' />
              </Alert>
            }
            <Box mb="3" alignItems="baseline">
              <Heading size="md" fontWeight="semibold" color="gray.700">
                Subscribe to Vendor: Darko Develops
              </Heading>
            </Box>
            <Box mb="3">
              Vendor address: 
              <Input ml={2} width='min' onChange={onAddressChange} value={vendorAddress} />
            </Box>
            <Box mb="3">
              Subscription fee: 
              <Input ml={2} width='min' onChange={onFeeChange} value={ethFee} />
            </Box>
            <Box mb="3">
              Recurrence period (days): <Input ml={2} width='min' type='number' onChange={onDaysChange} value={days} />
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