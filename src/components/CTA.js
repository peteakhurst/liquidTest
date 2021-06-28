import React from 'react'

function CTA() {
    return (
        <div class="bg-liquid-darkblue">
            <div class="container mx-auto dark:bg-gray-800 ">
                <div class="text-center w-full mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
                    <h2 class="text-1xl tracking-widest uppercase font-semibold text-liquid-mac-cheese sm:text-4xl">
                    find out more about the lifestyle
                    </h2>
                    <div class="lg:mt-0 lg:flex-shrink-0">
                        <div class="mt-12 inline-flex">
                            <button type="button" class="py-4 px-6 tracking-widest border-b-2 border-liquid-mac-cheese text-liquid-mac-cheese hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 w-full transition ease-in duration-200 text-center focus:outline-none focus:ring-2 focus:ring-offset-2">
                                VIEW LIFESTYLE
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CTA
