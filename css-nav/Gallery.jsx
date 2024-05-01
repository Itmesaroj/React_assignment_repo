import {  Grid, GridItem, Image, Text, Stack, Heading } from "@chakra-ui/react";
import { Card, CardBody} from '@chakra-ui/react';

function Gallery() {
  return (
  
      <Grid templateColumns={{ base: "repeat(1, 1fr)", sm: "repeat(2, 1fr)", md: "repeat(3, 1fr)" ,lg:"repeat(4,1fr)" ,xl:"repeat(5,1fr)"}} gap={6} width={"100%"} p="10px">
        {[...Array(10)].map((_, index) => (
          <GridItem key={index} boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px;" >
            <Card >
              <CardBody p={0}>
                <Image
                  src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                  alt='Green double couch with wooden legs'
                  width={"300px"} height={"300px"}
                  p={0}
                />
                <Stack>
                  <Heading size='md'>Living room Sofa</Heading>
                  <Text>
                    Ramdom Title
                  </Text>
                  <Text color='blue.600' fontSize='2xl'>
                    $450
                  </Text>
                </Stack>
              </CardBody>
            </Card>
          </GridItem>
        ))}
      </Grid>
   
  )
}

export default Gallery;
