import React from 'react'
import GreyLogo from '../images/grey-sphynx.svg'


function Footer() {
    return (
        <div>
            <footer>
                <div className="container flex flex-wrap gap-10 py-20 overflow-hidden align-center md:-mx-2 xl:-mx-1">

                    <div className="w-1/5 overflow-hidden md:my-2 md:px-2 xl:my-1 xl:px-1">
                        <h4 className="mb-1.5 font-semibold text-liquid-darkblue">Subscribe</h4>
                        <p className="text-liquid-brown-grey">Sign up to receive updates from Sphynx</p>

                    </div>
                    <div className="relative block w-2/5 overflow-hidden md:my-2 md:px-2 xl:my-1 xl:px-1">
                        <label className=" focus-within:text-liquid-brown-grey">
                            <span className="mb-1.5 font-semibold text-liquid-darkblue">Full name</span>
                            <span className="absolute inset-y-0 left-0 flex items-center pl-2 w-80">
                            <input type="text" className="w-full mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black" placeholder="Enter your email address*" />
                            <span class="absolute inset-y-0 flex items-center w-80 left-72">
                                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 42 32">
                                    <g fill="none" fill-rule="evenodd" stroke="#070768" stroke-width="2">
                                        <path d="M0 14L40 14" transform="translate(0 2)" />
                                        <path stroke-linecap="square" d="M26 0L40 14 26 28" transform="translate(0 2)" />
                                    </g>
                                </svg>
                            </span>  
                        </span>  
                        </label>
                    </div>
                </div>
                <div className="border-t border-liquid-grey"></div>
                
                    {/* <div className="container flex flex-wrap overflow-hidden md:-mx-2 xl:-mx-1">
                        <div className="w-1/5 overflow-hidden md:my-2 md:px-2 xl:my-1 xl:px-1">
                            <img src={GreyLogo} alt="Grey Logo" />
                        </div>
                        <div className="items-center w-1/5 overflow-hidden md:my-2 md:px-2 xl:my-1 xl:px-1">
                            <div className="flex">
                                <ul className="flex space-x-4 lg:divide-x-2">
                                    <li className="px-4 mx-auto text-liquid-brown-grey">HOME</li>
                                    <li className="px-4 mx-auto text-liquid-brown-grey">ABOUT</li>
                                    <li className="px-4 mx-auto text-liquid-brown-grey">LOCATION</li>
                                    <li className="px-4 mx-auto text-liquid-brown-grey">TEAM</li>
                                    <li className="px-4 mx-auto text-liquid-brown-grey">REGISTER</li>
                                </ul>
                            </div>
                        </div>

                        <div className="w-1/5 overflow-hidden md:my-2 md:px-2 xl:my-1 xl:px-1">
                            <h4>Contact Us</h4>
                        </div>

                        <div className="w-1/5 overflow-hidden md:my-2 md:px-2 xl:my-1 xl:px-1">
                            <h4>Property Template by</h4>
                        </div>

                        <div className="w-1/5 overflow-hidden md:my-2 md:px-2 xl:my-1 xl:px-1">
                            <span className="inline-flex justify-center w-full mt-6 lg:ml-auto lg:mt-0 md:justify-start md:w-auto">
                                <a className="text-gray-500">
                                    <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5 text-liquid-grey" viewBox="0 0 24 24">
                                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                    </svg>
                                </a>
                                <a className="ml-10 text-gray-500">
                                    <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5 text-liquid-grey" viewBox="0 0 24 24">
                                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                    </svg>
                                </a>
                                <a className="ml-10 text-gray-500">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5 text-liquid-grey" viewBox="0 0 24 24">
                                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                                    </svg>
                                </a>
                            </span>
                        </div>
                    </div>   */}
            </footer>
        </div>

    )
}

export default Footer
