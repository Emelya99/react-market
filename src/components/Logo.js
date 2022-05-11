import { Link } from 'react-router-dom'; 

function Logo() {
    return (
        <div className="logo">
            <Link className="d-flex align-center" to="/">
                <img className="mr-15" width={21} height={30} alt="logo" src="/img/logo.svg"/>
                <p className="mb-5 title">гросс маркет</p>
            </Link>
        </div>
    );
}

export default Logo;