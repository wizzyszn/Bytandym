import { useEffect } from 'react'

export default function UsePageTitle(title) {
    console.log("title :", title)
    const defaultTitle = 'Home';
    useEffect(()=>{
        window.document.title = title || defaultTitle
    }, [title])
    return () =>{
        window.document.title = defaultTitle;
    }
}
