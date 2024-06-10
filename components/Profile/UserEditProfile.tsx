import FormInput from "@/components/Form/Input/form-input";
import { EditOutlined } from "@ant-design/icons";
import { Modal, Typography } from "antd";
import React, { Dispatch, useState } from "react";
import { useForm } from "react-hook-form";

type Props = {
  open: boolean;
  setOpen: Dispatch<React.SetStateAction<boolean>>;
};
const { Text } = Typography;
const topicList = [
  {
    id: 1,
    name: "Math",
  },
  {
    id: 2,
    name: "English",
  },
  {
    id: 3,
    name: "Science",
  },
  {
    id: 4,
    name: "History",
  },
  {
    id: 5,
    name: "Geography",
  },
  {
    id: 6,
    name: "Sociology",
  },{
    id:7,
    name: "Chemistry",
  },{
    id:8,
    name: "Physics",
  },{
    id:9,
    name: "Biology",
  },{
    id:10,
    name: "Business",
  },{
    id: 11,
    name: "Literature",
  }
];
const UserEditProfile = ({ open, setOpen }: Props) => {
  const [confirmLoading, setConfirmLoading] = useState(false);
  const { control, handleSubmit, reset } = useForm();
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
  const onSubmit = () => {
    console.log("formData");
  };
  return (
    <>
      <Modal
        width={600}
        className="modal__modal--edit-profile"
        open={open}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleClose}
        okText="Save"
        okType="primary"
      >
        <div className="mb-4 flex justify-center">
          <Text className="mr-4 text-lg font-bold">
            Update Profile <EditOutlined />
          </Text>

          <p className="w-[40%] text-sm">
            Please leave your name correct so people can recognize you
          </p>
        </div>
        <form action="" className="mt-10" onSubmit={handleSubmit(onSubmit)}>
          <div className="relative">
            <label className="font-bold" htmlFor="name">
              Name
            </label>
            <FormInput
              id="name"
              control={control}
              label="Name"
              name="name"
              type="text"
              placeholder="Enter your name"
              className="w-[100%] mt-2"
            />
          </div>
          <div className="">
            <label className="font-bold" htmlFor="topic">
              Topic
            </label>
            <div className="flex justify-evenly flex-wrap gap-8">
              {topicList.map((i) => {
                return (
                  <>
                    <div key={i.id} className="mx-6">
                    <FormInput
                      id="topic"
                      control={control}
                      label="Topic"
                      name="topic"
                      type="checkbox"
                      placeholder="Enter your name"
                      className="w-[100%] mt-3 relative"
                      value={i.id}
                      
                    >
                      <p className="absolute top-[1.75rem] font-bold">{i.name}</p>
                    </FormInput>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </form>
      </Modal>
    </>
  );
};

export default UserEditProfile;
