import { Tag, TagCloseButton, TagLabel } from "@chakra-ui/react";

interface FilterTagProps {
  children: React.ReactNode;
  onDelete: () => void;
}

export default function FilterTag({ children, onDelete }: FilterTagProps) {
  return (
    <Tag
      size="lg"
      borderRadius="full"
      variant="outline"
      colorScheme="orange"
      color="gray.100"
    >
      <TagLabel>{children}</TagLabel>
      <TagCloseButton onClick={onDelete} />
    </Tag>
  );
}
