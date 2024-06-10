import { useState } from "react";
import Link from "next/link";
import {
  HistoryOutlined,
  HomeOutlined,
  LogoutOutlined,
  MenuOutlined,
  PlusCircleOutlined,
  SearchOutlined,
  SettingOutlined,
} from "@ant-design/icons";

import { useAuth } from "@/context/AuthContext";

const Navbar = () => {
  const [showTab, setShowTab] = useState<boolean>(false);
  const { user } = useAuth();

  return (
    <div className="app__nav">
      <div className="app__nav--left">
        <div className="app__nav--left-logo">
          <span>Q</span>
          <span>uizizz </span>
        </div>
        <div className="app__nav--left-search">
          <input type="text" placeholder="Find a quiz" />
          <div className="app__nav--left-search-icon">
            <SearchOutlined />
          </div>
        </div>
        <div className="app__nav--left-menu">
          <Link href="/">
            <div className="app__nav--left-menu-item app__nav--left-menu-item-active">
              <div className="app__nav--left-menu-item-icon">
                <HomeOutlined />
              </div>
              <div className="app__nav--left-menu-item-text">Home</div>
            </div>
          </Link>

          <Link href="">
            <div className="app__nav--left-menu-item">
              <div className="app__nav--left-menu-item-icon">
                <HistoryOutlined />
              </div>
              <div className="app__nav--left-menu-item-text">Activity</div>
            </div>
          </Link>

          <Link href="">
            <div className="app__nav--left-menu-item">
              <div className="app__nav--left-menu-item-text">Classes</div>
            </div>
          </Link>
        </div>
      </div>
      <div className="app__nav--right">
        {user ? (
          <Link href="">
            <div className="app__nav--right-button">
              <PlusCircleOutlined />
              <span>Create a quiz</span>
            </div>
          </Link>
        ) : (
          <>
            <Link href="/login" className="app__nav--right-button">
              Login
            </Link>
          </>
        )}
        <div className="app__nav--right-icon">
          <MenuOutlined onClick={() => setShowTab(!showTab)} />
          {showTab && (
            <div className="app__nav--right-icon-list">
              <div className="app__nav--right-icon-list-email">
                <span className="">Vu Minh Hung</span>
                <span className="">vuminhhungltt904@gmail.com</span>
              </div>
              <div className="app__nav--right-icon-list-setting">
                <Link href="">
                  <div className="app__nav--right-icon-list-setting-item">
                    <SettingOutlined />
                    <span className="">Setings</span>
                  </div>
                </Link>
                <Link href="">
                  <div className="app__nav--right-icon-list-setting-item">
                    <LogoutOutlined />
                    <span className="">Log out</span>
                  </div>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
