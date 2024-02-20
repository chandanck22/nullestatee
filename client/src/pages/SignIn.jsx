import React, {useState} from 'react';
import { useNavigate, Link } from 'react-router-dom'; 
import { useDispatch, useSelector } from 'react-redux';
import { signInStart, signInSuccess, signInFailure } from '../redux/user/UserSlice.js'; 

const SignIn = () => {

  const dispatch = useDispatch();
  const {loading, error} = useSelector((state) => state.user);
  
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({...formData, [e.target.id]: e.target.value});
    // console.log(formData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(signInStart());
      const res = await fetch('/api/auth/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      const data = await res.json();
      console.log(data);
      
      if(data.success == false){
        dispatch(signInFailure(data.message));
        return;
      }
      dispatch(signInSuccess(data));
      navigate('/');

    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };

  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7'>Sign In</h1>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
        <input onChange={handleChange} id='email' className='border p-3 rounded-lg' type="email" name="" placeholder='email' />
        <input onChange={handleChange} id='password' className='border p-3 rounded-lg' type="password" name="" placeholder='password' />
        <button  className='bg-slate-700 p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>
          {loading ? 'Loading...' : 'Sign In'}
          </button>
      </form>
      
      <div className='flex gap-2 '>
        <p>Create an account</p>
        <Link to={'/signup'}>
          <span className='text-blue-700'>Sign Up</span>
        </Link>
      </div>

      {error && <p className='text-red-500 text-center mt-3'>{error}</p>}

    </div>
  )
}

export default SignIn;