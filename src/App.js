import React from 'react'
import {
  Box,
  Card,
  CardBody,
  Text,
  Grid,
  Heading,
  theme,
  NumberInput,
  Stack,
  StackDivider,
  ChakraProvider,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import styled from '@emotion/styled'




function App() {
  let [a, setA] = React.useState('')
  const handleChangeA = (event) => setA(event.target.value)
  let [b, setB] = React.useState('')
  const handleChangeB = (event) => setB(event.target.value)
  let [c, setC] = React.useState('')
  const handleChangeC = (event) => setC(event.target.value)
  let [d, setD] = React.useState('')
  const handleChangeD = (event) => setD(event.target.value)
  let [e, setE] = React.useState('')
  const handleChangeE = (event) => setE(event.target.value)
  let [f, setF] = React.useState('')
  const handleChangeF = (event) => setF(event.target.value)
  let [g, setG] = React.useState('')
  const handleChangeG = (event) => setG(event.target.value)
  let [h, setH] = React.useState('')
  const handleChangeH = (event) => setH(event.target.value)


  return (
    <Main>
      <ChakraProvider theme={theme}>
        <Grid minH="100vh" p={3}>
          <ColorModeSwitcher justifySelf="flex-end" />
          <Box w={"500px"} justifySelf="center" align="center">

            <Box paddingBottom={'15px'}>
              <Text>Количество проданных билетов (Шт)</Text>
              <NumberInput
                size='sm'
                min={0}
                clampValueOnBlur={false}
              >
                <NumberInputField
                  value={a}
                  onChange={handleChangeA}
                  type='number'
                  min={0} />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </Box>
            <Box paddingBottom={'15px'}>
              <Text>Стоимость билета (Руб)</Text>
              <NumberInput
                size='sm'
                min={0}
                clampValueOnBlur={false}
              >
                <NumberInputField
                  value={b}
                  onChange={handleChangeB}
                  type='number'
                  min={0} />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </Box>
            <Box paddingBottom={'15px'}>
              <Text>Количество дней работы выставки</Text>
              <NumberInput
                size='sm'
                min={0}
                clampValueOnBlur={false}
              >
                <NumberInputField
                  value={c}
                  onChange={handleChangeC}
                  type='number'
                  min={0} />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </Box>
            <Box paddingBottom={'15px'}>
              <Text>Аренда помещений (Руб/День)</Text>
              <NumberInput
                size='sm'
                min={0}
                clampValueOnBlur={false}
              >
                <NumberInputField
                  value={d}
                  onChange={handleChangeD}
                  type='number'
                  min={0} />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </Box>
            <Box paddingBottom={'15px'}>
              <Text>Зарплата персоналу (Руб/День)</Text>
              <NumberInput
                size='sm'
                min={0}
                clampValueOnBlur={false}
              >
                <NumberInputField
                  value={e}
                  onChange={handleChangeE}
                  type='number'
                  min={0} />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </Box>
            <Box paddingBottom={'15px'}>
              <Text>Затраты на оборудование (Руб)</Text>
              <NumberInput
                size='sm'
                min={0}
                clampValueOnBlur={false}
              >
                <NumberInputField
                  value={f}
                  onChange={handleChangeF}
                  type='number'
                  min={0} />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </Box>
            <Box paddingBottom={'15px'}>
              <Text>Рекламная кампания (Руб)</Text>
              <NumberInput
                size='sm'
                min={0}
                clampValueOnBlur={false}
              >
                <NumberInputField
                  value={g}
                  onChange={handleChangeG}
                  type='number'
                  min={0} />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </Box>
            <Box paddingBottom={'15px'}>
              <Text>Транспортный расходы (Руб)</Text>
              <NumberInput
                size='sm'
                min={0}
                clampValueOnBlur={false}
              >
                <NumberInputField
                  value={h}
                  onChange={handleChangeH}
                  type='number'
                  min={0} />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </Box>
            <Card>
              <CardBody>
                <Stack divider={<StackDivider />} spacing='4'>
                  <Box>
                    <Heading size='xs' textTransform='uppercase'>
                      Выручка
                    </Heading>
                    <Text pt='2' fontSize='sm'>
                      {`${Number(a) * Number(b)}`}
                    </Text>
                  </Box>
                  <Box>
                    <Heading size='xs' textTransform='uppercase'>
                      Расходы
                    </Heading>
                    <Text pt='2' fontSize='sm'>
                      {`${(Number(c) * Number(d)) + (Number(c) * Number(e)) + Number(f) + Number(g) + Number(h)}`}
                    </Text>
                  </Box>
                  <Box>
                    <Heading size='xs' textTransform='uppercase'>
                      Прибыль
                    </Heading>
                    <Text pt='2' fontSize='sm'>
                      {`${(Number(a) * Number(b)) - ((Number(c) * Number(d)) + (Number(c) * Number(e)) + Number(f) + Number(g) + Number(h))}`}
                    </Text>
                  </Box>
                </Stack>
              </CardBody>
            </Card>
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
