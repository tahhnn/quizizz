import { supabase } from "@/utils/supabaseClient";
import { EditOutlined } from "@ant-design/icons";
import { Modal, Typography } from "antd";
import React, { Dispatch, useState } from "react";
import { useForm } from "react-hook-form";
import { BaseInput } from "../Base";

type Props = {
  open: boolean;
  setOpen: Dispatch<React.SetStateAction<boolean>>;
  userData: any;
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
  },
  {
    id: 7,
    name: "Chemistry",
  },
  {
    id: 8,
    name: "Physics",
  },
  {
    id: 9,
    name: "Biology",
  },
  {
    id: 10,
    name: "Business",
  },
  {
    id: 11,
    name: "Literature",
  },
];
const UserEditProfile = ({ open, setOpen, userData }: Props) => {
  const [confirmLoading, setConfirmLoading] = useState(false);
  const { control, handleSubmit, reset } = useForm();
  const handleClose = () => {
    setOpen(false);
  };
  const [topicSelected, setTopic] = useState([]);

  const handleOnSubmit = async () => {
    const { error } = await supabase
      .from("users")
      .upsert({
        name: userData?.name,
      })
      .eq("googleId", userData?.googleId);
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 1000);
  };
  const handleSetTopic = (data: any) => {
    setTopic((prev) => {
      if (prev?.includes(data)) {
        return prev.filter((item) => item !== data);
      }
      return [...prev, data];
    });
  };
  console.log(topicSelected);

  const onSubmit = () => {
    console.log("formData");
  };
  return (
    <>
      <Modal
        width={600}
        className="modal__modal--edit-profile"
        open={open}
        onOk={handleOnSubmit}
        confirmLoading={confirmLoading}
        onCancel={handleClose}
        okText="Save"
        okType="primary"
      >
        <div className="mb-4">
          <Text className="mr-4 text-lg font-bold">
            Update Profile <EditOutlined />
          </Text>

          <p className="w-[40%] text-sm float-end mr-8">
            Please leave your name correct so people can recognize you
          </p>
        </div>
        <form
          action=""
          className="mt-10 mb-8"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="relative">
            <label className="font-bold" htmlFor="name">
              Name
            </label>
            <BaseInput
              id="name"
              control={control}
              label="Name"
              name="name"
              type="text"
              placeholder="Enter your name"
              className="w-[100%] mt-2"
              defaultValue={userData?.name}
            />
          </div>
          <div className="my-4">
            <label className="font-bold" htmlFor="topic">
              Topic
            </label>
            <div className="flex justify-evenly flex-wrap gap-10">
              {topicList.map((i) => {
                return (
                  <>
                    <div key={i.id} className="mx-6 mb-6">
                      <BaseInput
                        id="topic"
                        control={control}
                        label="Topic"
                        name="topic"
                        type="checkbox"
                        placeholder="Enter your name"
                        className="w-[100%] relative hidden"
                        value={i.id}
                        onChange={(e: any) => {
                          handleSetTopic(e.target.value);
                        }}
                        checked={topicSelected?.includes(i.id)}
                      >
                        <p
                          className={`absolute border-2 p-1 rounded-lg top-[1.75rem] font-bold ${
                            topicSelected?.includes(i.id)
                              ? "bg-[#A076CC] text-white"
                              : "bg-[#fff]"
                          }`}
                          onClick={() => handleSetTopic(i.id)}
                        >
                          {i.name}
                        </p>
                      </BaseInput>
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
