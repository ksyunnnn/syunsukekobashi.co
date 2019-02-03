import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Header from "../components/atomic/organisms/Header"
import Profile from "../components/atomic/organisms/Profile"

import { MainContainer } from '../components/atomic/organisms/Profile/style';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `portfolio`, `react`, `syunsukekobashi.co`]} />
    <Header />
    <MainContainer>
      <Profile />
    </MainContainer>
  </Layout>
)

export default IndexPage
