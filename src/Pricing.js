import {useState, useRef, useEffect} from 'react';

export default function Pricing(){

    const [pageViews, setPageviews] = useState();
    const [pricing, setPricing] = useState();
    const yearBtn = document.querySelector('#yearly-Btn');

    /* Datas */
    const arrViews = ["10000K","50000k","100000k","500000k","1M"];
    const arrPrices = [8,12,16,24,36];

    /* do and undo the 25% discount */
    const discount = price =>{
        setPricing(price * 12 * 0.75);
    }

    const undiscount = price =>{
        setPricing(Math.round((price * 1.333) / 12));
    }

    /* assign values to states */

    const compute = (views, price) => {
        setPageviews(views);
        setPricing(price);
        yearBtn.checked ? discount(price) : setPricing(price);
    }

    /* toggle button */   

    const linkedButton = e => {
        yearBtn.checked ? discount(pricing) : undiscount(pricing);
    }

    /* check range values and assign */


    const linkedInput = e => {
        
        if(e >= 0 && e <= 20){
            compute(arrViews[0], arrPrices[0]);
        }
        else if(e>= 20 && e <= 40){
            compute(arrViews[1], arrPrices[1]);
        }
        else if(e>=40 && e <= 60){
            compute(arrViews[2], arrPrices[2]);
        }
        else if(e>=60 && e <= 80){
            compute(arrViews[3], arrPrices[3]);
        }
        else if(e>=80){
            compute(arrViews[4], arrPrices[4]);
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

