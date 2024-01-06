import React from 'react';
import millify from 'millify';
import { Typography, Row, Col, Statistic, Skeleton } from 'antd';
import { Link } from 'react-router-dom';

import { useGetCryptosQuery } from '../services/cryptoApi';
import { Cryptocurrencies, News } from './index';

const { Title } = Typography

const Homepage = () => {
    const { data, isFetching } = useGetCryptosQuery(10)
    // console.log(data)
    // console.log(isFetching)
    const globalStas = data?.data?.stats

    if (isFetching) {
        return (
            <Row gutter={[32, 32]} className='crtypto-card-container' >
                {
                    [1, 2, 3, 4, 5, 6, 7, 8].map((key) => (
                        <Col xs={24} sm={12} lg={6} className='crypto-card' key={key}>
                            <Skeleton loading={isFetching} active />
                        </Col>
                    ))
                }
            </Row >
        )
    }

    return (
        <>
            <Title level={2} className='heading'>
                Global Crypto Stats
            </Title>
            <Row>
                <Col span={12}><Statistic title="Total Cryptocurrencies" value={globalStas.total}></Statistic></Col>
                <Col span={12}><Statistic title="Total Exchanges" value={millify(globalStas.totalExchanges)}></Statistic></Col>
                <Col span={12}><Statistic title="Total Market Cap" value={millify(globalStas.totalMarketCap)}></Statistic></Col>
                <Col span={12}><Statistic title="Total 24h Volume" value={millify(globalStas.total24hVolume)}></Statistic></Col>
                <Col span={12}><Statistic title="Total Markets" value={millify(globalStas.totalMarkets)}></Statistic></Col>
            </Row>
            <div className='home-heading-container'>
                <Title level={2} className='home-title'>Top 10 Cryptocurrencies in the world</Title>
                <Title level={3} className='show-more'><Link to="/cryptocurrencies">Show More</Link></Title >
            </div>
            <Cryptocurrencies simplified />
            <div className='home-heading-container'>
                <Title level={2} className='home-title'>Latest Crypto News</Title>
                <Title level={3} className='show-more'><Link to="/news">Show More</Link></Title >
            </div>
            <News simplified />
        </>
    )
}

export default Homepage