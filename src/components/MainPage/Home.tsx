import "./Home.css"
import {useCallback} from "react";
import {useNavigate} from "react-router-dom";

export const Home = () => {
    const navigate = useNavigate();
    const onButtonClick = useCallback((path:string) => {
        navigate(path);
    }, []);

    return (
        <div className={"app"}>
          <h3>Привет, username!</h3>
            <div className={"home-menu"}>
                <div className={"start-buttons"}>
                    <button onClick={() => onButtonClick("/match")} className={"menu-button"}>🔍 Начать поиск</button>
                    <button onClick={() => onButtonClick("/filter")}  className={"filter-button"}><img src={"./assets/filter.png"} alt={"filter"}/></button>
                </div>
            </div>
        </div>
    );
};