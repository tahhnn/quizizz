import logo from "@/constants/svg-img";
import Icon from "@ant-design/icons/lib/components/Icon";
import { Button, Layout, Switch, Typography, theme } from "antd";
import Sider from "antd/es/layout/Sider";
import React from "react";
import { BaseButton } from "../Base";

type Props = {};
const { Content } = Layout;
const { Text } = Typography;

const dataResult = [
  {
    id: 1,
    name: "name",
    img: logo.src,
    count: 4,
    rank: "University",
  },
  {
    id: 2,
    name: "name",
    img: logo.src,
    count: 4,
    rank: "University",
  },
];
const dataAnswer = [
  {
    id: 1,
    name: "What is this?",
    isMultiple: true,
    answer: [
      {
        id: 1,
        text: "This is an answer",
      },
      {
        id: 2,
        text: "This is an answer",
      },
      {
        id: 3,
        text: "This is an answer",
      },
      {
        id: 4,
        text: "This is an answer",
      },
    ],
    correct: 1,
  },
  {
    id: 2,
    name: "What is that?",
    isMultiple: false,
    answer: [
      {
        id: 1,
        text: "This is an answer",
      },
      {
        id: 2,
        text: "This is an answer",
      },
      {
        id: 3,
        text: "This is an answer",
      },
      {
        id: 4,
        text: "This is an answer",
      },
    ],
    correct: 3,
  },
];
const UserCollection = (props: Props) => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <>
      <Sider
        className="sider__sider--profileCollection"
        width={"35%"}
        style={{ backgroundColor: "#f5f5f5" }}
      >
        <p
          style={{
            backgroundColor: colorBgContainer,
          }}
          className="p__p-result-stt"
        >
          2 Result
        </p>
        {dataResult.map((item) => (
          <>
            <div
              className="div__div--result-item"
              style={{
                backgroundColor: colorBgContainer,
              }}
            >
              <img src={item.img} />
              <div>
                <p className="p__p-result-title">Quiz</p>
                <p style={{ fontSize: "1rem", fontWeight: "bold" }}>
                  {item.name}
                </p>
                <div className="flex gap-4">
                  <p>{item.count} questions</p>
                  <p>{item.rank}</p>
                </div>
              </div>
            </div>
          </>
        ))}
              <BaseButton className="text-white font-bold mt-4">Create new Quiz</BaseButton>

      </Sider>
      <Content
        style={{
          backgroundColor: colorBgContainer,
          borderRadius: borderRadiusLG,
          marginLeft: "2rem",
        }}
      >
        <div className="div__div--block-create">
          <Button className="btn__btn--create">Create new quizz</Button>
        </div>
        <div className="div__div--wrapper-quizInfor">
        <BaseButton className="text-white font-bold float-end">Share</BaseButton>

          <p className="mb-2 font-bold">Demo</p>
          <p>By Hung Minh | Viet Nam</p>
          <div>
          <BaseButton className="text-white font-bold my-3">Play</BaseButton>
          <Icon type="caret-down" />
          </div>
          <p className="p__p--switchbtn">
            Show Answers <Switch />
          </p>
          <p className="font-bold">4 questions</p>
          <div className="div__div--dataAnswer">
            {dataAnswer.map((item, index) => {
              return (
                <>
                  <p className="p__p--typeAnswer">
                    <input
                      className="input__input--disable"
                      type="checkbox"
                      defaultChecked={item.isMultiple}
                      disabled
                    />
                    Mutiple Choice
                  </p>
                  <p className="font-bold">This is title question</p>
                  <div className="div__div--listAnswer">
                    {item.answer.map((answer, indexAnswer) => {
                      return (
                        <>
                          <div className="div__div--answerwrapper">
                            <p>
                              {indexAnswer + 1}. {answer.text}
                            </p>
                            <p className={`font-bold ${item.correct === indexAnswer + 1 ? "text-green-500" : "text-red-500"}`}>{item.correct === indexAnswer + 1 ? "Correct" : "Incorrect"}</p>
                          </div>
                        </>
                      );
                    })}
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </Content>
    </>
  );
};

export default UserCollection;
