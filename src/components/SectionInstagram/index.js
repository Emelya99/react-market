import React from "react";
import Title from "../Title";
import styles from "./Instagram.module.scss";
import InstagramItem from "./InstagramItem";
import { getInstagramItems, loadMoreInstagramItems } from "../../dal/api";

class Instagram extends React.Component {

    componentDidMount() {
        getInstagramItems(this.props.previewPhoto).then(data => {
            this.props.setInstagramItems(data.items);
        })
    }

    loadMorePhoto = (count) => {
        this.props.getCurrentPhoto(count);
        loadMoreInstagramItems(count).then(data => {
            this.props.setInstagramItems(data.items);
            let totalCount = data.count;
            if (count >= totalCount) {
                this.props.isButtonActiveState(true);
            }
        })
    }

    deleteInstagramPhoto = () => {
        this.props.deleteInstagramPhoto();
    }

    addInstagramPhoto = () => {
        this.props.addInstagramPhoto();
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
                        <button className={styles.btn} onClick={() => { this.loadMorePhoto(count) }}>показать ещё</button>}


                    <button className="mt-50 mr-30" onClick={this.deleteInstagramPhoto}>
                        Delete one photo
                    </button>
                    <button className="mt-50 ml-30" onClick={this.addInstagramPhoto}>
                        Add one photo
                    </button>
                </div>
            </section>
        );
    }

}

export default Instagram;