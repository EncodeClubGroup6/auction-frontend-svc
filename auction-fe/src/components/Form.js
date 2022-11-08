import React from 'react'

function Form() {
    return (
        <div>

            <div className="flex items-center justify-center p-12">

                <div className="mx-auto w-full max-w-[550px] bg-white">
                    <form
                        className="py-6 px-9"
                        action="https://formbold.com/s/FORM_ID"
                        method="POST"
                    >
                        <h1 className="font-bold text-2xl">Action Factory</h1>
                        <div className="mb-8 mt-3">
                                <input type="file" name="file" id="file" className="sr-only" />
                                <label
                                    for="file"
                                    className="relative flex min-h-[50px] items-center justify-center rounded-md border border border-[#e0e0e0] p-12 text-center"
                                >
                                    <div>
                                        <span className="mb-2 block text-xl font-semibold text-[#07074D]">
                                            Your Balance is: 0.0000Eth
                                        </span>
                                    </div>
                                </label>
                            </div>
                        <div className="mb-5">
                            <label
                                for="email"
                                className="mb-3 block text-base font-medium text-[#07074D]"
                            >

                            </label>
                            <input
                                type="number"
                                name="number"
                                id="number"
                                placeholder="Place a Value"
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            />
                        </div>
                        <div>
                            <button
                                className="hover:shadow-form w-full rounded-md bg-[#06986c] py-3 px-8 text-center text-base font-semibold text-white outline-none"
                            >
                                Bid
                            </button>
                        </div>

                        <div className="mb-6 pt-4">

                            <div className="mb-8">
                                <input type="file" name="file" id="file" className="sr-only" />
                                <label
                                    for="file"
                                    className="relative flex min-h-[100px] items-center justify-center rounded-md border border border-[#e0e0e0] p-12 text-center"
                                >
                                    <div>
                                        <span className="mb-2 block text-xl font-semibold text-[#07074D]">
                                            Real Time Price
                                        </span>
                                    </div>
                                </label>
                            </div>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default Form