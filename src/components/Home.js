import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux';
import { actionCreators } from '../state';

const Home = () => {
    const dispatch = useDispatch();
    const {withdrawMoney, depositMoney} = bindActionCreators(actionCreators,dispatch)
    const balance = useSelector(state => state.amount)
    return (
        <div className="container my-3">
            <h2>Withdraw/Deposit Money: </h2>
            <div>
                <button className="btn btn-primary mx-2" onClick={() => {withdrawMoney(500)}}>-</button>
                Update Balance({balance})
                <button className="btn btn-primary mx-2" onClick={() => {depositMoney(500)}}>+</button>
            </div>
        </div>
    )
}

export default Home
