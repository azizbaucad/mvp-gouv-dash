import { Text, Box, HStack, Icon, VStack, Divider } from '@chakra-ui/react';
import { FaEye, FaPlus, FaUserPlus } from 'react-icons/fa';

export const FollowerCount = ({}) => {
  return (
    <Box
      borderRadius="md"
      border="1px solid"
      borderColor="gray.300"
      p={4}
      w="fit-content"
      bg="#f1f5f9"
    >
      <HStack spacing={4}>
        <Box
          bg="teal.600"
          p={2}
          borderRadius="full"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Icon as={FaUserPlus} color="#f1f5f9" boxSize={5} />
        </Box>
        <Box>
          <Text fontWeight="bold" fontSize="1.2rem">
            87 <Text as='span' fontWeight={700} fontSize='0.8rem'>Mxof</Text>
          </Text>
          <Text fontSize="xs" color="gray.500">
            Nombre de Projets
          </Text>
        </Box>
      </HStack>
    </Box>
  );
};


export const AddForm = ({ title }) => {
  return (
    <Box
      borderRadius="md"
      border="1px solid"
      borderColor="gray.300"
      p={4}
      w="100%"
      bg="#f1f5f9"
      textAlign="center"
    >
      <VStack spacing={2} w={'100%'}>
        <Box
        w={'100%'}
          bg="teal.600"
          p={2}
          borderRadius="full"
          display="flex"
          alignItems="center"
          justifyContent="center"
          boxSize={10}  // Taille de la boîte pour l'icône
        >
          <Icon as={FaPlus} color="#e2e8f0" boxSize={5} />
        </Box>
        <Text fontWeight="600" fontSize="sm" color="gray.800">
          {title}
        </Text>
      </VStack>
    </Box>
  );
};

export const AddViewForm = () => {
  return (
    <Box
      borderRadius="md"
      border="1px solid"
      borderColor="gray.300"
      p={4}
      w="100%"
      bg="#f1f5f9"
      textAlign="center"
      transition="all 0.2s ease-in-out" // Transition pour le hover
      _hover={{
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)', // Ombre lors du hover
      }}
    >
      <HStack justifyContent="center" spacing={8} w="100%">
        {/* Add Form */}
        <VStack spacing={2} w="100%">
          <Box
            w="100%"
            bg="teal.600"
            p={2}
            borderRadius="full"
            display="flex"
            alignItems="center"
            justifyContent="center"
            boxSize={8}
            transition="all 0.2s ease-in-out" // Transition douce
            _hover={{
              boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)', // Ombre lors du hover
            }}
          >
            <Icon as={FaPlus} color="#e2e8f0" boxSize={4} />
          </Box>
          <Text fontWeight="500" fontSize="xs" color="gray.800">
            Add Form
          </Text>
        </VStack>

        {/* View Form */}
        <VStack spacing={2} w="100%">
          <Box
            w="100%"
            bg="red.800"
            p={2}
            borderRadius="full"
            display="flex"
            alignItems="center"
            justifyContent="center"
            boxSize={8}
            transition="all 0.2s ease-in-out" // Transition douce
            _hover={{
              boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)', // Ombre lors du hover
            }}
          >
            <Icon as={FaEye} color="#e2e8f0" boxSize={4} />
          </Box>
          <Text fontWeight="500" fontSize="xs" color="gray.800">
            View Form
          </Text>
        </VStack>
      </HStack>
    </Box>
  );
};
