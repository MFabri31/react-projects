import {
  Box,
  Heading,
  Text,
  Stack,
  Container,
  Button,
  Table,
  Separator,
  HStack,
  Flex,
  Dialog,
  Portal,
  CloseButton,
} from "@chakra-ui/react";
import { useState } from "react";
import MyForm from "./components/Form";

const INITIAL_STATE = [
  {
    id: 1,
    expense: "Laptop",
    category: "Electronics",
    amount: 999.99,
    date: "2025-01-15",
  },
  {
    id: 2,
    expense: "Coffee Maker",
    category: "Home Appliances",
    amount: 49.99,
    date: "2025-01-16",
  },
  {
    id: 3,
    expense: "Desk Chair",
    category: "Furniture",
    amount: 150.0,
    date: "2025-01-17",
  },
  {
    id: 4,
    expense: "Smartphone",
    category: "Electronics",
    amount: 799.99,
    date: "2025-01-18",
  },
  {
    id: 5,
    expense: "Headphones",
    category: "Accessories",
    amount: 199.99,
    date: "2025-01-19",
  },
];

function App() {
  const [expenses, setExpenses] = useState(INITIAL_STATE);
  return (
    <>
      <Container>
        <HStack py="6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="icon icon-tabler icons-tabler-outline icon-tabler-coins"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M9 14c0 1.657 2.686 3 6 3s6 -1.343 6 -3s-2.686 -3 -6 -3s-6 1.343 -6 3z" />
            <path d="M9 14v4c0 1.656 2.686 3 6 3s6 -1.344 6 -3v-4" />
            <path d="M3 6c0 1.072 1.144 2.062 3 2.598s4.144 .536 6 0c1.856 -.536 3 -1.526 3 -2.598c0 -1.072 -1.144 -2.062 -3 -2.598s-4.144 -.536 -6 0c-1.856 .536 -3 1.526 -3 2.598z" />
            <path d="M3 6v10c0 .888 .772 1.45 2 2" />
            <path d="M3 11c0 .888 .772 1.45 2 2" />
          </svg>
          <Text fontSize="2xl"> Expense Tracker </Text>
        </HStack>
        <Separator bg="gray" py="0.5" variant="solid" />
        <Flex alignItems="center" justify="space-between" py="5">
          <Heading size="4xl">Mis Gastos</Heading>
          <Dialog.Root>
            <Dialog.Trigger asChild>
              <Button colorPalette="blue">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="#ffffff"
                  class="icon icon-tabler icons-tabler-filled icon-tabler-circle-plus"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M4.929 4.929a10 10 0 1 1 14.141 14.141a10 10 0 0 1 -14.14 -14.14zm8.071 4.071a1 1 0 1 0 -2 0v2h-2a1 1 0 1 0 0 2h2v2a1 1 0 1 0 2 0v-2h2a1 1 0 1 0 0 -2h-2v-2z" />
                </svg>
                Agregar
              </Button>
            </Dialog.Trigger>
            <Portal>
              <Dialog.Backdrop />
              <Dialog.Positioner>
                <Dialog.Content>
                  <Dialog.Header>
                    <Dialog.Title fontWeight="bold" fontSize="2xl">
                      Añadir nuevo gasto
                    </Dialog.Title>
                  </Dialog.Header>
                  <Dialog.Body>
                    <MyForm />
                  </Dialog.Body>
                  <Dialog.CloseTrigger asChild>
                    <CloseButton size="sm" />
                  </Dialog.CloseTrigger>
                </Dialog.Content>
              </Dialog.Positioner>
            </Portal>
          </Dialog.Root>
        </Flex>
        <Table.Root size="sm">
          <Table.Header>
            <Table.Row>
              <Table.ColumnHeader>Nombre del gasto</Table.ColumnHeader>
              <Table.ColumnHeader>Categoria</Table.ColumnHeader>
              <Table.ColumnHeader>Cantidad</Table.ColumnHeader>
              <Table.ColumnHeader>Fecha</Table.ColumnHeader>
              <Table.ColumnHeader>Opciones</Table.ColumnHeader>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {expenses.map((item) => (
              <Table.Row key={item.id}>
                <Table.Cell>{item.expense}</Table.Cell>
                <Table.Cell>{item.category}</Table.Cell>
                <Table.Cell>{item.amount}</Table.Cell>
                <Table.Cell>{item.date}</Table.Cell>
                <Table.Cell>
                  {" "}
                  <Button
                    colorPalette="yellow"
                    mb={{ base: "0.5rem", sm: "0.5rem", md: "0", lg: "0" }}
                    mr={{ base: "1rem" }}
                  >
                    Editar
                  </Button>
                  <Button colorPalette="red">Borrar</Button>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Root>
      </Container>
    </>
  );
}

export default App;
