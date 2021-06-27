import React, { useState } from 'react';
import '../css/Home.css';

import Login from './Login/Login';

export default function Home() {
    const [formState, setState] = useState(0);
    // New form - 0
    const [bg1shade, setBG1Shade] = useState(0);
    const [bg2shade, setBG2Shade] = useState(0);
    const [titleshade, setTitleShade] = useState(0);
    const [titleshadehover, setTitleShadeHover] = useState(0);
    const [textshade, setTextShade] = useState(0);

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

    function decrement(e) {
        const btn = e.target.parentNode.parentElement.querySelector(
          'button[data-action="decrement"]'
        );
        const target = btn.nextElementSibling;
        let value = Number(target.value);
        if(value == 50 || value == 100) value -= 50;
        else if(value != 0) value -= 100;
        target.value = value;
    }

    function increment(e) {
    const btn = e.target.parentNode.parentElement.querySelector(
        'button[data-action="decrement"]'
    );
    const target = btn.nextElementSibling;
    let value = Number(target.value);
    if(value == 0 || value == 50) value += 50;
    else if(value != 900) value += 100;
    target.value = value;
    }

    const decrementButtons = document.querySelectorAll(
    `button[data-action="decrement"]`
    );

    const incrementButtons = document.querySelectorAll(
    `button[data-action="increment"]`
    );

    decrementButtons.forEach(btn => {
    btn.addEventListener("click", decrement);
    });

    incrementButtons.forEach(btn => {
    btn.addEventListener("click", increment);
    });

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
                    <form className="w-full max-w-md p-6">
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
                                Background
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

                        <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                                    Background 1 Color
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
                                    Background 1 Shade
                                </label>
                                <div class="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
                                    <button onClick={decrement} class=" bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none">
                                    <span class="m-auto text-2xl font-thin">−</span>
                                    </button>
                                    <input type="number" class="outline-none focus:outline-none text-center w-full bg-gray-300 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700  outline-none" name="custom-input-number" value="0"></input>
                                    <button onClick={increment} class="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer">
                                    <span class="m-auto text-2xl font-thin">+</span>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                                    Background 2 Color
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
                                    Background 2 Shade
                                </label>
                                <div class="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
                                    <button onClick={decrement} class=" bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none">
                                    <span class="m-auto text-2xl font-thin">−</span>
                                    </button>
                                    <input type="number" class="outline-none focus:outline-none text-center w-full bg-gray-300 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700  outline-none" name="custom-input-number" value="0"></input>
                                    <button onClick={increment} class="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer">
                                    <span class="m-auto text-2xl font-thin">+</span>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                                    Title Color
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
                                    Title Shade
                                </label>
                                <div class="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
                                    <button onClick={decrement} class=" bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none">
                                    <span class="m-auto text-2xl font-thin">−</span>
                                    </button>
                                    <input type="number" class="outline-none focus:outline-none text-center w-full bg-gray-300 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700  outline-none" name="custom-input-number" value="0"></input>
                                    <button onClick={increment} class="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer">
                                    <span class="m-auto text-2xl font-thin">+</span>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                                    Title Color (Hover)
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
                                    Title Shade (Hover)
                                </label>
                                <div class="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
                                    <button onClick={decrement} class=" bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none">
                                    <span class="m-auto text-2xl font-thin">−</span>
                                    </button>
                                    <input type="number" class="outline-none focus:outline-none text-center w-full bg-gray-300 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700  outline-none" name="custom-input-number" value="0"></input>
                                    <button onClick={increment} class="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer">
                                    <span class="m-auto text-2xl font-thin">+</span>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                                    Text Color
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
                                    Text Shade
                                </label>
                                <div class="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
                                    <button onClick={decrement} class=" bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none">
                                    <span class="m-auto text-2xl font-thin">−</span>
                                    </button>
                                    <input type="number" class="outline-none focus:outline-none text-center w-full bg-gray-300 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700  outline-none" name="custom-input-number" value="0"></input>
                                    <button onClick={increment} class="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer">
                                    <span class="m-auto text-2xl font-thin">+</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>       
            </div>
        </div>
    )
}