import './BannerItem.scss'

function BannerItem(props) {
    return (
        <div className="banner__item">
            <img alt="banner" src={props.bannerUrl} />
            <div className="container">
                <p className='title-big'>{props.title}</p>
            </div>
        </div>
    )
}

export default BannerItem;