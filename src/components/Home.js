import React, { useState } from 'react';
import '../css/Home.css';

import Login from './Login/Login';
import useToken from './Login/useToken';

export default function Home() {
    return(
        <div class="content">
            <div class="leftbox box">
                <div class="editor mx-5 lg:w-6/12 bg-gray-800 shadow-2xl rounded-lg overflow-hidden">
                    <div id="header-buttons" class="py-3 px-4 flex">
                        <div class="rounded-full w-3 h-3 bg-red-500 mr-2"></div>
                        <div class="rounded-full w-3 h-3 bg-yellow-500 mr-2"></div>
                        <div class="rounded-full w-3 h-3 bg-green-500"></div>
                    </div>
                    <div id="code-area" class="py-4 px-4 mt-1 text-white text-xl">
                        <div class="mb-2">
                            <span class="text-yellow-300">const</span> <span class="text-blue-400">pluckDeep</span> <span class="text-green-400">=</span> <span class="text-blue-400">key</span> <span class="text-green-400">=&gt;</span> <span class="text-blue-400">obj</span> <span class="text-green-400">=&gt;</span> <span class="text-purple-600">key</span>.<span class="text-purple-600">split</span>(<span class="text-blue-400">'.'</span>).<span class="text-purple-600">reduce</span>((<span class="text-blue-400">accum</span>, <span class="text-blue-400">key</span>) <span class="text-green-400">=&gt;</span> <span class="text-purple-600">accum</span>[<span class="text-purple-600">key</span>], <span class="text-purple-600">obj</span>)
                        </div>

                        <div class="mb-2">
                            <span class="text-yellow-300">const</span> <span class="text-blue-400">compose</span> <span class="text-green-400">=</span> (<span class="cm-meta">...</span><span class="text-blue-400">fns</span>) <span class="text-green-400">=&gt;</span> <span class="text-blue-400">res</span> <span class="text-green-400">=&gt;</span> <span class="text-purple-600">fns</span>.<span class="text-purple-600">reduce</span>((<span class="text-blue-400">accum</span>, <span class="text-blue-400">next</span>) <span class="text-green-400">=&gt;</span> <span class="text-purple-600">next</span>(<span class="text-purple-600">accum</span>), <span class="text-purple-600">res</span>)
                        </div>

                        <div class="mb-2">
                            <div class="sub-line">
                                <span class="text-yellow-300">const</span> <span class="text-blue-400">unfold</span> <span class="text-green-400">=</span> (<span class="text-blue-400">f</span>, <span class="text-blue-400">seed</span>) <span class="text-green-400">=&gt;</span>
                            </div>
                            <div class="sub-line ml-8">
                                <span class="text-yellow-300">const</span> <span class="text-blue-400">go</span> <span class="text-green-400">=</span> (<span class="text-blue-400">f</span>, <span class="text-blue-400">seed</span>, <span class="text-blue-400">acc</span>) <span class="text-green-400">=&gt;</span>
                            </div>
                            <div class="sub-line ml-16">
                                <span class="text-yellow-300">const</span> <span class="text-blue-400">res</span> <span class="text-green-400">=</span> <span class="text-purple-600">f</span>(<span class="text-purple-600">seed</span>)
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="rightbox box">
                git hub
            </div>
        </div>
    )
}