import React from "react";
import { Outlet, Link } from "react-router-dom";
import { Layout, Typography, Space, Flex } from "antd";

import { Navbar } from ".";
import "../App.css";

const { Header, Footer, Sider, Content } = Layout;
const headerStyle = {
    textAlign: 'center',
    color: '#fff',
    height: 64,
    paddingInline: 48,
    lineHeight: '64px',
    backgroundColor: '#4096ff',
};
const contentStyle = {
    textAlign: 'center',
    minHeight: 120,
    lineHeight: '120px',
    color: '#fff',
    backgroundColor: '#0958d9',
};
const siderStyle = {
    position: 'fixed',
    textAlign: 'center',
    lineHeight: '120px',
    color: '#fff',
    backgroundColor: '#1677ff',
};
const footerStyle = {
    textAlign: 'center',
    color: '#fff',
    backgroundColor: '#001529',
};
const layoutStyle = {
    borderRadius: 8,
    overflow: 'hidden',
    width: 'calc(50% - 8px)',
    maxWidth: 'calc(100% - 8px)',
};

const wholeLayout = () => {
    return (
        <div>
            {/* <div className='app'>
                <div className='navbar'>
                    <Navbar />
                </div>
                <div className='main'>
                    <Layout>
                        <Outlet />
                    </Layout>
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
            </div> */}
            <Flex gap="middle" wrap="wrap">
                <Layout style={layoutStyle}>
                    <Sider>
                        <Navbar />
                    </Sider>
                    <Layout>
                        <Content style={{ padding: '15px 20px' }}>
                            <Outlet />
                        </Content>
                        <Footer style={footerStyle}>

                            <Typography.Title level={5} style={{ color: "white", textAlign: "center" }}>
                                Cryptoverse <br />
                                All rights reserved
                            </Typography.Title>
                            <Space>
                                <Link to="/">Home</Link>
                                <Link to="exchanges">Exchanges</Link>
                                <Link to="news">News</Link>
                            </Space>
                        </Footer>
                    </Layout>
                </Layout>
            </Flex>
        </div >
    )
}

export default wholeLayout