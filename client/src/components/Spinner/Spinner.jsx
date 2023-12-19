
import { Flex, Spin } from 'antd';
const Spinner = () => (
  <Flex align="center" gap="middle" style={{display: "none",
    position: "absolute",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",}}>
    <Spin size="large" />
  </Flex>
);
export default Spinner;