import React from "react";
import Title from "../Title";
import styles from "./Instagram.module.scss";
import InstagramItem from "./InstagramItem";

class Instagram extends React.Component {

    componentDidMount() {
        this.props.getInstagramItems(this.props.previewPhoto);
        console.log('componentDidMount');
    }

    loadMorePhoto = (count) => {
        this.props.loadMoreInstagram(count);
        console.log('loadMorePhoto');
    }

    componentWillUnmount () {
        this.props.deleteInstagramItems();
        console.log('componentWillUnmount');
    }

    render() {

        let instagramElements =
            this.props.instagramItems.map((obj, index) => { return <InstagramItem key={index} imgUrl={obj.imgUrl} alt={obj.alt} /> })

        let count = this.props.currentPhoto;

        return (
            <section className={`${styles.instagram} sec-bottom`}>
                <div className="container">
                    <Title
                        title="мы в инстаграме"
                    />
                    <div className={styles.wrapper}>
                        {instagramElements}
                    </div>
                    {this.props.isButtonActive ? null :
                        <button className={styles.btn} disabled={this.props.isLoadMoreDisabled} onClick={() => { this.loadMorePhoto(count) }}>показать ещё</button>}
                </div>
            </section>
        );
    }

}

export default Instagram;