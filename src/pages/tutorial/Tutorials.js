import React, { useEffect} from "react";
import { Card, CardContent, CircularProgress } from "@mui/material";
import styled from "styled-components";
import PageLayout from "../../components/layout/PageLayout";
import { useDispatch, useSelector } from "react-redux";
import { getAllTutorial } from "../../redux/tutorial/tutorialAction";
import { Box } from "@mui/system";
import YouTube from "react-youtube";



const Tutorials = () => {
  const dispatch = useDispatch();

  const { loading, tutorials } = useSelector((state) => state.tutorialReducer);

  const opts = {
    height: "190px",
    width: "100%",
    playerVars: {
      autoplay: 0,
    },
  };

  useEffect(() => {
    dispatch(getAllTutorial());
  }, []);

  return (
    <PageLayout title="Tutorial" appbar={true}>
      <div className="box__shadow"> </div>
      <CardWrapper>
        {loading ? (
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <CircularProgress />
          </Box>
        ) : tutorials.length > 0 ? (
          tutorials.map((item, index) => (
            <Card key={index} className="card">
              <CardContent className="card__content">
           
                  <YouTube
                    videoId={item?.youtubeVideoId}
                    opts={opts}
                    onError={(error) => console.log(error.message)}
                  />


                <h4 style={{ margin: "10px 0px 0px 10px" }}>{item.title}</h4>
              </CardContent>
            </Card>
          ))
        ) : (
          <h3 style={{ textAlign: "center" }}>Tutorial Not Found!</h3>
        )}
      </CardWrapper>
    </PageLayout>
  );
};

const CardWrapper = styled.div`
  margin: 0px 20px;

  .card {
    margin-bottom: 10px;
    border-radius: 10px;
    .card__content {
      padding: 0px 0px 10px 0px !important;
    }
  }
`;

export default Tutorials;
