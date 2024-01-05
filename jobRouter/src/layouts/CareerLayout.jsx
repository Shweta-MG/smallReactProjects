import { Outlet } from "react-router-dom";
const CareerLayout = () => {
    return (  
        <div className="careers-layout">
            <h2>Career Page</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque eligendi quibusdam ut doloremque earum voluptas hic minus assumenda laboriosam id mollitia, ratione eum voluptate natus eaque totam numquam cupiditate illo?</p>

            <Outlet/>
        </div>
    );
}
 
export default CareerLayout;