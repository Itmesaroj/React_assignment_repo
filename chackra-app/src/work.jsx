import React from 'react';
import { Box, Center, Container, Flex, Image, Text } from '@chakra-ui/react';
import { Popover, PopoverTrigger, PopoverContent, PopoverBody, PopoverArrow } from '@chakra-ui/react';

function Work() {
  return (
    <>
      <div>
        <Center>
          <Box mb={8}>
            <Text fontSize="2rem" fontWeight="bold" textAlign="center">Our Client Speak</Text>
            <Text>We Have been working with client around the world</Text>
          </Box>
        </Center>
        <Flex justifyContent="space-around" width="100%" alignItems="center" height="100vh" >
          <Box>
            <Popover isOpen={true} placement='top' arrowSize={20} >
              <PopoverTrigger>
                <Box textAlign="center" display="flex" flexDirection="column" alignItems="center">
                  <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ51zvqcW-RAl7w2BkjxCjOHF7pmapwOuMS2cRGCbuZFUPMQBJ8pbNGIKnXD9_j4OOMExs&usqp=CAU" borderRadius="full" boxSize="50px" />
                  <Text fontWeight="bold" fontSize="lg">Jane Cooper</Text>
                  <Text fontSize="sm" color="gray.500">CEO at ABC Corporation</Text>
                </Box>
              </PopoverTrigger>
              <PopoverContent boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"  marginBottom="10px" >
                <PopoverArrow />
                <PopoverBody>
                  <Box textAlign="center" p=".5rem">
                    <Text fontWeight="bolder" fontSize="1.3rem" >Efficient Collaborating</Text>
                    <Text fontSize="1rem" color="gray.500">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates iusto perspiciatis perferendis .</Text>
                  </Box>
                </PopoverBody>
              </PopoverContent>
            </Popover>
          </Box>
          <Box>
            <Popover isOpen={true} placement='top' arrowSize={20}>
              <PopoverTrigger>
                <Box textAlign="center" display="flex" flexDirection="column" alignItems="center">
                  <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ51zvqcW-RAl7w2BkjxCjOHF7pmapwOuMS2cRGCbuZFUPMQBJ8pbNGIKnXD9_j4OOMExs&usqp=CAU" borderRadius="full" boxSize="50px" />
                  <Text fontWeight="bold" fontSize="lg">Jane Cooper</Text>
                  <Text fontSize="sm" color="gray.500">CEO at ABC Corporation</Text>
                </Box>
              </PopoverTrigger>
              <PopoverContent boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" marginBottom="10px">
                <PopoverArrow />
                <PopoverBody>
                  <Box textAlign="center" p=".5rem">
                    <Text fontWeight="bolder" fontSize="1.3rem">Intuitive Design</Text>
                    <Text fontSize="1rem" color="gray.500">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates iusto perspiciatis perferendis .</Text>
                  </Box>
                </PopoverBody>
              </PopoverContent>
            </Popover>
          </Box>
          <Box>
            <Popover isOpen={true} placement='top' arrowSize={20}>
              <PopoverTrigger>
                <Box textAlign="center" display="flex" flexDirection="column" alignItems="center">
                  <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ51zvqcW-RAl7w2BkjxCjOHF7pmapwOuMS2cRGCbuZFUPMQBJ8pbNGIKnXD9_j4OOMExs&usqp=CAU" borderRadius="full" boxSize="50px" />
                  <Text fontWeight="bold" fontSize="lg">Jane Cooper</Text>
                  <Text fontSize="sm" color="gray.500">CEO at ABC Corporation</Text>
                </Box>
              </PopoverTrigger>
              <PopoverContent boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" marginBottom="10px">
                <PopoverArrow />
                <PopoverBody>
                  <Box textAlign="center"  p=".5rem">
                    <Text fontWeight="bold" fontSize="1.3rem">Mindblowing Service</Text>
                    <Text fontSize="1rem" color="gray.500">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates iusto perspiciatis perferendis .</Text>
                  </Box>
                </PopoverBody>
              </PopoverContent>
            </Popover>
          </Box>
        </Flex>
      </div>
    </>
  );
}

export default Work;
