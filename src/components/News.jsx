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
        <div>
            {cryptoNews && cryptoNews.length > 0 ? (cryptoNews?.value.map((news, i) => (
                // 在这里渲染每条新闻的内容
                <div key={i}>{news.name}</div>
            ))) : (<p>No data available</p>)}
        </div>

    )
}

export default News