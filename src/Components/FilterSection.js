import React from 'react';
import { MdRefresh } from "react-icons/md";
const FilterSection = () => {
    return (
        <div className='Filter-options'>
            <div className='refresh'><MdRefresh/></div>
            <div className='reset'><button>esc</button><span> - reset</span></div>
            <div className='no-of-words'>
                <button>10</button>
                <button>50</button>
                <button>80</button>
                <button>100</button>
                <span>- no.of wards</span>
            </div>
        </div>
    );
}

export default FilterSection;
