import { footerJSON } from "../utils/jsonData"
import Footer2 from "./Footer/Footer2"
import Navbar from "./Header/Navbar"



//THIS FILE ACTS AS A LAYOUT--- 
//THIS WILL ENSURE THAT EVERY PAGE HAS A NAVBAR AND A FOOTER DISPLAYED
//WE HAVE WRAPPED EVERYTHING IN OUR _app.js with this Layout file--
const Layout = ({ children }) => {


    return (
        <>
            <Navbar />

            <div>
                {children}
            </div>

            <div className="mt-5">
                <Footer2 data={footerJSON} />
            </div>
        </>
    )
}

export default Layout