import React from 'react';
import remarkGfm from 'remark-gfm';
import Markdown from 'react-markdown';
import './InfoBox.css';

function InfoBox() {
    const markdown = '## Hi, *Pluto*!\n### I am here to sell this product\n - [X] todo';

    return (
        <div className="card bg-base-100 image-full w-full h-50 shadow-sm">
            <figure>
                <img
                    className='w-full'
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt="Shoes"
                     />
            </figure>
            <div className="card-body" style={{ fontSize:'revert', fontWeight:'initial' }}>
                <Markdown remarkPlugins={[remarkGfm]}>
                    {markdown}
                </Markdown>
            </div>
        </div>
    )
}

export default InfoBox