import '../Banner.scss'

function BannerItem(props) {
    return (
        <div className="banner__item">
            <div className="container">
                <div className='banner__body'>
                    <img alt="banner" src={props.bannerUrl} />
                    <p className='title-big'>{props.title}</p>
                </div>
            </div>
        </div>
    )
}

export default BannerItem;