import React from 'react'

export default function LandingPage() {
    return (
        <div>
            {/* <nav id="header" class="w-full z-30 top-10 py-1 bg-white shadow-lg mt-2">
                <div class="w-full flex items-center justify-between mt-0 px-6 py-2">
                    <label for="menu-toggle" class="cursor-pointer md:hidden block">
                        <svg class="fill-current text-green-600" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                            <title>menu</title>
                            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                        </svg>
                    </label>
                    <input class="hidden" type="checkbox" id="menu-toggle" />

                    <div class="hidden md:flex md:items-center md:w-auto w-full order-3 md:order-1" id="menu">
                        <nav>
                            <ul class="md:flex items-center justify-between text-base text-gray-700 pt-4 md:pt-0">
                                <li><a class="inline-block no-underline hover:text-black font-medium text-lg py-2 px-4 lg:-ml-2" href="#">Home</a></li>
                                <li><a class="inline-block no-underline hover:text-black font-medium text-lg py-2 px-4 lg:-ml-2" href="#">Products</a></li>
                                <li><a class="inline-block no-underline hover:text-black font-medium text-lg py-2 px-4 lg:-ml-2" href="#">About</a></li>
                            </ul>
                        </nav>
                    </div>

                    <div class="order-2 md:order-3 flex flex-wrap items-center justify-end mr-0 md:mr-4" id="nav-content">
                        <div class="auth flex items-center w-full md:w-full">
                            <button class="bg-white text-gray-700 px-5 py-2 border-4 border-gray-700 rounded-full hover:bg-green-600 hover:text-white hover:border-green-600">Dashboard</button>
                        </div>
                    </div>
                </div>
            </nav> */}

            <section>
                <div class="container flex flex-col px-6 py-10 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center">
                    <div class="w-full lg:w-1/2">
                        <div class="lg:max-w-lg">
                            <h1 class="text-2xl font-bold tracking-wide text-black dark:text-white lg:text-5xl">
                                Easiest way to Auction your <span class="text-gray-700">Carbon Credits</span>
                            </h1>

                            <div class="mt-8 space-y-5">
                                <p class="flex items-center -mx-2 text-gray-700 dark:text-gray-200">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mx-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>

                                    <span class="mx-2">Clean and Simple Dashboard Layout</span>
                                </p>

                                <p class="flex items-center -mx-2 text-gray-700 dark:text-gray-200">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mx-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>

                                    <span class="mx-2">Just A couple of clicks to use</span>
                                </p>

                                <p class="flex items-center -mx-2 text-gray-700 dark:text-gray-200">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mx-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>

                                    <span class="mx-2">Easy to Use</span>
                                </p>
                                <p class="flex items-center -mx-2 text-gray-700 dark:text-gray-200">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mx-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>

                                    <span class="mx-2">Verified On-chain</span>
                                </p>
                            </div>
                        </div>

                        <div class="w-full mt-8 bg-transparent border rounded-md lg:max-w-sm dark:border-gray-700 focus-within:border-blue-400 focus-within:ring focus-within:ring-blue-300 dark:focus-within:border-blue-400 focus-within:ring-opacity-40">
                            <form class="flex flex-col lg:flex-row">
                                <input type="email" placeholder="Enter your email address" class="flex-1 h-10 px-4 py-2 m-1 text-gray-700 placeholder-gray-400 bg-transparent border-none appearance-none dark:text-gray-200 focus:outline-none focus:placeholder-transparent focus:ring-0" />

                                <button type="button" class="h-10 px-4 py-2 m-1 text-white transition-colors duration-200 transform bg-gray-700 rounded hover:bg-gray-900 focus:outline-none focus:bg-blue-400">
                                    Join Us
                                </button>
                            </form>
                        </div>
                    </div>

                    <div class="flex items-center justify-center w-full h-96 lg:w-1/2">
                        <img class="object-cover w-full h-full mx-auto rounded-md lg:max-w-2xl" src="https://hoa.org.uk/wp-content/uploads/2021/04/House-and-gavel.jpg" alt="glasses photo" />
                    </div>
                </div>
            </section>


            <div class="py-16 bg-gray-200">
                <div class="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                    <div class="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                        <div class="md:5/12 lg:w-5/12">
                            <img src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png" alt="image" loading="lazy" width="" height=""/>
                        </div>
                        <div class="md:7/12 lg:w-6/12">
                            <h2 class="text-2xl text-gray-900 font-bold md:text-4xl">Nuxt development is carried out by passionate developers</h2>
                            <p class="mt-6 text-gray-600">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum omnis voluptatem accusantium nemo perspiciatis delectus atque autem! Voluptatum tenetur beatae unde aperiam, repellat expedita consequatur! Officiis id consequatur atque doloremque!</p>
                            <p class="mt-4 text-gray-600"> Nobis minus voluptatibus pariatur dignissimos libero quaerat iure expedita at? Asperiores nemo possimus nesciunt dicta veniam aspernatur quam mollitia.</p>
                        </div>
                    </div>
                </div>
            </div>

            

            <div class="p-4 text-gray-600">
                <h1 class="mb-8 text-center text-3xl font-bold text-indigo-900">This is - what we do :</h1>

                <ul class="grid place-content-center sm:grid-cols-2 gap-8">
                    <li class="flex">
                        <div class="px-4 text-5xl font-extralight text-indigo-700">01.</div>
                        <div>
                            <div class="text-xl font-bold text-indigo-800">Research</div>
                            <p class="max-w-xs py-2 text-sm text-indigo-900">We love numbers! We collect data and insights, analyze
                                them then take the time to learn about your objectives, ask the right questions to understand your
                                business.</p>
                        </div>
                    </li>
                    <li class="flex">
                        <div class="px-4 text-5xl font-extralight text-indigo-700">02.</div>
                        <div>
                            <div class="text-xl font-bold text-indigo-800">Strategey</div>
                            <p class="max-w-xs py-2 text-sm text-indigo-900">Solutions are born from proper research, hard work, and
                                strong strategy. We build data-driven roadmaps for every project to make pave the way to success.
                            </p>
                        </div>
                    </li>
                    <li class="flex">
                        <div class="px-4 text-5xl font-extralight text-indigo-700">03.</div>
                        <div>
                            <div class="text-xl font-bold text-indigo-800">Design</div>
                            <p class="max-w-xs py-2 text-sm text-indigo-900">We design the right solution for your business. We
                                craft beautiful, intuitive, and user-friendly interfaces that are easy to use and easy to maintain.
                            </p>
                        </div>
                    </li>
                    <li class="flex">
                        <div class="px-4 text-5xl font-extralight text-indigo-700">04.</div>
                        <div>
                            <div class="text-xl font-bold text-indigo-800">Development</div>
                            <p class="max-w-xs py-2 text-sm text-indigo-900">We build the right solution for your business. We
                                craft beautiful, intuitive, and user-friendly interfaces that are easy to use and easy to maintain.
                            </p>
                        </div>
                    </li>
                    <li class="flex">
                        <div class="px-4 text-5xl font-extralight text-indigo-700">05.</div>
                        <div>
                            <div class="text-xl font-bold text-indigo-800">Deployment</div>
                            <p class="max-w-xs py-2 text-sm text-indigo-900">We build the right solution for your business. We
                                craft beautiful, intuitive, and user-friendly interfaces that are easy to use and easy to maintain.
                            </p>
                        </div>
                    </li>
                </ul>
            </div>


            <div id="team" class="section relative pt-20 pb-8 md:pt-16 bg-white dark:bg-gray-800">
                <div class="container xl:max-w-6xl mx-auto px-4">
                    
                    <header class="text-center mx-auto mb-12">
                        <h2 class="text-2xl leading-normal mb-2 font-bold text-gray-800 dark:text-gray-100">
                            <span class="font-light">Our</span> Team
                        </h2>
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 100 60" style="margin: 0 auto;height: 35px;" xml="preserve">
                            <circle cx="50.1" cy="30.4" r="5" class="stroke-primary" style="fill: transparent;stroke-width: 2;stroke-miterlimit: 10;"></circle>
                            <line x1="55.1" y1="30.4" x2="100" y2="30.4" class="stroke-primary" style="stroke-width: 2;stroke-miterlimit: 10;"></line>
                            <line x1="45.1" y1="30.4" x2="0" y2="30.4" class="stroke-primary" style="stroke-width: 2;stroke-miterlimit: 10;"></line>
                        </svg>
                    </header>
                    
                    <div class="flex flex-wrap flex-row -mx-4 justify-center">
                        <div class="flex-shrink max-w-full px-4 w-2/3 sm:w-1/2 md:w-5/12 lg:w-1/4 xl:px-6">
                            <div class="relative overflow-hidden bg-white dark:bg-gray-800 mb-12 hover-grayscale-0 wow fadeInUp" data-wow-duration="1s" style="visibility: visible; animation-duration: 1s; animation-name: fadeInUp;">
                                
                                <div class="relative overflow-hidden px-6">
                                    <img src="https://tailone.tailwindtemplate.net/src/img/dummy/avatar1.png" class="max-w-full h-auto mx-auto rounded-full bg-gray-50 grayscale" alt="title image" />
                                </div>
                                <div class="pt-6 text-center">
                                    <p class="text-lg leading-normal font-bold mb-1">Joe Antonio</p>
                                    <p class="text-gray-500 leading-relaxed font-light">Founder CEO</p>
                                    
                                    <div class="mt-2 mb-5 space-x-2">
                                        <a class="hover:text-blue-700" aria-label="Twitter link" href="#">
                                             <i class="fab fa-twitter text-twitter"></i> 
                                            <svg xmlns="http://www.w3.org/2000/svg" class="inline-block" width="1rem" height="1rem" viewBox="0 0 512 512">
                                                <path fill="currentColor" d="M496,109.5a201.8,201.8,0,0,1-56.55,15.3,97.51,97.51,0,0,0,43.33-53.6,197.74,197.74,0,0,1-62.56,23.5A99.14,99.14,0,0,0,348.31,64c-54.42,0-98.46,43.4-98.46,96.9a93.21,93.21,0,0,0,2.54,22.1,280.7,280.7,0,0,1-203-101.3A95.69,95.69,0,0,0,36,130.4C36,164,53.53,193.7,80,211.1A97.5,97.5,0,0,1,35.22,199v1.2c0,47,34,86.1,79,95a100.76,100.76,0,0,1-25.94,3.4,94.38,94.38,0,0,1-18.51-1.8c12.51,38.5,48.92,66.5,92.05,67.3A199.59,199.59,0,0,1,39.5,405.6,203,203,0,0,1,16,404.2,278.68,278.68,0,0,0,166.74,448c181.36,0,280.44-147.7,280.44-275.8,0-4.2-.11-8.4-.31-12.5A198.48,198.48,0,0,0,496,109.5Z"></path>
                                            </svg>
                                        </a>
                                        <a class="hover:text-blue-700" aria-label="Facebook link" href="#">
                                             <i class="fab fa-facebook text-facebook"></i> 
                                            <svg xmlns="http://www.w3.org/2000/svg" class="inline-block" width="1rem" height="1rem" viewBox="0 0 512 512">
                                                <path fill="currentColor" d="M455.27,32H56.73A24.74,24.74,0,0,0,32,56.73V455.27A24.74,24.74,0,0,0,56.73,480H256V304H202.45V240H256V189c0-57.86,40.13-89.36,91.82-89.36,24.73,0,51.33,1.86,57.51,2.68v60.43H364.15c-28.12,0-33.48,13.3-33.48,32.9V240h67l-8.75,64H330.67V480h124.6A24.74,24.74,0,0,0,480,455.27V56.73A24.74,24.74,0,0,0,455.27,32Z"></path>
                                            </svg>
                                        </a>
                                        <a class="hover:text-blue-700" aria-label="Instagram link" href="#">
                                            <i class="fab fa-instagram text-instagram"></i> 
                                            <svg xmlns="http://www.w3.org/2000/svg" class="inline-block" width="1rem" height="1rem" viewBox="0 0 512 512">
                                                <path fill="currentColor" d="M349.33,69.33a93.62,93.62,0,0,1,93.34,93.34V349.33a93.62,93.62,0,0,1-93.34,93.34H162.67a93.62,93.62,0,0,1-93.34-93.34V162.67a93.62,93.62,0,0,1,93.34-93.34H349.33m0-37.33H162.67C90.8,32,32,90.8,32,162.67V349.33C32,421.2,90.8,480,162.67,480H349.33C421.2,480,480,421.2,480,349.33V162.67C480,90.8,421.2,32,349.33,32Z"></path>
                                                <path fill="currentColor" d="M377.33,162.67a28,28,0,1,1,28-28A27.94,27.94,0,0,1,377.33,162.67Z"></path>
                                                <path fill="currentColor" d="M256,181.33A74.67,74.67,0,1,1,181.33,256,74.75,74.75,0,0,1,256,181.33M256,144A112,112,0,1,0,368,256,112,112,0,0,0,256,144Z"></path>
                                            </svg>
                                        </a>
                                        <a class="hover:text-blue-700" aria-label="Linkedin link" href="#">
                                            <i class="fab fa-linkedin text-linkedin"></i> 
                                            <svg xmlns="http://www.w3.org/2000/svg" class="inline-block" width="1rem" height="1rem" viewBox="0 0 512 512">
                                                <path fill="currentColor" d="M444.17,32H70.28C49.85,32,32,46.7,32,66.89V441.61C32,461.91,49.85,480,70.28,480H444.06C464.6,480,480,461.79,480,441.61V66.89C480.12,46.7,464.6,32,444.17,32ZM170.87,405.43H106.69V205.88h64.18ZM141,175.54h-.46c-20.54,0-33.84-15.29-33.84-34.43,0-19.49,13.65-34.42,34.65-34.42s33.85,14.82,34.31,34.42C175.65,160.25,162.35,175.54,141,175.54ZM405.43,405.43H341.25V296.32c0-26.14-9.34-44-32.56-44-17.74,0-28.24,12-32.91,23.69-1.75,4.2-2.22,9.92-2.22,15.76V405.43H209.38V205.88h64.18v27.77c9.34-13.3,23.93-32.44,57.88-32.44,42.13,0,74,27.77,74,87.64Z"></path>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                        <div class="flex-shrink max-w-full px-4 w-2/3 sm:w-1/2 md:w-5/12 lg:w-1/4 xl:px-6">
                           
                            <div class="relative overflow-hidden bg-white dark:bg-gray-800 mb-12 hover-grayscale-0 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".1s" style="visibility: visible; animation-duration: 1s; animation-delay: 0.1s; animation-name: fadeInUp;">
                                <div class="relative overflow-hidden px-6">
                                    <img src="https://tailone.tailwindtemplate.net/src/img/dummy/avatar3.png" class="max-w-full h-auto mx-auto rounded-full bg-gray-50 grayscale" alt="title image"/>
                                </div>
                                <div class="pt-6 text-center">
                                    <p class="text-lg leading-normal font-bold mb-1">Sarah Daeva</p>
                                    <p class="text-gray-500 leading-relaxed font-light">Marketing</p>
                                    
                                    <div class="mt-2 mb-5 space-x-2">
                                        <a class="hover:text-blue-700" aria-label="Twitter link" href="#">
                                            {/* <!-- <i class="fab fa-twitter text-twitter"></i> --> */}
                                            <svg xmlns="http://www.w3.org/2000/svg" class="inline-block" width="1rem" height="1rem" viewBox="0 0 512 512">
                                                <path fill="currentColor" d="M496,109.5a201.8,201.8,0,0,1-56.55,15.3,97.51,97.51,0,0,0,43.33-53.6,197.74,197.74,0,0,1-62.56,23.5A99.14,99.14,0,0,0,348.31,64c-54.42,0-98.46,43.4-98.46,96.9a93.21,93.21,0,0,0,2.54,22.1,280.7,280.7,0,0,1-203-101.3A95.69,95.69,0,0,0,36,130.4C36,164,53.53,193.7,80,211.1A97.5,97.5,0,0,1,35.22,199v1.2c0,47,34,86.1,79,95a100.76,100.76,0,0,1-25.94,3.4,94.38,94.38,0,0,1-18.51-1.8c12.51,38.5,48.92,66.5,92.05,67.3A199.59,199.59,0,0,1,39.5,405.6,203,203,0,0,1,16,404.2,278.68,278.68,0,0,0,166.74,448c181.36,0,280.44-147.7,280.44-275.8,0-4.2-.11-8.4-.31-12.5A198.48,198.48,0,0,0,496,109.5Z"></path>
                                            </svg>
                                        </a>
                                        <a class="hover:text-blue-700" aria-label="Facebook link" href="#">
                                             <i class="fab fa-facebook text-facebook"></i>
                                            <svg xmlns="http://www.w3.org/2000/svg" class="inline-block" width="1rem" height="1rem" viewBox="0 0 512 512">
                                                <path fill="currentColor" d="M455.27,32H56.73A24.74,24.74,0,0,0,32,56.73V455.27A24.74,24.74,0,0,0,56.73,480H256V304H202.45V240H256V189c0-57.86,40.13-89.36,91.82-89.36,24.73,0,51.33,1.86,57.51,2.68v60.43H364.15c-28.12,0-33.48,13.3-33.48,32.9V240h67l-8.75,64H330.67V480h124.6A24.74,24.74,0,0,0,480,455.27V56.73A24.74,24.74,0,0,0,455.27,32Z"></path>
                                            </svg>
                                        </a>
                                        <a class="hover:text-blue-700" aria-label="Instagram link" href="#">
                                            <i class="fab fa-instagram text-instagram"></i> 
                                            <svg xmlns="http://www.w3.org/2000/svg" class="inline-block" width="1rem" height="1rem" viewBox="0 0 512 512">
                                                <path fill="currentColor" d="M349.33,69.33a93.62,93.62,0,0,1,93.34,93.34V349.33a93.62,93.62,0,0,1-93.34,93.34H162.67a93.62,93.62,0,0,1-93.34-93.34V162.67a93.62,93.62,0,0,1,93.34-93.34H349.33m0-37.33H162.67C90.8,32,32,90.8,32,162.67V349.33C32,421.2,90.8,480,162.67,480H349.33C421.2,480,480,421.2,480,349.33V162.67C480,90.8,421.2,32,349.33,32Z"></path>
                                                <path fill="currentColor" d="M377.33,162.67a28,28,0,1,1,28-28A27.94,27.94,0,0,1,377.33,162.67Z"></path>
                                                <path fill="currentColor" d="M256,181.33A74.67,74.67,0,1,1,181.33,256,74.75,74.75,0,0,1,256,181.33M256,144A112,112,0,1,0,368,256,112,112,0,0,0,256,144Z"></path>
                                            </svg>
                                        </a>
                                        <a class="hover:text-blue-700" aria-label="Linkedin link" href="#">
                                            <i class="fab fa-linkedin text-linkedin"></i> 
                                            <svg xmlns="http://www.w3.org/2000/svg" class="inline-block" width="1rem" height="1rem" viewBox="0 0 512 512">
                                                <path fill="currentColor" d="M444.17,32H70.28C49.85,32,32,46.7,32,66.89V441.61C32,461.91,49.85,480,70.28,480H444.06C464.6,480,480,461.79,480,441.61V66.89C480.12,46.7,464.6,32,444.17,32ZM170.87,405.43H106.69V205.88h64.18ZM141,175.54h-.46c-20.54,0-33.84-15.29-33.84-34.43,0-19.49,13.65-34.42,34.65-34.42s33.85,14.82,34.31,34.42C175.65,160.25,162.35,175.54,141,175.54ZM405.43,405.43H341.25V296.32c0-26.14-9.34-44-32.56-44-17.74,0-28.24,12-32.91,23.69-1.75,4.2-2.22,9.92-2.22,15.76V405.43H209.38V205.88h64.18v27.77c9.34-13.3,23.93-32.44,57.88-32.44,42.13,0,74,27.77,74,87.64Z"></path>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                        <div class="flex-shrink max-w-full px-4 w-2/3 sm:w-1/2 md:w-5/12 lg:w-1/4 xl:px-6">
                            
                            <div class="relative overflow-hidden bg-white dark:bg-gray-800 mb-12 hover-grayscale-0 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".3s" style="visibility: visible; animation-duration: 1s; animation-delay: 0.3s; animation-name: fadeInUp;">
                                <div class="relative overflow-hidden px-6">
                                    <img src="https://tailone.tailwindtemplate.net/src/img/dummy/avatar2.png" class="max-w-full h-auto mx-auto rounded-full bg-gray-50 grayscale" alt="title image"/>
                                </div>
                                <div class="pt-6 text-center">
                                    <p class="text-lg leading-normal font-bold mb-1">Daniel Emo</p>
                                    <p class="text-gray-500 leading-relaxed font-light">Sales manager</p>
                                    {/* <!-- social icon --> */}
                                    <div class="mt-2 mb-5 space-x-2">
                                        <a class="hover:text-blue-700" aria-label="Twitter link" href="#">
                                            {/* <!-- <i class="fab fa-twitter text-twitter"></i> --> */}
                                            <svg xmlns="http://www.w3.org/2000/svg" class="inline-block" width="1rem" height="1rem" viewBox="0 0 512 512">
                                                <path fill="currentColor" d="M496,109.5a201.8,201.8,0,0,1-56.55,15.3,97.51,97.51,0,0,0,43.33-53.6,197.74,197.74,0,0,1-62.56,23.5A99.14,99.14,0,0,0,348.31,64c-54.42,0-98.46,43.4-98.46,96.9a93.21,93.21,0,0,0,2.54,22.1,280.7,280.7,0,0,1-203-101.3A95.69,95.69,0,0,0,36,130.4C36,164,53.53,193.7,80,211.1A97.5,97.5,0,0,1,35.22,199v1.2c0,47,34,86.1,79,95a100.76,100.76,0,0,1-25.94,3.4,94.38,94.38,0,0,1-18.51-1.8c12.51,38.5,48.92,66.5,92.05,67.3A199.59,199.59,0,0,1,39.5,405.6,203,203,0,0,1,16,404.2,278.68,278.68,0,0,0,166.74,448c181.36,0,280.44-147.7,280.44-275.8,0-4.2-.11-8.4-.31-12.5A198.48,198.48,0,0,0,496,109.5Z"></path>
                                            </svg>
                                        </a>
                                        <a class="hover:text-blue-700" aria-label="Facebook link" href="#">
                                            {/* <!-- <i class="fab fa-facebook text-facebook"></i> --> */}
                                            <svg xmlns="http://www.w3.org/2000/svg" class="inline-block" width="1rem" height="1rem" viewBox="0 0 512 512">
                                                <path fill="currentColor" d="M455.27,32H56.73A24.74,24.74,0,0,0,32,56.73V455.27A24.74,24.74,0,0,0,56.73,480H256V304H202.45V240H256V189c0-57.86,40.13-89.36,91.82-89.36,24.73,0,51.33,1.86,57.51,2.68v60.43H364.15c-28.12,0-33.48,13.3-33.48,32.9V240h67l-8.75,64H330.67V480h124.6A24.74,24.74,0,0,0,480,455.27V56.73A24.74,24.74,0,0,0,455.27,32Z"></path>
                                            </svg>
                                        </a>
                                        <a class="hover:text-blue-700" aria-label="Instagram link" href="#">
                                            {/* <!-- <i class="fab fa-instagram text-instagram"></i> --> */}
                                            <svg xmlns="http://www.w3.org/2000/svg" class="inline-block" width="1rem" height="1rem" viewBox="0 0 512 512">
                                                <path fill="currentColor" d="M349.33,69.33a93.62,93.62,0,0,1,93.34,93.34V349.33a93.62,93.62,0,0,1-93.34,93.34H162.67a93.62,93.62,0,0,1-93.34-93.34V162.67a93.62,93.62,0,0,1,93.34-93.34H349.33m0-37.33H162.67C90.8,32,32,90.8,32,162.67V349.33C32,421.2,90.8,480,162.67,480H349.33C421.2,480,480,421.2,480,349.33V162.67C480,90.8,421.2,32,349.33,32Z"></path>
                                                <path fill="currentColor" d="M377.33,162.67a28,28,0,1,1,28-28A27.94,27.94,0,0,1,377.33,162.67Z"></path>
                                                <path fill="currentColor" d="M256,181.33A74.67,74.67,0,1,1,181.33,256,74.75,74.75,0,0,1,256,181.33M256,144A112,112,0,1,0,368,256,112,112,0,0,0,256,144Z"></path>
                                            </svg>
                                        </a>
                                        <a class="hover:text-blue-700" aria-label="Linkedin link" href="#">
                                            <i class="fab fa-linkedin text-linkedin"></i>
                                            <svg xmlns="http://www.w3.org/2000/svg" class="inline-block" width="1rem" height="1rem" viewBox="0 0 512 512">
                                                <path fill="currentColor" d="M444.17,32H70.28C49.85,32,32,46.7,32,66.89V441.61C32,461.91,49.85,480,70.28,480H444.06C464.6,480,480,461.79,480,441.61V66.89C480.12,46.7,464.6,32,444.17,32ZM170.87,405.43H106.69V205.88h64.18ZM141,175.54h-.46c-20.54,0-33.84-15.29-33.84-34.43,0-19.49,13.65-34.42,34.65-34.42s33.85,14.82,34.31,34.42C175.65,160.25,162.35,175.54,141,175.54ZM405.43,405.43H341.25V296.32c0-26.14-9.34-44-32.56-44-17.74,0-28.24,12-32.91,23.69-1.75,4.2-2.22,9.92-2.22,15.76V405.43H209.38V205.88h64.18v27.77c9.34-13.3,23.93-32.44,57.88-32.44,42.13,0,74,27.77,74,87.64Z"></path>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div class="flex-shrink max-w-full px-4 w-2/3 sm:w-1/2 md:w-5/12 lg:w-1/4 xl:px-6">

                            <div class="relative overflow-hidden bg-white dark:bg-gray-800 mb-12 hover-grayscale-0 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".5s" style="visibility: visible; animation-duration: 1s; animation-delay: 0.5s; animation-name: fadeInUp;">
                                <div class="relative overflow-hidden px-6">
                                    <img src="https://tailone.tailwindtemplate.net/src/img/dummy/avatar4.png" class="max-w-full h-auto mx-auto rounded-full bg-gray-50 grayscale" alt="title image"/>
                                </div>
                                <div class="pt-6 text-center">
                                    <p class="text-lg leading-normal font-bold mb-1">Toni Lana</p>
                                    <p class="text-gray-500 leading-relaxed font-light">UI/UX Designer</p>

                                    <div class="mt-2 mb-5 space-x-2">
                                        <a class="hover:text-blue-700" aria-label="Twitter link" href="#">
                                            <i class="fab fa-twitter text-twitter"></i>
                                            <svg xmlns="http://www.w3.org/2000/svg" class="inline-block" width="1rem" height="1rem" viewBox="0 0 512 512">
                                                <path fill="currentColor" d="M496,109.5a201.8,201.8,0,0,1-56.55,15.3,97.51,97.51,0,0,0,43.33-53.6,197.74,197.74,0,0,1-62.56,23.5A99.14,99.14,0,0,0,348.31,64c-54.42,0-98.46,43.4-98.46,96.9a93.21,93.21,0,0,0,2.54,22.1,280.7,280.7,0,0,1-203-101.3A95.69,95.69,0,0,0,36,130.4C36,164,53.53,193.7,80,211.1A97.5,97.5,0,0,1,35.22,199v1.2c0,47,34,86.1,79,95a100.76,100.76,0,0,1-25.94,3.4,94.38,94.38,0,0,1-18.51-1.8c12.51,38.5,48.92,66.5,92.05,67.3A199.59,199.59,0,0,1,39.5,405.6,203,203,0,0,1,16,404.2,278.68,278.68,0,0,0,166.74,448c181.36,0,280.44-147.7,280.44-275.8,0-4.2-.11-8.4-.31-12.5A198.48,198.48,0,0,0,496,109.5Z"></path>
                                            </svg>
                                        </a>
                                        <a class="hover:text-blue-700" aria-label="Facebook link" href="#">
                                            {/* <!-- <i class="fab fa-facebook text-facebook"></i> --> */}
                                            <svg xmlns="http://www.w3.org/2000/svg" class="inline-block" width="1rem" height="1rem" viewBox="0 0 512 512">
                                                <path fill="currentColor" d="M455.27,32H56.73A24.74,24.74,0,0,0,32,56.73V455.27A24.74,24.74,0,0,0,56.73,480H256V304H202.45V240H256V189c0-57.86,40.13-89.36,91.82-89.36,24.73,0,51.33,1.86,57.51,2.68v60.43H364.15c-28.12,0-33.48,13.3-33.48,32.9V240h67l-8.75,64H330.67V480h124.6A24.74,24.74,0,0,0,480,455.27V56.73A24.74,24.74,0,0,0,455.27,32Z"></path>
                                            </svg>
                                        </a>
                                        <a class="hover:text-blue-700" aria-label="Instagram link" href="#">
                                            {/* <!-- <i class="fab fa-instagram text-instagram"></i> --> */}
                                            <svg xmlns="http://www.w3.org/2000/svg" class="inline-block" width="1rem" height="1rem" viewBox="0 0 512 512">
                                                <path fill="currentColor" d="M349.33,69.33a93.62,93.62,0,0,1,93.34,93.34V349.33a93.62,93.62,0,0,1-93.34,93.34H162.67a93.62,93.62,0,0,1-93.34-93.34V162.67a93.62,93.62,0,0,1,93.34-93.34H349.33m0-37.33H162.67C90.8,32,32,90.8,32,162.67V349.33C32,421.2,90.8,480,162.67,480H349.33C421.2,480,480,421.2,480,349.33V162.67C480,90.8,421.2,32,349.33,32Z"></path>
                                                <path fill="currentColor" d="M377.33,162.67a28,28,0,1,1,28-28A27.94,27.94,0,0,1,377.33,162.67Z"></path>
                                                <path fill="currentColor" d="M256,181.33A74.67,74.67,0,1,1,181.33,256,74.75,74.75,0,0,1,256,181.33M256,144A112,112,0,1,0,368,256,112,112,0,0,0,256,144Z"></path>
                                            </svg>
                                        </a>
                                        <a class="hover:text-blue-700" aria-label="Linkedin link" href="#">
                                            {/* <!-- <i class="fab fa-linkedin text-linkedin"></i> --> */}
                                            <svg xmlns="http://www.w3.org/2000/svg" class="inline-block" width="1rem" height="1rem" viewBox="0 0 512 512">
                                                <path fill="currentColor" d="M444.17,32H70.28C49.85,32,32,46.7,32,66.89V441.61C32,461.91,49.85,480,70.28,480H444.06C464.6,480,480,461.79,480,441.61V66.89C480.12,46.7,464.6,32,444.17,32ZM170.87,405.43H106.69V205.88h64.18ZM141,175.54h-.46c-20.54,0-33.84-15.29-33.84-34.43,0-19.49,13.65-34.42,34.65-34.42s33.85,14.82,34.31,34.42C175.65,160.25,162.35,175.54,141,175.54ZM405.43,405.43H341.25V296.32c0-26.14-9.34-44-32.56-44-17.74,0-28.24,12-32.91,23.69-1.75,4.2-2.22,9.92-2.22,15.76V405.43H209.38V205.88h64.18v27.77c9.34-13.3,23.93-32.44,57.88-32.44,42.13,0,74,27.77,74,87.64Z"></path>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>

            <div class="flex items-center justify-center p-12">

                <div class="mx-auto w-full max-w-[550px]">
                    <form action="https://formbold.com/s/FORM_ID" method="POST">
                        <div class="mb-5">
                            <label
                                for="name"
                                class="mb-3 block text-base font-medium text-[#07074D]"
                            >
                                Full Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                placeholder="Full Name"
                                class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            />
                        </div>
                        <div class="mb-5">
                            <label
                                for="email"
                                class="mb-3 block text-base font-medium text-[#07074D]"
                            >
                                Email Address
                            </label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="example@domain.com"
                                class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            />
                        </div>
                        <div class="mb-5">
                            <label
                                for="subject"
                                class="mb-3 block text-base font-medium text-[#07074D]"
                            >
                                Subject
                            </label>
                            <input
                                type="text"
                                name="subject"
                                id="subject"
                                placeholder="Enter your subject"
                                class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            />
                        </div>
                        <div class="mb-5">
                            <label
                                for="message"
                                class="mb-3 block text-base font-medium text-[#07074D]"
                            >
                                Message
                            </label>
                            <textarea
                                rows="4"
                                name="message"
                                id="message"
                                placeholder="Type your message"
                                class="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            ></textarea>
                        </div>
                        <div>
                            <button
                                class="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>


            <footer class="footer footer-center  w-full p-4 bg-gray-900 text-white">
                <div class="text-center">
                    <p>
                        Copyright © 2022 -
                        <a class="font-semibold" href="mailto:m.sohanemon@gmail.com"
                        >Carbon Auction</a>
                    </p>
                </div>
            </footer>
        </div>
    )
}
