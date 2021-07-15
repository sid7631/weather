import React, { useContext, useEffect, useState } from 'react'
import { MoreVertical } from 'react-feather'
import styled from 'styled-components'
import Phone from '../../components/Phone'
import Rains from '../../components/Rains'
import { ForecastContext } from '../context/Forecast'
import axios from 'axios'
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography } from '@material-ui/core'
import Loading from '../../components/Loading'
import moment from 'moment'


const Dashboard = () => {

    const context = useContext(ForecastContext)
    const [data, setdata] = useState({})
    const [loading, setloading] = useState(false)

    useEffect(() => {

        if (context.latitude && context.longitude) {

            const getForecast = async () => {
                try {
                    setloading(true)
                    const result = await axios.get('http://api.openweathermap.org/data/2.5/weather', {
                        params: {
                            lat: context.latitude,
                            lon: context.longitude,
                            appid: 'd57b443850be7a49fbeb4634371f7375',
                            units: 'metric'
                        }
                    })

                    console.log(result.data)
                    setloading(false)
                    setdata(result.data)
                } catch (error) {
                    console.log(error)
                    setloading(false)
                }

            }

            getForecast()
        }

        return () => {
            //cleanup
        }
    }, [context.latitude, context.longitude])

    return (
        <DashboardContainer>
            <Row>
                <Column width={'40%'} height={'100vh'}>
                    <Phone>
                        <Box className='phone-container'>
                            <Loading show={loading} />
                            <div className='phone-header'>
                                <div className='phone-header-left'>
                                    {data?.name}
                                </div>
                                <div className='phone-header-actions'>
                                    <div>
                                        <MoreVertical size='16'></MoreVertical>
                                    </div>
                                </div>
                            </div>
                            <div className="phone-body">
                                <div className="status">
                                    <Rains />
                                </div>
                                <div className="temp">
                                    <div className='primary-text'>
                                        {Math.ceil(data?.main?.temp)}
                                    </div>
                                    <div className='secondary-text' >
                                        <div>&deg;C</div>
                                        <div>Overcast</div>
                                    </div>
                                </div>
                                <div className="date">
                                    <div className="primary-text">
                                        {moment(data?.dt * 1000).format('DD MMM[,] ddd')}
                                    </div>
                                    <div className="secondary-text">
                                        {Math.ceil(data?.main?.temp_max)}&deg;C / {Math.ceil(data?.main?.temp_min)}&deg;C
                                    </div>
                                </div>
                                <div className="details">
                                    <h3>Weather details</h3>

                                    <div className="detail-list">
                                        <div className="list-item">
                                            <div className='label'>Feels like</div>
                                            <div>{Math.ceil(data?.main?.feels_like)}&deg;C</div>
                                        </div>
                                        <div className="list-item">
                                            <div className='label'>Humidity</div>
                                            <div>{data?.main?.humidity}%</div>
                                        </div>
                                        <div className="list-item">
                                            <div className='label'>E wind</div>
                                            <div>{data?.wind?.speed} km/h</div>
                                        </div>
                                        <div className="list-item">
                                            <div className='label'>UV</div>
                                            <div>Very Weak</div>
                                        </div>
                                        <div className="list-item">
                                            <div className='label'>Visibility</div>
                                            <div>{data?.visibility / 1000}km</div>
                                        </div>
                                        <div className="list-item">
                                            <div className='label'>Air pressure</div>
                                            <div>{data?.main?.pressure} hPa</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Box>
                    </Phone>
                </Column>
            </Row>

        </DashboardContainer>


    )
}

export default Dashboard

const DashboardContainer = styled.div`
    height:100%;
    min-height:100vh;
`;

const Row = styled.div`
    display: flex;
    flex-flow: row;
`;

const Column = styled.div`
    display:flex;
    width: ${props => props.width};
    height: ${props => props.height};
    align-items: center;
    justify-content: center;
`;