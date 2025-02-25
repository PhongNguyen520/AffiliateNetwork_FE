import "./App.css";
import AdvertiserLayout from "./components/AdvertiserLayout/AdvertiserLayout";
import AuthPage from "./pages/Auth/AuthPage";
import CampaignList from "./pages/CampaignList/CampaignList";
import HomePage from "./pages/Home/HomePage";
import ProfilePublisher from "./pages/ProfilePublisher/ProfilePublisher";
import Campaigns from "./pages/advertiser/Campaigns/Campaigns";
import Overview from "./pages/admin/Overview/Overview";

function App() {
  return (
    // <AuthPage/>
    // <HomePage/>
    // <ProfilePublisher/>
    // <CampaignList/>
    <AdvertiserLayout>
       {/* <Overview />  */}
        <Campaigns/> 
     </AdvertiserLayout>
  );
}

export default App;
