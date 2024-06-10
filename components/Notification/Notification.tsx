import { FrownOutlined, SmileOutlined } from "@ant-design/icons";

interface INotification {
  className: string;
  message: string;
  description: string;
  icon: React.ReactNode;
}
export default function Notification(
  text = "",
  description = "",
  type = "success"
): INotification | any {
  if (type == "error") {
    return {
      className: "app__notification--error",
      message: text,
      description: description,
      icon: <FrownOutlined style={{ color: "white" }} />,
    };
  }
  if (type == "success") {
    return {
      className: "app__notification--success",
      message: text,
      description: description,
      icon: <SmileOutlined style={{ color: "white" }} />,
    };
  }
}
