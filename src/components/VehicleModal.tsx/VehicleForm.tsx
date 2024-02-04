import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  Button,
  Checkbox,
  Flex,
  Text,
  Stack,
  HStack,
  Center,
  Image,
} from "@chakra-ui/react";
import { RiImageAddFill, RiLock2Line, RiUser3Line } from "react-icons/ri";
import { FormInput } from "../FormInput";
import { useMutation } from "react-query";
import { api } from "@/service/api";
import { useLoginModal } from "@/contexts/LoginModalContext";
import Cookies from "universal-cookie";
import { useState } from "react";

type SubmitFormData = {
  name: string;
  brand: string;
  model: string;
  price: number;
};

export default function VehicleForm() {
  const { onClose } = useLoginModal();
  const [image, setImage] = useState<string>("");

  const submitFormSchema = yup
    .object({
      name: yup.string().required("Nome obrigatório"),
      brand: yup.string().required("Marca obrigatória"),
      model: yup.string().required("Modelo obrigatório"),
      price: yup.number().required("Preço obrigatório"),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(submitFormSchema),
  });

  //   const handleLogin = useMutation(
  //     async (data: SubmitFormData) => {
  //       const response = await api.post("users/login", {
  //         email: data.email,
  //         password: data.password,
  //       });
  //       cookies.set("user", response.data, { path: "/" });

  //       api.defaults.headers.common[
  //         "Authorization"
  //       ] = `${response.data.accessToken}`;

  //       return response.data;
  //     },
  //     {
  //       onSuccess: () => {
  //         onClose();
  //       },
  //     }
  //   );

  //   const handleFormSubmit: SubmitHandler<SubmitFormData> = async (data) => {
  //     await handleLogin.mutateAsync(data);
  //   };

  const changeImage = (blob: Blob) => {
    const url = URL.createObjectURL(blob);
    // setImageBlob(blob);
    setImage(url);
  };

  return (
    <Stack
      as="form"
      w="full"
      mt="24px"
      spacing="16px"
      //   onSubmit={handleSubmit(handleFormSubmit)}
    >
      <FormInput
        label="Nome do veículo"
        {...register("name")}
        error={errors.name}
      />
      <FormInput label="Marca" {...register("model")} error={errors.model} />
      <FormInput label="Modelo" {...register("brand")} error={errors.brand} />
      <FormInput
        label="Preço (R$)"
        {...register("price")}
        type="number"
        error={errors.price}
      />
      <HStack justify="center" w="full">
        <label htmlFor="avatar" style={{ width: "100%" }}>
          {image === "" ? (
            <Center
              borderStyle="dashed"
              borderWidth="2px"
              borderColor="#F59265"
              w="full"
              cursor="pointer"
              h="178px"
              borderRadius="8px"
            >
              <RiImageAddFill color="#F59265" fontSize="45px" />
            </Center>
          ) : (
            <Image
              src={image}
              w="100%"
              h={178}
              objectFit="cover"
              alt="carro"
              borderRadius={8}
              borderStyle="dashed"
              borderWidth="2px"
              borderColor="#F59265"
            />
          )}
        </label>
        <input
          id="avatar"
          hidden
          type="file"
          onChange={async (e: any) =>
            changeImage(
              new Blob([e.target.files[0]], { type: e.target.files[0].type })
            )
          }
        />
      </HStack>
      <HStack alignSelf="flex-end" mt="2">
      <Button
        bgColor="gray.50"
        color="gray.900"
        variant="filled"
        _hover={{
          bgColor: "gray.100",
        }}
        _focus={{
          bgColor: "gray.100",
        }}
      >
        Cancelar
      </Button>
      <Button
        bgColor="orange.950"
        color="gray.50"
        variant="filled"
        _hover={{
          bgColor: "orange.700",
        }}
        _focus={{
          bgColor: "orange.950",
          borderColor: "orange.950",
        }}
        isLoading={isSubmitting}
        type="submit"
      >
        Cadastrar
      </Button>
      </HStack>
    </Stack>
  );
}
