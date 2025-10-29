import { Box, Typography } from '@mui/material'
import StatsSection from '../../../Components/StatSection'
import ApartmentTypes from '../../../Components/Apartments'
import PropCards from '../../../Components/PropCards'
import VideoBanner from '../../../Components/Video'
import PropTabsCards from '../../../Components/PropTabsCards'
import SubscriptionSection from '../../../Components/Subscription'


const HomePage = () => {
  return (
    <>
      <Box>
        <StatsSection />
        <ApartmentTypes />
        <PropCards />
        <VideoBanner />
        <PropTabsCards />
        <SubscriptionSection />
      </Box>
    </>
  )
}

export default HomePage
