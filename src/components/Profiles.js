import React, { useState } from 'react';
import '../css/Profiles.css';

import Login from './Login/Login';
import { getToken, saveToken } from '../services/auth.service';
// import { getProfiles } from '../services/profile.service';
import { createProfile, updateProfile, deleteProfile } from '../services/profile.service';

export default function Profiles() {
  const [formState, setState] = useState(0);
  // New form - 0
  const [typeSelected, setType] = useState('Github');
  const [title, setTitle] = useState();
  const [first, setFirst] = useState();
  const [last, setLast] = useState();
  const [link, setLink] = useState('github.com/');
  const [linkVal, setLinkVal] = useState();

  const [profiles, setProfiles] = useState([
    { title: 'My Exs' , type: 'Github', url: 'zhehaizhang@gmail.com', id: 1},
    { title: 'Archnemesis', type: 'Instagram', url: 'zhehai@zhang.com', id: 2},
    { title: 'Me', type: 'Facebook', url: 'zhehaizhang.com', id: 3}
  ])

  // Update existing profiles - 1
  const [currentProfile, setCurrentProfile] = useState(-1)

  if (!getToken()) {
    return <Login setToken={saveToken} />
  }

  const types = [
    {type: "Github", link: "github.com/"},
    {type: "Facebook", link: "facebook.com/"},
    {type: "Instagram", link: "instagram.com/"},
    {type: "Linkedin", link: "linkedin.com/in/"}
  ];

  const changeTypeLink = (type) => {
    setType(type)
    for (var prop in types) {
          if (types[prop].type === type){
            setLink(types[prop].link)
          }
      }
  }

  const editProfile = (index)  => {
    // Update all the values, and then switch the variable as well as index
    setCurrentProfile(index);
    setTitle(profiles[index].title);
    setFirst(profiles[index].first);
    setLast(profiles[index].last);
    setLinkVal(profiles[index].url);
    setType(profiles[index].type);
    setState(1);

  }

  const newProfile = (e) => {
    e.preventDefault();

    setTitle('');
    setFirst('');
    setLast('');
    setLinkVal('');
    setType('');
    setState(0);
  }

  const submitProfile = async (e) => {
    e.preventDefault();

    // 0 - new form
    if (formState === 0) {
      const newProvider = {
        provider: typeSelected,
        name: title,
        info: linkVal
      }
      // console.log(newProvider);
      const response = await createProfile(newProvider);
      console.log(response);

    } else {

      const updateProvider = {
        id: profiles[currentProfile].id,
        provider: typeSelected,
        name: title,
        info: linkVal
      }
      const response = await updateProfile(updateProvider);
      console.log(response);

    }
  }

  const removeProfile = async (index) => {
    await deleteProfile(profiles[index].id);
  }

  return(
    <div className="grid grid-cols-2 gap-4 justify-items-center">

      <div className="w-full max-w-lg mt-6">
        <div className="bg-white shadow-xl rounded-lg mx-3 mt-6">
          <ul className="divide-y divide-gray-300">
            {profiles.map(function(profile, i) {
              return (
                <li key={i} className="p-4 hover:bg-gray-50 cursor-pointer" onClick={() => editProfile(i)}>
                  {profile.title}

                  /* ZHEHAI IMPLEMENT A DELETE BUTTON SOMEHOW PLOX */
                </li>
              )
            })}
          </ul>
        </div>
        <button className="bg-white" onClick={newProfile}>
          add
        </button>
      </div>

      <div>
        <div className="grid bg-white shadow-xl rounded-lg mt-6 place-items-center">
        <form className="w-5/6 max-w-md p-6">
          <p className="text-4xl">Profile</p>

          <div className="flex flex-wrap -mx-3 mb-6 mt-6">
            <div className="w-full px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                Title
              </label>
              <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-title" type="string" placeholder="Enter the title of your profile"
              onChange={e => setTitle(e.target.value)} value={title}/>
              <p className="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p>
            </div>
          </div>

          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                First
              </label>
              <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" 
              id="grid-first-name" type="text" placeholder="Jane"
              onChange={e => setFirst(e.target.value)} value={first}/>
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                Last Name
              </label>
              <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
              id="grid-last-name" type="text" placeholder="Doe"
              onChange={e => setLast(e.target.value)} value={last}/>
            </div>
          </div>

          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                Type
              </label>
              <div className="relative">
                <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                id="grid-type" onChange={e => (
                  changeTypeLink(e.target.value)
                  )} value={typeSelected}>
                  {types.map(function(type, i) {
                    return <option key={i}>{type.type}</option>
                  })}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                Link
              </label>
              <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-link" type="text" placeholder="To Profile"/>
            </div>
          </div>

          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                Start:
              </label>
                <p className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500">{link}</p>
            </div>
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                  Link
              </label>
              <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
              id="grid-link" type="text" placeholder="To Profile"
              onChange={e => setLinkVal(e.target.value)} value={linkVal}/>
            </div>
          </div>

          <button onClick={submitProfile} className="bg-white text-gray-800 font-bold rounded border-b-2 border-green-500 hover:border-green-600 hover:bg-green-500 hover:text-white shadow-md py-2 px-6 inline-flex items-center">
              <span className="mr-2">{formState ? <p>Update</p> : <p>Add</p>}</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path fill="currentcolor" d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"></path>
            </svg>
          </button> 

        </form>

        </div>
      </div>
    </div>
  )
}