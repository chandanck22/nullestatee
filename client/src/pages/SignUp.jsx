import React, {useState} from 'react';
import { useNavigate, Link } from 'react-router-dom'; 

const SignUp = () => {

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({...formData, [e.target.id]: e.target.value});
    // console.log(formData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      const data = await res.json();
      console.log(data);
      
      if(data.success == false){
        setLoading(false);
        setError(data.message);
        return;
      }
      setLoading(false);
      setError(null);
      navigate('/signin');

    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };

  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7'>Sign Up</h1>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
        <input onChange={handleChange} id='username' className='border p-3 rounded-lg' type="text" name="" placeholder='username' />
        <input onChange={handleChange} id='email' className='border p-3 rounded-lg' type="email" name="" placeholder='email' />
        <input onChange={handleChange} id='password' className='border p-3 rounded-lg' type="password" name="" placeholder='password' />
        <button  className='bg-slate-700 p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>
          {loading ? 'Loading...' : 'Sign Up'}
          </button>
      </form>
      
      <div className='flex gap-2 '>
        <p>Have an account?</p>
        <Link to={'/signin'}>
          <span className='text-blue-700'>Sign In</span>
        </Link>
      </div>

      {error && <p className='text-red-500 text-center mt-3'>{error}</p>}

    </div>
  )
}

export default SignUp;