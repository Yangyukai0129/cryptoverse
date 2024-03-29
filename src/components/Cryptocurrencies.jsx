import React, { Suspense, useEffect } from 'react';
import millify from 'millify';
import { Link } from 'react-router-dom';
import { Card, Row, Col, Input, Skeleton } from 'antd';

import { useGetCryptosQuery } from '../services/cryptoApi';
import { useState } from 'react';

const Cryptocurrencies = ({ simplified }) => {
    const count = simplified ? 10 : 100
    const { data: cryptoList, isFetching } = useGetCryptosQuery(count)
    const [cryptos, setCryptos] = useState([]);
    const [SearchTerm, setSearchTerm] = useState("")

    useEffect(() => {
        if (cryptoList?.data?.coins) {
            setCryptos(cryptoList?.data?.coins);
        }
    }, [cryptoList]);

    useEffect(() => {
        const filteredData = cryptoList?.data?.coins.filter((coin) => {
            return coin.name.toLowerCase().includes(SearchTerm.toLowerCase())
        })

        setCryptos(filteredData)
    }, [cryptoList, SearchTerm])
    console.log(cryptoList)
    if (isFetching) {
        return (
            <Row gutter={[32, 32]} className='crtypto-card-container' >
                {
                    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((key) => (
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
            {!simplified && (
                <div className='search-crypto'>
                    <Input placeholder='Search Cryptocurrency' onChange={(e) => setSearchTerm(e.target.value)} />
                </div>
            )}

            <Row gutter={[32, 32]} className='crtypto-card-container'>
                {cryptos && cryptos.length > 0 ? (cryptos.map((currency) => (
                    <Col xs={24} sm={12} lg={6} className='crypto-card' key={currency.uuid}>
                        <Link to={`/crypto/${currency.uuid}`}>
                            <Card
                                title={`${currency.rank}. ${currency.name}`}
                                extra={<img className='crypto-image' src={currency.iconUrl} />}
                                hoverable
                            >
                                <p>Price: {millify(currency.price)}</p>
                                <p>Market Cap: {millify(currency.marketCap)}</p>
                                <p>Daily Change: {millify(currency.change)}</p>
                            </Card>
                        </Link>
                    </Col>
                ))
                ) : (<p>No data available</p>)
                }
            </Row>
        </>
    )
}

export default Cryptocurrencies