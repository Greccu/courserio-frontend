import { CoursePageBackground } from '../components/CoursePage/CoursePageComponents';
import HomePage from '../components/Home';
import { HomePageBackground } from '../components/Home/HomeComponents';
import PageContainer from '../components/PageContainer';

const Home = () => {
  return <>
    <PageContainer>
      <HomePageBackground/>
      <HomePage/>
    </PageContainer>
  </>;
};

export default Home;