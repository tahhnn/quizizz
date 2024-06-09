import { EditOutlined } from "@ant-design/icons";
import { Modal, Typography } from "antd";
import React, { Dispatch, useState } from "react";

type Props = {
  open: boolean;
  setOpen: Dispatch<React.SetStateAction<boolean>>;
};
const { Text } = Typography;
const UserEditProfile = ({ open, setOpen }: Props) => {
  const [confirmLoading, setConfirmLoading] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleOk = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 2000);
  };
  return (
    <>
      <Modal
        className="modal__modal--edit-profile"
        open={open}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleClose}
        okText="Save"
        okType="primary"
      >
        <div>
          <Text className="mr-4 text-lg font-bold">Update Profile</Text>
          <EditOutlined />
        </div>
        
      </Modal>
    </>
  );
};

export default UserEditProfile;
