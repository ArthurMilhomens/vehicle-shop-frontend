import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  Button,
  Stack,
  HStack,
  Center,
  Image,
  useToast,
} from "@chakra-ui/react";
import { RiImageAddFill } from "react-icons/ri";
import { FormInput } from "../FormInput";
import { useMutation } from "react-query";
import { api } from "@/service/api";
import { useState } from "react";
import { useVehicleModal } from "@/contexts/VehicleModalContext";
import { queryClient } from "@/service/queryClient";

type SubmitFormData = {
  name: string;
  brand: string;
  model: string;
  price: number;
};

type ImageType = {
  blob: Blob | string;
  url: string;
}

export default function VehicleForm() {
  const { onClose } = useVehicleModal();
  const toast = useToast();
  const [image, setImage] = useState<ImageType>({
    blob: "",
    url: "",
  });

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

  const handleSubmitVehicle = useMutation(
    async (data: SubmitFormData) => {
      const formData = new FormData();

      formData.append("image", image.blob);
      formData.append("Data", JSON.stringify(data));

      const response = await api.post("vehicles", formData)

      return response.data;
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("vehicles");
        toast({
          title: 'Veículo cadastrado.',
          status: 'success',
          duration: 3000,
          isClosable: true,
          position: 'top-right'
        });
        onClose();
      },
    }
  );

  const handleFormSubmit: SubmitHandler<SubmitFormData> = async (data) => {
    await handleSubmitVehicle.mutateAsync(data);
  };

  const changeImage = (blob: Blob) => {
    const url = URL.createObjectURL(blob);
    setImage({
      blob,
      url,
    });
  };

  return (
    <Stack
      as="form"
      w="full"
      mt="24px"
      spacing="16px"
      onSubmit={handleSubmit(handleFormSubmit)}
    >
      <FormInput
        label="Nome do veículo"
        {...register("name")}
        error={errors.name}
      />
      <FormInput label="Marca" {...register("brand")} error={errors.brand} />
      <FormInput label="Modelo" {...register("model")} error={errors.model} />
      <FormInput
        label="Preço (R$)"
        {...register("price")}
        type="number"
        error={errors.price}
      />
      <HStack justify="center" w="full">
        <label htmlFor="avatar" style={{ width: "100%" }}>
          {image.url === "" ? (
            <Center
              borderStyle="dashed"
              borderWidth="2px"
              borderColor="#F59265"
              w="full"
              cursor="pointer"
              h={280}
              borderRadius="8px"
            >
              <RiImageAddFill color="#F59265" fontSize="45px" />
            </Center>
          ) : (
            <Image
              src={image.url}
              w="100%"
              h={280}
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
          isDisabled={isSubmitting || (image.url === "")}
        >
          Cadastrar
        </Button>
      </HStack>
    </Stack>
  );
}
