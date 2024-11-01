import SideBar from '../components/SideBar'
import Content from "../components/Content";
import Header from "../components/Header";

const Dashboard = () => {
  return (
    <div className=' bg-dashboard-bg flex'>
    <SideBar/>
      <div className='flex flex-col w-full'>
        <Header/>
        <Content/>
      </div>
    </div>
  )
}

export default Dashboard