import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Flex,
  Grid,
  theme,
  InputGroup,
  Input,
  InputRightAddon,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import styled from '@emotion/styled'




function App() {
  let [a, setA] = React.useState(0)
  const handleChangeA = (event) => setA(event.target.value)
  let [b, setB] = React.useState(0)
  const handleChangeB = (event) => setB(event.target.value)
  let [c, setC] = React.useState(0)
  const handleChangeC = (event) => setC(event.target.value)
  let [d, setD] = React.useState(0)
  const handleChangeD = (event) => setD(event.target.value)
  let [e, setE] = React.useState(0)
  const handleChangeE = (event) => setE(event.target.value)
  let [f, setF] = React.useState(0)
  const handleChangeF = (event) => setF(event.target.value)
  let [g, setG] = React.useState(0)
  const handleChangeG = (event) => setG(event.target.value)
  let [h, setH] = React.useState(0)
  const handleChangeH = (event) => setH(event.target.value)




  return (
    <Main>
      <ChakraProvider theme={theme}>
        <Grid minH="100vh" p={3}>
          <ColorModeSwitcher justifySelf="flex-end" />
          <Box w={"500px"} justifySelf="center" align="center">
            <Box>
              <FormControl paddingBottom={'25px'}>
                <FormLabel>Количество проданных билетов (Шт)</FormLabel>
                <Input
                  size={'sm'}
                  value={a}
                  onChange={handleChangeA}
                  type='number'
                />
              </FormControl>
            </Box>
            <Box>
              <FormControl paddingBottom={'25px'}>
                <FormLabel>Стоимость билета (Руб)</FormLabel>
                <Input
                  size={'sm'}
                  value={b}
                  onChange={handleChangeB}
                  type='number'
                />
              </FormControl>
            </Box>
            <Box>
              <FormControl paddingBottom={'25px'}>
                <FormLabel>Количество дней работы выставки</FormLabel>
                <Input
                  size={'sm'}
                  value={c}
                  onChange={handleChangeC}
                  type='number'
                />
              </FormControl>
            </Box>
            <Box>
              <FormControl paddingBottom={'25px'}>
                <FormLabel>Аренда помещений (Руб/день)</FormLabel>
                <Input
                  size={'sm'}
                  value={d}
                  onChange={handleChangeD}
                  type='number'
                />
              </FormControl>
            </Box>
            <Box>
              <FormControl paddingBottom={'25px'}>
                <FormLabel>Персонал (Кол-во)</FormLabel>
                <Input
                  size={'sm'}
                  value={e}
                  onChange={handleChangeE}
                  type='number'
                />
              </FormControl>
            </Box>
            <Box>
              <FormControl paddingBottom={'25px'}>
                <FormLabel>Затраты на оборудование (Руб)</FormLabel>
                <Input
                  size={'sm'}
                  value={f}
                  onChange={handleChangeF}
                  type='number'
                />
              </FormControl>
            </Box>
            <Box>
              <FormControl paddingBottom={'25px'}>
                <FormLabel>Рекламная кампания (Руб)</FormLabel>
                <Input
                  size={'sm'}
                  value={g}
                  onChange={handleChangeG}
                  type='number'
                />
              </FormControl>
            </Box>
            <Box>
              <FormControl paddingBottom={'25px'}>
                <FormLabel>Транспортный расходы (Руб)</FormLabel>
                <Input
                  size={'sm'}
                  value={h}
                  onChange={handleChangeH}
                  type='number'
                />
              </FormControl>
            </Box>
            <Box width={"500px"}>
              <Text >{`Выручка:   ${Number(a) * Number(b)}`}</Text>
            </Box>
            <Box width={"500px"}>
              <Text>{`Расходы:   ${(Number(c) * Number(d)) + (Number(c) * Number(e)) + Number(f) + Number(g) + Number(h)}`}</Text>
            </Box>
            <Box width={"500px"}>
              <Text>{`Прибль:   ${(Number(a) * Number(b)) - ((Number(c) * Number(d)) + (Number(c) * Number(e)) + Number(f) + Number(g) + Number(h))}`}</Text>
            </Box>
          </Box>
        </Grid>
      </ChakraProvider>
    </Main>
  );
}

const Main = styled(Box)`
  height: inherit;
  flex: auto;
  display: flex;
  align-items: stretch;
  flex-direction: column;
  justify-content: space-between;
`


export default App;
