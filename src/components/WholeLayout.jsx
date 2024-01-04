import React from "react";
import { Outlet, Link } from "react-router-dom";
import { Layout, Typography, Space } from "antd";

import { Navbar } from ".";
import "../App.css";

const wholeLayout = () => {
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

export default wholeLayout