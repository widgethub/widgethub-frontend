import React, { useState } from 'react';
import '../css/Home.css';

import Login from './Login/Login';

export default function Home() {
    const [formState, setState] = useState(0);
    // New form - 0
    const [typeSelected, setType] = useState('Github');
    const [title, setTitle] = useState();
    const [first, setFirst] = useState();
    const [last, setLast] = useState();
    const [link, setLink] = useState('github.com/');
    const [linkVal, setLinkVal] = useState();

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

    return(
        <div className="content grid grid-cols-2 justify-items-center"> 
            <div className="leftbox box">
                <div className="editor mx-5 lg:w-6/12 bg-gray-800 shadow-2xl rounded-lg overflow-hidden">
                    <div id="header-buttons" className="py-3 px-4 flex">
                        <button className="px-5 py-1 rounded-xl text-sm font-medium text-indigo-600 bg-white outline-none focus:outline-none m-1 hover:m-0 focus:m-0 border border-indigo-600 hover:border-4 focus:border-4 transition-all">
                            Copy Code
                        </button>
                    </div>
                    <div id="code-area" className="py-4 px-4 mt-1 text-white text-xl">
                        <div className="mb-2">
                            <span className="text-yellow-300">const</span> <span className="text-blue-400">pluckDeep</span> <span className="text-green-400">=</span> <span className="text-blue-400">key</span> <span className="text-green-400">=&gt;</span> <span className="text-blue-400">obj</span> <span className="text-green-400">=&gt;</span> <span className="text-purple-600">key</span>.<span className="text-purple-600">split</span>(<span className="text-blue-400">'.'</span>).<span className="text-purple-600">reduce</span>((<span className="text-blue-400">accum</span>, <span className="text-blue-400">key</span>) <span className="text-green-400">=&gt;</span> <span className="text-purple-600">accum</span>[<span className="text-purple-600">key</span>], <span className="text-purple-600">obj</span>)
                        </div>

                        <div className="mb-2">
                            <span className="text-yellow-300">const</span> <span className="text-blue-400">compose</span> <span className="text-green-400">=</span> (<span className="cm-meta">...</span><span className="text-blue-400">fns</span>) <span className="text-green-400">=&gt;</span> <span className="text-blue-400">res</span> <span className="text-green-400">=&gt;</span> <span className="text-purple-600">fns</span>.<span className="text-purple-600">reduce</span>((<span className="text-blue-400">accum</span>, <span className="text-blue-400">next</span>) <span className="text-green-400">=&gt;</span> <span className="text-purple-600">next</span>(<span className="text-purple-600">accum</span>), <span className="text-purple-600">res</span>)
                        </div>

                        <div className="mb-2">
                            <div className="sub-line">
                                <span className="text-yellow-300">const</span> <span className="text-blue-400">unfold</span> <span className="text-green-400">=</span> (<span className="text-blue-400">f</span>, <span className="text-blue-400">seed</span>) <span className="text-green-400">=&gt;</span>
                            </div>
                            <div className="sub-line ml-8">
                                <span className="text-yellow-300">const</span> <span className="text-blue-400">go</span> <span className="text-green-400">=</span> (<span className="text-blue-400">f</span>, <span className="text-blue-400">seed</span>, <span className="text-blue-400">acc</span>) <span className="text-green-400">=&gt;</span>
                            </div>
                            <div className="sub-line ml-16">
                                <span className="text-yellow-300">const</span> <span className="text-blue-400">res</span> <span className="text-green-400">=</span> <span className="text-purple-600">f</span>(<span className="text-purple-600">seed</span>)
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="rightbox box">
                <div className="grid bg-white shadow-xl rounded-lg mt-6 place-items-center">
                    <form className="w-5/6 max-w-md p-6">
                        <p className="text-4xl">Configure</p>
                        <div className="flex flex-wrap -mx-3 mb-6 mt-6">
                            <div className="w-full px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                                Profile
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
                        </div>

                        <div className="flex flex-wrap -mx-3 mb-6 mt-6">
                            <div className="w-full px-3">              
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                                Color 1
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" 
                            id="grid-first-name" type="text" placeholder="F9F9F9"
                            onChange={e => setFirst(e.target.value)} value={first}/>
                            </div>
                        </div>

                        <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                                Color 2
                            </label>
                                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                            id="grid-link" type="text" placeholder="#696969"
                            onChange={e => setLinkVal(e.target.value)} value={linkVal}/>
                            </div>
                            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                                Accent Color
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                            id="grid-link" type="text" placeholder="#696969"
                            onChange={e => setLinkVal(e.target.value)} value={linkVal}/>
                            </div>
                
                        </div>
                    </form>
                </div>       
            </div>
        </div>
    )
}