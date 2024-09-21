import Navbar from "../components/Navbar";


export default function NextPage() {
    return (
      <div>
        <Navbar showLogin ={false}/>

        <div className="mx-28">
          <h1 className="text-4xl font-bold slogan-blue mb-4">Internship</h1>
        </div>
      </div>
    );
  }