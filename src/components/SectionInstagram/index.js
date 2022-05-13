import React from "react";
import Title from "../Title";
import styles from "./Instagram.module.scss";
import InstagramItem from "./InstagramItem";
import * as axios from 'axios';

class Instagram extends React.Component {

    componentDidMount() {
        axios.get(`https://625187db2dc339451d2ef136.mockapi.io/instagramItems?page=1&limit=${this.props.previewPhoto}`).then(response => {
            this.props.setInstagramItems(response.data.items);
        })
    }

    loadMorePhoto = (count) => {
        this.props.getCurrentPhoto(count);
        axios.get(`https://625187db2dc339451d2ef136.mockapi.io/instagramItems?page=1&limit=${count}`).then(response => {
            this.props.setInstagramItems(response.data.items);
            let totalCount = response.data.count;
            console.log(count + " / " +totalCount);
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
                    { this.props.isButtonActive ? null :
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