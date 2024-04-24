import React from 'react';
import { Card, CardBody, CardFooter, Text, Stack, Heading, Divider, ButtonGroup, Button, Avatar, AvatarBadge, Box, HStack } from '@chakra-ui/react';

function App() {
  return (
    <Card maxW='sm' textAlign="center" m="1rem" boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px">
      <CardBody>
        <Box>
          <Avatar src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/BLACKPINK%27s_Lisa_for_BULGARI_June_2023_02_%28cropped%29.jpg/375px-BLACKPINK%27s_Lisa_for_BULGARI_June_2023_02_%28cropped%29.jpg'  size='xl'>
            <AvatarBadge boxSize='1.2em' bg='green.500' />
          </Avatar>
        </Box>
        <Stack mt='6' spacing='3'>
          <Heading fontSize={"1.7rem"} fontWeight={"bold"}>Lindsey James</Heading>
          <Text fontSize={"1.2rem"} fontWeight={"bold"} color={'#71797E'}>@lindsey_jam3s</Text>
          <Box>
            <Text  fontSize={"1.2rem"} fontWeight={"600"}  >
              Actress, musician, songwriter, and artist. PM for work inquiries or <Text as="span" color="blue.500">#tag</Text> me in your posts.
            </Text>
          </Box>
          <HStack spacing={4} justify="center" textAlign="center" maxW={['100%', '100%', '390px']} flexDirection={['column', 'row', 'row']} display={'flex'}> 
            <Text fontWeight="bold" borderRadius="md" bg="gray.100" p="10px" color={'#71797E'}>
              #ART
            </Text>
            <Text fontWeight="bold" color={'#71797E'} borderRadius="md" bg="gray.100" p="10px">
              #PHOTOGRAPHY
            </Text>
            <Text fontWeight="bold" color={'#71797E'} borderRadius="md" bg="gray.100" p="10px">
              #MUSIC
            </Text>
          </HStack>
        </Stack>
      </CardBody>
      <CardFooter>
        <ButtonGroup spacing='2'>
          <Button variant='solid' bg="gray.100" paddingX="2rem" paddingY="1.5rem"  fontSize={"1.3rem"} color={'#71797E'} borderRadius={"25px"}> 
            Message
          </Button>
          <Button variant='ghost' bg='#318CE7' _hover={{ bg: '#1E90FF' }}  paddingX="2rem" paddingY="1.5rem" borderRadius={"25px"} color="white"  fontSize={"1.3rem"}  boxShadow="#318CE7 0px 5px 15px">
           Follow
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
}

export default App;
