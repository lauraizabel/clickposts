import React, { useEffect, useState } from "react";
import { Text } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { Select as SelectProps } from "../../@types/Select";
import theme from "../../theme";

import { Container, ListEmpty, ListEmptyText } from "./select-styled";

interface ISelect {
  label: string;
  value: string | null;
  items: SelectProps[];
  setItems: React.Dispatch<React.SetStateAction<SelectProps[]>>;
  onChangeValue: (value: any) => void;
}

const Select: React.FC<ISelect> = ({
  items,
  label,
  onChangeValue,
  setItems,
  value,
}) => {
  const [open, setOpen] = useState(false);
  const [componentValue, setComponentValue] = useState<string | null>(null);

  const renderListEmpty = () => {
    return (
      <ListEmpty>
        <ListEmptyText>Nenhum item encontrado</ListEmptyText>
      </ListEmpty>
    );
  };

  useEffect(() => {
    onChangeValue(componentValue);
  }, [componentValue]);

  return (
    <Container>
      <DropDownPicker
        open={open}
        value={componentValue}
        items={items}
        setOpen={setOpen}
        setItems={setItems}
        searchable={true}
        searchPlaceholder="Digite algo"
        placeholder={label}
        closeAfterSelecting={true}
        ListEmptyComponent={renderListEmpty}
        setValue={setComponentValue}
        style={{
          borderColor: theme.colors.darkGreen,
          backgroundColor: theme.colors.lightGreen,
          opacity: 1.8,
        }}
        zIndex={1000}
      />
    </Container>
  );
};

export default Select;
