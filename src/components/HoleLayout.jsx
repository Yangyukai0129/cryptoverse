import React from 'react';
import { Outlet, Link } from "react-router-dom";
import { Layout, Typography, Space } from "antd";

import { Navbar, Homepage, Exchanges, Cryptocurrencies, CryptoDetails, News } from ".";
import "../App.css";

const HoleLayout = () => {
    return (
        <div>
            <div className='app'>
                <div className='navbar'>
                    <Navbar />
                </div>
                <div className='main'>
                    <Layout>
                        <Outlet />
                    </Layout>
                </div>
                <div className='footer'>
                    <Typography.Title level={5} style={{ color: "white", textAlign: "center" }}>
                        Cryptoverse <br />
                        All rights reserved
                    </Typography.Title>
                    <Space>
                        <Link to="/">Home</Link>
                        <Link to="exchanges">Exchanges</Link>
                        <Link to="news">News</Link>
                    </Space>
                </div>
            </div>
        </div >
    )
}

export default HoleLayout