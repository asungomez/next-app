import { Form, Select } from 'antd';

type EventsFilterSelectProps = {
  values: string[] | { value: string; label: string }[];
  selected: string | undefined;
  onChange: (value: string) => void;
  name: string;
  label: string;
  placeholder: string;
};

export const EventsFilterSelect: React.FC<EventsFilterSelectProps> = ({
  values,
  selected,
  onChange,
  name,
  label,
  placeholder,
}) => (
  <Form.Item name={name} label={label} rules={[{ required: true }]}>
    <Select placeholder={placeholder} onChange={onChange} value={selected}>
      {values.map((value, index) => (
        <Select.Option
          key={index}
          value={typeof value === 'string' ? value : value.value}
        >
          {typeof value === 'string' ? value : value.label}
        </Select.Option>
      ))}
    </Select>
  </Form.Item>
);
