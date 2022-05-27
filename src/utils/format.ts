// pegar um objeto e transformar para o tipo select

interface IFormatSelect {
  data: any;
  value: string;
  label: string;
}

export const formatSelect = ({ data, value, label }: IFormatSelect) => {
  return data.map((item: any) => ({
    value: item[value],
    label: item[label],
  }));
};
