import { Outlet, useNavigation } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Home = () => {
    const allInOne = {
        textAlign: 'center',
    }

    const navigation = useNavigation();
    // const location = useLocation();
    // console.log(location)

    return (
        <div style={allInOne}>
            <Header></Header>
            {
                navigation.state === "loading" ?
                    <p>Loading...</p> :
                    <Outlet></Outlet>
            }
            <Footer></Footer>
        </div>
    );
};

export default Home;