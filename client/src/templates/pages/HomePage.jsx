import HeroBannerImg from "../components/elements/hero-banner";
import bannerImg from "../../images/banner/banner1.jpg"

export default function HomePage(){
    const textColor = {
        color: '#fff'
    }
    const imageOverlayColor = {
        background: 'linear-gradient(to right,  rgba(7,5,18,0) 36%,rgba(18,23,60,1) 65%)'
    }
    const subTitle = <>
        2023 New Collections <br/>Top Selling
    </>
    const title = <>
        <h1>Top Selling <br/>Silver Items</h1>
    </>
    return(
        <>
            <HeroBannerImg
                textColor={textColor}
                img={bannerImg} // image url
                imgAlt="some text"
                imageOverlayColor={imageOverlayColor} // overlay css
                wideImage={false} // true,false
                textAlign="center"
                bannerTextPosition="right" // center,right,left
                bannerTextAlign="center" // top,center,bottom
                subTitle={subTitle}
                title={title}
                linkUrl="/shop"
                linkText="SHOP NOW"
                linkType="primary" // secondary or empty for default
            />
        </>
    )
}
