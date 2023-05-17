function App() {
  return (
    <div className="flex justify-center items-center bg-orange-100 h-screen">
      <div className="">
        <div className="font-mono text-3xl font-medium mb-3 text-center">Email Validator</div>
        {/* <div className="font-medium">Enter Emails Here (One Email Per Line)</div> */}
        <textarea
          id="w3review"
          name="w3review"
          rows="10"
          cols="70"
          className="outline-1 outline-blue-500 block"
        >
        </textarea>
        <button className="block bg-emerald-400 w-full mt-3 rounded text-slate-800">
          Verify Email
        </button>
      </div>
    </div>
  );
}

export default App;
