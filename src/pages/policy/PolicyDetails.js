import React, { useState, useEffect } from "react";
import PageLayout from "../../components/layout/PageLayout";
import { useSearchParams, useNavigate, useLocation } from "react-router-dom";
import { getPolicy } from "../../redux/policy/policyAction";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Skeleton from "react-loading-skeleton";
import { Box } from "@mui/material";
import { CircularProgress } from "@mui/material";

const PolicyDetails = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, policy } = useSelector((state) => state.policyReducer);

  const [name, setName] = useState("");

  useEffect(() => {
    if (searchParams) {
      const type = searchParams.get("type");
      const name = searchParams.get("name");
      setName(name);
      if (type) {
        dispatch(getPolicy(type));
      }
    } else {
      navigate("/policy", { replace: true });
    }
  }, [searchParams]);

  const extractContent = (data) => {
    var span = document.createElement("span");
    span.innerHTML = data;
    return span.textContent || span.innerText;
  };

  return (
    <PageLayout title="Policy Details" appbar={true}>
      <div className="box__shadow"> </div>
      {loading && (
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <CircularProgress />
        </Box>
      )}
      <div style={{ margin: "0px 20px" }}>
        <h4>{name}</h4>
        <hr />
        <Box sx={{ mt: 1 }}>
          {extractContent(policy) || <Skeleton count={5} />}
        </Box>
      </div>
    </PageLayout>
  );
};

export default PolicyDetails;
