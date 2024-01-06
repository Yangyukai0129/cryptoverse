import React from 'react';
import { Button, Menu, Typography, Avatar } from "antd";
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

import icon from "../images/cryptocurrency.png"

const Navbar = () => {
    return (
        <div>
            <div className='logo-container'>
                <Avatar src={icon} size="large" />
            </div>
            <Typography.Title level={2} className='logo'>
                <Link to="/">Cryptoverse</Link>
            </Typography.Title>
            <Menu theme='dark'>
                <Menu.Item key={"HomeOutlined"} icon={<HomeOutlined />}>
                    <Link to="/">Home</Link>
                </Menu.Item>
                <Menu.Item key={"FundOutlined"} icon={<FundOutlined />}>
                    <Link to="cryptocurrencies">Cryptocurrencies</Link>
                </Menu.Item>
                <Menu.Item key={"MoneyCollectOutlined"} icon={<MoneyCollectOutlined />}>
                    <Link to="exchanges">Exchanges</Link>
                </Menu.Item>
                <Menu.Item key={"BulbOutlined"} icon={<BulbOutlined />}>
                    <Link to="news">News</Link>
                </Menu.Item>
            </Menu>
            {/* <Button className='menu-control-container'>

                </Button> */}

        </div>
    )
}

export default Navbar