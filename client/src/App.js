import { useState, useCallback } from 'react';
import axios from 'axios';

function App() {
  let validationResponse = false
  const [emails, setEmails] = useState("")

  const handleEmailsChange = useCallback((event) => {
     setEmails(event.target.value)
  }, [])
  // console.log(emails)
  const handleSendEmails = useCallback(() => {
    axios.post('http://localhost:5000/', {
      emails: emails
    })
    .then(() => {
    })
    .catch(() => {

    })
  }, [emails])

  return (
    <div className="flex justify-center items-center bg-orange-100 h-screen">
      <div className="">
        <div className="font-mono text-3xl font-medium mb-3 text-center">Email Validator</div>
        {/* <div className="font-medium">Enter Emails Here (One Email Per Line)</div> */}
        <textarea
          id="emails"
          name="emails"
          rows="10"
          cols="70"
          value={emails}
          onChange={handleEmailsChange}
          className="outline-1 outline-blue-500 block"
        >
        </textarea>
        <button
          className="block bg-emerald-400 w-full mt-3 rounded text-slate-800"
          onClick={handleSendEmails}
        >
          Verify Email
        </button>
        {validationResponse && (
          <div>ggggggggggggg</div>
        )}
      </div>
    </div>
  );
}

export default App;
