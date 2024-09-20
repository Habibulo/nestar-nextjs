import withLayoutMain from "@/libs/components/layout/LayoutHome";
import { Stack } from "@mui/material";
import { brown, green } from "@mui/material/colors";
import { NextPage } from "next";
import TrendProperties from "@/libs/components/homepage/TrendProperties";
import TopPropertyCard from "@/libs/components/homepage/TrendPropertyCard";
import PopularProperties from "@/libs/components/homepage/PopularProperties";
import Advertisement from "@/libs/components/homepage/Advertisement";
import TopProperties from "@/libs/components/homepage/TopProperties";
import TopAgents from "@/libs/components/homepage/TopAgents";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Home: NextPage = () => {
  return (
    <Stack className={"Home-page"}>
      <TrendProperties />
      <PopularProperties />
      <Advertisement />
      <TopProperties />
      <TopAgents />
    </Stack>
  );
};

export default withLayoutMain(Home);
