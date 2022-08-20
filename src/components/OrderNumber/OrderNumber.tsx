import React from "react";
import OrderNumberView from "./OrderNumber.view";

export default function OrderNumber() {
    return (
        <div className="w-full px-3 mb-6 md:mb-0
         flex flex-no-wrap items-center
         border-b-2 border-black">
            <label className="block text-lg font-bold mr-6 mb-3" htmlFor="order-number">
                주문 번호
            </label>
            <input className="appearance-none block w-auto mr-6 text-gray-700
            border border-2 border-violet-800 rounded py-2 px-4 mb-3 focus:outline-none focus:bg-white"
                id="order-number" type="text" placeholder="12345678" />
            <button className="h-fit bg-violet-800 hover:bg-violet-500 text-white font-bold py-2.5 px-4 mb-3 rounded">
                조회
            </button>
            <img src="/kurly.jpg" className="w-16 ml-auto mb-3"></img>
        </div>
    );
}