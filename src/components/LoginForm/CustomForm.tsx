import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Checkbox, Flex, Text, Stack, useToast } from "@chakra-ui/react";
import { RiLock2Line, RiUser3Line } from "react-icons/ri";
import { FormInput } from "../FormInput";
import { useMutation } from "react-query";
import { api } from "@/service/api";
import { useLoginModal } from "@/contexts/LoginModalContext";
import Cookies from "universal-cookie";

type LoginFormData = {
  email: string;
  password: string;
};

export default function CustomForm() {
  const { onClose } = useLoginModal();
  const cookies = new Cookies();
  const toast = useToast();

  const loginFormSchema = yup
    .object({
      email: yup
        .string()
        .required("E-mail obrigatório")
        .email("E-mail inválido"),
      password: yup.string().required("Senha obrigatória"),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(loginFormSchema),
  });

  const handleLogin = useMutation(
    async (data: LoginFormData) => {
      const response = await api.post("users/login", {
        email: data.email,
        password: data.password,
      });
      cookies.set("user", response.data, { path: "/" });

      api.defaults.headers.common[
        "Authorization"
      ] = `${response.data.accessToken}`;

      return response.data;
    },
    {
      onSuccess: () => {
        onClose();
      },
      onError: () => {
        toast({
          title: 'Credenciais inválidas.',
          status: 'error',
          duration: 3000,
          isClosable: true,
          position: 'top-right'
        });
      }
    }
  );

  const handleFormSubmit: SubmitHandler<LoginFormData> = async (data) => {
    await handleLogin.mutateAsync(data);
  };

  return (
    <Flex
      as="form"
      w="full"
      my="24px"
      direction="column"
      alignItems="center"
      onSubmit={handleSubmit(handleFormSubmit)}
    >
      <Stack w="full" spacing="16px">
        <FormInput
          label="E-mail"
          icon={<RiUser3Line color="#5F5F5F" />}
          {...register("email")}
          type="e-mail"
          error={errors.email}
        />
        <Flex direction="column">
          <FormInput
            label="Senha"
            icon={<RiLock2Line color="#5F5F5F" />}
            {...register("password")}
            type="password"
            error={errors.password}
          />
          <Button
            color="#F59265"
            variant="link"
            alignSelf="flex-end"
            fontSize="12px"
            as="ins"
            cursor="pointer"
          >
            Esqueci minha senha
          </Button>
        </Flex>
        <Checkbox colorScheme="orange" color="#5F5F5F">
          Mantenha-me logado
        </Checkbox>
      </Stack>
      <Button
        my="24px"
        w="full"
        bgColor="orange.950"
        color="gray.50"
        variant="filled"
        mr="8"
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
        Login
      </Button>
      <Text fontWeight="300">
        Se você ainda não tem uma conta,{" "}
        <Text as="ins" cursor="pointer" color="#F59265">
          inscreva-se aqui
        </Text>
        !
      </Text>
    </Flex>
  );
}
