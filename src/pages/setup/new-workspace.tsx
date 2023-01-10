import { type NextPage } from "next";
import Header from "../../components/Header";

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <p>Create a new WorkSpace</p>
      <form>
        <p>
          Name your Workspace
          <input className="border-2 border-blue-500"></input>
        </p>
        <button>Submit</button>
      </form>
    </>
  );
};

export default Home;
