import SideBar from '../components/SideBar'
import Content from "../components/Content";

const Dashboard = () => {
  return (
    <div className=' bg-dashboard-bg flex'>
    <SideBar/>
    <Content/>
    </div>
  )
}

export default Dashboard