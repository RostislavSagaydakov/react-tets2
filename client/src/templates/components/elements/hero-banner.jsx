import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import {NavLink} from "react-router-dom";

export default function HeroBannerImg(props) {
    const {
        img, imgAlt, wideImage, imageOverlayColor, bannerTextPosition, bannerTextAlign,
        subTitle, title, linkText, linkType, linkUrl, textColor, textAlign
    } = props;
    return (
        <div
            style={textColor}
            className="hero-banner"
        >
            {img && (
                <LazyLoadImage
                    effect="blur"
                    src={img}
                    alt={imgAlt}
                    className={wideImage && 'full-width'}
                />
            )}
            {imageOverlayColor && (
                <div className="hero-banner__image-overlay" style={imageOverlayColor}></div>
            )}
            {(subTitle || title || linkText) && (
                <div style={{textAlign: textAlign}}
                    className={"hero-banner__text" + (bannerTextPosition && " position-" + bannerTextPosition) + (bannerTextAlign && " align-" + bannerTextAlign)}
                >
                    <div className="holder">
                        <div className="hero-banner__sub-title">{subTitle}</div>
                        <div className="hero-banner__title">{title}</div>
                        <NavLink to={linkUrl} className={"button " + linkType}>{linkText}</NavLink>
                    </div>
                </div>
            )}
        </div>
    )
}

HeroBannerImg.defaultProps = {
    textColor: {color: "#fff"},
    img: '',
    imgAlt: 'base text',
    wideImage: false,
    imageOverlayColor: {}, // css styles
    bannerTextPosition: '', // horizontal align, center - default
    bannerTextAlign: '', // vertical align, center - default
    subTitle: '', // html text + tags
    linkUrl: '',
    title: '', //
    linkText: '',
    linkType: '',
    textAlign: "left" // left, right, justify, center
};
