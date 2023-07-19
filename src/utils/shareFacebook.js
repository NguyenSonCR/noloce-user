import { FacebookShareButton, FacebookIcon } from 'react-share';
const FacebookShare = ({ url, quotes, hashtag, title }) => {
    return (
        <>
            <FacebookShareButton
                title={title}
                url={url} //eg. https://www.example.com
                quotes={quotes} //"Your Quotes"
                hashtag={hashtag} // #hashTag
            >
                <FacebookIcon round={true} />
            </FacebookShareButton>
        </>
    );
};
export default FacebookShare;
