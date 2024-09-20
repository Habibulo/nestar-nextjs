import withLayoutMain from "@/libs/components/layout/LayoutHome";
import { Box, Container, Stack } from "@mui/material";
import { brown, green } from "@mui/material/colors";
import { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <Stack className={"Home-page"}>
      <Stack>
        <Stack className="container">Popular Properties</Stack>
      </Stack>
      <Stack>
        <Stack className="container">Top Agent</Stack>
      </Stack>
      <Stack>
        <Stack className="container">Top Properties</Stack>
      </Stack>
    </Stack>
  );
};
