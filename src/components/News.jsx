import React from 'react';
import { Select, Typography, Row, Col, Avatar, Card } from 'antd';
import moment from 'moment';

import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi';

const { Text, Title } = Typography
const { Option } = Select

const News = ({ simplified }) => {
    const count = simplified ? 10 : 30
    const { data: cryptoNews, isLoading, isError } = useGetCryptoNewsQuery(count)
    console.log(cryptoNews)

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Error loading news</div>;
    }

    return (
        <Row gutter={[24, 24]}>
            {cryptoNews && cryptoNews.news.length > 0 ? (cryptoNews?.news.map((news) => (
                // 在这里渲染每条新闻的内容
                <Col xs={24} sm={12} lg={8} key={news.Title}>
                    <Card hoverable className='news-card'>
                        <a href={news.Url} target='blank' rel='noreferrer'>
                            <div className='new-image-container'>
                                <Title className='news-title' level={4}>{news.Title}</Title>
                                <img src=''></img>
                            </div>
                        </a>
                        <p>
                            {news.Description > 100 ? `${news.Description.substring(0, 100)}...` : news.Description}
                        </p>
                    </Card>
                </Col>
            ))) : (<div style={{ height: '100vh' }}><p>No data available</p></div>)}
        </Row>

    )
}

export default News