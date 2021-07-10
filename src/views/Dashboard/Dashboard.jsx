import React from 'react'
import { MoreVertical } from 'react-feather'
import styled from 'styled-components'
import Phone from '../../components/Phone'
import Rains from '../../components/Rains'

const Dashboard = () => {
    return (
        <DashboardContainer>
            <Row>
                <Column width={'40%'} height={'100vh'}>
                    <Phone>
                        <div className='phone-container'>
                            <div className='phone-header'>
                                <div className='phone-header-left'>
                                    Dhanbad
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
                                        29
                                    </div>
                                    <div className='secondary-text' >
                                        <div>&deg;C</div>
                                        <div>Overcast</div>
                                    </div>
                                </div>
                                <div className="date">
                                    <div className="primary-text">
                                        26 May Wed
                                    </div>
                                    <div className="secondary-text">
                                        29&deg;C / 22&deg;C
                                    </div>
                                </div>
                                <div className="details">
                                    <h3>Weather details</h3>

                                    <div className="detail-list">
                                        <div className="list-item">
                                            <div className='label'>Feels like</div>
                                            <div>32&deg;C</div>
                                        </div>
                                        <div className="list-item">
                                            <div className='label'>Humidity</div>
                                            <div>73%C</div>
                                        </div>
                                        <div className="list-item">
                                            <div className='label'>E wind</div>
                                            <div>5 km/h</div>
                                        </div>
                                        <div className="list-item">
                                            <div className='label'>UV</div>
                                            <div>Very Weak</div>
                                        </div>
                                        <div className="list-item">
                                            <div className='label'>Visibility</div>
                                            <div>16km</div>
                                        </div>
                                        <div className="list-item">
                                            <div className='label'>Air pressure</div>
                                            <div>1001 hPa</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
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