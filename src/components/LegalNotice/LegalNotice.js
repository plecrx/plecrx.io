import React from 'react'
import {rgpd} from "../../utils/data";
import Typography from "@material-ui/core/Typography";

export default function LegalNotice() {

    return (
        <div className='relative'>
            <h1 className='text-center text-xl pt-20'>Mentions Légales</h1>
            <div className='mx-40 mb-40 mt-10'>
                {rgpd.map(article => (
                    <Typography className="text-white" style={{fontFamily: 'ui-sans-serif, system-ui, "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "Noto Sans", "sans-serif", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"'}}>
                        <div className='text-lg'>{article.title}</div>
                        <br/>
                        {article.content.map(content => <>{content}<br/></>)}
                        <br/>
                    </Typography>
                ))}
            </div>

        </div>
    )
}
