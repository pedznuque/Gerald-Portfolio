import React from "react";
import "./Blog.css";
import ContentPage from "../../components/Content Page/ContentPage";
import { GrStatusGoodSmall } from "react-icons/gr";
import NameCard from "../../components/Name card/NameCard";
import DashboardCard from "../../components/Dashboard Card/DashboardCard";

const Blog = () => {
  return (
    <ContentPage>
      {" "}
      <NameCard
        icon={
          <GrStatusGoodSmall
            color="green"
            size={10}
            color="var(--green-font-color)"
          />
        }
        name="Blog"
        className="page_title"
        nameCardStyle={{
          alignSelf: "flex-start",
          padding: "10px",
          backgroundColor: "transparent",
        }}
        nameStyle={{ marginBottom: "3px", fontWeight: "bold" }}
      />

      <DashboardCard className="blog_dashboard">


        No blog yet

      </DashboardCard>
    </ContentPage>
  );
};

export default Blog;
