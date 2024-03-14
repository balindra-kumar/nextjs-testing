

import Script from "next/script";

const FooterLink = ()=>{
    return(
        <>
        <Script src="/assets/js/custom.js" strategy="lazyOnload"></Script>
        </>
    )
}
export default FooterLink