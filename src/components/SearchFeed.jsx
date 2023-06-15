import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { Videos } from "./";
import { fetchAPI } from "../utils/fetchAPI";
import { useParams } from "react-router-dom";

const SearchFeed = () => {
  const [videos, setVideos] = useState();
  const { searchTerm } = useParams();

  useEffect(() => {
    fetchAPI(`search?part=snippet&q=${searchTerm}`).then((data) => {
      setVideos(data.items);
    });
  }, [searchTerm]);

  return (
    <Box p={2} sx={{ overflowY: "auot", height: "90vh", flex: 2 }}>
      <Typography variant="h4" fontWeight="bold" sx={{ color: "white" }}>
        Seach Results for:{" "}
        <span style={{ color: "#FC1503" }}>{searchTerm} videos</span>
        {console.log(searchTerm)}
        {console.log(videos)}
      </Typography>
      <Videos videos={videos} />
    </Box>
  );
};

export default SearchFeed;
