import { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import DepartmentList from "./Departments";

interface Post {
  id: number;
  title: string;
  body: string;
}

const Data = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const url = "https://jsonplaceholder.typicode.com/posts";
        const response = await fetch(url);
        const data = await response.json();
        // console.log(data);
        setPosts(data);
      } catch (error) {
        console.log("Error fetchind data: ", error);
      }
    };
    fetchPosts();
  }, []);

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 100 },
    { field: "title", headerName: "Title", width: 350 },
    { field: "body", headerName: "Body", width: 600 },
  ];

  return (
    <Box style={{ height: "550px", width: "100%", padding: "40px 80px" }}>
      <Typography
        variant="h3"
        sx={{
          display: "flex",
          justifyContent: "center",
          pb: "20px",
          textShadow:
            "7px 2px 3px rgba(0, 0, 0, 0.2), 5px 2px 4px rgba(0, 0, 0, 0.2)",
        }}
      >
        Data
      </Typography>
      <DataGrid rows={posts} columns={columns} />
      <DepartmentList />
    </Box>
  );
};

export default Data;
