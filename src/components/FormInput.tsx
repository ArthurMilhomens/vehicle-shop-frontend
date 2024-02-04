import {
    InputGroup,
    Input,
    InputRightElement,
    InputProps,
    FormControl,
    FormErrorMessage,
  } from "@chakra-ui/react";
  import { ForwardRefRenderFunction, forwardRef } from "react";
  import { FieldError, FieldErrorsImpl, Merge } from "react-hook-form";
  
  interface FormInputProps extends InputProps {
    label: string;
    icon?: JSX.Element;
    error?: FieldError | Merge<FieldError, FieldErrorsImpl<any>> | null;
  }
  
  const FormInputBase: ForwardRefRenderFunction<HTMLInputElement, FormInputProps> =({
    label,
    icon,
    error = null,
    ...props
  }, ref) => {
    return (
      <FormControl isInvalid={!!error}>
        <InputGroup>
          <Input placeholder={label} borderColor="gray.400" {...props} ref={ref}/>
          {icon && <InputRightElement>{icon}</InputRightElement>}
        </InputGroup>
        {!!error && (
          <FormErrorMessage>{error?.message?.toString()}</FormErrorMessage>
        )}
      </FormControl>
    );
  };
  
  export const FormInput = forwardRef(FormInputBase);
  