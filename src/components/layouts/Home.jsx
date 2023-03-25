import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import TokenCard from "../sections/TokenCard";

const Home = ({Tezos}) => {
    const selector = useSelector(state => state.tokenData);
    const dispatch = useDispatch();
	const navigate = useNavigate();

  return (
    <div>
      Home
    </div>
  )
}

export default Home
