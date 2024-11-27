import React from 'react';
import Button from '../components/Button';
import Message from '../components/Message';
import Counter from '../components/Counter';
import Welcome from '../components/Welcome';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
        Hello World
        <Link className='block bg-blue-200' to={'/login'} >Login 으로 이동</Link>
        <Button />
        <Message />
        <Counter />
        <Welcome name="one" message="눈이 많이 오네요1" />
        <Welcome name="two" message="눈이 많이 오네요2" />
        <Welcome name="three" message="눈이 많이 오네요3" />
    </div>
  )
}

export default Home