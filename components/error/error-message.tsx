import { Alert } from 'antd';

type ErrorMessageProps = {
  message: string;
  description: string;
};

export const ErrorMessage: React.FC<ErrorMessageProps> = ({
  message,
  description,
}) => (
  <Alert message={message} description={description} type="error" showIcon />
);
