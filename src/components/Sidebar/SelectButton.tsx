import { Button, ButtonProps } from "@chakra-ui/react";

interface SelecButtonProps extends ButtonProps {
  label: string;
}

export default function SelectButton({ label, ...props }: SelecButtonProps) {
  return (
    <Button
      {...props}
      w="135px"
      _active={{
        borderColor: "orange.950",
        borderWidth: "2px",
        bgColor: "orange.950",
      }}
      color="gray.50"
      variant="outline"
    >
      {label}
    </Button>
  );
}
