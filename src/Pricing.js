import {useState, useRef, useEffect} from 'react';

export default function Pricing(){

    const [pageViews, setPageviews] = useState("_");
    const [pricing, setPricing] = useState();
    const yearBtn = document.querySelector('#yearly-Btn');


    const linkedButton = e => {
        yearBtn.checked ? setPricing(pricing * 12 - (pricing * 12 *0.25)) : setPricing(Math.round((pricing * 1.333) / 12));
    }


    const linkedInput = e => {
        
        if(e >= 0 && e <= 20){
            setPageviews("10000k");
            setPricing(8);
            yearBtn.checked ? setPricing(8 * 12 - (8 * 12 *0.25)) : setPricing(8);
        }
        else if(e>= 20 && e <= 40){
            setPageviews("50000k");
            setPricing(12);
            yearBtn.checked ? setPricing(12 * 12 - (12 * 12 *0.25)) : setPricing(12); 
        }
        else if(e>=40 && e <= 60){
            setPageviews("100000k");
            setPricing(16);
            yearBtn.checked ? setPricing(16 * 12 - (16 * 12 *0.25)) : setPricing(16);
        }
        else if(e>=60 && e <= 80){
            setPageviews("500000k");
            setPricing(24);
            yearBtn.checked ? setPricing(24 * 12 - (24 * 12 *0.25)) : setPricing(24);
        }
        else if(e>=80){
            setPageviews("1M");
            setPricing(36);
            yearBtn.checked ? setPricing(36 * 12 - (36 * 12 *0.25)) : setPricing(36);
        }
    }



    return(
        <div className="priceComponent">
            <div className="priceComponent-top">
                <div>{pageViews} pageviews</div>
                <div><span>${pricing}</span> /month</div>
            </div>
            <div className="priceComponent-core">
                <div className="range">
                <input className="range" type="range" min="0" max="100" step="25" onChange={e => linkedInput(e.target.value)} />
                </div>
                <div className="billing">
                    <span>Monthly Billing</span>
                    <label class="switch">
                    <input id="yearly-Btn" type="checkbox" onChange={e => linkedButton(e)}/>
                    <span class="slider round"></span>
                    </label>
                    <span>Yearly Billing<span>25% discount</span></span>
                </div>
            </div>
            <div className="priceComponent-bottom">
                <ul>
                    <li>Unlimited websites</li>
                    <li>100% data ownership</li>
                    <li>Email reports</li>
                </ul>
                <button>Start my trial</button>
            </div>
        </div>
    )
}

