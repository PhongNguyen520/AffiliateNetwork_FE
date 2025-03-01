import Campaigns from "../pages/advertiser/Campaigns/Campaigns";
import CampaignDetails from "../pages/advertiser/Campaigns/CampaignsDetails/CampaignsDetails";

export const campaignsRoutes = [
  {
    path: "/campaigns",
    element: <Campaigns />,
    // children: [
    //   {
    
   
      // },
      // Uncomment this if you want to use dynamic parameters
      // {
      //   path: ":id", // This becomes /campaigns/:id
      //   element: <CampaignDetails />,
      // },
    // ]
  },

  {
    path: "/campaigns/detail", 
    element: <CampaignDetails />,
  }    
];