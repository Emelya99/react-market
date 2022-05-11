import styles from "./InstagramItem.module.scss";

function InstagramItem(props) {

    return (
        <div className={styles.item}>
            <img 
                src={props.imgUrl}
                alt={props.alt}
            />
        </div>
    );
}

export default InstagramItem;