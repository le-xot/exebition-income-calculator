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
  NumberInputField
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import styled from '@emotion/styled'




function App() {
  const [a, setA] = React.useState(0)
  const handleChangeA = (event) => setA(event.target.value)
  const [b, setB] = React.useState(0)
  const handleChangeB = (event) => setB(event.target.value)
  const [c, setC] = React.useState(0)
  const handleChangeC = (event) => setC(event.target.value)
  const [d, setD] = React.useState(0)
  const handleChangeD = (event) => setD(event.target.value)
  const [e, setE] = React.useState(0)
  const handleChangeE = (event) => setE(event.target.value)
  const [f, setF] = React.useState(0)
  const handleChangeF = (event) => setF(event.target.value)
  const [g, setG] = React.useState(0)
  const handleChangeG = (event) => setG(event.target.value)
  const [h, setH] = React.useState(0)
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
