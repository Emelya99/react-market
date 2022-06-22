import '../Work.scss';

function WorkItem(props) {
    return (
        <div className="work__item" key={props.badge}>
            <span>{props.badge}</span>
            <img src={props.workUrl} alt={props.badge} />
            <p>{props.text}</p>
        </div>
    )
}

export default WorkItem;