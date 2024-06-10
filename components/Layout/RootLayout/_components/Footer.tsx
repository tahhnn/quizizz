import Link from "next/link";
import { Col, Row } from "antd";
import {
  FacebookFilled,
  TikTokFilled,
  TwitterSquareFilled,
} from "@ant-design/icons";

const Footer = () => {
  return (
    <footer className="app__footer">
      <div className="container">
        <Row justify="center" style={{ padding: "0px 20px" }}>
          <Col
            style={{ padding: "20px 0px" }}
            xs={24}
            sm={24}
            md={26}
            lg={6}
            xl={6}
          >
            <ul className="app__footer--list">
              <li className="app__footer--list-title"> Mathematics</li>
              <Link href="">
                <li>Algebra</li>
              </Link>
              <Link href="">
                <li>Probalility and Statistics</li>
              </Link>
              <Link href="">
                <li>Arithmetic and Number Theory</li>
              </Link>
              <Link href="">
                <li>Trigonometry</li>
              </Link>
              <Link href="">
                <li>Calculus</li>
              </Link>
              <Link href="">
                <li>Geometry</li>
              </Link>
              <Link href="">
                <li>Last update</li>
              </Link>
            </ul>
            <div className="app__footer--copyright">
              <div className="app__footer--copyright-text">
                © 2024 Quizizz Inc.
              </div>
              <div className="app__footer--copyright-socialite">
                <Link href="">
                  {" "}
                  <FacebookFilled />{" "}
                </Link>
                <Link href="">
                  {" "}
                  <TwitterSquareFilled />{" "}
                </Link>
                <Link href="">
                  {" "}
                  <TikTokFilled />{" "}
                </Link>
              </div>
              <div className="app__footer--copyright-text app__footer--copyright-text-site-map">
                Site map
              </div>
            </div>
          </Col>
          <Col
            style={{ padding: "20px 0px" }}
            xs={24}
            sm={24}
            md={26}
            lg={6}
            xl={6}
          >
            <ul className="app__footer--list">
              <li className="app__footer--list-title"> Mathematics</li>
              <Link href="">
                <li>Algebra</li>
              </Link>
              <Link href="">
                <li>Probalility and Statistics</li>
              </Link>
              <Link href="">
                <li>Arithmetic and Number Theory</li>
              </Link>
              <Link href="">
                <li>Trigonometry</li>
              </Link>
              <Link href="">
                <li>Calculus</li>
              </Link>
              <Link href="">
                <li>Geometry</li>
              </Link>
              <Link href="">
                <li>Last update</li>
              </Link>
            </ul>
          </Col>
          <Col
            style={{ padding: "20px 0px" }}
            xs={24}
            sm={24}
            md={26}
            lg={6}
            xl={6}
          >
            <ul className="app__footer--list">
              <li className="app__footer--list-title"> Mathematics</li>
              <Link href="">
                <li>Algebra</li>
              </Link>
              <Link href="">
                <li>Probalility and Statistics</li>
              </Link>
              <Link href="">
                <li>Arithmetic and Number Theory</li>
              </Link>
              <Link href="">
                <li>Trigonometry</li>
              </Link>
              <Link href="">
                <li>Calculus</li>
              </Link>
              <Link href="">
                <li>Geometry</li>
              </Link>
              <Link href="">
                <li>Last update</li>
              </Link>
            </ul>
          </Col>
          <Col
            style={{ padding: "20px 0px" }}
            xs={24}
            sm={24}
            md={26}
            lg={6}
            xl={6}
          >
            <ul className="app__footer--list">
              <li className="app__footer--list-title"> Mathematics</li>
              <Link href="">
                <li>Algebra</li>
              </Link>
              <Link href="">
                <li>Probalility and Statistics</li>
              </Link>
              <Link href="">
                <li>Arithmetic and Number Theory</li>
              </Link>
              <Link href="">
                <li>Trigonometry</li>
              </Link>
              <Link href="">
                <li>Calculus</li>
              </Link>
              <Link href="">
                <li>Geometry</li>
              </Link>
              <Link href="">
                <li>Last update</li>
              </Link>
            </ul>
          </Col>
        </Row>
      </div>
    </footer>
  );
};

export default Footer;
