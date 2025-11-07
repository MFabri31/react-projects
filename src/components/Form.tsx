import {
  Box,
  Button,
  Flex,
  Input,
  Field as ChakraField,
  Dialog,
  Select,
  createListCollection,
  Portal,
} from "@chakra-ui/react";
import { Formik, Field, Form } from "formik";

const MyForm = () => {
  const categories = createListCollection({
    items: [
      { label: "Transporte", value: "transporte" },
      { label: "Comida", value: "comida" },
      { label: "Entretenimiento", value: "entretenimiento" },
      { label: "Trabajo", value: "trabajo" },
    ],
  });
  return (
    <Box>
      <Formik
        initialValues={{
          expense: "",
          category: "",
          amount: "",
          date: "",
        }}
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 500));
          alert(JSON.stringify(values, null, 2));
        }}
      >
        <Flex as={Form} flexDir="column" gap={3}>
          <ChakraField.Root>
            <ChakraField.Label htmlFor="expense" fontWeight="bold">
              Nombre del Gasto
            </ChakraField.Label>
            <Input
              as={Field}
              id="expense"
              name="expense"
              placeholder="Gasto"
              bg="#fff"
              color="gray.800"
              _placeholder={{
                color: "gray.400",
              }}
            />
          </ChakraField.Root>
          <Box display="flex" flexDir="row" gap={3}>
            <ChakraField.Root>
              <ChakraField.Label htmlFor="amount">Monto</ChakraField.Label>
              <Input
                as={Field}
                id="amount"
                name="amount"
                placeholder="$999.99"
                type="number"
                bg="#fff"
                color="gray.800"
                _placeholder={{
                  color: "gray.400",
                }}
              />
            </ChakraField.Root>

            <ChakraField.Root>
              {/* <ChakraField.Label htmlFor="category">
                Categoría
              </ChakraField.Label> */}
              {/* <Input
                as={Field}
                id="category"
                name="category"
                placeholder="Categoría"
                bg="#fff"
                color="gray.800"
                _placeholder={{
                  color: "gray.400",
                }}
              /> */}
              <Select.Root collection={categories} size="sm" width="320px">
                <Select.HiddenSelect as={Field} name="category" />
                <Select.Label htmlFor="category"> Categoría</Select.Label>
                <Select.Control>
                  <Select.Trigger>
                    <Select.ValueText placeholder="Seleccionar categoría" />
                  </Select.Trigger>
                  <Select.IndicatorGroup>
                    <Select.Indicator />
                  </Select.IndicatorGroup>
                </Select.Control>
                <Portal>
                  <Select.Positioner>
                    <Select.Content>
                      {categories.items.map((category) => (
                        <Select.Item item={category} key={category.value}>
                          {category.label}
                          <Select.ItemIndicator />
                        </Select.Item>
                      ))}
                    </Select.Content>
                  </Select.Positioner>
                </Portal>
              </Select.Root>
            </ChakraField.Root>
          </Box>
          <ChakraField.Root>
            <ChakraField.Label htmlFor="date">Fecha</ChakraField.Label>
            <Input
              as={Field}
              id="date"
              name="date"
              type="date"
              bg="#fff"
              color="gray.400"
            />
          </ChakraField.Root>
          <Dialog.Footer>
            <Dialog.ActionTrigger asChild>
              <Button variant="outline">Cancelar</Button>
            </Dialog.ActionTrigger>
            <Button>Guardar gasto</Button>
          </Dialog.Footer>
        </Flex>
      </Formik>
    </Box>
  );
};

export default MyForm;
