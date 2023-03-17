import {
  Heading,
  Avatar,
  Box,
  Center,
  Text,
  Stack,
  Button,
  Link,
  Badge,
  useColorModeValue,
} from '@chakra-ui/react';

type CardProps = {
  name: string;
  username: string;
  avatar: string;
  bio: string;
  presence: string;
  justifiedAbsence: string;
  unexcusedAbsence: string;
};

const Card = ({ name, username, avatar, bio, presence, justifiedAbsence, unexcusedAbsence }: CardProps) => {
    return (
      <Center py={6}>
        <Box
          maxW={'320px'}
          w={'full'}
          bg={useColorModeValue('white', 'gray.900')}
          boxShadow={'2xl'}
          rounded={'lg'}
          p={6}
          textAlign={'center'}>
          <Avatar
            size={'xl'}
            src={avatar}
            mb={4}
            pos={'relative'}
            _after={{
              content: '""',
              w: 4,
              h: 4,
              bg: 'green.300',
              border: '2px solid white',
              rounded: 'full',
              pos: 'absolute',
              bottom: 0,
              right: 3,
            }}
          />
          <Heading fontSize={'2xl'} fontFamily={'body'}>
            {name}
          </Heading>
          <Text fontWeight={600} color={'gray.500'} mb={4}>
            {username} - {bio}
          </Text>
          <Box mb={2}>
            <Badge px={2} py={1} colorScheme={"green"} fontWeight={'700'}>
              Presenças: {presence}
            </Badge>
          </Box>
          <Box mb={2}>
            <Badge px={2} py={1} colorScheme={"yellow"} fontWeight={'700'}>
              Faltas Justificadas: {justifiedAbsence}
            </Badge>
          </Box>
          <Box>
            <Badge px={2} py={1} colorScheme={"red"} fontWeight={'700'}>
              Faltas Injustificadas: {unexcusedAbsence}
            </Badge>
          </Box>
  
          {/* <Box mt={6}>
            <Badge
              px={2}
              py={1}
              bg={useColorModeValue('gray.50', 'gray.800')}
              fontWeight={'400'}>
              Presença: {presence}
            </Badge>
            <Badge
              px={2}
              py={1}
              bg={useColorModeValue('gray.50', 'gray.800')}
              fontWeight={'400'}>
              Faltas Justificadas: {justifiedAbsence}
            </Badge>
            <Badge
              px={2}
              py={1}
              bg={useColorModeValue('gray.50', 'gray.800')}
              fontWeight={'400'}>
              Faltas Injustificadas: {unexcusedAbsence}
            </Badge>
          </Box> */}
  
          {/* <Stack mt={8} direction={'row'} spacing={4}>
            <Button
              flex={1}
              fontSize={'sm'}
              rounded={'full'}
              _focus={{
                bg: 'gray.200',
              }}>
              Message
            </Button>
            <Button
              flex={1}
              fontSize={'sm'}
              rounded={'full'}
              bg={'blue.400'}
              color={'white'}
              boxShadow={
                '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
              }
              _hover={{
                bg: 'blue.500',
              }}
              _focus={{
                bg: 'blue.500',
              }}>
              Follow
            </Button>
            </Stack> */}
        </Box>
      </Center>
    );
  };

export default Card;