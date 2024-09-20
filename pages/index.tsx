import withLayoutMain from "@/libs/components/layout/LayoutHome";
import { Box, Container, Stack } from "@mui/material";
import { NextPage } from "next";
import TrendProperties from "@/libs/components/homepage/TrendProperties";
import Advertisement from "@/libs/components/homepage/Advertisement";
import TopAgents from "@/libs/components/homepage/TopAgents";
import TopProperties from "@/libs/components/homepage/TopProperties";
import PopularProperties from "@/libs/components/homepage/PopularProperties";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Home: NextPage = () => {
  return (
    <Stack className={"home-page"}>
      <TrendProperties />
      <PopularProperties />
      <Advertisement />
      <TopProperties />
      <TopAgents />
    </Stack>
  );
};

export default withLayoutMain(Home);
