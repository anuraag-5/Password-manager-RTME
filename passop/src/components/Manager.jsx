import React from 'react'
import { useRef, useState, useEffect } from 'react'

const Manager = () => {
    const ref = useRef();
    const [form, setform] = useState({ site: '', username: '', password: '' });
    const [passwordArray, setPasswordArray] = useState([]);

    useEffect(() => {
        let passwords = localStorage.getItem('passwords');
        if (passwords) {
            setPasswordArray(JSON.parse(passwords));
        }
    }, []);
    const showPassword = () => {
        // alert('Show Password');
        if (ref.current.src.includes('public/invisible-eye.png')) {
            ref.current.src = 'public/show-eye.png';
        }
        else {
            ref.current.src = 'public/invisible-eye.png'
        }
    }

    const handleChange = (e) => {
        setform({ ...form, [e.target.name]: e.target.value });
    }
    const savePassword = () => {
        setPasswordArray([...passwordArray, form]);
        localStorage.setItem('passwords', JSON.stringify([...passwordArray, form]));
        console.log([...passwordArray, form]);
    }
    return (
        <>
            <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"><div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-green-400 opacity-20 blur-[100px]"></div>
            </div>
            <div className=' mycontainer'>
                <h1 className=' text-4xl font-bold text-center'>
                    <span className='text-green-500'> &lt;</span>
                    Pass
                    <span className='text-green-500'>OP/ &gt;</span>
                </h1>
                <p className=' text-green-900 text-center text-lg'>You own Password manager</p>

                <div className='text-black flex flex-col p-4 gap-8 items-center'>
                    <input value={form.site} onChange={handleChange} type="text" className=' rounded-full border border-green-500 w-full p-4 py-1' placeholder='Enter website URL' name='site' />
                    <div className=' flex justify-between w-full gap-8'>
                        <input value={form.username} onChange={handleChange} type="text" className=' rounded-full border border-green-500 w-full p-4 py-1' placeholder='Enter Username' name='username' />
                        <div className="relative">
                            <input value={form.password} onChange={handleChange} type="text" className=' rounded-full border border-green-500 w-full p-4 py-1' placeholder='Enter Password' name='password' />
                            <span className="absolute right-[6px] top-[7px] cursor-pointer" onClick={showPassword}>
                                <img ref={ref} src="../public/invisible-eye.png" alt="" className=' w-5' />
                            </span>
                        </div>

                    </div>

                    <button className='flex justify-center gap-2 items-center bg-green-600 rounded-full hover:bg-green-500 px-8 py-2 w-fit border border-green-900' onClick={savePassword}>
                        <lord-icon
                            src="https://cdn.lordicon.com/jgnvfzqg.json"
                            trigger="hover"
                        >
                        </lord-icon>
                        Save
                    </button>
                </div>
                <div className="passwords">
                    <h2 className='font-bold text-2xl py-4'>Your Passwords</h2>
                    {passwordArray.length === 0 && <div>No Passwords to show</div>}
                    {passwordArray.length !== 0 && <table className="table-auto w-full text-black rounded-md overflow-hidden">
                        <thead className='bg-green-700'>
                            <tr>
                                <th className='py-2'>Site</th>
                                <th className='py-2'>Username</th>
                                <th className='py-2'>Password</th>
                                <th className='py-2'>Actions</th>
                            </tr>
                        </thead>
                        <tbody className='bg-green-100'>
                            {passwordArray.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td className=' py-2 border border-white text-center'><a href={item.site} target='_blank'>{item.site}</a></td>
                                        <td className=' py-2 border border-white text-center'>{item.username}</td>
                                        <td className=' py-2 border border-white text-center'>{item.password}</td>
                                        <td className=' py-2 border border-white text-center'>Delete/Edit</td>
                                    </tr>
                                );
                            })}

                        </tbody>
                    </table>

                    }
                </div>
            </div>

        </>

    )
}

export default Manager