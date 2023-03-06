import Navigation from "../../components/Navigation/Navigation";

const Dashboard = (props) => {

    const { route, children } = props;  
    return (
    <>
      <Navigation/>
      {children}
    </>
  );
};

export default Dashboard;
